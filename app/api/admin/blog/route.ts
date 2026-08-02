import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { saveUploadedImage, UploadError } from "@/lib/uploads";

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ posts });
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const title = String(formData.get("title") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const published = formData.get("published") === "true";
  const coverImage = formData.get("coverImage");

  if (!title || !category || !excerpt || !content) {
    return NextResponse.json(
      { error: "Title, category, excerpt and content are required." },
      { status: 400 }
    );
  }

  if (!(coverImage instanceof File) || coverImage.size === 0) {
    return NextResponse.json(
      { error: "A cover image is required." },
      { status: 400 }
    );
  }

  let coverImageUrl: string;
  try {
    coverImageUrl = await saveUploadedImage(coverImage, "blog");
  } catch (error) {
    if (error instanceof UploadError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    throw error;
  }

  const baseSlug = slugify(title) || "post";
  let slug = baseSlug;
  let suffix = 1;
  while (await prisma.blogPost.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${++suffix}`;
  }

  const post = await prisma.blogPost.create({
    data: {
      title,
      slug,
      category,
      excerpt,
      content,
      coverImage: coverImageUrl,
      published,
    },
  });

  return NextResponse.json({ post }, { status: 201 });
}
