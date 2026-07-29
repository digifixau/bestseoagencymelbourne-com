import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

const caseStudies = [
  {
    tag: "Legal · Melbourne CBD",
    headline: "+412%",
    sub: "Organic traffic in 8 months",
    description:
      "A Melbourne CBD law firm went from page 3 to #1 for 23 commercial keywords. New enquiries grew from 12 to 89 per month — an 18× return on their SEO investment.",
  },
  {
    tag: "E-Commerce · Australia-wide",
    headline: "$2.1M",
    sub: "Annual organic revenue (from $310K)",
    description:
      "Melbourne-founded online retailer scaled to $2.1M in annual organic revenue in 14 months through category architecture overhaul and targeted link building.",
  },
  {
    tag: "Medical · South Melbourne",
    headline: "3×",
    sub: "New patients from organic search",
    description:
      "#1 in the Google Map Pack for all primary treatment keywords. Monthly new patient enquiries from organic search tripled within 6 months of starting.",
  },
];

export function Results() {
  return (
    <section id="results" className="bg-ink px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-16 text-center">
        <Eyebrow>Case Studies</Eyebrow>
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] text-white">
          Real Results for Real
          <br />
          Melbourne Businesses
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Reveal
            key={study.tag}
            as="article"
            className="rounded-xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-brand hover:bg-white/8"
          >
            <span className="mb-6 block text-[0.72rem] font-semibold tracking-[0.08em] text-brand uppercase">
              {study.tag}
            </span>
            <span className="mb-2 block font-serif text-[3.5rem] leading-none text-white">
              {study.headline}
            </span>
            <div className="mb-5 text-[0.82rem] text-white/50">{study.sub}</div>
            <p className="text-[0.85rem] leading-[1.7] text-white/45">
              {study.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
