import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { servicesData } from "@/lib/content";
import bannerImage from '../../../public/our-services-banner.jpg'
import Link from "next/link";


export default function ServicesSection() {
  return (

      <section className="mx-auto max-w-[1300px] px-6 md:px-8 mt-14">
          <SectionHeader title="Our services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData?.slice(0, 3)?.map(({ icon, title, about }) => {
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
         <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden mt-10">
         <Image
          src={bannerImage}
          alt="Print X workshop"
          fill
          className="object-cover"
        />
      </div>
      </section>

  );
}
