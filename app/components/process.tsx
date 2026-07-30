import { Accent, Divider, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "1",
    title: "Deep Audit",
    description:
      "Comprehensive analysis of your site, competitors, backlink profile, and market opportunity. You'll receive a 40-point report identifying exactly what's holding you back.",
  },
  {
    number: "2",
    title: "Strategy Build",
    description:
      "A bespoke 12-month roadmap with prioritised keyword targets, content calendar, technical fixes, and link acquisition plan — aligned to your revenue goals.",
  },
  {
    number: "3",
    title: "Expert Execution",
    description:
      "Our in-house team implements everything. Technical fixes, content creation, outreach — with fortnightly reporting you can actually understand and act on.",
  },
  {
    number: "4",
    title: "Compound Growth",
    description:
      "SEO compounds over time. Clients in their second year consistently see 2–3× the results of their first year. The earlier you start, the greater your compounding advantage.",
  },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-0 text-center">
        <Eyebrow>Our Process</Eyebrow>
        <SectionTitle className="mb-0">
          A Proven System for
          <br />
          <Accent>Ranking & Revenue</Accent>
        </SectionTitle>
        <Divider center />
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-[12.5%] top-10 hidden h-px bg-[linear-gradient(to_right,var(--color-gold)_0%,rgba(200,151,60,0.1)_100%)] lg:block"
        />
        {steps.map((step) => (
          <Reveal key={step.number} className="px-4 text-center">
            <div className="relative z-1 mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-navy">
              <span className="font-serif text-2xl font-bold text-gold">
                {step.number}
              </span>
            </div>
            <h3 className="mb-3 font-serif text-lg font-semibold text-cream">
              {step.title}
            </h3>
            <p className="text-sm leading-[1.7] font-light text-slate">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
