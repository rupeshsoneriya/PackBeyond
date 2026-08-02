import Image from "next/image";

export default function AboutMissionSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-6 py-16 md:px-8">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Image */}
        <div className="relative order-2 aspect-[16/10] w-full overflow-hidden rounded-[28px] md:order-1">
          <Image
            src="https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a28a/65f1c5debc3fcab2da0b05b1_woman-with-colored-scrolls-print-x-webflow-template.jpg"
            alt="PackBeyond Packaging Solutions"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2">
          <span className="font-kanit text-[15px] font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">
            About PackBeyond
          </span>

          <h2 className="mt-3 font-montserrat text-[36px] font-bold leading-[1.2] text-[#1e1e24] md:text-[48px]">
            Our Story, Beyond
          </h2>

          <p className="mt-6 font-kanit text-[18px] leading-[1.8] text-[#4c4c5c]">
            <strong>PackBeyond</strong> is an initiative of{" "}
            <strong>Siddhi Vinayak Enterprises</strong>, envisioned to bring
            innovation and creativity into the world of packaging. We specialize
            in delivering premium printing, packaging, and graphic design
            solutions that help businesses create a lasting impression.
          </p>

          <p className="mt-5 font-kanit text-[18px] leading-[1.8] text-[#4c4c5c]">
            From customized packaging and commercial printing to branding
            materials and creative visual designs, every project is crafted with
            precision, creativity, and attention to detail. By combining
            advanced technology with skilled craftsmanship, we deliver packaging
            solutions that are visually appealing, highly functional, and built
            to elevate your brand.
          </p>

          <p className="mt-5 font-kanit text-[18px] leading-[1.8] text-[#4c4c5c]">
            Whether you're a startup or an established business, our experienced
            team works closely with you to understand your vision and transform
            it into impactful designs and dependable packaging solutions that
            help your products stand out in the market.
          </p>
        </div>
      </div>
    </section>
  );
}