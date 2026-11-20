import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bar } from "@/app/components/brand-bar";
import { primaryButton } from "@/app/components/primitives";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
  stripHtml,
} from "@/lib/wp";

type Params = Promise<{ slug: string }>;

// Rebuild at most every 5 minutes. Without an explicit value a page rendered
// from the in-memory post list makes no fetch, so Next records no expiry and a
// 404 for a just-published post would be cached until the next deploy.
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: `${stripHtml(post.titleHtml)} | Best SEO Agency Melbourne`,
    description: stripHtml(post.excerptHtml).slice(0, 160),
    openGraph: post.image ? { images: [{ url: post.image.src }] } : undefined,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article>
      <header className="bg-white px-6 pt-36 pb-12 lg:px-30 lg:pt-44">
        <div className="mx-auto max-w-190">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 font-display text-base font-bold text-power-blue-deep underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            {post.categories.map((category) => (
              <span
                key={category.id}
                className="rounded-full bg-mist px-4 py-1.5 font-mono text-xs font-medium tracking-[0.08em] text-midnight uppercase"
              >
                {category.name}
              </span>
            ))}
          </div>

          <h1
            className="font-display text-h1 font-extrabold text-midnight"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs font-medium tracking-[0.08em] text-slate uppercase">
            {post.authorName ? <span>By {post.authorName}</span> : null}
            {post.authorName ? <span aria-hidden="true">·</span> : null}
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </div>
        </div>
      </header>


      <div className="px-6 py-16 lg:px-30">
        <div
          className="wp-content mx-auto max-w-190"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      <section className="bg-white px-6 pb-20 lg:px-30 lg:pb-30">
        <div className="relative mx-auto max-w-250 overflow-hidden rounded-card bg-sky-tint px-6 pt-28 pb-16 text-center sm:px-12">
          <Bar className="absolute top-0 left-6 h-20 sm:left-12" />
          <h2 className="mb-4 font-display text-h2 font-extrabold text-midnight">
            Want results like these for your business?
          </h2>
          <p className="mx-auto mb-10 max-w-140 text-body text-midnight/80">
            Book a free, no-obligation consultation with a Melbourne SEO expert.
          </p>
          <Link href="/#audit" className={primaryButton}>
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </article>
  );
}
