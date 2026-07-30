import type { ReactNode } from "react";

/** Gold uppercase section label, e.g. "OUR SERVICES". */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 block text-xs font-bold tracking-[0.18em] text-gold uppercase">
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
      className={`mb-5 font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.02em] text-cream ${className}`}
    >
      {children}
    </h2>
  );
}

/** Italic gold emphasis used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-gold italic">{children}</em>;
}

/** Short gold rule used under headings, matching the reference's `.divider`. */
export function Divider({ center = false }: { center?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`my-6 h-0.5 w-12 bg-gold ${center ? "mx-auto" : ""}`}
    />
  );
}

export const primaryButton =
  "inline-block rounded bg-gold px-9.5 py-4.5 text-base font-bold tracking-[0.02em] text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-2 hover:shadow-[0_10px_30px_rgba(200,151,60,0.35)]";
