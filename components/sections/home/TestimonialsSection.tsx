"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

const AUTOPLAY_MS = 4000;
const TRANSITION_MS = 500;
const DESKTOP_ITEM_WIDTH_PERCENT = 62.5;
const MOBILE_ITEM_WIDTH_PERCENT = 100;

export default function TestimonialsSection() {
  const slides = testimonials;
  const total = slides.length;
  const [paused, setPaused] = useState(false);

  // client-only width init -> prevents hydration mismatch
  const [itemWidthPercent, setItemWidthPercent] = useState(MOBILE_ITEM_WIDTH_PERCENT);
  useEffect(() => {
    const updateWidth = () =>
      setItemWidthPercent(window.innerWidth >= 1024 ? DESKTOP_ITEM_WIDTH_PERCENT : MOBILE_ITEM_WIDTH_PERCENT);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // build clones for seamless infinite loop: [last, ...slides, first]
  const slidesWithClones = total > 0 ? [slides[total - 1], ...slides, slides[0]] : [];
  const [internalIndex, setInternalIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const autoplayRef = useRef<number | null>(null);
  const isJumpingRef = useRef(false);

  useEffect(() => {
    if (paused || total <= 1) return;

    autoplayRef.current = window.setInterval(() => {
      setInternalIndex((i) => i + 1);
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [paused, total]);

  const onTransitionEnd = () => {
    if (isJumpingRef.current) {
      isJumpingRef.current = false;
      return;
    }

    if (internalIndex === slidesWithClones.length - 1) {
      isJumpingRef.current = true;
      setWithTransition(false);
      setInternalIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }

    if (internalIndex === 0) {
      isJumpingRef.current = true;
      setWithTransition(false);
      setInternalIndex(slidesWithClones.length - 2);
      requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)));
    }
  };

  const prev = () => {
    setInternalIndex((i) => i - 1);
  };

  const next = () => {
    setInternalIndex((i) => i + 1);
  };

  const goTo = (realIdx: number) => {
    setWithTransition(true);
    setInternalIndex(realIdx + 1);
  };

  // compute current real slide index for dots / aria
  const currentRealIndex = total ? ((internalIndex - 1 + total) % total) : 0;

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-28 overflow-hidden">
      <SectionHeader title="Love by top creators" />

      <div
        className="relative mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-visible">
          <div
            onTransitionEnd={onTransitionEnd}
            className="flex"
            style={{
              transform: `translateX(-${internalIndex * itemWidthPercent}%)`,
              transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : "none",
            }}
          >
            {slidesWithClones.map((testimonial, idx) => {
              const isReal = idx > 0 && idx < slidesWithClones.length - 1;
              return (
                <div
                  key={`${testimonial?.name ?? "clone"}-${idx}`}
                  className="box-border shrink-0 pr-8 lg:pr-5"
                  style={{ width: `${itemWidthPercent}%` }}
                  aria-hidden={!isReal || (isReal && (idx - 1) !== currentRealIndex ? true : false)}
                >
                  <div className="min-w-0 grid grid-cols-1 md:grid-cols-[450px_1fr] items-center gap-10 lg:gap-0">
                    <div className="relative w-full md:w-[405px] aspect-[450/480] md:h-[427px] overflow-hidden rounded-[40px] shadow-2xl bg-neutral-100 shrink-0">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        priority={idx === internalIndex}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="w-full min-w-0 max-w-[300px] lg:max-w-[300px] py-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-[#F8B400] mb-3">
                        {testimonial.ratingIcon ? (
                          <Image
                            src={testimonial.ratingIcon}
                            alt={`${testimonial.name} rating`}
                            width={120}
                            height={20}
                            className="object-contain"
                            priority={idx === internalIndex}
                          />
                        ) : (
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star key={s} size={20} fill="#F8B400" strokeWidth={0} />
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="text-[24px] lg:text-[24px] leading-[1.2] font-semibold tracking-[-0.03em] break-words text-neutral-900">
                        &ldquo;{testimonial.quote}&rdquo;
                      </h3>

                      <div className="mt-5">
                        <p className="text-[18px] lg:text-[18px] font-bold text-neutral-900">{testimonial.name}</p>
                        <p className="text-[16px] lg:text-[16px] text-neutral-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center hover:border-black hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center hover:border-black hover:scale-105 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-14">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show testimonial slide ${i + 1} of ${total}`}
            aria-pressed={i === currentRealIndex}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === currentRealIndex ? "w-10 bg-black" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"}`}
          />
        ))}
      </div>
    </section>
  );
}