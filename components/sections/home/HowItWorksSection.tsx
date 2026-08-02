import Image from "next/image";
import { howItWorksSteps } from "@/lib/content";
import mobileImage from '../../../public/how-to-work-mobile-pic.png'
import iconImogRightSide from '../../../public/how-to-work-imog.png'
import Link from "next/link";

export default function HowItWorksSection() {
    return (
        <section className="bg-white/[0.03] py-16 md:py-24">
            <div className="mx-auto max-w-[1300px] px-6 md:px-8">
                <div className="text-center max-w-[450px] mx-auto mb-10">
                    <h2 className="text-[48px] font-semibold" style={{ fontFamily: "Switzer, sans-serif", fontWeight: 600 }}>
                        How it works
                    </h2>
                    <p className="text-[18px] font-normal  mt-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: '#4c4c5c' }}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr] gap-6 lg:gap-8 items-stretch">
                    <div className="flex flex-col gap-10 justify-center">
                        {howItWorksSteps.map((step) => (
                            <div
                                key={step.n}
                                className="bg-white rounded-[24px] p-6 flex flex-col gap-2  border border-[#ECECEC]"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#F7941D] text-white flex items-center justify-center font-bold text-lg">
                                    {step.n}
                                </div>

                                <div className="mt-3">
                                    <h3 className="text-[24px] leading-[1.25em] font-semibold" style={{ fontFamily: "Switzer, sans-serif", fontWeight: 600, color: '#1e1e24' }}>
                                        {step.title}
                                    </h3>

                                    <p className=" text-[#4C4C5C] text-[18px] font-medium leading-7">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative flex items-end justify-center bg-[#F7C948] rounded-[30px] overflow-hidden h-[100%] ">
                        <Image
                            src={mobileImage}
                            alt="Print X App Screen"
                            fill
                            priority
                            style={{ objectFit: "fill" }}
                            className="relative z-10 transition-all duration-500 hover:scale-[1.03]"
                        />
                    </div>

                    <div className="bg-[#111114] text-white rounded-[32px] px-6 pt-6 pb-0 lg:px-10 lg:pt-10 lg:pb-0 flex flex-col justify-between overflow-hidden">
                        {/* Content */}
                        <div>
                            <div className="max-w-[340px]">
                                <h3 className="text-[32px] lg:text-[36px] font-bold leading-[1.25] font-switzer" >
                                    Print your projects with bright colors!
                                </h3>
                            </div>
                            <p className="mt-5 text-[18px] font-normal leading-[1.25] text-white/70 font-switzer max-w-[430px]">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                               <div className="mt-8 flex flex-col gap-4">
  <Link
    href="/products"
    className="w-full rounded-full bg-white px-8 py-4 text-center font-montserrat text-[16px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#ff6b35] hover:text-white"
  >
    Customize Now
  </Link>

  <Link
    href="/services"
    className="w-full rounded-full border border-white/20 px-8 py-4 text-center font-montserrat text-[16px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
  >
    Browse All Services
  </Link>
</div>
                            </div>
                        </div>

                        {/* Bottom Image */}
                        <div className="flex justify-end -mr-6 lg:-mr-10">
                            <Image
                                src={iconImogRightSide}
                                alt="Print X App Screen"
                                width={230}
                                height={228}
                                priority
                                className="object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
