import type { ReactNode } from "react";

/*
 * Shared pieces of the DigiFix brand system (Figma brand guide v1.0).
 * Light theme only. Colours and type come from the tokens in globals.css.
 */

/** Geist Mono label above a heading, e.g. "OUR SERVICES" (slide 18, Label/Mono). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 block font-mono text-label font-medium text-power-blue-deep uppercase">
      {children}
    </span>
  );
}

/** Section heading: Bricolage ExtraBold at H2 (slide 18). Wrap one phrase in <Accent>. */
export function SectionTitle({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mb-6 font-display text-h2 font-extrabold text-midnight ${className}`}
    >
      {children}
    </h2>
  );
}

/** Instrument Serif italic accent. One phrase per layout, never a paragraph. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <em className="font-serif font-normal tracking-normal text-power-blue italic">
      {children}
    </em>
  );
}

/** Lead paragraph under a section heading (slide 18, Body/Lead, scaled down). */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`max-w-170 text-body text-slate ${className}`}>{children}</p>
  );
}

/** Standard section padding: 24px gutters on mobile, 120px margins on desktop. */
export const sectionPadding = "px-6 py-20 lg:px-30 lg:py-30";

/** Primary action: Spark Magenta pill. One per view or section (slide 16, 22). */
export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-8 py-4 font-display text-xl font-bold text-white transition-colors duration-200 hover:bg-magenta-deep";

/** Supporting action: Midnight outline pill. */
export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-midnight bg-white px-8 py-4 font-display text-xl font-bold text-midnight transition-colors duration-200 hover:bg-midnight hover:text-white";

/** Inline text link: Power Blue Deep, underline on hover, arrow trails. */
export const textLink =
  "inline-flex items-center gap-1.5 font-display font-bold text-power-blue-deep underline-offset-4 transition-colors duration-200 hover:underline";

/** Card surface: white, Mist border, 4px corners. */
export const card = "rounded-card border border-mist bg-white";

/** Tag: Mist pill with a mono label. */
export const tag =
  "inline-block rounded-full bg-mist px-4 py-1.5 font-mono text-xs font-medium tracking-[0.08em] text-midnight uppercase";
