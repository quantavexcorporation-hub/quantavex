"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductLogo } from "@/components/brand/product-logo"
import { ProductWebsiteLink } from "@/components/brand/product-site"
import { productList } from "@/lib/products"
import { productAccents } from "@/lib/product-accents"
import {
  QuantrionPreview,
  VdocPreview,
  ExoraXPreview,
} from "@/components/dashboard/product-panels"

const previews = {
  quantrion: {
    bars: [40, 55, 45, 70, 65, 80, 75, 88],
    highlight: "+48%",
  },
  vdoc: {
    badges: ["Audience", "Creation", "Economy"],
    highlight: "In build",
  },
  exorax: {
    products: [
      { name: "Fashion", score: 82 },
      { name: "Electronics", score: 74 },
      { name: "Home", score: 68 },
    ],
    highlight: "Architecture",
  },
} as const

export function PlatformAtlas() {
  return (
    <section className="overflow-hidden rounded-xl border border-cyan-500/10 bg-[#0c0c14]/90 p-4 sm:p-5 md:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">
            Company platforms
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-white md:text-2xl">
            Three industries. One intelligence.
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-pretty text-gray-400">
            Quantavex is the parent company. Quantrion, Vdoc, and ExoraX are the platforms it leads —
            each card pairs the platform brief with its intelligence surface.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => {
          const accent = productAccents[product.id]

          return (
            <article
              key={product.id}
              className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-black/25 p-4 transition ${accent.borderHover}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent`} />
              <div className="relative flex min-h-0 flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <ProductLogo product={product.id} size={40} />
                  <div>
                    <h3 className="text-base font-semibold text-white">{product.name}</h3>
                    <p className={`text-[11px] ${accent.text}`}>{product.industry}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-white">{product.tagline}</p>
                <p className="mt-1 text-xs italic text-gray-400">{product.manifesto}</p>
                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-gray-400">{product.description}</p>

                <div className="mt-4">
                  {product.id === "quantrion" ? (
                    <QuantrionPreview bars={[...previews.quantrion.bars]} highlight={previews.quantrion.highlight} />
                  ) : null}
                  {product.id === "vdoc" ? (
                    <VdocPreview badges={[...previews.vdoc.badges]} highlight={previews.vdoc.highlight} />
                  ) : null}
                  {product.id === "exorax" ? (
                    <ExoraXPreview
                      products={[...previews.exorax.products]}
                      highlight={previews.exorax.highlight}
                    />
                  ) : null}
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-2">
                  {product.metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-2">
                      <dt className="text-[10px] text-gray-500">{metric.label}</dt>
                      <dd className={`font-mono text-sm ${accent.text}`}>{metric.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
                  <Link
                    href={`/${product.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/12"
                  >
                    Open dossier
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <ProductWebsiteLink productId={product.id} variant="chip" />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
