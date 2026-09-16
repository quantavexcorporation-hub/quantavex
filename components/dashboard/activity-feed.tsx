"use client"

import { Brain, Film, ShoppingCart, Zap, Activity } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { getActivities } from "@/lib/dashboard-data"

const iconMap = {
  learning: Brain,
  content: Film,
  commerce: ShoppingCart,
  system: Activity,
}

const colorMap = {
  learning: "text-cyan-400 bg-cyan-500/10",
  content: "text-purple-400 bg-purple-500/10",
  commerce: "text-emerald-400 bg-emerald-500/10",
  system: "text-gray-400 bg-gray-500/10",
}

export function ActivityFeed({
  data,
  error,
}: {
  data?: DashboardSnapshot["activities"]
  loading?: boolean
  error?: string | null
}) {
  const activities = data && data.length ? data : getActivities()

  return (
    <div className="flex h-full flex-col rounded border border-cyan-500/10 bg-[#0c0c14] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-medium text-white">Operating log</h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Record</span>
      </div>

      <div className="flex-1 overflow-hidden">
        {error && !data && <p className="mb-2 text-xs text-red-400">{error}</p>}
        {activities.map((activity) => {
          const Icon = iconMap[activity.type]
          const colors = colorMap[activity.type]

          return (
            <div key={activity.id} className="mb-2">
              <div className="flex items-start gap-2 rounded bg-white/[0.02] p-2">
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${colors}`}>
                  <Icon className="h-3 w-3" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs leading-snug text-gray-300">{activity.message}</p>
                  <span className="font-mono text-[9px] text-gray-600">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
