import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { saveUploadedImage, UploadError } from "@/lib/uploads";

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ images });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const category = String(formData.get("category") ?? "").trim();
  const caption = String(formData.get("caption") ?? "").trim();
  const image = formData.get("image");

  if (!category) {
    return NextResponse.json(
      { error: "Category is required." },
      { status: 400 }
    );
  }

  if (!(image instanceof File) || image.size === 0) {
    return NextResponse.json(
      { error: "An image file is required." },
      { status: 400 }
    );
  }

  let imageUrl: string;
  try {
    imageUrl = await saveUploadedImage(image, "gallery");
  } catch (error) {
    if (error instanceof UploadError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    throw error;
  }

  const galleryImage = await prisma.galleryImage.create({
    data: { category, caption: caption || null, imageUrl },
  });

  return NextResponse.json({ image: galleryImage }, { status: 201 });
}
