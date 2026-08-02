import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pb-24">
      <PageHero
        title="Blog"
        subtitle="Ideas, guides and updates from the PackBeyond team"
        content="Packaging tips, printing know-how and brand stories to help you make sharper decisions for your products."
      />

      <section className="mx-auto mt-16 max-w-[1300px] px-6 md:px-8">
        {posts.length === 0 ? (
          <p className="text-center font-kanit text-[16px] text-black/45">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3
                  className="mt-4 text-[22px] font-semibold leading-[1.25] text-[#1E1E24] line-clamp-2"
                  style={{ fontFamily: "Switzer, sans-serif" }}
                >
                  {post.title}
                </h3>

                <div className="mt-4 flex items-center gap-4">
                  <span className="font-kanit text-[15px] font-semibold text-[#ff6b35]">
                    {post.category}
                  </span>
                  <div className="h-px w-8 bg-[#D9D9D9]" />
                  <span className="font-kanit text-[15px] text-[#6A6A6A]">
                    {new Date(post.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
