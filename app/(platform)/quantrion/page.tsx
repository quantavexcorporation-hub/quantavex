import type { Metadata } from "next"
import { ProductView } from "@/components/dashboard/views/product-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `${products.quantrion.name} | Quantavex`,
  description: `${products.quantrion.description} Foundational research: AI-Driven Exam Intelligence Systems (Gour, 2026).`,
}

export default function QuantrionPage() {
  return <ProductView productId="quantrion" />
}
