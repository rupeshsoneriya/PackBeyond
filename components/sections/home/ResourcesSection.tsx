"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { resources } from "@/lib/content";
import Link from "next/link";

export default function ResourcesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const goToIndex = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const total = cards.length;
    if (total === 0) return;

    const wrapped = ((index % total) + total) % total;
    indexRef.current = wrapped;

    const target = cards[wrapped];
    const containerLeft = el.scrollLeft;
    const targetLeft = target.offsetLeft;

    el.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    if (containerLeft === targetLeft) {
      el.scrollLeft = targetLeft;
    }
  }, []);

  const scrollByCard = useCallback(
    (dir: 1 | -1) => {
      goToIndex(indexRef.current + dir);
    },
    [goToIndex]
  );

  // Keep indexRef roughly in sync if the person manually swipes/scrolls
  const handleManualScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - el.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    indexRef.current = closest;
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleManualScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleManualScroll);
  }, [handleManualScroll]);

  useEffect(() => {
    if (isHovered) return;

    const interval = window.setInterval(() => {
      scrollByCard(1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isHovered, scrollByCard]);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 mt-24 max-w-[1440px]">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Read our latest resources</h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth", overscrollBehaviorX: "contain" }}
        >
          {resources.map((resource, index) => (
            <div
              key={resource.href ?? `${resource.title}-${resource.date}-${index}`}
              data-card="true"
              className="group shrink-0 basis-[100%] sm:basis-[46%] lg:basis-[31%] xl:basis-[30%] snap-start"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={resource.img}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3
                className="mt-3 text-[22px] sm:text-[24px] lg:text-[28px] font-semibold leading-[1.25] text-[#1E1E24] line-clamp-2"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                {resource.title}
              </h3>
              <div className="mt-8 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[#1E1E24]"
                    style={{ fontFamily: "Switzer, sans-serif" }}
                  >
                    {resource.category}
                  </span>

                  <div className="w-10 h-px bg-[#D9D9D9]" />

                  <span
                    className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#6A6A6A]"
                    style={{ fontFamily: "Switzer, sans-serif" }}
                  >
                    {resource.date}
                  </span>
                </div>

                {/* Arrow Button */}
                <div
                  className="
      w-12
      h-12
      rounded-full
      border
      border-[#E5E5E5]
      flex
      items-center
      justify-center
      transition-all
      duration-300
      group-hover:bg-black
      group-hover:border-black
    "
                >
                  <span className="text-[18px] transition-all duration-300 group-hover:text-white group-hover:-rotate-45">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-0 top-[38%] -translate-y-1/2 -translate-x-1/2 items-center justify-center w-11 h-11 rounded-full border border-black/15 bg-white shadow-sm transition hover:bg-black hover:text-white hover:border-black z-10"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next slide"
          className="hidden md:flex absolute right-0 top-[38%] -translate-y-1/2 translate-x-1/2 items-center justify-center w-11 h-11 rounded-full border border-black/15 bg-white shadow-sm transition hover:bg-black hover:text-white hover:border-black z-10"
        >
          →
        </button>
      </div>

      <div className="flex justify-center mt-12">
    <Link
  href="/services"
  className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 ease-out hover:scale-105 hover:bg-black/5 active:scale-95"
>
  Browse All Services
</Link>
      </div>
    </section>
  );
}