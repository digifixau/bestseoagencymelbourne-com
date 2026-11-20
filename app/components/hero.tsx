import { ArrowRight } from "lucide-react";
import { Bar } from "./brand-bar";
import { Accent, primaryButton, secondaryButton } from "./primitives";

const trustStats = [
  { value: "500+", label: "Page 1 Rankings" },
  { value: "98%", label: "Client Retention" },
  { value: "12yrs", label: "Melbourne Expertise" },
  { value: "4.9★", label: "Google Rating" },
];

const rankings = [
  { keyword: "family lawyer melbourne", rank: "#1", change: "↑14" },
  { keyword: "divorce lawyer melbourne", rank: "#1", change: "↑9" },
  { keyword: "melbourne family solicitor", rank: "#2", change: "↑7" },
  { keyword: "property settlement lawyer", rank: "#4", change: "↑11" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-white px-6 pt-36 pb-20 lg:px-30 lg:pt-44 lg:pb-30"
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_440px] lg:gap-24">
        <div>
          <p className="mb-6 animate-rise font-mono text-label font-medium text-power-blue-deep uppercase">
            Melbourne&apos;s #1 Ranked SEO Agency — 2024
          </p>
          <h1
            id="hero-heading"
            className="mb-8 animate-rise font-display text-display font-extrabold text-midnight [animation-delay:0.1s]"
          >
            Dominate Google.
            <br />
            <Accent>Outrank Every</Accent>
            <br />
            Competitor.
          </h1>
          <p className="mb-10 max-w-150 animate-rise text-lead text-slate [animation-delay:0.2s]">
            Since 2012, we&apos;ve placed 500+ Melbourne businesses on page 1 of
            Google. Our proprietary ranking system delivers{" "}
            <strong className="font-semibold text-midnight">
              measurable revenue
            </strong>{" "}
            — not vanity metrics. While you read this, your competitors are
            investing in SEO.
          </p>
          <div className="mb-16 flex animate-rise flex-wrap items-center gap-4 [animation-delay:0.3s]">
            <a href="#audit" className={primaryButton}>
              Claim Your Free $1,200 Audit
            </a>
            <a
              href="#results"
              aria-label="View our proven SEO results"
              className={secondaryButton}
            >
              View Proven Results
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
          <dl
            aria-label="Key statistics"
            className="grid animate-rise grid-cols-2 gap-x-8 gap-y-8 border-t border-mist pt-10 sm:grid-cols-4 [animation-delay:0.4s]"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-2 font-mono text-xs font-medium tracking-[0.08em] text-slate uppercase">
                  {stat.label}
                </dt>
                <dd className="font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.02em] text-midnight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          aria-label="Live ranking results example"
          className="hidden animate-rise rounded-card border border-mist bg-paper p-8 [animation-delay:0.4s] lg:block"
        >
          <p className="mb-4 font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
            Live Rankings — Melbourne Law Firm
          </p>

          <ul>
            {rankings.map((row) => (
              <li
                key={row.keyword}
                className="flex items-center justify-between gap-4 border-b border-mist py-3.5 last:border-b-0"
              >
                <span className="text-base text-midnight">{row.keyword}</span>
                <span className="flex items-center gap-4">
                  <span
                    aria-label={`Position ${row.rank.replace("#", "")}`}
                    className="font-display text-xl font-extrabold text-midnight"
                  >
                    {row.rank}
                  </span>
                  <span className="w-8 text-right font-mono text-xs font-medium text-power-blue-deep">
                    {row.change}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* The Bar marks the key number (brand guide slide 19). */}
          <div className="mt-6 flex items-stretch gap-5 border-t border-mist pt-6">
            <Bar />
            <div className="flex flex-1 items-end justify-between gap-4">
              <div>
                <span className="block font-display text-[3rem] leading-none font-extrabold tracking-[-0.02em] text-midnight">
                  +412%
                </span>
                <span className="mt-2 block font-mono text-xs font-medium tracking-[0.08em] text-slate uppercase">
                  Organic traffic (8mo)
                </span>
              </div>
              <div className="text-right text-sm text-slate">
                <strong className="block font-semibold text-midnight">
                  Mitchell Family Law
                </strong>
                Southbank, Melbourne
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
