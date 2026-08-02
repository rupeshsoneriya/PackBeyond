"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { locations } from "@/lib/content";

export default function LocationSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="font-kanit text-[15px] font-semibold uppercase tracking-[0.25em] text-[#ff6b35]">
            CONTACT
          </span>

          <h2 className="mt-3 font-montserrat text-[52px] font-bold text-[#1e1e24]">
            Our Locations
          </h2>
        </div>

        <div className="relative h-[620px]">
          {/* Image Slider */}
          <div className="absolute left-0 top-0 h-[500px] w-[68%] overflow-hidden rounded-[30px]">
            <Swiper
              loop
              slidesPerView={1}
              speed={700}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.realIndex)
              }
              className="h-full w-full"
            >
              {locations.map((location) => (
                <SwiperSlide key={location.city}>
                  <div className="relative h-full w-full">
                    <Image
                      src={location.image}
                      alt={location.city}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Fixed Card */}
          <div className="absolute right-0 top-10 z-20 w-[42%] rounded-[28px] border border-[#ececec] bg-white p-[25px_40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <h3 className="font-montserrat text-[42px] font-bold text-[#1e1e24]">
              {locations[activeIndex].city}
            </h3>

            <p className="mt-4 font-kanit text-[15px] leading-7 text-[#4c4c5c]">
              {locations[activeIndex].description}
            </p>

            <div className="my-6 h-px bg-[#ececec]" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-[#ff6b35]"
                />

                <div>
                  <h4 className="font-montserrat text-[16px] font-semibold">
                    Address
                  </h4>

                  <p className="mt-2 whitespace-pre-line font-kanit text-[15px] leading-7 text-[#4c4c5c]">
                    {locations[activeIndex].address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  size={22}
                  className="mt-1 shrink-0 text-[#ff6b35]"
                />

                <div>
                  <h4 className="font-montserrat text-[16px] font-semibold">
                    Phone
                  </h4>

                  <p className="mt-2 font-kanit text-[15px] text-[#4c4c5c]">
                    {locations[activeIndex].phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  size={22}
                  className="mt-1 shrink-0 text-[#ff6b35]"
                />

                <div>
                  <h4 className="font-montserrat text-[16px] font-semibold">
                    Email
                  </h4>

                  <p className="mt-2 font-kanit text-[15px] text-[#4c4c5c]">
                    {locations[activeIndex].email}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] transition hover:bg-[#f5f5f5]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e1e24] text-white transition hover:bg-[#ff6b35]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}