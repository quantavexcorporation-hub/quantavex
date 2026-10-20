import type { Metadata } from "next"
import { ArchitectureView } from "@/components/dashboard/architecture-view"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: `Vdoc architecture | Quantavex`,
  description: `Software architecture for ${products.vdoc.name}, specified from the interactive entertainment monograph.`,
}

export default function VdocArchitecturePage() {
  return <ArchitectureView productId="vdoc" />
}
