import { Accent, Eyebrow, SectionTitle } from "./primitives";
import { Reveal } from "./reveal";

const services = [
  {
    emoji: "📍",
    title: "Local SEO Melbourne",
    description:
      "Google Maps Pack, suburb-level targeting, and Google Business Profile optimisation. Get found by Melbourne customers searching near you.",
  },
  {
    emoji: "⚙️",
    title: "Technical SEO",
    description:
      "Site speed, Core Web Vitals, crawlability, schema markup. Fix the technical foundations that Google rewards with higher rankings.",
  },
  {
    emoji: "✍️",
    title: "SEO Content Strategy",
    description:
      "Keyword research, topical authority, and high-intent content that captures search traffic and converts it into customers.",
  },
  {
    emoji: "🛒",
    title: "E-Commerce SEO",
    description:
      "Product page and category optimisation for Shopify, WooCommerce, and Magento. More organic traffic, more sales — fewer ad dollars.",
  },
  {
    emoji: "🔗",
    title: "Authority Link Building",
    description:
      "Genuine, editorial backlinks from trusted Australian publishers. Build domain authority the right way — no shortcuts, no spam.",
  },
  {
    emoji: "📊",
    title: "SEO Reporting & Analytics",
    description:
      "Clear, plain-language reports every fortnight. Know exactly what's been done, what's working, and what the next steps are.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-16 text-center">
        <Eyebrow>Our Services</Eyebrow>
        <SectionTitle className="mb-0">
          Everything You Need to
          <br />
          Win on <Accent>Google</Accent>
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <Reveal
            key={service.title}
            as="article"
            className="group relative overflow-hidden rounded-xl border border-line px-9 py-10 transition-all duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:content-[''] hover:border-transparent hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:after:scale-x-100"
          >
            <span className="mb-5 block text-[2rem]">{service.emoji}</span>
            <h3 className="mb-3 text-[1.05rem] font-bold">{service.title}</h3>
            <p className="text-[0.88rem] leading-[1.7] text-muted">
              {service.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
