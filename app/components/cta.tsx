import { ConsultationForm } from "./consultation-form";
import { Check } from "lucide-react";
import { Bar } from "./brand-bar";
import { Accent, sectionPadding } from "./primitives";

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
      className={`bg-white ${sectionPadding}`}
    >
      {/* Sky Tint panel; The Bar bleeds from its top edge toward the form. */}
      <div className="relative mx-auto max-w-360 overflow-hidden rounded-card bg-sky-tint px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
        <Bar className="absolute top-0 left-6 h-24 sm:left-12 lg:left-24 lg:h-32" />
        <div className="mx-auto max-w-200 pt-8 text-center lg:pt-10">
          <p className="mb-6 font-mono text-label font-medium text-power-blue-deep uppercase">
            Free SEO Audit — Valued at $1,200
          </p>
          <h2
            id="cta-heading"
            className="mb-6 font-display text-h1 font-extrabold text-midnight"
          >
            Start Outranking
            <br />
            Your Competitors <Accent>Today</Accent>
          </h2>
          <p className="mx-auto mb-10 max-w-170 text-body text-midnight/80">
            Enter your website URL below. We&apos;ll deliver a comprehensive,
            40-point SEO audit within 48 hours — no obligation, no sales
            pressure. Just an honest analysis of where you stand and how to
            grow.
          </p>

          <ConsultationForm />

          <ul
            aria-label="Trust guarantees"
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.06em] text-midnight uppercase"
              >
                <Check
                  aria-hidden="true"
                  className="h-4 w-4 text-power-blue-deep"
                  strokeWidth={2.5}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
