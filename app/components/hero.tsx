import { primaryButton } from "./primitives";

const trustStats = [
  { value: "500+", label: "Melbourne clients ranked" },
  { value: "12yr", label: "Local experience" },
  { value: "4.9★", label: "Google rating" },
];

const metrics = [
  { value: "+412%", label: "Organic Traffic", accent: true },
  { value: "89", label: "New Enquiries", accent: false },
  { value: "#1", label: "Top Keyword", accent: false },
];

const rankings = [
  { keyword: "family lawyer melbourne", rank: "#1", change: "↑ 12", tier: 1 },
  { keyword: "divorce lawyer melbourne", rank: "#2", change: "↑ 8", tier: 1 },
  { keyword: "melbourne family solicitor", rank: "#3", change: "↑ 6", tier: 2 },
  { keyword: "property settlement lawyer", rank: "#5", change: "↑ 9", tier: 3 },
];

const rankBadgeStyles: Record<number, string> = {
  1: "bg-[#DCFCE7] text-[#15803D]",
  2: "bg-[#DBEAFE] text-[#1D4ED8]",
  3: "bg-[#FEF9C3] text-[#A16207]",
};

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-20 px-6 pt-[110px] pb-15 lg:grid-cols-[1.1fr_0.9fr] lg:px-15 lg:pt-[140px] lg:pb-20">
      <div>
        <div className="mb-9 inline-flex animate-float-in items-center gap-2.5 rounded-full border border-line bg-white px-4.5 py-2 text-[0.8rem] font-medium text-body">
          <span className="text-brand">📍</span> Based in Melbourne, built for
          Melbourne
        </div>
        <h1 className="mb-7 animate-rise font-serif text-[clamp(3rem,5.5vw,5rem)] leading-[1.1] text-ink [animation-delay:0.1s]">
          Your Local Melbourne
          <br />
          SEO <em className="text-brand italic">Growth</em> Partners
        </h1>
        <p className="mb-11 max-w-[500px] animate-rise text-base leading-[1.75] text-muted [animation-delay:0.2s]">
          We help Melbourne businesses attract more customers through Google.
          Local knowledge, proven strategies, and transparent results you can
          actually see — and measure.
        </p>
        <div className="flex animate-rise flex-wrap items-center gap-4 [animation-delay:0.3s]">
          <a href="#cta" className={primaryButton}>
            Get a Free Consultation
          </a>
          <a
            href="#results"
            className="group flex items-center gap-2 text-[0.92rem] font-medium text-body transition-all duration-200 hover:gap-3.5 hover:text-brand"
          >
            See our results →
          </a>
        </div>
        <div className="mt-12 flex animate-rise gap-10 border-t border-line pt-10 [animation-delay:0.4s]">
          {trustStats.map((stat) => (
            <div key={stat.label}>
              <span className="block font-serif text-[2.2rem] leading-none text-ink">
                {stat.value}
              </span>
              <div className="mt-1 text-[0.78rem] text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="animate-pop rounded-2xl border border-line bg-white p-9 shadow-[0_20px_60px_rgba(0,0,0,0.08)] [animation-delay:0.3s]">
          <div className="mb-7 flex items-center justify-between">
            <span className="text-[0.82rem] font-semibold text-body">
              SEO Performance Report
            </span>
            <span className="rounded-full bg-brand-pale px-3 py-1 text-[0.72rem] font-semibold text-brand">
              ↑ This Month
            </span>
          </div>

          <div className="mb-7 flex items-center gap-3.5 rounded-[10px] bg-cream p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-[1.2rem] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              ⚖️
            </div>
            <div>
              <div className="text-[0.88rem] font-semibold">
                Melbourne Family Law Group
              </div>
              <div className="text-[0.75rem] text-muted">
                📍 Southbank, Melbourne
              </div>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[10px] bg-cream px-3.5 py-4 text-center"
              >
                <span
                  className={`block font-serif text-[1.6rem] leading-none ${
                    metric.accent ? "text-forest" : "text-ink"
                  }`}
                >
                  {metric.value}
                </span>
                <div className="mt-1 text-[0.68rem] text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div>
            {rankings.map((row, index) => (
              <div
                key={row.keyword}
                className={`flex items-center justify-between py-2.5 text-[0.82rem] ${
                  index === rankings.length - 1 ? "" : "border-b border-line"
                }`}
              >
                <span className="font-medium text-body">{row.keyword}</span>
                <span
                  className={`rounded-full px-2.5 py-[3px] text-[0.72rem] font-semibold ${rankBadgeStyles[row.tier]}`}
                >
                  {row.rank}
                </span>
                <span className="text-[0.72rem] font-semibold text-mint">
                  {row.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
