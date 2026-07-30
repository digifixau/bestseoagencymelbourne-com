import { Accent, Divider, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const caseStudies = [
  {
    tag: "Legal · Melbourne CBD",
    headline: "+412%",
    metric: "Organic Traffic — 8 Months",
    description:
      "A Melbourne CBD family law firm went from page 3 to ranking #1 for 23 high-intent commercial keywords. Monthly organic enquiries increased from 12 to 89, delivering an 18× return on SEO investment. Achieved through technical audit, content authority build-out, and targeted link acquisition from legal publisher domains.",
  },
  {
    tag: "E-Commerce · Nationwide",
    headline: "$2.1M",
    metric: "Annual Organic Revenue — 14 Months",
    description:
      "A Melbourne-founded online homewares retailer scaled from $310K to $2.1M in annual organic revenue. Category architecture overhaul, 680% organic traffic increase, and 142 new page 1 keywords. Now generating more revenue from SEO than from paid advertising combined.",
  },
  {
    tag: "Medical · South Melbourne",
    headline: "3×",
    metric: "New Patient Enquiries — 6 Months",
    description:
      "South Melbourne medical clinic achieved #1 in the Google Maps Pack for all 14 primary treatment keywords. New patient bookings from organic search tripled in 6 months. GBP optimisation, local citation building, and E-E-A-T content positioning were the primary drivers.",
  },
];

export function Results() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="bg-navy-2 px-6 py-20 lg:px-15 lg:py-30"
    >
      <Eyebrow>Case Studies</Eyebrow>
      <SectionTitle className="mb-0">
        Real Melbourne Businesses.
        <br />
        <Accent>Extraordinary</Accent> Results.
      </SectionTitle>
      <Divider />
      <p className="max-w-170 text-lg leading-[1.7] font-light text-cream/60">
        Numbers without context are meaningless. Here&apos;s what we&apos;ve
        actually achieved for Melbourne businesses — with specifics.
      </p>

      <div role="list" className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Reveal
            key={study.tag}
            as="article"
            role="listitem"
            className="relative overflow-hidden rounded-md border border-border-gold bg-navy-3 p-11 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[linear-gradient(to_right,var(--color-gold),transparent)] after:content-['']"
          >
            <span className="mb-5 block text-xs font-bold tracking-[0.1em] text-gold uppercase">
              {study.tag}
            </span>
            <span className="mb-2 block font-serif text-[3.5rem] leading-none font-bold text-cream">
              {study.headline}
            </span>
            <div className="mb-5 text-xs tracking-[0.08em] text-slate uppercase">
              {study.metric}
            </div>
            <p className="text-sm leading-[1.7] font-light text-cream/55">
              {study.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
