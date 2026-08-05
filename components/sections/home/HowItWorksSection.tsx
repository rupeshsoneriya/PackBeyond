import Image from "next/image";
import { howItWorksSteps } from "@/lib/content";
import mobileImage from '../../../public/how-to-work-mobile-pic.png'
import iconImogRightSide from '../../../public/how-to-work-imog.png'
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
    return (
        <section className="bg-white/[0.03] py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
                <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-[500px] text-center">
                    <h2
                        className="text-[26px] leading-tight font-semibold sm:text-[32px] md:text-[38px] lg:text-[48px]"
                        style={{ fontFamily: "Switzer, sans-serif", fontWeight: 600 }}
                    >
                        How We Work
                    </h2>

                    <p
                        className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] px-2 sm:px-0"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            color: "#4c4c5c",
                        }}
                    >
                        Our streamlined process ensures high-quality packaging solutions, from your
                        initial requirements to the final delivery.
                    </p>
                </div>

                {/*
                  Mobile (<768px): single column, stacked (steps -> image -> cta)
                  Tablet (768px-1023px): 2 columns, image spans full width on top,
                    steps + cta split into the two columns beneath it
                  Desktop (>=1024px): 3 columns [steps | image | cta]
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr] gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch">

                    {/* Steps list */}
                    <div className="flex flex-col gap-4 sm:gap-5 justify-center order-2 md:order-2 lg:order-1">
                        {howItWorksSteps.map((step) => (
                            <div
                                key={step.n}
                                className="bg-white rounded-[18px] p-3 flex flex-row gap-3 items-center border border-[#ECECEC]"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full bg-[#F7941D] text-white flex items-center justify-center font-bold text-base sm:text-lg">
                                    {step.n}
                                </div>

                                <div>
                                    <h3
                                        className="text-[16px] sm:text-[18px] leading-[1.25em] font-semibold"
                                        style={{ fontFamily: "Switzer, sans-serif", fontWeight: 600, color: '#1e1e24' }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="font-kanit font-normal leading-[1.25] text-[#4C4C5C]"
                                        style={{ fontSize: "14px" }}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image panel */}
                    <div className="relative order-1 md:order-1 md:col-span-2 lg:order-2 lg:col-span-1 flex items-end justify-center bg-[#F7C948] rounded-[24px] sm:rounded-[28px] lg:rounded-[30px] overflow-hidden h-[240px] sm:h-[320px] md:h-[380px] lg:h-auto lg:min-h-[420px]">
                        <Image
                            src={mobileImage}
                            alt="Print X App Screen"
                            fill
                            priority
                            style={{ objectFit: "fill" }}
                            className="relative z-10 transition-all duration-500 hover:scale-[1.03]"
                        />
                    </div>

                    {/* CTA panel */}
                    <div className="bg-[#111114] text-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-6 pt-8 pb-6 sm:px-7 sm:pt-9 sm:pb-0 md:px-8 md:pt-10 lg:px-10 lg:pt-10 flex flex-col justify-between overflow-hidden order-3 md:order-3 lg:order-3">
                        <div>
                            <div className="max-w-[340px]">
                                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-bold leading-[1.25] font-switzer">
                                    Print your projects with bright colors!
                                </h3>
                            </div>
                            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.25] text-white/70 font-switzer max-w-[430px]">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </p>

                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4">
                                <Link
                                    href="/products"
                                    className="w-full sm:w-auto md:w-full rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-center font-montserrat text-[15px] sm:text-[16px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#ff6b35] hover:text-white"
                                >
                                    Customize Now
                                </Link>

                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto md:w-full rounded-full border border-white/20 px-6 sm:px-8 py-3 sm:py-4 text-center font-montserrat text-[15px] sm:text-[16px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                                >
                                    Browse All Services
                                </Link>
                            </div>
                        </div>

                        {/* Bottom image — smaller on mobile, hidden overflow bleed on lg */}
                        <div className="flex justify-center sm:justify-end mt-6 sm:mt-4 md:mt-6 lg:mt-0 -mr-0 sm:-mr-4 md:-mr-6 lg:-mr-10">
                            <Image
                                src={iconImogRightSide}
                                alt="Print X App Screen"
                                width={160}
                                height={158}
                                priority
                                className="object-contain w-[120px] h-auto sm:w-[140px] md:w-[170px] lg:w-[230px] transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}