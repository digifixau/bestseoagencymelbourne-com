import { Accent, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "The team genuinely cares about our business. They took the time to understand our clients, our services, our goals — and built a strategy around that. Our organic leads have tripled.",
    initials: "JM",
    name: "James Mitchell",
    role: "Director, Mitchell Family Law",
  },
  {
    quote:
      "We tried two agencies before. The difference is night and day. These are actual Melbourne people who know the market — and their results back it up. Organic is now our biggest acquisition channel.",
    initials: "SP",
    name: "Sarah Patel",
    role: "Co-Founder, Urban Goods Co",
  },
  {
    quote:
      "Six months in we were #1 for all our top keywords. The monthly reports are clear, honest, and actually show you what's happening. Best marketing investment we've ever made.",
    initials: "RL",
    name: "Dr. Rebecca Lowe",
    role: "Principal, South Melbourne Dental",
  },
  {
    quote:
      "We're in a very competitive local market and they absolutely delivered. Top of the map pack in 90 days, phone bookings up 4× — and no lock-in contract so we felt zero pressure.",
    initials: "TC",
    name: "Tom Chen",
    role: "Owner, Melbourne Plumbing Solutions",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-16 text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <SectionTitle className="mb-0">
          Don&apos;t Just Take
          <br />
          Our Word for <Accent>It</Accent>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Reveal
            key={testimonial.name}
            as="article"
            className="rounded-xl border border-line bg-cream p-10"
          >
            <div
              className="mb-5 flex gap-1"
              aria-label="Rated 5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  aria-hidden="true"
                  className="text-[0.9rem] text-[#F59E0B]"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mb-7 font-serif text-[1.1rem] leading-[1.6] text-ink italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-brand text-[0.85rem] font-bold text-white">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-[0.88rem] font-semibold text-ink">
                  {testimonial.name}
                </div>
                <div className="text-[0.75rem] text-muted">
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
