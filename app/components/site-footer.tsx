import Image from "next/image";
import { SiteLogo } from "./site-logo";

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

const footerLink =
  "text-base text-slate transition-colors duration-200 hover:text-power-blue-deep";

const columnHeading =
  "mb-5 font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase";

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-mist bg-white px-6 pt-20 pb-28 lg:px-30 lg:pb-10"
    >
      <div className="mx-auto max-w-360">
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <div className="mb-5">
              <SiteLogo />
            </div>
            <p className="max-w-100 text-base leading-[1.6] text-slate">
              Melbourne&apos;s most trusted SEO agency. Helping local businesses
              dominate Google since 2012. No lock-in contracts. 100% in-house
              team. Proven results.
            </p>
            <address className="mt-6 text-base leading-[1.7] text-midnight not-italic">
              Level 12, 200 Queen Street
              <br />
              Melbourne, VIC 3000
              <br />
              <a href="tel:+611300000000" className={footerLink}>
                1300 000 000
              </a>
              <br />
              <a
                href="mailto:hello@bestseoagencymelbourne.au"
                className={footerLink}
              >
                hello@bestseoagencymelbourne.au
              </a>
            </address>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={`${column.heading} links`}>
              <h2 className={columnHeading}>{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label} className="mb-3">
                    <a href={link.href} className={footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={columnHeading}>Office Hours</h2>
            <ul>
              <li className="mb-3">
                <a href="tel:+611300000000" className={footerLink}>
                  1300 000 000
                </a>
              </li>
              <li className="text-base leading-[1.7] text-slate">
                Mon–Fri: 8:30am – 5:30pm AEST
                <br />
                Emergency support: 24/7
                <br />
                Response SLA: Within 24 hours
              </li>
            </ul>
            <div className="mt-6 rounded-card border border-mist bg-white p-4">
              <div className="mb-1 font-mono text-xs font-medium tracking-[0.08em] text-power-blue-deep uppercase">
                Google Partner
              </div>
              <div className="text-sm leading-[1.5] text-slate">
                Certified Google Partner Agency since 2014. Maintaining
                accreditation across Search, Analytics, and Tag Manager.
              </div>
            </div>
          </div>
        </div>

        {/* Endorsement: every DigiFix product carries the DigiFix logo in its
            footer (brand guide slide 26). Primary version on light. */}
        <div className="flex flex-col gap-6 border-t border-mist pt-10 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="https://digifix.com.au"
            className="flex items-center gap-4 text-slate transition-colors duration-200 hover:text-midnight"
          >
            <Image
              src="/digifix-logo.svg"
              alt="DigiFix"
              width={45}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase">
              by DigiFix
            </span>
          </a>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <p className="text-sm text-slate">
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
                  className="text-sm text-slate transition-colors duration-200 hover:text-power-blue-deep"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
