"use client"

import { ResearchMonograph } from "@/components/dashboard/research-monograph"
import { ResearchAnalyticsDeck } from "@/components/dashboard/research-analytics-deck"
import { ProductDossier as Dossier } from "@/lib/products"
import { productAccents } from "@/lib/product-accents"

export function ProductDossier({ product }: { product: Dossier }) {
  const accent = productAccents[product.id]

  return (
    <div className="space-y-5">
      <ResearchMonograph productId={product.id} />

      <ResearchAnalyticsDeck productId={product.id} />

      <section className={`rounded-xl border ${accent.border} bg-[#0c0c14]/90 p-4 sm:p-5`}>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${accent.text}`}>
              Specified product surfaces
            </p>
            <p className="mt-1 text-xs text-gray-500">Interfaces named in the architecture — not live production screens</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.surfaces.map((surface) => (
            <span
              key={surface}
              className="rounded-lg border border-white/8 bg-black/30 px-3 py-2 text-xs text-gray-200"
            >
              {surface}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
