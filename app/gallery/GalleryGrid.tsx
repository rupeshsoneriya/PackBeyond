"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Category = {
  slug: string;
  title: string;
  description: string;
  images: string[];
};

export default function GalleryGrid({
  categories,
}: {
  categories: Category[];
}) {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="flex flex-col gap-20">
      {categories.map((category) => (
        <div key={category.slug}>
          <div className="mb-6 max-w-2xl">
            <h2 className="font-montserrat text-[28px] md:text-[34px] font-bold text-[#1e1e24]">
              {category.title}
            </h2>
            <p className="mt-2 font-kanit text-[16px] leading-[1.6] text-[#4c4c5c]">
              {category.description}
            </p>
          </div>

          {category.images.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {category.images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => {
                    setLightboxImages(category.images);
                    setLightboxIndex(i);
                  }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100"
                >
                  <Image
                    src={src}
                    alt={`${category.title} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-black/15 bg-black/[0.02] py-16">
              <p className="font-kanit text-[15px] text-black/45">
                Photos coming soon
              </p>
            </div>
          )}
        </div>
      ))}

      {lightboxImages && (
        <Lightbox
          open={lightboxImages !== null}
          close={() => setLightboxImages(null)}
          index={lightboxIndex}
          slides={lightboxImages.map((src) => ({ src }))}
        />
      )}
    </div>
  );
}
