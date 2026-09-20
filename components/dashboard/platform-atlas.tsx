"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductLogo } from "@/components/brand/product-logo"
import { productList } from "@/lib/products"
import { ProductWebsiteLink } from "@/components/brand/product-site"
import { productAccents } from "@/lib/product-accents"

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
            Quantavex is the parent company. Quantrion, Vdoc, and ExoraX are the platforms it leads.
            Product websites appear here the moment each platform is uploaded.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => {
          const accent = productAccents[product.id]
          const live = Boolean(product.liveUrl)

          return (
            <article
              key={product.id}
              className={`relative overflow-hidden rounded-xl border bg-black/25 p-4 transition ${accent.borderHover}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <ProductLogo product={product.id} size={40} />
                    <div>
                      <h3 className="text-base font-semibold text-white">{product.name}</h3>
                      <p className={`text-[11px] ${accent.text}`}>{product.industry}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      live ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {live ? "Live" : "Launching soon"}
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-white">{product.tagline}</p>
                <p className="mt-1 text-xs italic text-gray-400">{product.manifesto}</p>
                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-gray-400">{product.description}</p>

                <dl className="mt-4 grid grid-cols-2 gap-2">
                  {product.metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-2">
                      <dt className="text-[10px] text-gray-500">{metric.label}</dt>
                      <dd className={`font-mono text-sm ${accent.text}`}>{metric.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    href={`/${product.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/12"
                  >
                    Open dossier
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={`/${product.id}#research`}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${accent.text}`}
                  >
                    Research paper
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
