"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Film, ShoppingCart, Zap, Activity } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"

type ActivityItem = DashboardSnapshot["activities"][number]

const activityTemplates = [
  { type: "learning" as const, messages: [
    "User adapting learning path...",
    "Module difficulty adjusted for User #4829",
    "New skill tree unlocked: Advanced ML",
    "Learning efficiency improved +12%",
    "Personalized quiz generated",
  ]},
  { type: "content" as const, messages: [
    "Story generation updated...",
    "Scene 4 rendered with AI enhancement",
    "Content personalization applied",
    "Engagement prediction: 4.2x",
    "Interactive element inserted",
  ]},
  { type: "commerce" as const, messages: [
    "Purchase decision optimized...",
    "Product recommendation refined",
    "Conversion path shortened by 3 steps",
    "Cart abandonment prevented",
    "Price optimization applied",
  ]},
  { type: "system" as const, messages: [
    "Model weights updated",
    "Neural network optimized",
    "Cache invalidated: user_prefs",
    "API latency: 12ms",
    "Batch processing complete",
  ]},
]

function generateActivity(): ActivityItem {
  const template = activityTemplates[Math.floor(Math.random() * activityTemplates.length)]
  const message = template.messages[Math.floor(Math.random() * template.messages.length)]
  return {
    id: Math.random().toString(36).substr(2, 9),
    type: template.type,
    message,
    timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
  }
}

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
  loading,
  error,
}: {
  data?: DashboardSnapshot["activities"]
  loading?: boolean
  error?: string | null
}) {
  const [activities, setActivities] = useState<ActivityItem[]>(() => {
    return Array.from({ length: 5 }, generateActivity)
  })

  useEffect(() => {
    if (data) {
      setActivities(data)
      return
    }

    const interval = setInterval(() => {
      setActivities((prev) => {
        const newActivity = generateActivity()
        return [newActivity, ...prev.slice(0, 9)]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [data])

  return (
    <div className="bg-[#0c0c14] border border-cyan-500/10 rounded p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-medium text-white">Live Activity</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-500">STREAMING</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {loading && !data && <p className="text-xs text-gray-500 mb-2">Connecting to activity stream...</p>}
        {error && !data && <p className="text-xs text-red-400 mb-2">Stream error: {error}</p>}
        <AnimatePresence mode="popLayout">
          {activities.map((activity) => {
            const Icon = iconMap[activity.type]
            const colors = colorMap[activity.type]

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                <div className="flex items-start gap-2 p-2 rounded bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${colors}`}>
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-300 truncate">{activity.message}</p>
                    <span className="text-[9px] font-mono text-gray-600">{activity.timestamp}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
