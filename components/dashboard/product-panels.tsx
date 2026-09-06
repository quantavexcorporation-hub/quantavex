"use client"

import { motion } from "framer-motion"
import { Brain, Film, ShoppingCart, TrendingUp, Play, Zap } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"

interface ProductPanelProps {
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  metrics: { label: string; value: string }[]
  children: React.ReactNode
}

function ProductPanel({ title, subtitle, icon: Icon, color, metrics, children }: ProductPanelProps) {
  const colorClasses = {
    cyan: "border-cyan-500/20 hover:border-cyan-500/40",
    purple: "border-purple-500/20 hover:border-purple-500/40",
    emerald: "border-emerald-500/20 hover:border-emerald-500/40",
  }[color]

  const iconBg = {
    cyan: "bg-cyan-500/20 text-cyan-400",
    purple: "bg-purple-500/20 text-purple-400",
    emerald: "bg-emerald-500/20 text-emerald-400",
  }[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={`bg-[#0c0c14] border ${colorClasses} rounded p-4 transition-all duration-300 h-full flex flex-col`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded ${iconBg} flex items-center justify-center`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="text-[10px] text-gray-500">{subtitle}</p>
          </div>
        </div>
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
    </motion.div>
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
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-cyan-500/50 to-cyan-400 rounded-t"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] text-gray-500">Adapting...</span>
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
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border border-purple-500/30 rounded"
        />
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
        {products.map((p, i) => (
          <div key={p.name} className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500 w-16">{p.name}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.score}%` }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-400 rounded-full"
              />
            </div>
            <span className="text-[9px] font-mono text-emerald-400">{p.score}%</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] text-gray-500">Optimizing</span>
        </div>
      </div>
    </div>
  )
}

export function ProductPanels({ data }: { data?: DashboardSnapshot["productPanels"] }) {
  const fallbackData: DashboardSnapshot["productPanels"] = [
    {
      id: "quantrion",
      title: "Quantrion AI",
      subtitle: "Adaptive Learning System",
      metrics: [
        { label: "Efficiency", value: "+88%" },
        { label: "Users", value: "12.4K" },
        { label: "Modules", value: "847" },
        { label: "Accuracy", value: "96%" },
      ],
      preview: { bars: [40, 55, 45, 70, 65, 80, 75, 88], highlight: "+48%" },
    },
    {
      id: "vdoc",
      title: "Vdoc AI",
      subtitle: "Content Generation Engine",
      metrics: [
        { label: "Engagement", value: "5x" },
        { label: "Content", value: "2.1M" },
        { label: "Retention", value: "89%" },
        { label: "Quality", value: "94%" },
      ],
      preview: { badges: ["Scene 1", "Scene 2", "Scene 3"], highlight: "LIVE" },
    },
    {
      id: "exorax",
      title: "ExoraX AI",
      subtitle: "Commerce Intelligence",
      metrics: [
        { label: "Conversion", value: "+35%" },
        { label: "Products", value: "45K" },
        { label: "Revenue", value: "+$2.4M" },
        { label: "ROI", value: "340%" },
      ],
      preview: { products: [{ name: "Product A", score: 94 }, { name: "Product B", score: 78 }, { name: "Product C", score: 65 }], highlight: "+35%" },
    },
  ]
  const products = data ?? fallbackData
  const quantrion = products.find((p) => p.id === "quantrion") ?? fallbackData[0]
  const vdoc = products.find((p) => p.id === "vdoc") ?? fallbackData[1]
  const exorax = products.find((p) => p.id === "exorax") ?? fallbackData[2]
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProductPanel
        title={quantrion.title}
        subtitle={quantrion.subtitle}
        icon={Brain}
        color="cyan"
        metrics={quantrion.metrics}
      >
        <QuantrionPreview bars={quantrion.preview.bars ?? [40, 55, 45, 70, 65, 80, 75, 88]} highlight={quantrion.preview.highlight ?? "+48%"} />
      </ProductPanel>

      <ProductPanel
        title={vdoc.title}
        subtitle={vdoc.subtitle}
        icon={Film}
        color="purple"
        metrics={vdoc.metrics}
      >
        <VdocPreview badges={vdoc.preview.badges ?? ["Scene 1", "Scene 2", "Scene 3"]} highlight={vdoc.preview.highlight ?? "LIVE"} />
      </ProductPanel>

      <ProductPanel
        title={exorax.title}
        subtitle={exorax.subtitle}
        icon={ShoppingCart}
        color="emerald"
        metrics={exorax.metrics}
      >
        <ExoraXPreview products={exorax.preview.products ?? [{ name: "Product A", score: 94 }, { name: "Product B", score: 78 }, { name: "Product C", score: 65 }]} highlight={exorax.preview.highlight ?? "+35%"} />
      </ProductPanel>
    </div>
  )
}
