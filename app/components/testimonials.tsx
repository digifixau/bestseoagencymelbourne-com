import { Star } from "lucide-react";
import { Bar } from "./brand-bar";
import {
  Accent,
  Eyebrow,
  SectionTitle,
  card,
  sectionPadding,
} from "./primitives";
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

function Stars() {
  return (
    <div
      role="img"
      aria-label="Rated 5 out of 5 stars"
      className="mb-5 flex gap-1 text-power-blue-deep"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Attribution({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <footer className="flex items-center gap-4">
      <div
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-tint font-display text-base font-extrabold text-power-blue-deep"
      >
        {initials}
      </div>
      <div>
        <div className="font-display text-base font-bold text-midnight">
          {name}
        </div>
        <div className="mt-0.5 font-mono text-xs font-medium tracking-[0.06em] text-slate uppercase">
          {role}
        </div>
      </div>
    </footer>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section
      aria-labelledby="testi-heading"
      className={`bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-360">
        <Eyebrow>Testimonials</Eyebrow>
        <SectionTitle id="testi-heading">
          127 Melbourne Businesses
          <br />
          <Accent>Can&apos;t Be Wrong</Accent>
        </SectionTitle>

        {/* The Bar frames the featured quote (brand guide slide 19). */}
        <Reveal
          as="article"
          className="mt-16 flex gap-6 rounded-card bg-paper p-8 lg:gap-10 lg:p-12"
        >
          <Bar className="self-stretch" />
          <blockquote>
            <Stars />
            <p className="mb-8 max-w-240 text-lead font-medium text-midnight">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <Attribution {...featured} />
          </blockquote>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {rest.map((testimonial) => (
            <Reveal
              key={testimonial.name}
              as="article"
              className={`${card} flex flex-col p-8`}
            >
              <blockquote className="flex flex-1 flex-col">
                <Stars />
                <p className="mb-8 flex-1 text-base leading-[1.6] text-midnight">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <Attribution {...testimonial} />
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
