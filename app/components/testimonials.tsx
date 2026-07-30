import { Accent, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Within 6 months our organic leads had tripled. The team is extraordinarily transparent — we always know what's been done, why it was done, and what the data says. Best investment we've made in marketing in 15 years.",
    initials: "JM",
    name: "James Mitchell",
    role: "Director, Mitchell Family Law · Melbourne CBD",
  },
  {
    quote:
      "We'd tried two other agencies before. Night and day difference. These consultants understand e-commerce SEO at a level I haven't encountered elsewhere. Revenue from organic search is now our highest-margin acquisition channel.",
    initials: "SP",
    name: "Sarah Patel",
    role: "Co-Founder, Urban Goods Co · Melbourne",
  },
  {
    quote:
      "The monthly reports are genuinely insightful — not just numbers, but context, strategy, and clear next steps. We're now #1 for our top 5 keywords and the enquiry volume has been transformational for the practice.",
    initials: "RL",
    name: "Dr. Rebecca Lowe",
    role: "Principal, South Melbourne Dental",
  },
  {
    quote:
      "In the map pack for every suburb we service within 90 days. Phone calls from new customers increased 4× and we've had to hire two additional tradespeople to handle the volume. Remarkable ROI.",
    initials: "TC",
    name: "Tom Chen",
    role: "Owner, Melbourne Plumbing Solutions",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testi-heading" className="bg-navy-2 px-6 py-20 lg:px-15 lg:py-30">
      <Eyebrow>Testimonials</Eyebrow>
      <SectionTitle className="mb-0">
        127 Melbourne Businesses
        <br />
        <Accent>Can&apos;t Be Wrong</Accent>
      </SectionTitle>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Reveal
            key={testimonial.name}
            as="article"
            className="relative overflow-hidden rounded-md border border-border-gold bg-navy-3 p-11"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-2.5 right-6 font-serif text-[7rem] leading-none text-gold/8"
            >
              &ldquo;
            </span>
            <div
              aria-label="Rated 5 out of 5 stars"
              className="relative z-1 mb-5 text-[0.85rem] tracking-[3px] text-[#F59E0B]"
            >
              ★★★★★
            </div>
            <p className="relative z-1 mb-7 font-serif text-[1.1rem] leading-[1.65] text-cream/85 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="relative z-1 flex items-center gap-3.5">
              <div className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-base font-bold text-navy">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-cream">
                  {testimonial.name}
                </div>
                <div className="mt-0.5 text-xs text-slate">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
