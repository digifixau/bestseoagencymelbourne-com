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

function toBlogPost(post: HydratedPost): BlogPost {
  const media = post.featuredMedia;
  const details = media?.media_details;

  return {
    id: post.id,
    slug: post.slug,
    titleHtml: post.title.rendered,
    excerptHtml: post.excerpt.rendered,
    contentHtml: post.content.rendered,
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

/** One page of posts, newest first. */
export async function getPosts({
  page = 1,
  perPage = 9,
}: { page?: number; perPage?: number } = {}): Promise<PostsPage> {
  try {
    const result = await wp.posts.listWithRelations(
      { page, perPage, orderby: "date", order: "desc" },
      RELATIONS,
    );

    return {
      posts: result.items.map(toBlogPost),
      page: result.page,
      hasMore: result.hasMore,
      total: result.total,
    };
  } catch (error) {
    // Past the last page WordPress answers 400, which wp-fetch surfaces as an
    // invalid-page error rather than an empty list.
    if (isWPError(error) && error.kind === "invalid_page") {
      return { posts: [], page, hasMore: false, total: null };
    }
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
    // `slug` is a collection filter, so this is one indexed request rather than
    // a bySlug() lookup followed by a hydration round trip.
    const { items } = await wp.posts.listWithRelations(
      { slug, perPage: 1 },
      RELATIONS,
    );

    const post = items[0];
    return post ? toBlogPost(post) : null;
  } catch (error) {
    survivable(error, `getPostBySlug(${slug})`);
    return null;
  }
}

/** Every published slug, for `generateStaticParams`. */
export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];

  try {
    // `stream()` never sends `page`, so the SQL offset stays at zero.
    for await (const post of wp.posts.stream({ fields: ["slug"] })) {
      slugs.push(post.slug);
    }
  } catch (error) {
    survivable(error, "getAllPostSlugs");
  }

  return slugs;
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
