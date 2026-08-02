import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { locations } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Contact Us"
        subtitle="Let's build packaging that works for your brand"
        content="Tell us what you need and our team will get back to you with a free, no-obligation quote."
      />

      <section className="mx-auto mt-16 max-w-[1300px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[24px] border border-black/10 p-8">
              <h3 className="font-montserrat text-[22px] font-semibold text-[#1e1e24]">
                Get in touch
              </h3>
              <p className="mt-2 font-kanit text-[15px] leading-7 text-[#4c4c5c]">
                Reach out directly, or fill out the form and we&apos;ll
                respond within one business day.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-[#ff6b35]" />
                  <div>
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#1e1e24]">
                      Phone
                    </h4>
                    <a
                      href="tel:+917970102009"
                      className="mt-1 block font-kanit text-[15px] text-[#4c4c5c] hover:text-[#ff6b35]"
                    >
                      +91 7970102009
                    </a>
                    <a
                      href="tel:+916269040903"
                      className="block font-kanit text-[15px] text-[#4c4c5c] hover:text-[#ff6b35]"
                    >
                      +91 6269040903
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-[#ff6b35]" />
                  <div>
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#1e1e24]">
                      Email
                    </h4>
                    <a
                      href="mailto:packbeyond7@gmail.com"
                      className="mt-1 block font-kanit text-[15px] text-[#4c4c5c] hover:text-[#ff6b35]"
                    >
                      packbeyond7@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {locations.map((location) => (
              <div
                key={location.city}
                className="rounded-[24px] border border-black/10 p-8"
              >
                <div className="flex gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-[#ff6b35]" />
                  <div>
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#1e1e24]">
                      {location.city}
                    </h4>
                    <p className="mt-2 whitespace-pre-line font-kanit text-[15px] leading-7 text-[#4c4c5c]">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
