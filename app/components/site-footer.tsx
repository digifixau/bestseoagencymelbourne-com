const columns = [
  {
    heading: "Services",
    links: [
      { label: "Local SEO", href: "/#services" },
      { label: "Technical SEO", href: "/#services" },
      { label: "Content SEO", href: "/#services" },
      { label: "E-Commerce SEO", href: "/#services" },
      { label: "Link Building", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Case Studies", href: "/#results" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 pt-20 pb-10 lg:px-15">
      <div className="mb-15 grid grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 font-serif text-[1.2rem] text-white">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Best SEO Melbourne
          </div>
          <p className="text-[0.85rem] leading-[1.6] text-white/40">
            Melbourne&apos;s most trusted local SEO agency. Helping businesses
            grow organically since 2012. No lock-in contracts. Real people. Real
            results.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h5 className="mb-5 text-[0.75rem] font-bold tracking-[0.1em] text-white/40 uppercase">
              {column.heading}
            </h5>
            <ul>
              {column.links.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="mb-5 text-[0.75rem] font-bold tracking-[0.1em] text-white/40 uppercase">
            Contact
          </h5>
          <ul>
            <li className="mb-2.5">
              <a
                href="tel:0390000000"
                className="text-[0.85rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                03 9000 0000
              </a>
            </li>
            <li className="mb-2.5">
              <a
                href="mailto:hello@bestseomelbourne.com.au"
                className="text-[0.85rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                hello@bestseomelbourne.com.au
              </a>
            </li>
            <li className="mb-2.5">
              <address className="text-[0.85rem] text-white/55 not-italic">
                200 Queen St
                <br />
                Melbourne VIC 3000
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-white/8 pt-10 text-center lg:flex-row lg:justify-between lg:text-left">
        <span className="text-[0.78rem] text-white/25">
          © 2026 Best SEO Agency Melbourne Pty Ltd · ABN 00 000 000 000
        </span>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms", "Sitemap"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[0.78rem] text-white/25 transition-colors duration-200 hover:text-white/60"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
