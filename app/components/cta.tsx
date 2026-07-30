import { ConsultationForm } from "./consultation-form";
import { Accent } from "./primitives";

const trustPoints = [
  "No lock-in contracts",
  "Response within 24 hours",
  "100% confidential",
  "Melbourne-based team",
];

export function Cta() {
  return (
    <section
      id="audit"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-navy-3)_0%,var(--color-navy-4)_100%)] px-6 py-20 lg:px-15 lg:py-30"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(200,151,60,0.07),transparent)]"
      />
      <div className="relative z-1 mx-auto max-w-[720px] text-center">
        <div
          role="text"
          className="mb-7 inline-block rounded border border-border-gold bg-gold/12 px-5 py-2 text-xs font-bold tracking-[0.1em] text-gold uppercase"
        >
          Free SEO Audit — Valued at $1,200
        </div>
        <h2 className="mb-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] text-cream">
          Start Outranking
          <br />
          Your Competitors <Accent>Today</Accent>
        </h2>
        <p className="mb-12 text-lg leading-[1.6] font-light text-cream/60">
          Enter your website URL below. We&apos;ll deliver a comprehensive,
          40-point SEO audit within 48 hours — no obligation, no sales
          pressure. Just an honest analysis of where you stand and how to
          grow.
        </p>

        <ConsultationForm />

        <div
          role="list"
          aria-label="Trust guarantees"
          className="flex flex-wrap justify-center gap-7"
        >
          {trustPoints.map((point) => (
            <span
              key={point}
              role="listitem"
              className="flex items-center gap-1.5 text-xs text-slate before:font-bold before:text-[#22C55E] before:content-['✓']"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
