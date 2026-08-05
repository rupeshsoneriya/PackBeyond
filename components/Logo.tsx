import Link from "next/link";
import logo from "../public/logo.jpeg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 shadow-sm ring-1 ring-orange-100 transition-transform duration-200 group-hover:scale-105">
        <img
          src={logo.src}
          alt="Pack Beyond"
          className="h-7 w-7 rounded-xl object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
     <span
  className="font-kanit text-[28px] font-normal tracking-tight text-[#EB7827]"
>
  Pack Beyond
</span>
        {/* <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
          Packaging Studio
        </span> */}
      </span>
    </Link>
  );
}
