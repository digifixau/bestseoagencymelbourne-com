"use client";

import { useState } from "react";
import { Divider, Eyebrow } from "./primitives";

const faqs = [
  {
    question: "How long does SEO take to show results in Melbourne?",
    answer:
      "Most Melbourne businesses see measurable ranking movement within 60–90 days, with significant traffic and lead growth by months 4–6. Highly competitive keywords may take 8–12 months. We provide honest, data-backed timelines during your free audit — never inflated promises to win a sale.",
  },
  {
    question: "How much does professional SEO cost in Melbourne?",
    answer:
      "Our Melbourne SEO programs start from $1,500/month for small local businesses and scale based on market competitiveness, site size, and goals. Typical mid-market programs run $2,500–$5,000/month. We provide a transparent, fixed-price proposal after your free audit — no hidden fees, no scope creep.",
  },
  {
    question: "Do you offer lock-in SEO contracts?",
    answer:
      "No. All our SEO services operate on month-to-month agreements with 30 days' notice to cancel. We believe results — not contracts — should be the reason you stay. 98% of our clients have been with us for 12+ months because of the results we deliver.",
  },
  {
    question: "Can you guarantee first-page rankings?",
    answer:
      "Any agency that guarantees specific rankings is being dishonest — no one controls Google's algorithm. What we guarantee is best-practice, white-hat SEO execution, complete transparency, and a 12-year track record of 89% of clients achieving page 1 for their primary commercial keywords within 6 months.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We work across all industries but have particular depth in: legal, medical and allied health, e-commerce (all major platforms), finance and accounting, trade services, real estate, and SaaS. Our in-house team has vertical-specific keyword data and content expertise across all major Melbourne market sectors.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="px-6 py-20 lg:px-15 lg:py-30">
      <div className="mb-12 text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2
          id="faq-heading"
          className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12] tracking-[-0.02em] text-cream"
        >
          Frequently Asked Questions
        </h2>
        <Divider center />
      </div>

      <div role="list" className="mx-auto max-w-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={faq.question} role="listitem" className="border-b border-border-gold">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-base font-bold text-cream transition-colors duration-200 hover:text-gold"
              >
                {faq.question}
                <span
                  aria-hidden="true"
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-gold text-base transition-all duration-200 ${
                    isOpen ? "border-gold bg-gold text-navy" : "text-gold"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p
                  id={panelId}
                  className="pb-6 text-sm leading-[1.8] font-light text-cream/60"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
