"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How is Vondel different from a recruitment agency?",
    answer:
      "We don't hand off a CV and disappear. We stay accountable for the outcome — whether that's a commercial result, a fractional leader who sticks, or capital that actually closes.",
  },
  {
    question: "Do you only work with venture-backed startups?",
    answer:
      "Most of our work is with venture- and PE-backed companies, but the common thread is stage: teams that need senior firepower fast, not a six-month hiring process.",
  },
  {
    question: "What does an engagement typically look like?",
    answer:
      "It starts with a conversation about the problem, not a pitch. From there we scope commercial, talent or capital support — sometimes all three — with clear, measurable milestones.",
  },
  {
    question: "Can you get involved on the investor side?",
    answer:
      "Yes. We regularly work directly with investors to support portfolio companies, acting as an extension of the board rather than an external vendor.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Good questions, honest answers.
        </h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-semibold text-neutral-950">{faq.question}</span>
                  <span
                    className={`shrink-0 text-xl text-brand transition-transform ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {open && (
                  <p className="px-6 pb-5 text-neutral-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
