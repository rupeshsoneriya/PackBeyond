"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/content";

const AUTOPLAY_MS = 4000;
const TRANSITION_MS = 500;
const DESKTOP_ITEM_WIDTH_PERCENT = 62.5;
const MOBILE_ITEM_WIDTH_PERCENT = 100;
const SWIPE_THRESHOLD_PX = 50;

export default function TestimonialsSection() {
  const slides = testimonials;
  const total = slides.length;
  const [paused, setPaused] = useState(false);

  // client-only width init -> prevents hydration mismatch
  const [itemWidthPercent, setItemWidthPercent] = useState(MOBILE_ITEM_WIDTH_PERCENT);
  useEffect(() => {
    const updateWidth = () => {
      const isDesktop = window.innerWidth >= 1024;
      setItemWidthPercent(isDesktop ? DESKTOP_ITEM_WIDTH_PERCENT : MOBILE_ITEM_WIDTH_PERCENT);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // build clones for seamless infinite loop: [last, ...slides, first]
  const slidesWithClones = total > 0 ? [slides[total - 1], ...slides, slides[0]] : [];
  const [internalIndex, setInternalIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  // isAnimatingRef is the fix for the "disappearing slide" bug: it blocks
  // overlapping next/prev/autoplay calls so internalIndex can never race
  // past the clone bounds while a transition (or the invisible reset jump)
  // is still in flight.
  const isAnimatingRef = useRef(false);
  const isJumpingRef = useRef(false);
  const autoplayRef = useRef(null);
  const safetyTimeoutRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);

  const clearSafetyTimeout = () => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
  };

  // Safety net: if transitionend ever fails to fire (backgrounded tab,
  // interrupted transition, reduced-motion, etc.) release the lock anyway
  // so the carousel can never get permanently stuck.
  const armSafetyRelease = () => {
    clearSafetyTimeout();
    safetyTimeoutRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, TRANSITION_MS + 150);
  };

  const step = useCallback(
    (direction) => {
      if (total <= 1 || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setWithTransition(true);
      setInternalIndex((i) => i + direction);
      armSafetyRelease();
    },
    [total]
  );

  useEffect(() => {
    if (paused || total <= 1) return;

    autoplayRef.current = window.setInterval(() => {
      step(1);
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [paused, total, step]);

  const onTransitionEnd = () => {
    clearSafetyTimeout();

    if (isJumpingRef.current) {
      isJumpingRef.current = false;
      isAnimatingRef.current = false;
      return;
    }

    if (internalIndex === slidesWithClones.length - 1) {
      isJumpingRef.current = true;
      setWithTransition(false);
      setInternalIndex(1);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setWithTransition(true);
          isJumpingRef.current = false;
          isAnimatingRef.current = false;
        })
      );
      return;
    }

    if (internalIndex === 0) {
      isJumpingRef.current = true;
      setWithTransition(false);
      setInternalIndex(slidesWithClones.length - 2);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setWithTransition(true);
          isJumpingRef.current = false;
          isAnimatingRef.current = false;
        })
      );
      return;
    }

    isAnimatingRef.current = false;
  };

  const prev = () => step(-1);
  const next = () => step(1);

  const goTo = (realIdx) => {
    if (total <= 1 || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setInternalIndex(realIdx + 1);
    armSafetyRelease();
  };

  // compute current real slide index for dots / aria
  const currentRealIndex = total ? ((internalIndex - 1 + total) % total) : 0;

  // --- basic swipe support for touch devices ---
  const onTouchStart = (e) => {
    setPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const onTouchMove = (e) => {
    if (touchStartXRef.current === null) return;
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
  };

  const onTouchEnd = () => {
    setPaused(false);
    if (Math.abs(touchDeltaXRef.current) > SWIPE_THRESHOLD_PX) {
      if (touchDeltaXRef.current < 0) next();
      else prev();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-16 sm:mt-20 lg:mt-28 overflow-hidden">
      <SectionHeader title="Love by top creators" />

      <div
        className="relative mt-10 sm:mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="overflow-visible"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
              const isCurrent = isReal && idx - 1 === currentRealIndex;
              return (
                <div
                  key={`${testimonial?.name ?? "clone"}-${idx}`}
                  className="box-border shrink-0 pr-5 sm:pr-6 lg:pr-5"
                  style={{ width: `${itemWidthPercent}%` }}
                  aria-hidden={!isCurrent}
                >
                  <div className="min-w-0 grid grid-cols-1 md:grid-cols-[minmax(0,405px)_1fr] items-center gap-6 sm:gap-8 lg:gap-10">
                    <div className="relative w-full md:w-[405px] aspect-[450/480] overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-2xl bg-neutral-100 shrink-0 mx-auto md:mx-0 max-w-[340px] sm:max-w-[380px] md:max-w-none">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        sizes="(min-width: 1024px) 405px, (min-width: 768px) 40vw, 80vw"
                        priority={idx === internalIndex}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="w-full min-w-0 max-w-[320px] mx-auto md:mx-0 py-2 sm:py-4 flex flex-col justify-center text-center md:text-left items-center md:items-start">
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

                      <h3 className="text-[19px] sm:text-[22px] lg:text-[24px] leading-[1.3] font-semibold tracking-[-0.03em] break-words text-neutral-900">
                        &ldquo;{testimonial.quote}&rdquo;
                      </h3>

                      <div className="mt-4 sm:mt-5">
                        <p className="text-[16px] sm:text-[18px] font-bold text-neutral-900">{testimonial.name}</p>
                        <p className="text-[14px] sm:text-[16px] text-neutral-500">{testimonial.role}</p>
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
          disabled={total <= 1}
          className="absolute left-2 sm:left-4 top-[38%] sm:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center hover:border-black hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          disabled={total <= 1}
          className="absolute right-2 sm:right-4 top-[38%] sm:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center hover:border-black hover:scale-105 transition-all disabled:opacity-40 disabled:hover:scale-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-10 sm:mt-14">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show testimonial slide ${i + 1} of ${total}`}
            aria-pressed={i === currentRealIndex}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === currentRealIndex ? "w-8 sm:w-10 bg-black" : "w-2 sm:w-2.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}