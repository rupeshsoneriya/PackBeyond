import Link from "next/link";
import { Newspaper, Images, Inbox } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [postCount, imageCount, submissionCount] = await Promise.all([
    prisma.blogPost.count(),
    prisma.galleryImage.count(),
    prisma.contactSubmission.count(),
  ]);

  const cards = [
    {
      href: "/admin/blog",
      label: "Blog Posts",
      value: postCount,
      icon: Newspaper,
    },
    {
      href: "/admin/gallery",
      label: "Gallery Images",
      value: imageCount,
      icon: Images,
    },
    {
      href: "/admin/submissions",
      label: "Quote Requests",
      value: submissionCount,
      icon: Inbox,
    },
  ];

  return (
    <div>
      <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
        Dashboard
      </h1>
      <p className="mt-1 font-kanit text-[15px] text-black/45">
        Overview of your site content
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6b35]/10">
                <Icon size={20} className="text-[#ff6b35]" />
              </div>
              <p className="mt-5 font-montserrat text-[32px] font-bold text-[#1e1e24]">
                {card.value}
              </p>
              <p className="font-kanit text-[15px] text-black/45">
                {card.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
