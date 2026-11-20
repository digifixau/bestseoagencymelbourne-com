import Link from "next/link";
import { getRecentPosts } from "@/lib/wp";
import { BlogCard } from "./blog-card";
import {
  Accent,
  Eyebrow,
  Lead,
  SectionTitle,
  sectionPadding,
  textLink,
} from "./primitives";
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
      className={`bg-paper ${sectionPadding}`}
    >
      <div className="mx-auto max-w-360">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>From the Blog</Eyebrow>
            <SectionTitle id="blog-heading">
              SEO Insights for <Accent>Melbourne</Accent> Businesses
            </SectionTitle>
            <Lead>
              Practical, no-fluff guides on ranking higher on Google — written
              from 12 years of getting Melbourne businesses to #1.
            </Lead>
          </div>

          <Link href="/blog" className={`${textLink} shrink-0 text-lg`}>
            View all articles →
          </Link>
        </div>

        <div
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <Reveal key={post.id} role="listitem">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
