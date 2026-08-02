import Image from "next/image";
import AboutStats from "@/components/sections/about/AboutStats";

export default function AboutStatsStripSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-6 md:px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-black/[0.03] rounded-[24px] p-10">
        <AboutStats />
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
          <Image
            src="https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a28a/65faf422b356777aa3346845_san-francisco-location-print-x-webflow-template.jpg"
            alt="Print X workshop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
