import {
  Building2,
  FileText,
  Link2,
  MapPin,
  ShoppingCart,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  Accent,
  Eyebrow,
  Lead,
  SectionTitle,
  card,
  sectionPadding,
} from "./primitives";
import { Reveal } from "./reveal";

const services: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: MapPin,
    title: "Local SEO Melbourne",
    description:
      "Google Maps Pack dominance, Google Business Profile optimisation, and suburb-level targeting. Appear when Melbourne customers search for what you sell — in your area, at the moment they're ready to buy.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Technical SEO",
    description:
      "Core Web Vitals optimisation, crawl architecture, schema markup, site speed, and indexation health. We fix the technical foundations that determine whether Google can find, crawl, and rank your site.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Content & SEO Strategy",
    description:
      "Topical authority mapping, keyword intent analysis, and content that captures high-intent search traffic. We build content ecosystems — not just blog posts — that compound in value over time.",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    description:
      "Product page optimisation, category architecture, crawl budget management, and Merchant Center strategy. We've scaled Shopify, WooCommerce, and Magento stores to 7-figure organic revenue.",
  },
  {
    number: "05",
    icon: Link2,
    title: "Authority Link Building",
    description:
      "Premium, editorial backlinks from authoritative Australian and global domains. Every link is manually acquired — zero PBNs, zero spam. We build the domain authority that compounds your rankings for years.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Enterprise SEO",
    description:
      "Large-scale SEO programs for Melbourne's biggest businesses. Site migrations, multi-location strategy, international SEO, and full-service programs managed by our most senior consultants.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-360">
        <Eyebrow>Our Services</Eyebrow>
        <SectionTitle id="services-heading">
          Every SEO Service You Need
          <br />
          to <Accent>Own Your Market</Accent>
        </SectionTitle>
        <Lead>
          We don&apos;t offer cookie-cutter packages. Every engagement is
          custom-built around your business goals, competitive landscape, and
          market opportunity.
        </Lead>

        <div
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, ...service }) => (
            <Reveal
              key={service.title}
              as="article"
              role="listitem"
              className={`${card} p-8 transition-colors duration-300 hover:border-power-blue lg:p-10`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-card bg-power-blue-deep"
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-label font-medium text-slate"
                >
                  {service.number}
                </span>
              </div>
              <h3 className="mb-3 font-display text-h3 font-bold text-midnight">
                {service.title}
              </h3>
              <p className="text-base leading-[1.6] text-slate">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
