import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

import { heroBadges } from "@/lib/content";

import rightBoxImage from "../../../public/Hero-section-right-image.png";
import BottomImage from "../../../public/Hero-section-Hello-image.png";
import SectionBackgroundImage from "../../../public/Hero-section-bg.jpeg";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-visible pb-32"
      style={{
        backgroundImage: `url(${SectionBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-6 md:px-8 pt-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[39%_61%]">
          {/* Left Content */}
          <div className="text-center lg:max-w-[30rem] lg:text-left">
            <h1
              className="text-[2rem] leading-[1.1] sm:text-[2.4rem] lg:text-[60px]"
              style={{
                fontWeight: 600,
                fontFamily: "Switzer, sans-serif",
              }}
            >
              Packaging that evolves your brand
            </h1>

            <p className="mx-auto mt-5 max-w-md text-black/55 lg:mx-0">
              Custom packaging, product labels, premium boxes and complete
              brand printing solutions.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-black/85"
              >
                Get Free Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-black/15 px-6 py-3.5 text-center text-sm font-medium transition-colors hover:bg-black/5"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 mb-[-5rem] aspect-[6/5] w-full overflow-hidden rounded-[24px]">
            <Image
              src={rightBoxImage}
              alt="Packaging"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Badge Section */}
      <div className="absolute left-0 right-0 top-[calc(100%_-_7rem)] w-full">
        <div className="relative mx-auto w-full">
          <div className="bg-amber-400 py-18 shadow-sm shadow-amber-300/30">
            <div className="brand-list mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-6 px-8 sm:gap-10 md:gap-14">
              {heroBadges.map(({ icon, label }) => {
                const BadgeIcon =
                  icon as ComponentType<{
                    size?: number;
                    className?: string;
                  }>;

                return (
                  <span
                    key={label}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    {typeof icon === "function" ? (
                      <BadgeIcon
                        size={36}
                        className="h-[36px] w-[139px]"
                      />
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                        <span className="text-[#22c55e]">✔</span>

                        <span className="font-montserrat text-[15px] font-semibold tracking-wide text-white">
                          {label}
                        </span>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="absolute left-[30px] top-[-200px] hidden h-[330px] w-[330px] -rotate-6 md:block">
            <Image
              src={BottomImage}
              alt="Decoration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}