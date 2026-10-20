import type { Metadata } from "next"
import { ArchitectureView } from "@/components/dashboard/architecture-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `Quantrion architecture | Quantavex`,
  description: `Software architecture for ${products.quantrion.name}, specified from the examination-intelligence monograph.`,
}

export default function QuantrionArchitecturePage() {
  return <ArchitectureView productId="quantrion" />
}
