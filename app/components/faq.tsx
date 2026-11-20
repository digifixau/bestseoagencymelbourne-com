"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow, SectionTitle, sectionPadding } from "./primitives";

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
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`bg-white ${sectionPadding}`}
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle id="faq-heading">
            Frequently Asked Questions
          </SectionTitle>
        </div>

        <div role="list" className="border-t border-mist">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                role="listitem"
                className="border-b border-mist"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-xl font-bold text-midnight transition-colors duration-200 hover:text-power-blue-deep"
                  >
                    {faq.question}
                    <Plus
                      aria-hidden="true"
                      strokeWidth={2}
                      className={`h-6 w-6 shrink-0 text-power-blue-deep transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="max-w-170 pb-6 text-base leading-[1.65] text-slate"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
