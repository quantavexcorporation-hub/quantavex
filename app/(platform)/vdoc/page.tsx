import type { Metadata } from "next"
import { ProductView } from "@/components/dashboard/views/product-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `${products.vdoc.name} | Quantavex`,
  description: `${products.vdoc.description} Foundational research: A Futuristic AI-Driven Interactive Entertainment Ecosystem (Gour, 2026).`,
}

export default function VdocPage() {
  return <ProductView productId="vdoc" />
}
