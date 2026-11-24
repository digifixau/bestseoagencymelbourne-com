"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteLogo } from "./site-logo";

// Root-relative so they still resolve from /blog, not just the home page.
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 z-100 flex w-full items-center justify-between border-b border-mist bg-white/95 px-6 backdrop-blur-xl transition-[height,box-shadow] duration-300 lg:px-30 ${
        scrolled ? "h-16 shadow-[0_4px_24px_rgba(11,16,51,0.06)]" : "h-20"
      }`}
    >
      <Link href="/" aria-label="Best SEO Agency Melbourne — Home">
        <SiteLogo />
      </Link>
      <ul className="hidden gap-10 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base font-medium text-midnight transition-colors duration-200 hover:text-power-blue-deep"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <a
          href="tel:+61 38 669 1773"
          aria-label="Call +61 38 669 1773"
          className="hidden font-mono text-sm font-medium tracking-[0.04em] text-midnight transition-colors duration-200 hover:text-power-blue-deep sm:inline"
        >
          +61 38 669 1773
        </a>
        <Link
          href="/#audit"
          className="hidden rounded-full bg-magenta px-6 py-2.5 font-display text-base font-bold text-white transition-colors duration-200 hover:bg-magenta-deep lg:inline-block"
        >
          Free Audit
        </Link>
      </div>
    </nav>
  );
}
