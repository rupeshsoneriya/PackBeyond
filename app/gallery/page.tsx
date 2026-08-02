import PageHero from "@/components/PageHero";
import { galleryCategories } from "@/lib/content";
import { prisma } from "@/lib/prisma";
import GalleryGrid from "./GalleryGrid";

export const revalidate = 0;

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const categories = galleryCategories.map((category) => ({
    ...category,
    images: images
      .filter((image) => image.category === category.title)
      .map((image) => image.imageUrl),
  }));

  return (
    <div className="pb-24">
      <PageHero
        title="Gallery"
        subtitle="A look inside PackBeyond"
        content="Packaging solutions, finished client work, materials and the moments behind every project."
      />

      <section className="mx-auto mt-16 max-w-[1300px] px-6 md:px-8">
        <GalleryGrid categories={categories} />
      </section>
    </div>
  );
}
