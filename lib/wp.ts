import {
  createWPClient,
  isWPError,
  type WPMedia,
  type WPPost,
  type WPTerm,
  type WPUser,
} from "wp-fetch";
import { withNextCache } from "wp-fetch/next";

const url = process.env.WORDPRESS_URL;

if (!url) {
  throw new Error(
    "WORDPRESS_URL is not set. Add it to .env.local — see .env.example.",
  );
}

/**
 * The WordPress client.
 *
 * `fetch-cache` is the right mode here because `cacheComponents` is off in
 * next.config.ts; every request carries `next: { revalidate, tags }`.
 */
export const wp = withNextCache(
  createWPClient({
    url,
    // Node's fetch has no default timeout, so a hung CMS would hang the build.
    timeoutMs: 10_000,
    deadlineMs: 30_000,
  }),
  { mode: "fetch-cache", revalidate: 3600 },
);

/** A post flattened into just what the UI renders. */
export interface BlogPost {
  id: number;
  slug: string;
  /** Rendered HTML — WordPress returns entities such as `&#8217;`. */
  titleHtml: string;
  excerptHtml: string;
  contentHtml: string;
  date: string;
  authorName: string | null;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  } | null;
  categories: { id: number; name: string; slug: string }[];
}

type HydratedPost = Omit<WPPost, "author" | "featured_media" | "categories"> & {
  readonly author: WPUser | null;
  readonly featuredMedia: WPMedia | null;
  readonly categories: readonly WPTerm[];
};

/** WCAG relative luminance of a CSS colour, or null when it is not a plain hex/rgb value. */
function luminance(value: string): number | null {
  const v = value.trim().toLowerCase();
  let rgb: number[] | null = null;

  const hex = v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/);
  if (hex) {
    const h =
      hex[1].length === 3
        ? hex[1].replace(/./g, (c) => c + c)
        : hex[1];
    rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  } else {
    const fn = v.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/);
    if (fn) rgb = [Number(fn[1]), Number(fn[2]), Number(fn[3])];
    else if (v === "white") rgb = [255, 255, 255];
  }
  if (!rgb) return null;

  const [r, g, b] = rgb.map((c) => {
    const x = c / 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * The editor bakes light inline backgrounds (callouts, stat cards, table rows)
 * into post HTML, but the site is dark and its body text is cream, so the
 * text on those boxes disappears. CSS cannot test a colour's brightness, so
 * tag every light-backgrounded element with `data-light` and let globals.css
 * give those elements dark text.
 */
function markLightBackgrounds(html: string): string {
  return html.replace(
    /<([a-z][a-z0-9]*)\b([^>]*?)\sstyle=(["'])(.*?)\3([^>]*)>/gi,
    (tag, name, before, quote, style, after) => {
      const bg = style.match(/(?:^|;)\s*background(?:-color)?\s*:\s*([^;]+)/i);
      const lum = bg ? luminance(bg[1]) : null;
      if (lum === null || lum < 0.4) return tag;
      return `<${name}${before} data-light style=${quote}${style}${quote}${after}>`;
    },
  );
}

function toBlogPost(post: HydratedPost): BlogPost {
  const media = post.featuredMedia;
  const details = media?.media_details;

  return {
    id: post.id,
    slug: post.slug,
    titleHtml: post.title.rendered,
    excerptHtml: post.excerpt.rendered,
    contentHtml: markLightBackgrounds(post.content.rendered),
    date: post.date,
    authorName: post.author?.name ?? null,
    image:
      media && details?.width && details?.height
        ? {
            src: media.source_url,
            width: details.width,
            height: details.height,
            alt: media.alt_text || "",
          }
        : null,
    categories: post.categories.map((term) => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
    })),
  };
}

/**
 * Never let an unreachable CMS break a page.
 *
 * A down WordPress should degrade to an empty blog section, not a 500 on the
 * home page or a failed build. Genuine bugs (bad config, usage errors) still
 * throw.
 */
function survivable(error: unknown, context: string): never | void {
  if (!isWPError(error)) throw error;

  switch (error.kind) {
    case "not_found":
    case "timeout":
    case "network":
    case "rate_limit":
    case "server":
      console.error(`[wp] ${context} failed (${error.kind}): ${error.message}`);
      return;
    default:
      throw error;
  }
}

const RELATIONS = {
  author: true,
  featuredMedia: true,
  categories: true,
} as const;

export interface PostsPage {
  posts: BlogPost[];
  page: number;
  hasMore: boolean;
  total: number | null;
}

/**
 * Every post, loaded once and shared.
 *
 * A build renders ~90 post pages, each of which used to hit the CMS several
 * times (post, author, media, categories — twice, for metadata and the page).
 * That burst trips the host's bot protection ("Checking your browser", HTTP
 * 403) and fails the deploy. Loading the whole set in a few requests and
 * serving every lookup from memory keeps the request count tiny.
 */
const ALL_POSTS_TTL_MS = 60 * 60 * 1000;
const ALL_POSTS_PER_PAGE = 100;

let allPostsCache: { at: number; promise: Promise<BlogPost[]> } | null = null;

function loadAllPosts(): Promise<BlogPost[]> {
  if (allPostsCache && Date.now() - allPostsCache.at < ALL_POSTS_TTL_MS) {
    return allPostsCache.promise;
  }

  const promise = (async () => {
    const all: BlogPost[] = [];

    for (let page = 1; ; page++) {
      try {
        const result = await wp.posts.listWithRelations(
          { page, perPage: ALL_POSTS_PER_PAGE, orderby: "date", order: "desc" },
          RELATIONS,
        );
        all.push(...result.items.map(toBlogPost));
        if (!result.hasMore) break;
      } catch (error) {
        // Past the last page WordPress answers 400, which wp-fetch surfaces
        // as an invalid-page error rather than an empty list.
        if (isWPError(error) && error.kind === "invalid_page") break;
        throw error;
      }
    }

    return all;
  })();

  const entry = { at: Date.now(), promise };
  allPostsCache = entry;
  // Never cache a failure, so the next call retries.
  promise.catch(() => {
    if (allPostsCache === entry) allPostsCache = null;
  });

  return promise;
}

/** One page of posts, newest first. */
export async function getPosts({
  page = 1,
  perPage = 9,
}: { page?: number; perPage?: number } = {}): Promise<PostsPage> {
  try {
    const all = await loadAllPosts();
    const start = (page - 1) * perPage;

    return {
      posts: all.slice(start, start + perPage),
      page,
      hasMore: start + perPage < all.length,
      total: all.length,
    };
  } catch (error) {
    survivable(error, `getPosts(page ${page})`);
    return { posts: [], page, hasMore: false, total: null };
  }
}

/** The latest posts, for the home page section. */
export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const { posts } = await getPosts({ perPage: limit });
  return posts;
}

/** A single post by slug, or null when it does not exist. */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const all = await loadAllPosts();
    return all.find((post) => post.slug === slug) ?? null;
  } catch (error) {
    survivable(error, `getPostBySlug(${slug})`);
    return null;
  }
}

/** Every published slug, for `generateStaticParams`. */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const all = await loadAllPosts();
    return all.map((post) => post.slug);
  } catch (error) {
    survivable(error, "getAllPostSlugs");
    return [];
  }
}

/** Site-local, stable across server and client. */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  }).format(new Date(iso));
}

/** Plain text from a rendered HTML fragment, for meta descriptions. */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;/g, "’")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
