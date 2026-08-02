import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import Logo from "./Logo";
import packagingImage from "../public/Laika-image-footer-removebg-preview.png";
import { navigationLinks } from "@/lib/content";

const serviceLinks = [
  {
    name: "Product Labels",
    href: "/services/product-labels",
  },
  {
    name: "Mono Cartons",
    href: "/services/mono-cartons",
  },
  {
    name: "Corrugated Boxes",
    href: "/services/corrugated-boxes",
  },
  {
    name: "Rigid Boxes",
    href: "/services/rigid-boxes",
  },
  {
    name: "Packaging Design",
    href: "/services/packaging-design",
  },
];

export default function Footer() {
  return (
  <footer className="relative mt-16 overflow-hidden bg-[#111114] text-white">
  {/* Background */}
  <div className="pointer-events-none absolute -right-20 bottom-0 opacity-[0.06]">
    <Image
      src={packagingImage}
      alt="Packaging"
      width={420}
      height={420}
      className="object-contain"
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-8">

    {/* ================= CTA ================= */}

    <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 py-14 lg:flex-row">

      <div className="max-w-xl">

        <h2 className="font-montserrat text-[34px] md:text-[46px] font-bold leading-[1.15]">
          Quality Packaging
          <br />
          That Builds Brands.
        </h2>

        <p className="mt-4 font-kanit text-[16px] leading-7 text-white/70">
          Premium packaging, printing and branding solutions that help your
          products stand out.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[#ff6b35] px-6 py-3 font-montserrat text-[15px] font-semibold transition hover:bg-[#ff5722]"
          >
            Get Free Quote
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/20 px-6 py-3 font-montserrat text-[15px] font-semibold transition hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
      </div>

      <Image
        src={packagingImage}
        alt="Packaging"
        width={240}
        height={240}
        className="hidden lg:block object-contain"
      />
    </div>

    {/* ================= Footer ================= */}

    <div className="grid gap-10 py-14 lg:grid-cols-4">

      {/* Company */}

      <div>

        <Logo />

        <h3 className="mt-4 font-montserrat text-[28px] font-bold">
          Pack Beyond
        </h3>

        <p className="font-kanit text-[#ff6b35]">
          Packaging Studio
        </p>

        <p className="mt-4 font-kanit text-[15px] leading-7 text-white/65">
          PackBeyond delivers premium packaging, printing and branding
          solutions with creativity, innovation and uncompromising quality.
        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h4 className="mb-5 font-montserrat text-[20px] font-semibold">
          Quick Links
        </h4>

        <ul className="space-y-3">
          {navigationLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-kanit text-[16px] text-white/65 transition hover:text-[#ff6b35]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      {/* Services */}

      <div>

        <h4 className="mb-5 font-montserrat text-[20px] font-semibold">
          Our Services
        </h4>

        <ul className="space-y-3">
          {serviceLinks.map((service) => (
            <li key={service.name}>
              <Link
                href={service.href}
                className="font-kanit text-[16px] text-white/65 transition hover:text-[#ff6b35]"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      {/* Contact */}

      <div>

        <h4 className="mb-5 font-montserrat text-[20px] font-semibold">
          Contact
        </h4>

        <div className="space-y-5">

          <div className="flex gap-3">

            <MapPin
              size={20}
              className="mt-1 shrink-0 text-[#ff6b35]"
            />

            <p className="font-kanit text-[15px] leading-7 text-white/65">
              <strong className="text-white">Head Office</strong>

              <br />

              6, B-1, IDA, Scheme No.71,
              <br />
              Indore-452001 (M.P.)

              <br />
              <br />

              <strong className="text-white">Branch Office</strong>

              <br />

              Near Ambe Chowk,
              <br />
              Sagod Road,
              <br />
              Ratlam-457001 (M.P.)
            </p>

          </div>

          <div className="flex gap-3">

            <Phone
              size={20}
              className="mt-1 shrink-0 text-[#ff6b35]"
            />

            <a
              href="tel:+917970102009"
              className="font-kanit text-[15px] text-white/65 hover:text-[#ff6b35]"
            >
              +91 7970102009
              <br />
              +91 6269040903
            </a>

          </div>

          <div className="flex gap-3">

            <Mail
              size={20}
              className="mt-1 shrink-0 text-[#ff6b35]"
            />

            <a
              href="mailto:packbeyond7@gmail.com"
              className="font-kanit text-[15px] text-white/65 hover:text-[#ff6b35]"
            >
              packbeyond7@gmail.com
            </a>

          </div>

        </div>

        {/* Social */}

        <div className="mt-7 flex gap-3">

          {[
            FaFacebookF,
            FaInstagram,
            FaLinkedinIn,
            FaWhatsapp,
          ].map((Icon, index) => (
            <Link
              key={index}
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#ff6b35] hover:bg-[#ff6b35]"
            >
              <Icon size={15} />
            </Link>
          ))}

        </div>

      </div>

    </div>

    {/* Bottom */}

    <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center md:flex-row">

      <p className="font-kanit text-[14px] text-white/45">
        © {new Date().getFullYear()} Pack Beyond. All Rights Reserved.
      </p>

      <p className="font-kanit text-[14px] text-white/45">
        Designed & Developed by Pack Beyond
      </p>

    </div>

  </div>
</footer>
  );
}