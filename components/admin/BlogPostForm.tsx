"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-kanit text-[15px] text-[#1e1e24] focus:border-[#ff6b35] focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/15";
const labelClass = "font-montserrat text-[14px] font-semibold text-[#1e1e24]";

export default function BlogPostForm({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<string | null>(post?.coverImage ?? null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        post ? `/api/admin/blog/${post.id}` : "/api/admin/blog",
        {
          method: post ? "PUT" : "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to save post.");
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save post.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <label className="block">
        <span className={labelClass}>Title *</span>
        <input
          name="title"
          required
          defaultValue={post?.title}
          className={inputClass}
        />
      </label>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Category *</span>
          <input
            name="category"
            required
            defaultValue={post?.category}
            placeholder="e.g. News, Resources, Articles"
            className={inputClass}
          />
        </label>

        <label className="flex items-center gap-3 self-end pb-1">
          <input
            type="checkbox"
            name="published"
            value="true"
            defaultChecked={post?.published ?? true}
            className="h-4 w-4 accent-[#ff6b35]"
          />
          <span className={labelClass}>Published</span>
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Excerpt *</span>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Content *</span>
        <textarea
          name="content"
          required
          rows={8}
          defaultValue={post?.content}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>
          Cover Image {post ? "(leave empty to keep current)" : "*"}
        </span>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          required={!post}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className="mt-2 block w-full font-kanit text-[14px]"
        />
        {preview && (
          <div className="relative mt-4 h-40 w-64 overflow-hidden rounded-xl bg-neutral-100">
            <Image src={preview} alt="Preview" fill className="object-cover" />
          </div>
        )}
      </label>

      {error && (
        <p className="font-kanit text-[14px] text-red-600">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[#ff6b35] px-6 py-3 font-montserrat text-[14px] font-semibold text-white transition hover:bg-[#ff5722] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : post ? "Save Changes" : "Publish Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="rounded-full border border-black/15 px-6 py-3 font-montserrat text-[14px] font-semibold text-[#1e1e24] transition hover:bg-black/[0.03]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
