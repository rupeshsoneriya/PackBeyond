import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredServices } from "@/lib/content";

export default function FeaturedServicesSection() {
  return (
    <section className="bg-[#f4f4f6]">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8 pt-16 md:pt-[100px] md:pb-[100px] pb-16">
        <SectionHeader title="Featured services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl overflow-hidden border border-black/10 transition-shadow duration-300 hover:shadow-lg"
            >
                  <div className="flex items-center justify-between px-5 py-4 bg-white transition-colors duration-300 ease-out group-hover:bg-whites">
                <span className="text-[24px] font-semibold text-black bg-white duration-300 ease-out group-hover:text-[#1949d4]">
                  {service.title}
                </span>
                <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-colors duration-300 ease-out group-hover:border-[rgb(114_147_241)] group-hover:text-[rgb(114_147_241)]">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            
            </div>
          ))}
        </div>
        </div>  
    
    </section>
  );
}
