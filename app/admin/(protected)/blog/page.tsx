import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminBlogListPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
            Blog Posts
          </h1>
          <p className="mt-1 font-kanit text-[15px] text-black/45">
            {posts.length} post{posts.length === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 rounded-full bg-[#ff6b35] px-5 py-3 font-montserrat text-[14px] font-semibold text-white transition hover:bg-[#ff5722]"
        >
          <Plus size={16} />
          New Post
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {posts.length === 0 && (
          <p className="font-kanit text-[15px] text-black/45">
            No blog posts yet.
          </p>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-montserrat text-[16px] font-semibold text-[#1e1e24]">
                  {post.title}
                </h3>
                {!post.published && (
                  <span className="shrink-0 rounded-full bg-black/5 px-2 py-0.5 font-kanit text-[11px] text-black/45">
                    Draft
                  </span>
                )}
              </div>
              <p className="mt-0.5 font-kanit text-[13px] text-black/45">
                {post.category} ·{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>

            <Link
              href={`/admin/blog/${post.id}`}
              className="shrink-0 rounded-full border border-black/15 px-4 py-2 font-kanit text-[13px] font-medium text-[#1e1e24] transition hover:bg-black/[0.03]"
            >
              Edit
            </Link>

            <DeleteButton
              endpoint={`/api/admin/blog/${post.id}`}
              confirmLabel={`Delete "${post.title}"?`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
