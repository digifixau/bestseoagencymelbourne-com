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
      <section className="bg-white px-6 pt-36 pb-16 lg:px-30 lg:pt-44">
        <div className="mx-auto max-w-360">
          <Eyebrow>The Blog</Eyebrow>
          <h1 className="mb-6 max-w-250 font-display text-h1 font-extrabold text-midnight">
            SEO Insights for <Accent>Melbourne Businesses</Accent>
          </h1>
          <p className="max-w-170 text-lead text-slate">
            Practical advice from our Melbourne team — local search, technical
            fixes, content strategy, and what actually moves rankings.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-24 lg:px-30 lg:pb-30">
        <div className="mx-auto max-w-360">
          {posts.length === 0 ? (
            <p className="mx-auto max-w-140 rounded-card bg-sky-tint p-10 text-center text-base leading-[1.6] text-midnight">
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
                      className="rounded-full border-2 border-midnight px-6 py-2.5 font-display text-base font-bold text-midnight transition-colors duration-200 hover:bg-midnight hover:text-white"
                    >
                      ← Newer
                    </Link>
                  ) : null}

                  <span className="font-mono text-xs font-medium tracking-[0.08em] text-slate uppercase">
                    Page {page}
                    {total !== null
                      ? ` of ${Math.max(1, Math.ceil(total / PER_PAGE))}`
                      : ""}
                  </span>

                  {hasMore ? (
                    <Link
                      href={`/blog?page=${page + 1}`}
                      className="rounded-full border-2 border-midnight px-6 py-2.5 font-display text-base font-bold text-midnight transition-colors duration-200 hover:bg-midnight hover:text-white"
                    >
                      Older →
                    </Link>
                  ) : null}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
