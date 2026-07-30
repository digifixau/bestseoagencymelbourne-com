import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { primaryButton } from "@/app/components/primitives";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
  stripHtml,
} from "@/lib/wp";

type Params = Promise<{ slug: string }>;

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
    openGraph: post.image
      ? { images: [{ url: post.image.src }] }
      : undefined,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article>
      <header className="px-6 pt-32.5 pb-12 lg:px-15 lg:pt-40">
        <div className="mx-auto max-w-190">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gold transition-all duration-200 hover:gap-3.5"
          >
            ← All articles
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            {post.categories.map((category) => (
              <span
                key={category.id}
                className="rounded-full bg-gold/12 px-3 py-1 font-bold text-gold"
              >
                {category.name}
              </span>
            ))}
          </div>

          <h1
            className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.15] text-cream"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate">
            {post.authorName ? <span>By {post.authorName}</span> : null}
            {post.authorName ? <span aria-hidden="true">·</span> : null}
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </div>
        </div>
      </header>

      {post.image ? (
        <div className="mx-auto max-w-250 px-6 lg:px-15">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            priority
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="w-full rounded-lg border border-border-gold object-cover"
          />
        </div>
      ) : null}

      <div className="px-6 py-16 lg:px-15">
        <div
          className="wp-content mx-auto max-w-190"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      <section className="bg-[linear-gradient(135deg,var(--color-navy-3)_0%,var(--color-navy-4)_100%)] px-6 py-20 lg:px-15">
        <div className="mx-auto max-w-160 text-center">
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] text-cream">
            Want results like these for your business?
          </h2>
          <p className="mb-9 text-base leading-[1.7] font-light text-cream/60">
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
