import React from "react";
import { MANUFACTURING_DATA } from "@/data/manufacturingData";
import ManufacturingDetailClient from "./ManufacturingDetailClient";

export function generateStaticParams() {
  return MANUFACTURING_DATA.map((item) => ({
    mfgId: item.id,
  }));
}

export default async function ManufacturingDetailPage({
  params,
}: {
  params: Promise<{ mfgId: string }>;
}) {
  const { mfgId } = await params;
  return <ManufacturingDetailClient mfgId={mfgId} />;
}
