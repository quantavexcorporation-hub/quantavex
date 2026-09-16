import type { Metadata } from "next"
import { ProductView } from "@/components/dashboard/views/product-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `${products.exorax.name} | Quantavex`,
  description: `${products.exorax.description} Foundational research: A Futuristic AI-Powered Interactive Commerce Platform (Gour, 2026).`,
}

export default function ExoraxPage() {
  return <ProductView productId="exorax" />
}
