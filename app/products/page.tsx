import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";
import { productsData } from "@/lib/content";

export default function ProductsPage() {
  return (
    <div className="pb-24">
      <PageHero
        align="center"
        title="Our packages"
        subtitle="Ipsum dolor sit amet, consectetur adipiscing elit egestas viverra turpis habitant eu sociis fermentum felis posuere fermentum."
      />

<section className="mx-auto mt-16 max-w-[1300px] px-6 md:px-8">
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {productsData.map((product) => (
      <Link
        key={product.slug}
        href={`/products/${product.slug}`}
        className="group"
      >
        {/* Image */}
        <div className="relative aspect-[0.82] overflow-hidden rounded-[28px] bg-[#f7f7f7]">
          <Image
            src={product.productImage}
            alt={product.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Price */}
          <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 shadow-lg">
            <span className="font-kanit text-[15px] font-medium text-[#1e1e24]">
              {product.price}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">
          <div className="max-w-[calc(100%-3.75rem)]">
            <h3 className="font-montserrat text-[32px] font-bold text-[#1e1e24] transition-colors group-hover:text-[#ff6b35]">
              {product.title}
            </h3>

            {product.shortDescription && (
              <p className="mt-2 font-kanit text-[16px] text-[#4c4c5c] line-clamp-2">
                {product.shortDescription}
              </p>
            )}
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1e1e24] transition-all duration-300 group-hover:border-[#ff6b35] group-hover:bg-[#ff6b35]">
            <ArrowUpRight
              size={22}
              className="transition-all duration-300 group-hover:rotate-45 group-hover:text-white"
            />
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>
    </div>
  );
}