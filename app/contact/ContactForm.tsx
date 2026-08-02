"use client";

import { useState, type FormEvent } from "react";

const needOptions = [
  "Mono Carton Boxes",
  "Labels / Stickers",
  "Paper Bags",
  "Product Packaging Design",
  "Packaging Consultation",
  "Other",
];

const industryOptions = [
  "Food",
  "Pharma",
  "Cosmetics",
  "FMCG",
  "Agriculture",
  "Clothing",
  "Other",
];

const printingOptions = [
  "Single Color",
  "Multi Color",
  "Premium Finish",
  "Not Sure",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-kanit text-[15px] text-[#1e1e24] placeholder:text-black/35 focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15";

const labelClass = "font-montserrat text-[14px] font-semibold text-[#1e1e24]";

export default function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleNeed(option: string) {
    setNeeds((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      company: formData.get("company"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      location: formData.get("location"),
      needs,
      productName: formData.get("productName"),
      industry: formData.get("industry"),
      productSize: formData.get("productSize"),
      quantity: formData.get("quantity"),
      material: formData.get("material"),
      printing: formData.get("printing"),
      deliveryDate: formData.get("deliveryDate"),
      notes: formData.get("notes"),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[28px] border border-black/10 px-8 py-20 text-center">
        <h3 className="font-montserrat text-[26px] font-bold text-[#1e1e24]">
          Thanks — your request is in!
        </h3>
        <p className="mt-3 max-w-sm font-kanit text-[16px] leading-7 text-[#4c4c5c]">
          Our team will review your requirements and get back to you shortly
          with a free quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-black/10 p-8 md:p-10"
    >
      {/* 1. Basic Information */}
      <div>
        <span className="font-kanit text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
          01 · Basic Information
        </span>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Full Name *</span>
            <input required type="text" name="fullName" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Company / Brand Name</span>
            <input type="text" name="company" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Mobile Number *</span>
            <input required type="tel" name="mobile" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Email Address</span>
            <input type="email" name="email" className={inputClass} />
          </label>

          <label className="block sm:col-span-2">
            <span className={labelClass}>City / State *</span>
            <input required type="text" name="location" className={inputClass} />
          </label>
        </div>
      </div>

      <div className="my-10 h-px bg-black/10" />

      {/* 2. What do you need */}
      <div>
        <span className="font-kanit text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
          02 · What Do You Need? *
        </span>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {needOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 rounded-xl border border-black/10 px-4 py-3 font-kanit text-[15px] text-[#1e1e24] transition hover:border-[#ff6b35]/50"
            >
              <input
                type="checkbox"
                checked={needs.includes(option)}
                onChange={() => toggleNeed(option)}
                className="h-4 w-4 accent-[#ff6b35]"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="my-10 h-px bg-black/10" />

      {/* 3. Product Details */}
      <div>
        <span className="font-kanit text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
          03 · Product Details
        </span>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Product Name</span>
            <input type="text" name="productName" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Industry</span>
            <select name="industry" className={inputClass} defaultValue="">
              <option value="" disabled>
                Select industry
              </option>
              {industryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className={labelClass}>Product Size / Weight</span>
            <input type="text" name="productSize" className={inputClass} />
          </label>
        </div>
      </div>

      <div className="my-10 h-px bg-black/10" />

      {/* 4. Project Requirements */}
      <div>
        <span className="font-kanit text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
          04 · Project Requirements
        </span>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Required Quantity *</span>
            <input required type="text" name="quantity" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Preferred Material (Optional)</span>
            <input type="text" name="material" className={inputClass} />
          </label>

          <label className="block">
            <span className={labelClass}>Printing Requirement</span>
            <select name="printing" className={inputClass} defaultValue="">
              <option value="" disabled>
                Select option
              </option>
              {printingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={labelClass}>Expected Delivery Date</span>
            <input type="date" name="deliveryDate" className={inputClass} />
          </label>
        </div>
      </div>

      <div className="my-10 h-px bg-black/10" />

      {/* 5. Additional Information */}
      <div>
        <span className="font-kanit text-[13px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
          05 · Additional Information
        </span>

        <label className="mt-5 block">
          <span className={labelClass}>Anything you&apos;d like us to know?</span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Special finishing, budget, dimensions, references, etc."
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-10 w-full rounded-full bg-[#ff6b35] px-8 py-4 text-center font-montserrat text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#ff5722] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {submitting ? "Submitting..." : "Get My Free Quote"}
      </button>

      {error && (
        <p className="mt-4 text-center font-kanit text-[14px] text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}
