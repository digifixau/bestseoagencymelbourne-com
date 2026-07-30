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
    <article className="group flex h-full flex-col overflow-hidden border border-border-gold bg-navy-3 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-navy-2">
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
            <div className="flex h-full items-center justify-center font-serif text-[2rem] text-cream/10">
              Best SEO Melbourne
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold tracking-[0.08em] text-gold uppercase">
            {post.categories[0] ? (
              <span>{post.categories[0].name}</span>
            ) : null}
            {post.categories[0] ? (
              <span aria-hidden="true" className="text-slate">
                ·
              </span>
            ) : null}
            <time dateTime={post.date} className="text-slate normal-case">
              {formatPostDate(post.date)}
            </time>
          </div>

          <h3
            className="mb-3 font-serif text-lg leading-snug font-semibold text-cream"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          <div
            className="mb-6 line-clamp-3 text-sm leading-[1.7] font-light text-cream/55"
            dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
          />

          <span className="mt-auto flex items-center gap-2 text-sm font-bold text-gold transition-all duration-200 group-hover:gap-3.5">
            Read article →
          </span>
        </div>
      </Link>
    </article>
  );
}
