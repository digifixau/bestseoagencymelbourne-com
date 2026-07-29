import Link from "next/link";
import { getRecentPosts } from "@/lib/wp";
import { BlogCard } from "./blog-card";
import { Accent, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

export async function BlogPreview() {
  const posts = await getRecentPosts(3);

  // A down or empty CMS should leave no trace on the home page.
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-cream px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-16 text-center">
        <Eyebrow>From the Blog</Eyebrow>
        <SectionTitle className="mb-0">
          SEO Insights for
          <br />
          <Accent>Melbourne Businesses</Accent>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Reveal key={post.id} className="h-full">
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-8 py-3.5 text-[0.9rem] font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
