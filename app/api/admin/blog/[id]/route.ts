import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { saveUploadedImage, UploadError } from "@/lib/uploads";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const formData = await request.formData();

  const title = String(formData.get("title") ?? existing.title).trim();
  const category = String(
    formData.get("category") ?? existing.category
  ).trim();
  const excerpt = String(formData.get("excerpt") ?? existing.excerpt).trim();
  const content = String(formData.get("content") ?? existing.content).trim();
  const published = formData.has("published")
    ? formData.get("published") === "true"
    : existing.published;

  let coverImage = existing.coverImage;
  const uploadedFile = formData.get("coverImage");
  if (uploadedFile instanceof File && uploadedFile.size > 0) {
    try {
      coverImage = await saveUploadedImage(uploadedFile, "blog");
    } catch (error) {
      if (error instanceof UploadError) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      throw error;
    }
  }

  const post = await prisma.blogPost.update({
    where: { id },
    data: { title, category, excerpt, content, published, coverImage },
  });

  return NextResponse.json({ post });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  await prisma.blogPost.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
