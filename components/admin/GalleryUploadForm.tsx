"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { galleryCategories } from "@/lib/content";

const inputClass =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-kanit text-[15px] text-[#1e1e24] focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15";
const labelClass = "font-montserrat text-[14px] font-semibold text-[#1e1e24]";

export default function GalleryUploadForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to upload image.");
      }

      (e.target as HTMLFormElement).reset();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/10 bg-white p-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <label className="block">
          <span className={labelClass}>Category *</span>
          <select name="category" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select category
            </option>
            {galleryCategories.map((category) => (
              <option key={category.slug} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Image *</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="mt-2 block w-full font-kanit text-[14px]"
          />
        </label>

        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[#ff6b35] px-6 py-3 font-montserrat text-[14px] font-semibold text-white transition hover:bg-[#ff5722] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Uploading..." : "Upload"}
        </button>
      </div>

      {error && (
        <p className="mt-3 font-kanit text-[14px] text-red-600">{error}</p>
      )}
    </form>
  );
}
