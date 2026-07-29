import { Accent, Eyebrow, SectionTitle, primaryButton } from "./primitives";

const points = [
  "In-house Melbourne team — no outsourcing, ever",
  "No lock-in contracts — month-to-month flexibility",
  "Fortnightly reporting you can actually understand",
  "Dedicated account manager, not a ticketing system",
];

const stats = [
  { value: "500+", label: "Clients ranked page 1" },
  { value: "98%", label: "Client retention rate" },
  { value: "4.9x", label: "Avg traffic increase" },
  { value: "$0", label: "Lock-in contract fee" },
];

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-25 px-6 py-20 lg:grid-cols-2 lg:px-15 lg:py-30"
    >
      <div>
        <Eyebrow>Who We Are</Eyebrow>
        <SectionTitle>
          We&apos;re Not Just Another
          <br />
          Agency. We&apos;re <Accent>Local.</Accent>
        </SectionTitle>
        <p className="text-[0.95rem] leading-[1.8] text-muted">
          Born and raised in Melbourne. We&apos;ve been helping local businesses
          grow online since 2012 — long before every marketing agency suddenly
          became an &ldquo;SEO expert.&rdquo; We know the Melbourne market, the
          local search landscape, and what it actually takes to win here.
        </p>
        <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted">
          No offshore contractors. No copy-paste strategies. Just a dedicated
          Melbourne team that treats your business like our own.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand text-[0.7rem] text-white">
                ✓
              </div>
              <span className="text-[0.9rem] font-medium text-body">
                {point}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#cta" className={primaryButton}>
            Let&apos;s Talk About Your Business
          </a>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#1A3A2A,#0D2018)] p-12 before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_80%_20%,rgba(232,93,38,0.2)_0%,transparent_50%)] before:content-['']">
          <p className="relative z-1 font-serif text-[1.5rem] leading-normal text-white italic before:absolute before:top-12.5 before:-left-2.5 before:text-[6rem] before:leading-0 before:text-white/10 before:content-['\0022']">
            We&apos;ve helped more than 500 Melbourne businesses grow from page 2
            obscurity to page 1 visibility. Your story could be next.
          </p>
          <div className="relative z-1 mt-7 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] bg-white/8 p-5 backdrop-blur-[2px]"
              >
                <span className="block font-serif text-[2.2rem] leading-none text-white">
                  {stat.value}
                </span>
                <div className="mt-1 text-[0.75rem] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
