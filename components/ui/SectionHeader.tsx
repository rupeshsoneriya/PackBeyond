import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  children,
}: Props) {
  const isCenter = align === "center";

  const defaultActions = (
    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-center font-montserrat text-[15px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1e1e24] md:px-7 md:py-3.5 md:text-[16px]"
      >
        Customize Now
      </Link>

      <Link
        href="/services"
        className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-center font-montserrat text-[15px] font-semibold text-[#1e1e24] transition-all duration-300 hover:scale-105 hover:bg-neutral-100 md:px-7 md:py-3.5 md:text-[16px]"
      >
        Browse All Services
      </Link>
    </div>
  );

  return (
    <div
      className={`mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between ${
        isCenter
          ? "items-center text-center"
          : "items-center lg:items-end"
      }`}
    >
      {/* Left Content */}
      <div className={isCenter ? "max-w-3xl" : "max-w-2xl"}>
        <h2 className="mt-3 font-montserrat text-[30px] font-bold leading-[1.2] text-[#1e1e24] sm:text-[38px] md:text-[44px] lg:text-[48px]">
          {title}
        </h2>

        <p className="mt-4 font-kanit text-[16px] leading-7 text-[#4c4c5c] sm:text-[17px] md:mt-5 md:text-[18px]">
          {subtitle ??
            "Every box, every label, and every package is crafted to improve shelf presence, increase customer trust, and enhance your brand value. We deliver premium packaging solutions tailored to your business needs."}
        </p>
      </div>

      {/* Right Buttons */}
      <div
        className={`w-full lg:w-auto ${
          isCenter ? "flex justify-center mt-2 lg:mt-4" : "flex justify-center lg:justify-end"
        }`}
      >
        {children ?? defaultActions}
      </div>
    </div>
  );
}