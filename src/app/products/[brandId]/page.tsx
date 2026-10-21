import React from "react";
import { BRANDS_DATA } from "@/data/brandsData";
import BrandDetailClient from "./BrandDetailClient";

export function generateStaticParams() {
  return BRANDS_DATA.map((brand) => ({
    brandId: brand.id,
  }));
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  return <BrandDetailClient brandId={brandId} />;
}
