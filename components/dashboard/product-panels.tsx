"use client"

import { Play, Zap } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { ProductWebsiteLink } from "@/components/brand/product-site"

interface ProductPanelProps {
  title: string
  subtitle: string
  product: ProductId
  metrics: { label: string; value: string }[]
  children: React.ReactNode
}

function ProductPanel({ title, subtitle, product, metrics, children }: ProductPanelProps) {
  const colorClasses = {
    quantrion: "border-cyan-500/20 hover:border-cyan-500/40",
    vdoc: "border-purple-500/20 hover:border-purple-500/40",
    exorax: "border-emerald-500/20 hover:border-emerald-500/40",
  }[product]

  return (
    <div
      className={`bg-[#101018] border ${colorClasses} rounded-xl p-4 transition-all duration-300 h-full flex flex-col`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <ProductLogo product={product} size={36} />
          <div>
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="text-[10px] text-gray-500">{subtitle}</p>
          </div>
        </div>
        <ProductWebsiteLink productId={product} variant="ghost" />
      </div>

      <div className="flex-1 mb-3">{children}</div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
        {metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-xs font-mono text-white">{m.value}</div>
            <div className="text-[9px] text-gray-500">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuantrionPreview({ bars, highlight }: { bars: number[]; highlight: string }) {
  const learningData = bars

  return (
    <div className="bg-[#08080c] rounded p-3 h-32">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400">Student Progress</span>
        <span className="text-[10px] font-mono text-cyan-400">{highlight}</span>
      </div>
      <div className="flex items-end gap-1 h-16">
        {learningData.map((value, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-400 rounded-t"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-[9px] text-gray-500">Specified loop</span>
        </div>
        <span className="text-[9px] font-mono text-gray-500">8 modules</span>
      </div>
    </div>
  )
}

function VdocPreview({ badges, highlight }: { badges: string[]; highlight: string }) {
  return (
    <div className="bg-[#08080c] rounded p-3 h-32 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400">Content Generation</span>
        <span className="text-[10px] font-mono text-purple-400">{highlight}</span>
      </div>

      <div className="relative h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded flex items-center justify-center">
        <Play className="w-6 h-6 text-purple-400" />
        <div className="absolute inset-0 animate-pulse rounded border border-purple-500/30" />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-1">
          {badges.map((s, i) => (
            <span
              key={s}
              className={`text-[8px] px-1.5 py-0.5 rounded ${
                i === 0 ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-gray-500"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExoraXPreview({ products, highlight }: { products: { name: string; score: number }[]; highlight: string }) {

  return (
    <div className="bg-[#08080c] rounded p-3 h-32">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400">Purchase Intelligence</span>
        <span className="text-[10px] font-mono text-emerald-400">{highlight}</span>
      </div>

      <div className="space-y-2">
        {products.map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500 w-16">{p.name}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-400 rounded-full"
                style={{ width: `${p.score}%` }}
              />
            </div>
            <span className="text-[9px] font-mono text-emerald-400">{p.score}%</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] text-gray-500">Architecture</span>
        </div>
      </div>
    </div>
  )
}

export function ProductPanels({
  data,
  productId,
}: {
  data?: DashboardSnapshot["productPanels"]
  productId?: "quantrion" | "vdoc" | "exorax"
}) {
  const fallbackData: DashboardSnapshot["productPanels"] = [
    {
      id: "quantrion",
      title: "Quantrion",
      subtitle: "AI Global Exam Intelligence Engine",
      metrics: [
        { label: "Efficiency", value: "+88%" },
        { label: "Users", value: "—" },
        { label: "Modules", value: "Specified" },
        { label: "Accuracy", value: "Research" },
      ],
      preview: { bars: [40, 55, 45, 70, 65, 80, 75, 88], highlight: "+48%" },
    },
    {
      id: "vdoc",
      title: "Vdoc",
      subtitle: "AI Native Entertainment OS",
      metrics: [
        { label: "Engagement", value: "5x" },
        { label: "Content", value: "Specified" },
        { label: "Retention", value: "Research" },
        { label: "Quality", value: "In build" },
      ],
      preview: { badges: ["Audience", "Creation", "Economy"], highlight: "In build" },
    },
    {
      id: "exorax",
      title: "ExoraX",
      subtitle: "Decision Commerce Platform",
      metrics: [
        { label: "Conversion", value: "+35%" },
        { label: "Categories", value: "6" },
        { label: "Architecture", value: "6 layers" },
        { label: "Status", value: "In build" },
      ],
      preview: { products: [{ name: "Fashion", score: 82 }, { name: "Electronics", score: 74 }, { name: "Home", score: 68 }], highlight: "Architecture" },
    },
  ]
  const products = data ?? fallbackData
  const quantrion = products.find((p) => p.id === "quantrion") ?? fallbackData[0]
  const vdoc = products.find((p) => p.id === "vdoc") ?? fallbackData[1]
  const exorax = products.find((p) => p.id === "exorax") ?? fallbackData[2]
  const panels = [
    !productId || productId === "quantrion" ? (
      <ProductPanel
        key="quantrion"
        title={quantrion.title}
        subtitle={quantrion.subtitle}
        product="quantrion"
        metrics={quantrion.metrics}
      >
        <QuantrionPreview bars={quantrion.preview.bars ?? [40, 55, 45, 70, 65, 80, 75, 88]} highlight={quantrion.preview.highlight ?? "+48%"} />
      </ProductPanel>
    ) : null,
    !productId || productId === "vdoc" ? (
      <ProductPanel
        key="vdoc"
        title={vdoc.title}
        subtitle={vdoc.subtitle}
        product="vdoc"
        metrics={vdoc.metrics}
      >
        <VdocPreview badges={vdoc.preview.badges ?? ["Audience", "Creation", "Economy"]} highlight={vdoc.preview.highlight ?? "In build"} />
      </ProductPanel>
    ) : null,
    !productId || productId === "exorax" ? (
      <ProductPanel
        key="exorax"
        title={exorax.title}
        subtitle={exorax.subtitle}
        product="exorax"
        metrics={exorax.metrics}
      >
        <ExoraXPreview products={exorax.preview.products ?? [{ name: "Fashion", score: 82 }, { name: "Electronics", score: 74 }, { name: "Home", score: 68 }]} highlight={exorax.preview.highlight ?? "Architecture"} />
      </ProductPanel>
    ) : null,
  ].filter(Boolean)

  return <div className={`grid gap-4 ${productId ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"}`}>{panels}</div>
}
