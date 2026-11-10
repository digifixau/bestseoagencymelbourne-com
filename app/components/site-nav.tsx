"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
      className={`fixed top-0 z-100 flex w-full items-center justify-between border-b border-border-gold bg-navy/97 px-5 backdrop-blur-2xl transition-[height,box-shadow] duration-300 lg:px-15 ${
        scrolled ? "h-16 shadow-[0_4px_32px_rgba(0,0,0,0.4)]" : "h-19"
      }`}
    >
      <Link
        href="/"
        aria-label="Best SEO Agency Melbourne — Home"
        className="flex items-center gap-3"
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-gold"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-navy">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </span>
        <span className="font-serif text-base font-semibold tracking-[0.02em] text-cream">
          Best SEO Melbourne
        </span>
      </Link>
      <ul className="hidden gap-9 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-bold tracking-[0.04em] text-cream/65 uppercase transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <a
          href="tel:+611300000000"
          aria-label="Call 1300 000 000"
          className="hidden font-serif text-sm tracking-[0.05em] text-cream transition-colors duration-200 hover:text-gold sm:inline"
        >
          1300 000 000
        </a>
        <Link
          href="/#audit"
          className="hidden rounded bg-gold px-5.5 py-2.5 text-xs font-bold tracking-[0.06em] text-navy uppercase transition-all duration-200 hover:-translate-y-px hover:bg-gold-2 lg:inline-block"
        >
          Free Audit
        </Link>
      </div>
    </nav>
  );
}
