import { ConsultationForm } from "./consultation-form";
import { Accent, Eyebrow } from "./primitives";

const trustPoints = [
  "No lock-in contracts",
  "Reply within 24 hours",
  "Melbourne-based team",
  "100% confidential",
];

export function Cta() {
  return (
    <section id="cta" className="bg-brand-pale px-6 py-20 lg:px-15 lg:py-30">
      <div className="mx-auto max-w-[720px] text-center">
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="mb-5 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] text-ink">
          Ready to Grow Your
          <br />
          <Accent>Melbourne Business?</Accent>
        </h2>
        <p className="mb-13 text-base leading-[1.6] text-muted">
          Book a free, no-obligation consultation with a Melbourne SEO expert.
          We&apos;ll review your website, identify your biggest opportunities,
          and give you an honest picture of what&apos;s possible.
        </p>

        <ConsultationForm />

        <div className="flex flex-wrap justify-center gap-8">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="flex items-center gap-1.5 text-[0.78rem] text-muted before:font-bold before:text-forest before:content-['✓']"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
