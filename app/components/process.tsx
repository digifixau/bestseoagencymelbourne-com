import { Accent, Eyebrow, SectionTitle, sectionPadding } from "./primitives";
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
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`bg-paper ${sectionPadding}`}
    >
      <div className="mx-auto max-w-360">
        <div className="max-w-200">
          <Eyebrow>Our Process</Eyebrow>
          <SectionTitle id="process-heading">
            A Proven System for
            <br />
            <Accent>Ranking & Revenue</Accent>
          </SectionTitle>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <Reveal
              key={step.number}
              as="li"
              className="border-t-2 border-mist pt-6"
            >
              <span className="mb-6 block font-mono text-label font-medium text-power-blue-deep">
                0{step.number}
              </span>
              <h3 className="mb-3 font-display text-h3 font-bold text-midnight">
                {step.title}
              </h3>
              <p className="text-base leading-[1.6] text-slate">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
