import {
  Accent,
  Eyebrow,
  Lead,
  SectionTitle,
  card,
  sectionPadding,
  tag,
} from "./primitives";
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
      className={`bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-360">
        <Eyebrow>Case Studies</Eyebrow>
        <SectionTitle id="results-heading">
          Real Melbourne Businesses.
          <br />
          <Accent>Extraordinary</Accent> Results.
        </SectionTitle>
        <Lead>
          Numbers without context are meaningless. Here&apos;s what we&apos;ve
          actually achieved for Melbourne businesses — with specifics.
        </Lead>

        <div
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <Reveal
              key={study.tag}
              as="article"
              role="listitem"
              className={`${card} flex flex-col p-8 lg:p-10`}
            >
              <span className={`${tag} mb-8 self-start`}>{study.tag}</span>
              <span className="block font-display text-[clamp(3rem,5vw,4rem)] leading-none font-extrabold tracking-[-0.03em] text-midnight">
                {study.headline}
              </span>
              <span className="mt-3 mb-6 block font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
                {study.metric}
              </span>
              <p className="text-base leading-[1.6] text-slate">
                {study.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
