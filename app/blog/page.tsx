import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/app/components/blog-card";
import { Accent, Eyebrow } from "@/app/components/primitives";
import { getPosts } from "@/lib/wp";

const PER_PAGE = 9;

export const metadata: Metadata = {
  title: "SEO Insights & Articles | Best SEO Agency Melbourne",
  description:
    "Practical SEO advice for Melbourne businesses — local search, technical SEO, content strategy and the results they produce.",
};

export default async function BlogArchive({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const parsed = Number.parseInt(pageParam ?? "1", 10);
  const page = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;

  const { posts, hasMore, total } = await getPosts({ page, perPage: PER_PAGE });

  return (
    <>
      <section className="px-6 pt-[130px] pb-16 text-center lg:px-15 lg:pt-[160px]">
        <Eyebrow>The Blog</Eyebrow>
        <h1 className="mx-auto max-w-[820px] font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] text-ink">
          SEO Insights for <Accent>Melbourne Businesses</Accent>
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-base leading-[1.7] text-muted">
          Practical advice from our Melbourne team — local search, technical
          fixes, content strategy, and what actually moves rankings.
        </p>
      </section>

      <section className="px-6 pb-24 lg:px-15 lg:pb-30">
        {posts.length === 0 ? (
          <p className="mx-auto max-w-[560px] rounded-xl border border-line bg-white p-10 text-center text-[0.95rem] leading-[1.7] text-muted">
            {page > 1
              ? "There are no more articles on this page."
              : "No articles have been published yet. Check back soon."}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} priority={index < 3} />
              ))}
            </div>

            {(page > 1 || hasMore) && (
              <nav
                aria-label="Blog pagination"
                className="mt-16 flex items-center justify-center gap-4"
              >
                {page > 1 ? (
                  <Link
                    href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
                    className="rounded-lg border border-line bg-white px-6 py-3 text-[0.88rem] font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand"
                  >
                    ← Newer
                  </Link>
                ) : null}

                <span className="text-[0.85rem] text-muted">
                  Page {page}
                  {total !== null
                    ? ` of ${Math.max(1, Math.ceil(total / PER_PAGE))}`
                    : ""}
                </span>

                {hasMore ? (
                  <Link
                    href={`/blog?page=${page + 1}`}
                    className="rounded-lg border border-line bg-white px-6 py-3 text-[0.88rem] font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand"
                  >
                    Older →
                  </Link>
                ) : null}
              </nav>
            )}
          </>
        )}
      </section>
    </>
  );
}
