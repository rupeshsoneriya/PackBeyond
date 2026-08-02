"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutValues } from "@/lib/content";

export default function AboutValuesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-kanit uppercase tracking-[6px] text-[#ff6b35] font-semibold">
            PROCESS
          </span>

          <h2 className="mt-4 font-montserrat text-[52px] font-bold text-[#1e1e24]">
            How We Work
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-kanit text-[18px] leading-8 text-[#4c4c5c]">
            Every packaging project follows a proven workflow that guarantees
            quality, consistency and timely delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[720px] overflow-hidden rounded-[40px]"
          >
            <Image
              src="https://cdn.prod.website-files.com/65eb48eda0059bb8e4c1a28a/65f1c5de4801c7192b026f39_man-doing-measurements-print-x-webflow-template.jpg"
              fill
              alt=""
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10 text-white">

              <div className="font-kanit uppercase tracking-[5px] text-[#ffb08a]">
                PACKBEYOND
              </div>

              <h3 className="mt-4 font-montserrat text-4xl font-bold">
                From Idea
                <br />
                to Delivery
              </h3>

            </div>

          </motion.div>

          {/* RIGHT TIMELINE */}

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute left-[27px] top-0 h-full w-[2px] bg-[#ececec]" />

            <div className="space-y-10">

              {aboutValues.map(({ icon: Icon, title, desc }, index) => (

                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                    duration: .6
                  }}
                  className="relative flex gap-6 group"
                >

                  {/* Circle */}

                  <div className="relative z-20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ff6b35] shadow-lg transition-all duration-300 group-hover:scale-110">

                    <Icon size={24} className="text-white" />

                  </div>

                  {/* Content */}

                  <div className="pb-10">

                    <span className="font-montserrat text-[#ff6b35] font-bold text-sm tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-montserrat text-[26px] font-bold text-[#1e1e24]">
                      {title}
                    </h3>

                    <p className="mt-3 font-kanit text-[17px] leading-8 text-[#4c4c5c]">
                      {desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}