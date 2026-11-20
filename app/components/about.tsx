import { Award, BarChart3, Lock } from "lucide-react";
import {
  Accent,
  Eyebrow,
  Lead,
  SectionTitle,
  card,
  sectionPadding,
} from "./primitives";
import { Reveal } from "./reveal";

const credentials = [
  {
    icon: Award,
    title: "Google Partner Agency — Certified Since 2014",
    description:
      "One of fewer than 300 agencies in Australia to hold Google Partner status, with certified specialists across Search, Analytics, and Tag Manager.",
  },
  {
    icon: BarChart3,
    title: "Proprietary RankMatrix™ Methodology",
    description:
      "12 years of Melbourne-specific ranking data distilled into our own ranking framework — tested across 500+ campaigns, refined every quarter.",
  },
  {
    icon: Lock,
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
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`bg-paper ${sectionPadding}`}
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Eyebrow>Why We&apos;re Different</Eyebrow>
          <SectionTitle id="about-heading">
            Built by SEO Experts.
            <br />
            <Accent>Trusted</Accent> by Melbourne.
          </SectionTitle>
          <Lead>
            We&apos;re not a digital marketing generalist that added SEO as an
            afterthought. We are a pure-play SEO agency — it&apos;s all we do,
            and we&apos;ve done it for 12 years in one of Australia&apos;s most
            competitive markets.
          </Lead>

          <ul className="mt-12 flex flex-col gap-4">
            {credentials.map(({ icon: Icon, ...credential }) => (
              <Reveal
                key={credential.title}
                as="li"
                className="flex items-start gap-5 rounded-card border-l-4 border-power-blue-deep bg-sky-tint px-6 py-5"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-6 shrink-0 text-power-blue-deep"
                  strokeWidth={2}
                />
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold text-midnight">
                    {credential.title}
                  </h3>
                  <p className="text-base leading-[1.55] text-midnight/80">
                    {credential.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-8">
            <Eyebrow>Meet the Team</Eyebrow>
            <p className="text-base leading-[1.6] text-slate">
              Our senior consultants average 11 years of SEO experience — your
              campaign is never handed to a junior.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <Reveal key={member.name} as="li" className={`${card} p-6`}>
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-tint font-display text-lg font-extrabold text-power-blue-deep"
                >
                  {member.initials}
                </div>
                <h3 className="font-display text-lg font-bold text-midnight">
                  {member.name}
                </h3>
                <p className="mt-1 mb-3 font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
                  {member.title}
                </p>
                <p className="text-sm leading-[1.6] text-slate">{member.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
