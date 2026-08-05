"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/app/contact/ContactForm";

const WHATSAPP_NUMBER = "917970102009";
const WHATSAPP_MESSAGE = "Hi PackBeyond, I'd like to know more about your packaging solutions.";

export default function FooterFloatingActions() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  // Prevent background scroll while the modal is open.
  useEffect(() => {
    if (quoteOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [quoteOpen]);

  return (
    <>
      {/* Sticky stack, bottom-right of the viewport on every page */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            WHATSAPP_MESSAGE
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:h-14 sm:w-14"
        >
          <FaWhatsapp size={26} />
        </a>

        <button
          onClick={() => setQuoteOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#ff6b35] px-5 py-3.5 font-montserrat text-[14px] font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#ff5722] sm:text-[15px]"
        >
          Get Free Quote
        </button>
      </div>

      {/* Get Quote modal */}
      {quoteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6 md:p-8"
          >
            <button
              onClick={() => setQuoteOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#1e1e24] transition hover:bg-black/10"
            >
              <X size={18} />
            </button>

            <h3 className="pr-10 font-montserrat text-[24px] font-bold text-[#1e1e24] md:text-[28px]">
              Get a Free Quote
            </h3>
            <p className="mt-1 font-kanit text-[15px] text-black/45">
              Tell us what you need — we&apos;ll get back to you within one
              business day.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}