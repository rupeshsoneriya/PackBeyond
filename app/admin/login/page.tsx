"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Login failed.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f6f8] px-6 font-kanit">
      <div className="w-full max-w-sm rounded-[24px] border border-black/10 bg-white p-8">
        <span className="font-montserrat text-[22px] font-bold text-[#1e1e24]">
          PackBeyond Admin
        </span>
        <p className="mt-1 font-kanit text-[14px] text-black/45">
          Sign in to manage your site
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <label className="block">
            <span className="font-montserrat text-[14px] font-semibold text-[#1e1e24]">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-[15px] focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15"
            />
          </label>

          <label className="block">
            <span className="font-montserrat text-[14px] font-semibold text-[#1e1e24]">
              Password
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-[15px] focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15"
            />
          </label>

          {error && (
            <p className="font-kanit text-[14px] text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-[#ff6b35] px-6 py-3.5 text-center font-montserrat text-[15px] font-semibold text-white transition hover:bg-[#ff5722] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
