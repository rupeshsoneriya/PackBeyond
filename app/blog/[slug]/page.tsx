import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="pb-24">
      <PageHero
        title={post.title}
        subtitle={post.category}
        align="left"
      />

      <article className="mx-auto mt-12 max-w-[820px] px-6 md:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-6 font-kanit text-[15px] text-black/45">
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-6 font-kanit text-[19px] leading-[1.7] text-[#1e1e24]">
          {post.excerpt}
        </p>

        <div className="mt-6 font-kanit text-[17px] leading-[1.9] text-[#4c4c5c] whitespace-pre-line">
          {post.content}
        </div>
      </article>
    </div>
  );
}
