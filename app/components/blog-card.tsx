import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type BlogPost } from "@/lib/wp";

export function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-cream">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-serif text-[2rem] text-ink/10">
              Best SEO Melbourne
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] font-semibold tracking-[0.08em] text-brand uppercase">
            {post.categories[0] ? (
              <span>{post.categories[0].name}</span>
            ) : null}
            {post.categories[0] ? (
              <span aria-hidden="true" className="text-muted">
                ·
              </span>
            ) : null}
            <time dateTime={post.date} className="text-muted normal-case">
              {formatPostDate(post.date)}
            </time>
          </div>

          <h3
            className="mb-3 text-[1.05rem] leading-snug font-bold text-ink"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          <div
            className="mb-6 line-clamp-3 text-[0.88rem] leading-[1.7] text-muted"
            dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
          />

          <span className="mt-auto flex items-center gap-2 text-[0.85rem] font-semibold text-brand transition-all duration-200 group-hover:gap-3.5">
            Read article →
          </span>
        </div>
      </Link>
    </article>
  );
}
