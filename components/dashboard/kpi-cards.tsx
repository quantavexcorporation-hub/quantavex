"use client"

import { useEffect, useState } from "react"
import { Brain, Users, ShoppingCart, Activity, ArrowUpRight } from "lucide-react"
import { DashboardSnapshot, KPIItem } from "@/lib/dashboard-types"

const fallbackKpis: KPIItem[] = [
  { id: "learning", label: "Learning Efficiency", value: 67, suffix: "%", range: "Adaptive lift", trend: 12.4, color: "cyan" },
  { id: "engagement", label: "Engagement Rate", value: 4, suffix: "x", range: "Session multiplier", trend: 8.2, color: "purple" },
  { id: "conversion", label: "Conversion Lift", value: 29, suffix: "%", range: "Checkout yield", trend: 15.7, color: "emerald" },
  { id: "traffic", label: "Platform Traffic", value: 184, suffix: "K", range: "Live sessions", trend: 21.4, color: "amber" },
]

const iconMap: Record<string, React.ElementType> = {
  learning: Brain,
  engagement: Users,
  conversion: ShoppingCart,
  traffic: Activity,
}

const tone = {
  cyan: { border: "border-l-teal-400", icon: "bg-teal-400/15 text-teal-300", bar: "bg-teal-400" },
  purple: { border: "border-l-rose-500", icon: "bg-rose-500/15 text-rose-300", bar: "bg-rose-500" },
  emerald: { border: "border-l-zinc-400", icon: "bg-zinc-400/15 text-zinc-300", bar: "bg-zinc-300" },
  amber: { border: "border-l-amber-400", icon: "bg-amber-400/15 text-amber-300", bar: "bg-amber-400" },
}

function formatValue(value: number, suffix: string) {
  if (suffix === "x") return `${value}x`
  if (suffix === "%") return `+${value}%`
  return `${value}${suffix}`
}

function AnimatedValue({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(target)

  useEffect(() => {
    const duration = 900
    const startTime = Date.now()
    const start = 0
    const animate = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (target - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    animate()
  }, [target])

  return <span>{formatValue(value, suffix)}</span>
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

  if (error && !data) {
    return (
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-400">
        Unable to load KPI metrics: {error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = iconMap[kpi.id] ?? Activity
        const style = tone[kpi.color]
        const progress = Math.min(100, Math.max(18, Math.round((kpi.trend / 24) * 100)))

        return (
          <div
            key={kpi.id}
            className={`rounded-xl border border-white/5 border-l-4 bg-[#101018] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ${style.border}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{kpi.range}</p>
                <p className="mt-2 font-mono text-3xl font-semibold text-white">
                  {loading && !data ? "—" : <AnimatedValue target={kpi.value} suffix={kpi.suffix} />}
                </p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.icon}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-300">{kpi.label}</p>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                <ArrowUpRight className="h-3 w-3" />
                +{kpi.trend}%
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${progress}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
