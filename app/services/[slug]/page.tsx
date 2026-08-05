import { notFound } from "next/navigation";
import { servicesData } from "@/lib/content";
import ServiceDetail from "./ServiceDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug,'params');
  

  const data = servicesData.find((item) => item?.slug === slug);

  if (!data) {
    notFound();
  }

  return <ServiceDetail data={data} />;
}