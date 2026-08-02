"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Wrench, Package, Layers } from "lucide-react";
import { productsData } from "@/lib/content";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const SPEC_ICONS = [Clock, Wrench, Package, Layers];

export default function ProductDetail({
  data,
}: {
  data: (typeof productsData)[number];
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const specEntries = Object.entries(data.specifications).map(
    ([key, value]) => ({
      label: key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase())
        .trim(),
      value,
    })
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: product image */}
        <div className="overflow-hidden rounded-3xl bg-neutral-100">
          <div className="relative aspect-square w-full">
            <Image
              src={data.productImage}
              alt={data.title}
              fill
              className="object-fill"
            />
          </div>
        </div>

        {/* Right: title, price, cart, specs */}
        <div>
          <h1
            className="text-[48px] leading-[1.15] font-semibold text-neutral-900"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            {data.title}
          </h1>
          <p
            className="mt-3 max-w-md text-[17px] leading-[1.4] font-normal text-[#4c4c5c]"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            {data.shortDescription}
          </p>

          {/* Price */}
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-[26px] font-semibold text-neutral-900">
              {data.price}
            </span>
            {data.oldPrice && (
              <span className="text-[18px] text-neutral-400 line-through">
                {data.oldPrice}
              </span>
            )}
          </div>

          {/* Select amount */}
          <div className="mt-4">
            <select className="w-full appearance-none rounded-full border border-neutral-200 bg-white px-5 py-3 text-[15px] text-neutral-600 focus:outline-none">
              <option>Select amount</option>
            </select>
          </div>

          {/* Add to cart */}
          <button className="mt-3 w-full rounded-full bg-neutral-900 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800">
            Add to Cart
          </button>

          {/* What's included? spec list */}
          <div className="mt-8">
            <h3 className="text-[16px] font-semibold text-neutral-900">
              What&apos;s included?
            </h3>
            <ul className="mt-4 space-y-3">
              {specEntries.map(({ label, value }, i) => {
                const Icon = SPEC_ICONS[i % SPEC_ICONS.length];
                return (
                  <li
                    key={label}
                    className="flex items-center gap-3 text-[15px] text-neutral-600"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-100">
                      <Icon size={15} className="text-neutral-500" />
                    </span>
                    <span>
                      <span className="font-medium text-neutral-900">
                        {label}:
                      </span>{" "}
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* About the services */}
      <section className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[280px_1fr]">
        <h2 className="text-[30px] font-semibold leading-[1.25] text-neutral-900">
          {data.about.title}
        </h2>
        <div className="space-y-4 text-[16px] leading-[1.5] text-[#4c4c5c]">
          <p>{data.about.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1140px] border-t border-neutral-100" />

      {/* What will you get? */}
      <section className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[280px_1fr]">
        <h2 className="text-[30px] font-semibold leading-[1.25] text-neutral-900">
          {data.benefits.title}
        </h2>
        <ul className="space-y-3">
          {data.benefits.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[16px] leading-[1.5] text-[#4c4c5c]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery: 1 big image + 2 stacked/side-by-side small images */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="mx-auto max-w-[1140px] px-6 py-10">
          <div
            className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            <Image
              src={data.gallery[0]}
              alt={`${data.title} example 1`}
              fill
              className="object-cover  transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
            />
          </div>

          {data.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.gallery.slice(1, 3).map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-neutral-100"
                  onClick={() => {
                    setIndex(i + 1);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={src}
                    alt={`${data.title} example ${i + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            plugins={[Zoom, Thumbnails]}
            slides={data.gallery.map((image) => ({ src: image }))}
          />
        </section>
      )}

      {/* More products */}
      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[28px] font-semibold text-neutral-900">
            More products
          </h2>
          <Link
            href="/products"
            className="rounded-full border border-neutral-200 px-4 py-2 text-[14px] font-medium text-neutral-700 hover:bg-neutral-50"
          >
            Browse all products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsData
            ?.filter(({ slug }) => slug !== data.slug)
            .slice(0, 3)
            ?.map(({ slug, title, price, productImage }) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={productImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-105"
                  />
                </div>

                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-[13px] font-medium text-neutral-900">
                  {price}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-medium text-neutral-900">
                  {title}
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}