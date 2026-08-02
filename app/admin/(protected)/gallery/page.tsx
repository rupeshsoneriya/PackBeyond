import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { galleryCategories } from "@/lib/content";
import GalleryUploadForm from "@/components/admin/GalleryUploadForm";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminGalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-montserrat text-[28px] font-bold text-[#1e1e24]">
        Gallery
      </h1>
      <p className="mt-1 font-kanit text-[15px] text-black/45">
        {images.length} image{images.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6">
        <GalleryUploadForm />
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {galleryCategories.map((category) => {
          const categoryImages = images.filter(
            (image) => image.category === category.title
          );
          if (categoryImages.length === 0) return null;

          return (
            <div key={category.slug}>
              <h2 className="font-montserrat text-[18px] font-semibold text-[#1e1e24]">
                {category.title}
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {categoryImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100"
                  >
                    <Image
                      src={image.imageUrl}
                      alt={image.caption ?? category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                      <DeleteButton
                        endpoint={`/api/admin/gallery/${image.id}`}
                        confirmLabel="Delete this image?"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
