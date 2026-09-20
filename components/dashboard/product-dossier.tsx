"use client"

import { ArrowRight } from "lucide-react"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { ResearchMonograph } from "@/components/dashboard/research-monograph"
import { ProductDossier as Dossier } from "@/lib/products"
import { ProductWebsiteLink } from "@/components/brand/product-site"

const accents: Record<
  Dossier["id"],
  { text: string; border: string; chip: string; glow: string; step: string }
> = {
  quantrion: {
    text: "text-cyan-300",
    border: "border-cyan-500/20",
    chip: "bg-cyan-400/10 text-cyan-200",
    glow: "from-cyan-500/15",
    step: "bg-cyan-400 text-[#061016]",
  },
  vdoc: {
    text: "text-purple-300",
    border: "border-purple-500/20",
    chip: "bg-purple-400/10 text-purple-200",
    glow: "from-purple-500/15",
    step: "bg-purple-400 text-[#061016]",
  },
  exorax: {
    text: "text-emerald-300",
    border: "border-emerald-500/20",
    chip: "bg-emerald-400/10 text-emerald-200",
    glow: "from-emerald-500/15",
    step: "bg-emerald-400 text-[#061016]",
  },
}

export function ProductDossier({ product }: { product: Dossier }) {
  const accent = accents[product.id]

  return (
    <div className="space-y-5">
      <section
        className={`relative overflow-hidden rounded-xl border ${accent.border} bg-[#0c0c14]/90 p-4 sm:p-5 md:p-6`}
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent`} />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${accent.text}`}>
              {product.category}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-pretty text-gray-300 md:text-[15px]">
              {product.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.audience.map((item) => (
                <span key={item.title} className={`rounded-full px-3 py-1 text-[11px] ${accent.chip}`}>
                  {item.title}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">Official website</p>
              <div className="mt-2">
                <ProductWebsiteLink productId={product.id} variant="row" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/5 bg-black/30 p-3">
                <p className={`font-mono text-xl font-semibold ${accent.text}`}>{metric.value}</p>
                <p className="mt-1 text-xs font-medium text-white">{metric.label}</p>
                <p className="text-[10px] text-gray-500">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResearchMonograph productId={product.id} />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Panel>
          <PanelHeader title="Intelligence loop" subtitle="How the platform thinks, then acts" />
          <ol className="grid gap-3 sm:grid-cols-2">
            {product.loop.map((item, index) => (
              <li key={item.step} className="rounded-lg border border-white/5 bg-black/20 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${accent.step}`}>
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-white">{item.step}</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-400">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Panel>

        <Panel>
          <PanelHeader title="Who it serves" subtitle="Primary audiences across the stack" />
          <div className="space-y-3">
            {product.audience.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/5 bg-black/20 p-3">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {product.groups.map((group) => (
          <Panel key={group.title}>
            <PanelHeader title={group.title} />
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Panel>
          <PanelHeader title="What changes" subtitle="Traditional software versus Quantavex intelligence" />
          <div className="overflow-hidden rounded-lg border border-white/5">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-2 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              <span>Traditional</span>
              <span />
              <span className={accent.text}>Quantavex</span>
            </div>
            {product.differentiators.map((row) => (
              <div
                key={row.traditional}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-white/5 px-3 py-3"
              >
                <p className="text-xs text-gray-400">{row.traditional}</p>
                <ArrowRight className={`h-3.5 w-3.5 ${accent.text}`} />
                <p className="text-xs text-white">{row.quantavex}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader title="Product surfaces" subtitle="Specified interfaces inside the platform" />
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
        </Panel>
      </div>
    </div>
  )
}
