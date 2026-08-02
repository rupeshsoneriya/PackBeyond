import Image from "next/image";
import Link from "next/link";
import { instagramPosts } from "@/lib/content";

export default function InstagramSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-6 md:px-8 mt-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Follow us on Instagram</h2>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          className="
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-[#D9D9D9]
    bg-white
    text-[#1E1E24]
    transition-all
    duration-300
    hover:bg-black
    hover:text-white
    hover:border-black
  "
          style={{
            fontFamily: "Switzer, sans-serif",
            padding: "13px 22px",
            fontSize: "16px",
            lineHeight: "22px",
            height: "auto",
          }}
        >
          Follow us
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {instagramPosts.map((src, index) => (
          <div key={index} className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src={src} alt="Instagram post" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
