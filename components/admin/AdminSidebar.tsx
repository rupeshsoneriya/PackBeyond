"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Images,
  Inbox,
  KeyRound,
  LogOut,
} from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/blog", label: "Blog Posts", icon: Newspaper },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/submissions", label: "Submissions", icon: Inbox },
  { href: "/admin/settings", label: "Change Password", icon: KeyRound },
];

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-black/10 bg-white px-4 py-8">
      <div className="px-2">
        <span className="font-montserrat text-[20px] font-bold text-[#1e1e24]">
          PackBeyond
        </span>
        <p className="mt-0.5 font-kanit text-[13px] text-black/45">Admin</p>
      </div>

      <nav className="mt-10 flex flex-1 flex-col gap-1">
        {links.map((link) => {
          const isActive =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname?.startsWith(link.href);
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-kanit text-[15px] transition-colors ${
                isActive
                  ? "bg-[#ff6b35]/10 text-[#ff6b35] font-medium"
                  : "text-[#4c4c5c] hover:bg-black/[0.03]"
              }`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-black/10 pt-4">
        {email && (
          <p className="truncate px-3 font-kanit text-[13px] text-black/45">
            {email}
          </p>
        )}
        <button
          onClick={handleLogout}
          className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-kanit text-[15px] text-[#4c4c5c] transition-colors hover:bg-black/[0.03]"
        >
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </aside>
  );
}
