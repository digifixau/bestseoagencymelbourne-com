import { Accent, Divider, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const services = [
  {
    number: "01",
    title: "Local SEO Melbourne",
    description:
      "Google Maps Pack dominance, Google Business Profile optimisation, and suburb-level targeting. Appear when Melbourne customers search for what you sell — in your area, at the moment they're ready to buy.",
  },
  {
    number: "02",
    title: "Technical SEO",
    description:
      "Core Web Vitals optimisation, crawl architecture, schema markup, site speed, and indexation health. We fix the technical foundations that determine whether Google can find, crawl, and rank your site.",
  },
  {
    number: "03",
    title: "Content & SEO Strategy",
    description:
      "Topical authority mapping, keyword intent analysis, and content that captures high-intent search traffic. We build content ecosystems — not just blog posts — that compound in value over time.",
  },
  {
    number: "04",
    title: "E-Commerce SEO",
    description:
      "Product page optimisation, category architecture, crawl budget management, and Merchant Center strategy. We've scaled Shopify, WooCommerce, and Magento stores to 7-figure organic revenue.",
  },
  {
    number: "05",
    title: "Authority Link Building",
    description:
      "Premium, editorial backlinks from authoritative Australian and global domains. Every link is manually acquired — zero PBNs, zero spam. We build the domain authority that compounds your rankings for years.",
  },
  {
    number: "06",
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
      className="bg-navy-2 px-6 py-20 lg:px-15 lg:py-30"
    >
      <Eyebrow>Our Services</Eyebrow>
      <SectionTitle className="mb-0">
        Every SEO Service You Need
        <br />
        to <Accent>Own Your Market</Accent>
      </SectionTitle>
      <Divider />
      <p className="max-w-[680px] text-lg leading-[1.7] font-light text-cream/60">
        We don&apos;t offer cookie-cutter packages. Every engagement is
        custom-built around your business goals, competitive landscape, and
        market opportunity.
      </p>

      <div role="list" className="mt-16 grid grid-cols-1 gap-px lg:grid-cols-3">
        {services.map((service) => (
          <Reveal
            key={service.title}
            as="article"
            role="listitem"
            className="group relative overflow-hidden border-t-[3px] border-transparent bg-navy-3 px-10 py-12 transition-colors duration-300 hover:border-gold"
          >
            <span
              aria-hidden="true"
              className="mb-6 block font-serif text-5xl leading-none text-gold/12 transition-colors duration-300 group-hover:text-gold/25"
            >
              {service.number}
            </span>
            <h3 className="mb-3.5 font-serif text-xl font-semibold text-cream">
              {service.title}
            </h3>
            <p className="text-sm leading-[1.75] font-light text-cream/55">
              {service.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
