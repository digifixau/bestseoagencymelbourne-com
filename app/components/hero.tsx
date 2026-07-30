import { primaryButton } from "./primitives";

const trustStats = [
  { value: "500+", label: "Page 1 Rankings" },
  { value: "98%", label: "Client Retention" },
  { value: "12yrs", label: "Melbourne Expertise" },
  { value: "4.9★", label: "Google Rating" },
];

const rankings = [
  { keyword: "family lawyer melbourne", rank: "#1", change: "↑14", tier: 1 },
  { keyword: "divorce lawyer melbourne", rank: "#1", change: "↑9", tier: 1 },
  { keyword: "melbourne family solicitor", rank: "#2", change: "↑7", tier: 2 },
  { keyword: "property settlement lawyer", rank: "#4", change: "↑11", tier: 3 },
];

const rankColors: Record<number, string> = {
  1: "text-[#22C55E]",
  2: "text-gold",
  3: "text-[#60A5FA]",
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-6 pt-[100px] pb-20 lg:px-15 lg:pt-[100px] lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_45%,rgba(200,151,60,0.07)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_15%_80%,rgba(200,151,60,0.04)_0%,transparent_60%),linear-gradient(160deg,#0C1829_0%,#111F35_60%,#162840_100%)] bg-[length:100%_100%] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(200,151,60,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,151,60,0.04)_1px,transparent_1px)] before:bg-[length:60px_60px] before:content-['']"
      />

      <div className="relative z-1 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-20 lg:grid-cols-[1fr_420px]">
        <div>
          <div
            role="text"
            aria-label="Award: Melbourne's Number 1 Ranked SEO Agency 2024"
            className="mb-9 inline-flex animate-float-in items-center gap-2.5 border border-border-gold bg-gold/6 px-4.5 py-2 text-xs tracking-[0.12em] text-gold uppercase before:content-['★']"
          >
            Melbourne&apos;s #1 Ranked SEO Agency — 2024
          </div>
          <h1
            id="hero-heading"
            className="mb-7 animate-rise font-serif text-[clamp(3rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-cream [animation-delay:0.1s]"
          >
            Dominate Google.
            <br />
            <span className="text-gold">Outrank Every</span>
            <br />
            Competitor.
          </h1>
          <p className="mb-11 max-w-[560px] animate-rise text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.75] font-light text-cream/65 [animation-delay:0.2s]">
            Since 2012, we&apos;ve placed 500+ Melbourne businesses on page 1
            of Google. Our proprietary ranking system delivers{" "}
            <strong className="font-bold">measurable revenue</strong> — not
            vanity metrics. While you read this, your competitors are
            investing in SEO.
          </p>
          <div className="mb-14 flex animate-rise flex-wrap items-center gap-3.5 [animation-delay:0.3s]">
            <a href="#audit" className={primaryButton}>
              Claim Your Free $1,200 Audit
            </a>
            <a
              href="#results"
              aria-label="View our proven SEO results"
              className="group flex items-center gap-2 py-4.5 text-sm font-bold tracking-[0.04em] text-cream opacity-70 transition-all duration-200 hover:gap-3.5 hover:text-gold hover:opacity-100"
            >
              View Proven Results →
            </a>
          </div>
          <div
            role="list"
            aria-label="Key statistics"
            className="flex animate-rise gap-9 border-t border-border-gold pt-12 [animation-delay:0.4s]"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} role="listitem">
                <span className="block font-serif text-[2.4rem] leading-none tracking-[-0.02em] text-gold">
                  {stat.value}
                </span>
                <div className="mt-1.5 text-xs tracking-[0.08em] text-slate uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-label="Live ranking results example"
          className="hidden animate-float-in rounded-lg border border-border-gold bg-white/4 p-9 backdrop-blur-sm [animation-delay:0.4s] lg:block"
        >
          <div className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-gold uppercase">
            <span
              aria-hidden="true"
              className="h-1.75 w-1.75 animate-pulse-dot rounded-full bg-[#22C55E]"
            />
            Live Rankings — Melbourne Law Firm
          </div>

          {rankings.map((row, index) => (
            <div
              key={row.keyword}
              className={`flex items-center justify-between py-3.5 ${
                index === rankings.length - 1
                  ? ""
                  : "border-b border-gold/10"
              }`}
            >
              <span className="text-sm text-cream/80">{row.keyword}</span>
              <span
                aria-label={`Position ${row.rank.replace("#", "")}`}
                className={`font-serif text-[1.2rem] font-bold ${rankColors[row.tier]}`}
              >
                {row.rank}
              </span>
              <span className="text-xs font-bold tracking-[0.04em] text-[#22C55E]">
                {row.change}
              </span>
            </div>
          ))}

          <div
            aria-hidden="true"
            className="mt-4 h-1 overflow-hidden rounded-full bg-white/8"
          >
            <div className="h-full w-full origin-left scale-x-0 animate-bar-grow rounded-full bg-[linear-gradient(to_right,var(--color-gold),#22C55E)]" />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border-gold pt-5">
            <div className="text-xs text-slate">
              <strong className="mb-0.5 block text-sm text-cream">
                Mitchell Family Law
              </strong>
              Southbank, Melbourne
            </div>
            <div className="text-right">
              <span className="block font-serif text-2xl leading-none font-bold text-gold">
                +412%
              </span>
              <span className="text-xs text-slate">
                Organic traffic (8mo)
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
