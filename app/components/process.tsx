import { Accent, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    title: "Free Consultation & Site Audit",
    description:
      "We start with a free 30-minute consultation and a detailed audit of your website. You'll know exactly where you stand, what's working, and what's holding you back — even if you don't become a client.",
  },
  {
    number: "02",
    title: "Custom SEO Strategy",
    description:
      "We build a bespoke 12-month roadmap for your business — specific keywords, content priorities, technical fixes, and link acquisition goals. Tailored to your market, your competitors, and your budget.",
  },
  {
    number: "03",
    title: "In-House Execution",
    description:
      "Our Melbourne team does the work. Every technical fix, every content piece, every outreach email — handled in-house. You'll have a dedicated account manager and fortnightly updates throughout.",
  },
  {
    number: "04",
    title: "Grow & Compound",
    description:
      "SEO results compound over time. Most clients see meaningful growth by month 4–6, and their best results in year 2. We're in this for the long haul — and so should you be.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-cream px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-18 text-center">
        <Eyebrow>How It Works</Eyebrow>
        <SectionTitle className="mb-0">
          Simple, Transparent,
          <br />
          <Accent>Effective</Accent>
        </SectionTitle>
      </div>

      <div className="mx-auto max-w-[760px]">
        {steps.map((step, index) => (
          <Reveal
            key={step.number}
            className={`grid grid-cols-[80px_1fr] items-start gap-8 py-10 ${
              index === steps.length - 1 ? "" : "border-b border-line"
            }`}
          >
            <div className="text-right font-serif text-[3.5rem] leading-none text-ink/10">
              {step.number}
            </div>
            <div>
              <h3 className="mb-2.5 text-[1.1rem] font-bold">{step.title}</h3>
              <p className="text-[0.9rem] leading-[1.7] text-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
