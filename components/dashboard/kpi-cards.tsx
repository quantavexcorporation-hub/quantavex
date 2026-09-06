"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, ShoppingCart, ArrowUpRight } from "lucide-react"
import { DashboardSnapshot, KPIItem } from "@/lib/dashboard-types"

const fallbackKpis: KPIItem[] = [
  {
    id: "learning",
    label: "Learning Efficiency",
    value: 48,
    suffix: "%",
    range: "+48–88%",
    trend: 12.4,
    color: "cyan",
  },
  {
    id: "engagement",
    label: "Engagement Rate",
    value: 2,
    suffix: "x",
    range: "2x–5x",
    trend: 8.2,
    color: "purple",
  },
  {
    id: "conversion",
    label: "Conversion Lift",
    value: 20,
    suffix: "%",
    range: "+20–35%",
    trend: 15.7,
    color: "emerald",
  },
]

const iconMap: Record<string, React.ElementType> = {
  learning: TrendingUp,
  engagement: Users,
  conversion: ShoppingCart,
}

function AnimatedValue({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [target])

  return (
    <span>
      {suffix === "x" ? value : `+${value}`}
      {suffix}
    </span>
  )
}

export function KPICards({
  data,
  loading,
  error,
}: {
  data?: DashboardSnapshot["kpis"]
  loading?: boolean
  error?: string | null
}) {
  const kpis = data ?? fallbackKpis

  if (loading && !data) {
    return <div className="grid grid-cols-3 gap-4 text-xs text-gray-500">Loading KPI metrics...</div>
  }

  if (error && !data) {
    return (
      <div className="grid grid-cols-1 gap-4 text-xs text-red-400 border border-red-500/20 rounded p-3 bg-red-500/5">
        Unable to load KPI metrics: {error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {kpis.map((kpi, index) => {
        const Icon = iconMap[kpi.id] ?? TrendingUp
        const colorClasses = {
          cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
          purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
          emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
        }[kpi.color]

        return (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-gradient-to-br ${colorClasses} border rounded p-4 overflow-hidden group hover:scale-[1.02] transition-transform`}
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${
                kpi.color === "cyan"
                  ? "from-cyan-500/10"
                  : kpi.color === "purple"
                  ? "from-purple-500/10"
                  : "from-emerald-500/10"
              } to-transparent`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 opacity-60" />
                <div className="flex items-center gap-1 text-xs">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+{kpi.trend}%</span>
                </div>
              </div>

              <div className="text-3xl font-mono font-bold text-white mb-1">
                <AnimatedValue target={kpi.value} suffix={kpi.suffix} />
              </div>

              <div className="text-xs text-gray-400 mb-2">{kpi.label}</div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">Range: {kpi.range}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-3 rounded-sm ${
                        i < 3
                          ? kpi.color === "cyan"
                            ? "bg-cyan-400"
                            : kpi.color === "purple"
                            ? "bg-purple-400"
                            : "bg-emerald-400"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
