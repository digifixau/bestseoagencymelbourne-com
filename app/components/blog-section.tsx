import Link from "next/link";
import { getRecentPosts } from "@/lib/wp";
import { BlogCard } from "./blog-card";
import { Accent, Divider, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

/** Latest articles from the WordPress blog. Renders nothing if there are none. */
export async function BlogSection() {
  const posts = await getRecentPosts(3);

  // A down or empty CMS should hide the section, not leave a blank heading.
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-navy-2 px-6 py-20 lg:px-15 lg:py-30"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>From the Blog</Eyebrow>
          <SectionTitle className="mb-0">
            SEO Insights for <Accent>Melbourne</Accent> Businesses
          </SectionTitle>
          <Divider />
          <p className="max-w-170 text-lg leading-[1.7] font-light text-cream/60">
            Practical, no-fluff guides on ranking higher on Google — written
            from 12 years of getting Melbourne businesses to #1.
          </p>
        </div>

        <Link
          href="/blog"
          className="shrink-0 text-sm font-bold text-gold transition-all duration-200 hover:text-gold-2"
        >
          View all articles →
        </Link>
      </div>

      <div role="list" className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {posts.map((post) => (
          <Reveal key={post.id} role="listitem">
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
