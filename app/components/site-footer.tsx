const columns = [
  {
    heading: "Services",
    links: [
      { label: "Local SEO Melbourne", href: "/#services" },
      { label: "Technical SEO Audit", href: "/#services" },
      { label: "Content SEO Strategy", href: "/#services" },
      { label: "E-Commerce SEO", href: "/#services" },
      { label: "Link Building", href: "/#services" },
      { label: "Enterprise SEO", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Case Studies", href: "/#results" },
      { label: "SEO Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/#audit" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="border-t border-border-gold bg-[#08111C] px-6 pt-20 pb-10 lg:px-15">
      <div className="mb-15 grid grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5 font-serif text-xl font-semibold text-gold">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-gold"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-navy">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </span>
            Best SEO Agency Melbourne
          </div>
          <p className="text-sm leading-[1.7] font-light text-slate">
            Melbourne&apos;s most trusted SEO agency. Helping local
            businesses dominate Google since 2012. No lock-in contracts.
            100% in-house team. Proven results.
          </p>
          <address className="mt-5 text-sm leading-[1.8] text-slate not-italic">
            Level 12, 200 Queen Street
            <br />
            Melbourne, VIC 3000
            <br />
            <a
              href="tel:+611300000000"
              className="transition-colors duration-200 hover:text-gold"
            >
              1300 000 000
            </a>
            <br />
            <a
              href="mailto:hello@bestseoagencymelbourne.au"
              className="transition-colors duration-200 hover:text-gold"
            >
              hello@bestseoagencymelbourne.au
            </a>
          </address>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={`${column.heading} links`}>
            <h4 className="mb-5 text-xs font-bold tracking-[0.14em] text-gold uppercase">
              {column.heading}
            </h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm font-light text-slate transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h4 className="mb-5 text-xs font-bold tracking-[0.14em] text-gold uppercase">
            Office Hours
          </h4>
          <ul>
            <li className="mb-2.5">
              <a
                href="tel:+611300000000"
                className="text-sm font-light text-slate transition-colors duration-200 hover:text-cream"
              >
                1300 000 000
              </a>
            </li>
            <li className="text-sm leading-[1.8] font-light text-slate">
              Mon–Fri: 8:30am – 5:30pm AEST
              <br />
              Emergency support: 24/7
              <br />
              Response SLA: Within 24 hours
            </li>
          </ul>
          <div className="mt-5 border border-border-gold bg-gold/8 p-4">
            <div className="mb-1 text-xs font-bold tracking-[0.08em] text-gold uppercase">
              Google Partner
            </div>
            <div className="text-xs leading-[1.5] text-slate">
              Certified Google Partner Agency since 2014. Maintaining
              accreditation across Search, Analytics, and Tag Manager.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-gold/8 pt-10 text-center lg:flex-row lg:justify-between lg:text-left">
        <p className="text-xs text-slate/50">
          © 2026 Best SEO Agency Melbourne Pty Ltd. ABN 00 000 000 000. All
          rights reserved.
        </p>
        <nav aria-label="Legal links" className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Sitemap", href: "/sitemap.xml" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-slate/50 transition-colors duration-200 hover:text-slate"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
