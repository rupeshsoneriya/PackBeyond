import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {  productsData } from "@/lib/content";

export default function SolutionsSection() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 lg:px-8 mt-28">
      {/* Heading */}
      <div className="text-center max-w-[600px] mx-auto mb-10">
        <h2
          className="text-[42px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1e1e24]"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          Packaging solutions
        </h2>

        <p
          className="mt-5 text-[18px] leading-[1.6] text-[#666666]"
          style={{ fontFamily: "Switzer, sans-serif" }}
        >
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit{" "}
          <span className="whitespace-nowrap">anim laborum.</span>
        </p>
      </div>

      {/* Cards */}
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
  {productsData?.slice(0, 3).map((product) => (
    <Link
      key={product.slug}
      href={product.slug ? `/products/${product.slug}` : "#"}
      className="group block"
    >
      {/* Card */}
      <div className="overflow-hidden rounded-[30px] bg-[#f5f5f5] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

        {/* Image */}
        <div className="relative aspect-[0.82] overflow-hidden">
          <Image
            src={product.productImage}
            alt={product.title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Price Badge */}
          <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 shadow-md">
            <span
              className="text-[15px] font-medium text-[#1e1e24]"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              {product.price}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between px-2 py-4">
          <h3
            className="text-[28px] font-semibold text-[#1e1e24] transition-colors duration-300 group-hover:text-[#ff6b35]"
            style={{ fontFamily: "Switzer, sans-serif" }}
          >
            {product.title}
          </h3>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d9d9d9] bg-white transition-all duration-300 group-hover:border-[#ff6b35] group-hover:bg-[#ff6b35]">
            <ArrowUpRight
              size={20}
              className="transition-all duration-300 group-hover:rotate-45 group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      {/* Button */}
      <div className="mt-16 flex justify-center">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-black/85 active:scale-95"
          >
            Customize Now
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 ease-out hover:scale-105 hover:bg-black/5 active:scale-95"
          >
            Browse All Services
          </Link>
        </div>

      </div>
    </section>
  );
}