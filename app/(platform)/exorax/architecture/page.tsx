import type { Metadata } from "next"
import { ArchitectureView } from "@/components/dashboard/architecture-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `ExoraX architecture | Quantavex`,
  description: `Software architecture for ${products.exorax.name}, specified from the decision-commerce monograph.`,
}

export default function ExoraXArchitecturePage() {
  return <ArchitectureView productId="exorax" />
}
