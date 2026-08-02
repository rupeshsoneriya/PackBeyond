import { notFound } from "next/navigation";
import { productsData } from "@/lib/content";
import ProductDetail from "./ProductDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = productsData?.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return <ProductDetail data={data} />;
}