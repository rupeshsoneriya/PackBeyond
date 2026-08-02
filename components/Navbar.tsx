"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navigationLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 text-[15px] text-black/80 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-colors hover:bg-black/5"
          >
            <Search size={16} />
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/85"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-black/10 px-6 py-4 text-black/80 md:hidden">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
