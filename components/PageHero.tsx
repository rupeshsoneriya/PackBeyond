import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  content?: string;
  align?: "left" | "center";
};

export default function PageHero({
  title,
  subtitle,
  content,
  align = "center",
}: Props) {
  const centered = align === "center";

  return (
    <section className="mx-auto max-w-[1300px] px-4 pt-6 sm:px-6 md:px-8">
      <div className="relative overflow-hidden rounded-[32px] bg-brand px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20">
        <div
          className={`mx-auto flex flex-col items-center ${
            centered ? "text-center" : "text-left"
          }`}
        >
          {/* Title */}
          <h1
            className={`font-montserrat text-[32px] font-bold leading-[1.25em] text-white sm:text-[42px] md:text-[60px] ${
              centered
                ? "mx-auto max-w-2xl text-center"
                : "max-w-xl text-left"
            }`}
            style={{ textAlign: "center" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <h3
            className={`mt-5 font-kanit text-[22px] font-normal leading-[1.25em] text-white/90 md:text-[26px] ${
              centered
                ? "max-w-3xl text-center"
                : "max-w-xl text-left"
            }`}
          >
            {subtitle}
          </h3>

          {/* Content */}
          {content && (
            <p
              className={`mt-5 font-kanit text-[16px] font-normal leading-[1.7] text-white/80 ${
                centered
                  ? "max-w-2xl text-center"
                  : "max-w-xl text-left"
              }`}
            >
              {content}
            </p>
          )}

          {/* CTA */}
          <Link
            href="/products"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 font-montserrat text-[16px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1e1e24]"
          >
            Customize Now
          </Link>
        </div>
      </div>
    </section>
  );
}