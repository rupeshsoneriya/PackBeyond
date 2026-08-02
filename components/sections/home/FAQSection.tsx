"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { homeFaqs } from "@/lib/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[900px] px-6 md:px-8 mt-28">
      <div className="text-center max-w-[600px] mx-auto mb-10">
        <span className="font-kanit uppercase tracking-[6px] text-[#ff6b35] font-semibold">
          FAQ
        </span>
        <h2
          className="mt-3 text-[36px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1e1e24]"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {homeFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-black/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  className="font-montserrat text-[18px] font-medium text-[#1e1e24]"
                >
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1e1e24]">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              {isOpen && (
                <p className="px-6 pb-5 font-kanit text-[16px] leading-[1.6] text-[#4c4c5c]">
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
