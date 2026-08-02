import PageHero from "@/components/PageHero";
import {
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/content";


export default function ServicesPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Our services"
        subtitle="More Than Packaging. We Build Brand Experiences."
        content="Every box, every label and every package is crafted to improve shelf presence, increase customer trust and enhance your brand value. "
         
         />

      <section className="mx-auto max-w-[1300px] px-6 md:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData?.map(({ icon, title, about }) => {
            const Icon = icon;

            return (
              <div
                key={title}
                className="border border-black/10 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
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
