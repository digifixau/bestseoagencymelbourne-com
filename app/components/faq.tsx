"use client";

import { useState } from "react";
import { Accent, Eyebrow, SectionTitle } from "./primitives";

const faqs = [
  {
    question: "How soon will I see results from SEO?",
    answer:
      "Most Melbourne clients start seeing ranking movement within 60–90 days, with noticeable traffic and enquiry growth by months 4–6. We'll give you an honest, data-driven timeline during your free consultation based on your specific market and website.",
  },
  {
    question: "Are there lock-in contracts?",
    answer:
      "No. We work on month-to-month agreements. We believe in earning your continued business through results, not contracts. That said, the best SEO results come from sustained effort over 12+ months.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "Our programs start from $1,500/month for small local businesses. We'll give you a clear, fixed-price quote after your free consultation — no hidden fees, no surprise invoices.",
  },
  {
    question: "Is your team actually based in Melbourne?",
    answer:
      "Yes — 100%. Our entire SEO team is Melbourne-based. We never outsource your work to overseas contractors. You'll work with a dedicated Melbourne consultant who knows your market firsthand.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with Melbourne businesses across all industries — legal, medical, trades, finance, e-commerce, hospitality, real estate, and professional services. Our approach is customised to your specific sector and competitive landscape.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream px-6 py-20 lg:px-15 lg:py-25">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-15 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mb-0">
            Your Questions,
            <br />
            <Accent>Answered</Accent>
          </SectionTitle>
        </div>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={faq.question}
              className="mb-2 overflow-hidden rounded-[10px] border border-line bg-white"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-5.5 text-left text-[0.95rem] font-semibold text-ink"
              >
                {faq.question}
                <span
                  aria-hidden="true"
                  className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full text-base transition-all duration-200 ${
                    isOpen ? "bg-brand text-white" : "bg-cream text-brand"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p
                  id={panelId}
                  className="px-7 pb-5.5 text-[0.88rem] leading-[1.75] text-muted"
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
