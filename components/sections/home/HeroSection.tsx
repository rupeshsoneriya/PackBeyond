import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

import { heroBadges } from "@/lib/content";

import rightBoxImage from "../../../public/Hero-section.png";
import BottomImage from "../../../public/Hero-section-Hello-image.png";
import SectionBackgroundImage from "../../../public/Hero-section-bg.jpeg";

export default function HeroSection() {
  return (
<section
  className="relative overflow-visible  lg:pb-32"
  style={{
    backgroundImage: `url(${SectionBackgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-8 pt-8">
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[39%_61%]">
      {/* Left Content */}
      <div className="text-center lg:max-w-[30rem] lg:text-left">
        <h1
          className="text-[34px] leading-[1.1] sm:text-[42px] md:text-[50px] lg:text-[60px]"
          style={{
            fontWeight: 600,
            fontFamily: "Switzer, sans-serif",
          }}
        >
          Packaging that evolves your brand
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-black/55 lg:mx-0">
          Custom packaging, product labels, premium boxes and complete brand
          printing solutions.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
      <div className="relative z-10 mx-auto w-full max-w-[780px] aspect-[6/5] overflow-hidden rounded-[24px] lg:mb-[-5rem]">
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
  <div className="relative mt-10 lg:absolute lg:left-0 lg:right-0 lg:top-[calc(100%_-_7rem)] lg:mt-0 w-full">
    <div className="relative mx-auto w-full">
      <div className="bg-amber-400 py-10 md:py-12 lg:py-16 shadow-sm shadow-amber-300/30">
        <div className="brand-list mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-5 px-5 sm:gap-8 md:gap-10 lg:gap-5">
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
                    className="h-[32px] w-auto md:h-[36px]"
                  />
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span className="text-[#22c55e]">✔</span>

                    <span className="font-montserrat text-[14px] md:text-[15px] font-semibold tracking-wide text-white">
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
      <div className="absolute left-[30px] top-[-135px] hidden lg:block h-[330px] w-[330px] -rotate-6">
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