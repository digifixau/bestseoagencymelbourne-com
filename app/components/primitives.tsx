import type { ReactNode } from "react";

/** Section label with the short orange rule, e.g. "— OUR SERVICES". */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.05em] text-brand uppercase before:h-0.5 before:w-6 before:bg-brand before:content-['']">
      {children}
    </span>
  );
}

/** Serif display heading. Wrap emphasised words in <Accent>. */
export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-6 font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

/** Italic orange emphasis used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-brand italic">{children}</em>;
}

export const primaryButton =
  "inline-block rounded-lg bg-brand px-9 py-4 text-[0.92rem] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-[0_8px_24px_rgba(232,93,38,0.3)]";
