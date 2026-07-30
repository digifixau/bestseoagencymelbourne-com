import { Accent, Divider, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const credentials = [
  {
    icon: "🏆",
    title: "Google Partner Agency — Certified Since 2014",
    description:
      "One of fewer than 300 agencies in Australia to hold Google Partner status, with certified specialists across Search, Analytics, and Tag Manager.",
  },
  {
    icon: "📊",
    title: "Proprietary RankMatrix™ Methodology",
    description:
      "12 years of Melbourne-specific ranking data distilled into our own ranking framework — tested across 500+ campaigns, refined every quarter.",
  },
  {
    icon: "🔒",
    title: "100% In-House Team — Never Outsourced",
    description:
      "Every strategy, every piece of content, every link outreach is executed by our Melbourne team. Your campaign is never handed to a contractor or offshore team.",
  },
];

const team = [
  {
    initials: "DH",
    name: "Daniel Hartley",
    title: "Founder & Head of Strategy",
    bio: "Former Google Search Quality evaluator. 16 years in SEO across AU, UK, and US markets. Google Partner certified.",
  },
  {
    initials: "SN",
    name: "Sarah Nguyen",
    title: "Head of Technical SEO",
    bio: "Core Web Vitals specialist. Previously technical lead at a top-5 Melbourne e-commerce agency. Ahrefs-certified expert.",
  },
  {
    initials: "ML",
    name: "Marcus Lee",
    title: "Head of Content & Links",
    bio: "Former editor at The Age. 9 years building editorial link portfolios for Melbourne's leading brands and legal firms.",
  },
  {
    initials: "EP",
    name: "Emma Park",
    title: "Local SEO Specialist",
    bio: "Melbourne suburb-level local SEO expert. Managed Maps Pack strategy for 80+ multi-location businesses across Victoria.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-20 lg:px-15 lg:py-30">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Why We&apos;re Different</Eyebrow>
          <SectionTitle>
            Built by SEO Experts.
            <br />
            <Accent>Trusted</Accent> by Melbourne.
          </SectionTitle>
          <Divider />
          <p className="text-lg leading-[1.7] font-light text-cream/60">
            We&apos;re not a digital marketing generalist that added SEO as an
            afterthought. We are a pure-play SEO agency — it&apos;s all we do,
            and we&apos;ve done it for 12 years in one of Australia&apos;s
            most competitive markets.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {credentials.map((credential) => (
              <Reveal
                key={credential.title}
                className="flex items-start gap-4.5 border-l-[3px] border-gold bg-navy-3 px-6 py-5"
              >
                <span aria-hidden="true" className="mt-0.5 text-[1.4rem]">
                  {credential.icon}
                </span>
                <div>
                  <div className="mb-1 text-base font-bold text-cream">
                    {credential.title}
                  </div>
                  <div className="text-sm leading-[1.6] font-light text-cream/55">
                    {credential.description}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <Eyebrow>Meet the Team</Eyebrow>
            <p className="mt-2 text-sm leading-[1.7] font-light text-slate">
              Our senior consultants average 11 years of SEO experience —
              your campaign is never handed to a junior.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <Reveal
                key={member.name}
                className="border border-border-gold bg-navy-3 p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-[1.1rem] font-bold text-navy"
                >
                  {member.initials}
                </div>
                <div className="mb-0.5 text-base font-bold text-cream">
                  {member.name}
                </div>
                <div className="mb-2 text-xs tracking-[0.08em] text-gold uppercase">
                  {member.title}
                </div>
                <div className="text-xs leading-[1.6] text-slate">
                  {member.bio}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
