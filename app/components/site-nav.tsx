"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-100 flex w-full items-center justify-between border-b border-line bg-cream/95 px-6 py-4 backdrop-blur-md transition-shadow duration-200 lg:px-15 lg:py-5 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <a
        href="#"
        className="flex items-center gap-2.5 font-serif text-[1.15rem] text-ink"
      >
        <span className="h-2 w-2 rounded-full bg-brand" />
        Best SEO Melbourne
      </a>
      <ul className="hidden gap-9 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[0.88rem] font-medium text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className="rounded-md bg-brand px-6.5 py-3 text-[0.85rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-light hover:shadow-[0_6px_20px_rgba(232,93,38,0.3)]"
      >
        Free Consultation
      </a>
    </nav>
  );
}
