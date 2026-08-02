import Image from "next/image";
import heroSeciton1 from "../../../public/about-page/Hero-section-1.jpg";
import heroSeciton2 from "../../../public/about-page/Hero-section-2.jpg";

export default function AboutHeroSection() {
  return (
    <section className="relative pt-10 overflow-x-hidden">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">
        {/* Heading + description row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
          <h1 className="!font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-xl text-neutral-900">
          Packaging Solutions That Go Beyond Expectations
          </h1>

          <div className="max-w-sm lg:text-right lg:flex lg:flex-col lg:items-start">
            <p className="!font-kanit text-black/55 text-[15px] md:text-[16px] leading-[1.5] text-left">
         PackBeyond, an initiative of Siddhi Vinayak Enterprises, delivers innovative packaging, premium printing, and creative branding solutions that help businesses build a stronger market presence.
            </p>
            <button className="mt-5 bg-black text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-black/85 transition-colors whitespace-nowrap">
              Customize now
            </button>
          </div>
        </div>
      </div>

      {/* Image + stats block, with full-bleed blue background behind it */}
      <div className="relative mt-10">
        <div className="absolute inset-x-[calc(50%-50vw)] bottom-0 top-[55%] sm:top-[50%] lg:top-[45%] bg-brand -z-10" />

        <div className="mx-auto max-w-[1300px] px-6 md:px-8 pb-14 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[490fr_755fr] gap-6 lg:items-stretch">
            <div className="relative w-full aspect-[490/586] lg:aspect-auto lg:h-full min-h-[280px] rounded-[24px] overflow-hidden">
              <Image src={heroSeciton1} alt="Mixing red ink" fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-4 gap-4">
                <Stat value="500" suffix="+" suffixColor="text-orange-500" label="Projects Completed " />
                <Stat value="100" suffix="+" suffixColor="text-orange-500" label="Business Clients " />
                <Stat value="1000" suffix="+" suffixColor="text-indigo-600" label="Packaging Designs " />
                <Stat value="98" suffix="%" suffixColor="text-indigo-600" label="Customer Satisfaction " />

              </div>

              <div className="relative w-full aspect-[755/497] rounded-[24px] overflow-hidden min-h-[220px]">
                <Image src={heroSeciton2} alt="Printing press in action" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  suffixColor,
  label,
}: {
  value: string;
  suffix: string;
  suffixColor: string;
  label: string;
}) {
  return (
    <div>
      <p className="!font-montserrat text-3xl md:text-4xl font-bold text-neutral-900">
        {value}
        <span className={suffixColor}>{suffix}</span>
      </p>
      <p className="!font-kanit text-[14px] md:text-[15px] text-black/55 mt-1 whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}