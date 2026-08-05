"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navigationLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-6 lg:gap-10">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-black/80 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:bg-black/5"
          >
            <Search size={18} />
          </button>

          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-black/10 bg-white px-6 py-5">
          <nav className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium text-black/80 hover:text-black"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <button
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15"
              >
                <Search size={18} />
              </button>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-black py-3 text-center text-sm font-medium text-white"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}