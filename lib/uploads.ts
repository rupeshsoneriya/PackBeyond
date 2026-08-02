import { mkdir, writeFile } from "fs/promises";
import path from "path";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8MB

export class UploadError extends Error {}

/**
 * Saves an uploaded image File into /public/uploads/<folder>/ and
 * returns the public URL path (e.g. "/uploads/gallery/xyz.webp").
 */
export async function saveUploadedImage(file: File, folder: string) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new UploadError(
      "Unsupported file type. Please upload a JPG, PNG, WEBP or GIF image."
    );
  }
  if (file.size > MAX_SIZE_BYTES) {
    throw new UploadError("Image is too large. Max size is 8MB.");
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const filename = `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${ext}`;

  const dir = path.join(process.cwd(), "public", "uploads", folder);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), bytes);

  return `/uploads/${folder}/${filename}`;
}
