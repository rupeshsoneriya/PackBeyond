"use client";

import { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";
type Tab = "about" | "includes" | "faqs";

const TABS: { key: Tab; label: string }[] = [
    { key: "about", label: "About" },
    { key: "includes", label: "What's included?" },
    { key: "faqs", label: "FAQs" },
];

export default function ServiceDetail({
    data,
}: {
    data: (typeof servicesData)[number];
}) {
    const [activeTab, setActiveTab] = useState<Tab>("faqs");
    const [open, setOpen] = useState(false);
        const [index, setIndex] = useState(0);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
                <div>
                    <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                        <Image src={data.icon.src} alt="" width={20} height={20} />
                    </div>
                    <h1
                        className="text-[55px] leading-[1.25] font-semibold text-neutral-900"
                        style={{ fontFamily: "Switzer, sans-serif" }}
                    >
                        {data.title}
                    </h1>
                    <p
                        className="mt-3 max-w-md text-[18px] leading-[1.25] font-normal text-[#4c4c5c]"
                        style={{ fontFamily: "Switzer, sans-serif" }}
                    >
                        {data.shortDescription}
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl ">
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-contain p-0"
                        />
                    </div>
                </div>
            </section>

            {/* Tabs + tab content */}
            <section className="mx-auto max-w-[1200px] px-6 ">
                <nav className="flex items-center justify-center gap-8 border-b border-neutral-200">
                    {TABS.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`relative -mb-px py-1 text-[20px] transition-colors ${activeTab === tab.key
                                    ? "font-medium text-neutral-900"
                                    : "text-neutral-500 hover:text-neutral-700"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.key && (
                                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-neutral-900" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="grid grid-cols-1 gap-16 pt-12 lg:grid-cols-[minmax(0,760px)_1fr]">
                    {/* Left: dynamic content per tab */}
                    <div>
                        {activeTab === "about" && (
                            <div>
                                <h2 className="text-center text-[40px] font-semibold leading-[1.25em] font-montserrat text-neutral-900">
                                    {data.about.title}
                                </h2>
                                <div className="mt-5 space-y-4 text-[18px] font-normal leading-[1.25em] font-kanit text-[#4c4c5c]">
                                    {data.about.description.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "includes" && (
                            <div>
                                <h2 className="text-center text-[40px] font-semibold leading-[1.25em] font-montserrat text-neutral-900">
                                    {data.includes.title}
                                </h2>
                                <ul className="mt-5 space-y-3 text-[15px] text-neutral-500">
                                    {data.includes.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 font-kanit text-[18px] font-normal leading-[1.25em] text-[#4c4c5c]"
                                        >
                                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                                            <span className="flex items-start gap-3 font-kanit text-[18px] font-normal leading-[1.25em] text-[#4c4c5c]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "faqs" && (
                            <div>
                                <h2 className="text-center text-[40px] font-semibold leading-[1.25em] font-montserrat text-neutral-900">
                                    {data.faqs && data.faqs.length > 0 ? "FAQs" : ""}
                                </h2>
                                <div className="mt-5 space-y-5">
                                    {data.faqs.map((faq, i) => (
                                        <div key={i} className="border-b border-neutral-100 pb-3">
                                            <p className="font-montserrat text-[18px] font-medium text-[#4c4c5c] leading-[1.25em]">
                                                {faq.question}
                                            </p>
                                            <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: benefits summary card, contextual regardless of tab */}
                    <aside className="hidden lg:block">
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                            <h3 className="font-montserrat text-[15px] font-semibold leading-[1.25em] text-neutral-900">
                                {data.benefits.title}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {data.benefits.items.slice(0, 6).map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 font-kanit text-[18px] font-normal leading-[1.25em] text-[#4c4c5c]"
                                    >
                                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* Gallery, mimicking the 2-large + stacked-small layout in the reference */}
            {data.gallery && data.gallery.length > 0 && (
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-[1fr_1fr_0.6fr] sm:h-[400px]">

          {/* First Image */}
          <div
            className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-auto sm:h-full cursor-pointer"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            <Image
              src={data.gallery[0]}
              alt={`${data.title} example 1`}
              fill
              sizes="(min-width:640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
          </div>

          {/* Second Image */}
          <div
            className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-auto sm:h-full cursor-pointer"
            onClick={() => {
              setIndex(1);
              setOpen(true);
            }}
          >
            <Image
              src={data.gallery[1]}
              alt={`${data.title} example 2`}
              fill
              sizes="(min-width:640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
          </div>

          {/* Third & Fourth */}
          <div className="col-span-2 grid grid-rows-2 gap-4 sm:col-span-1 sm:h-full">
            {data.gallery.slice(2, 4).map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer"
                onClick={() => {
                  setIndex(i + 2);
                  setOpen(true);
                }}
              >
                <Image
                  src={src}
                  alt={`${data.title} example ${i + 3}`}
                  fill
                  sizes="(min-width:640px) 20vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        plugins={[Zoom, Thumbnails]}
        slides={data.gallery.map((image) => ({
          src: image,
        }))}
      />
            </section>
            <section className="mx-auto max-w-[1300px] px-6 md:px-8 mt-14 mb-30">
                <SectionHeader title="Our More services" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData ?.filter(({ slug }) => slug !== data.slug).slice(0, 4)?.map(({ icon, title, about ,slug }) => {
                        const Icon = icon;

                        return (
                            <div
                                key={title}
                                className="rounded-2xl border border-black/10 pt-[30px] pr-[20px] pb-[40px] pl-[26px] transition-all hover:-translate-y-0.5 hover:shadow-md"              >
                                <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center mb-5">
                                    {typeof Icon === "function" ? (
                                        <Icon size={20} className="text-brand" />
                                    ) : (
                                        <Image
                                            src={icon}
                                            alt={title}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    )}
                                </div>

                                <h3
                                    className="mb-2 text-[24px] font-semibold leading-[1.25] text-[#1E1E24]"
                                    style={{ fontFamily: "Switzer, sans-serif" }}
                                >
                                    {title}
                                </h3>
                                <p className="text-[16px] font-normal font-[Switzer,sans-serif] leading-[1.25] text-black/55 mb-2 line-clamp-2">
                                    {about?.description}
                                </p>


                                <Link
                                    href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium"
                                >
                                    Learn More
                                    <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}