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
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-mist bg-white transition-colors duration-300 hover:border-power-blue">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-video overflow-hidden bg-mist">
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
            <div className="flex h-full items-center justify-center font-display text-2xl font-extrabold text-power-blue/30">
              Best SEO Melbourne
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-8">
          <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
            {post.categories[0] ? <span>{post.categories[0].name}</span> : null}
            {post.categories[0] ? (
              <span aria-hidden="true" className="text-slate">
                ·
              </span>
            ) : null}
            <time dateTime={post.date} className="text-slate">
              {formatPostDate(post.date)}
            </time>
          </div>

          <h3
            className="mb-3 font-display text-xl leading-[1.2] font-bold tracking-[-0.01em] text-midnight"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          <div
            className="mb-6 line-clamp-3 text-base leading-[1.6] text-slate"
            dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
          />

          <span className="mt-auto flex items-center gap-1.5 font-display text-base font-bold text-power-blue-deep underline-offset-4 group-hover:underline">
            Read article →
          </span>
        </div>
      </Link>
    </article>
  );
}
