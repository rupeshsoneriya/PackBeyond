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
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 font-montserrat text-[16px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1e1e24]"
      >
        Customize Now
      </Link>

      <Link
        href="/services"
        className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 font-montserrat text-[16px] font-semibold text-[#1e1e24] transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
      >
        Browse All Services
      </Link>
    </div>
  );

  return (
    <div
      className={`mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between items-center  ${isCenter ? "items-center text-center" : ""
        }`}
    >
      {/* Left Content */}
      <div className={isCenter ? "max-w-3xl" : "max-w-2xl"}>
        <h2 className="mt-3 font-montserrat text-[32px] font-bold leading-[1.2] text-[#1e1e24] md:text-[48px]">
          {title}
        </h2>

        <p className="mt-5 font-kanit text-[18px] leading-[1.7] text-[#4c4c5c]">
          {subtitle ??
            "Every box, every label, and every package is crafted to improve shelf presence, increase customer trust, and enhance your brand value. We deliver premium packaging solutions tailored to your business needs."}
        </p>
      </div>

      {/* Right Buttons */}
      <div className={isCenter ? "mt-4" : ""}>
        {children ?? defaultActions}
      </div>
    </div>
  );
}