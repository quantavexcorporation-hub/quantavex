"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  learning: "text-teal-400 bg-teal-500/10",
  content: "text-rose-400 bg-rose-500/10",
  commerce: "text-zinc-300 bg-zinc-500/10",
  system: "text-gray-400 bg-gray-500/10",
}

const newsWire: DashboardSnapshot["activities"] = [
  { id: "n1", type: "system", message: "Quantavex parent company record published for Quantrion, Vdoc, and ExoraX.", timestamp: "" },
  { id: "n2", type: "learning", message: "Quantrion monograph complete — 99 pages, exam intelligence architecture.", timestamp: "" },
  { id: "n3", type: "content", message: "Vdoc monograph complete — 108 pages, interactive entertainment OS.", timestamp: "" },
  { id: "n4", type: "commerce", message: "ExoraX monograph complete — 58 pages, decision commerce architecture.", timestamp: "" },
  { id: "n5", type: "system", message: "Three product dossiers specified. Live product sites pending upload.", timestamp: "" },
  { id: "n6", type: "learning", message: "Space economy horizon noted — ~$1.8T projected by 2035; Quantrion aims at that intelligence layer.", timestamp: "" },
  { id: "n7", type: "content", message: "Virtual economy signal — virtual goods already $100B+; Vdoc aims at ownership inside experience.", timestamp: "" },
  { id: "n8", type: "commerce", message: "Trade economy scale — global trade ~$35T; ExoraX aims at decisions before capital moves.", timestamp: "" },
  { id: "n9", type: "system", message: "Founder-led company behind Quantrion, Vdoc, and ExoraX — research first, then the machine.", timestamp: "" },
  { id: "n10", type: "learning", message: "Exam atlas specified across 150+ competitive pathways inside Quantrion architecture.", timestamp: "" },
  { id: "n11", type: "content", message: "Vdoc loop restated — Speak → Enter → Shape → Own across formats.", timestamp: "" },
  { id: "n12", type: "commerce", message: "ExoraX confidence loop — intent, inspect in 3D/AR, then decide with clarity.", timestamp: "" },
  { id: "n13", type: "system", message: "Operating posture: architecture scores and monograph targets — not live production telemetry.", timestamp: "" },
  { id: "n14", type: "learning", message: "Category contrast refresh — static content vs adaptive examination intelligence.", timestamp: "" },
  { id: "n15", type: "commerce", message: "Returns thesis restated — 20–35% today in fashion/electronics; design for confidence before buy.", timestamp: "" },
]

function stamp(ageSec: number) {
  if (ageSec < 3) return "Just now"
  if (ageSec < 60) return `${ageSec}s ago`
  return `${Math.floor(ageSec / 60)}m ago`
}

export function ActivityFeed({
  data,
  error,
}: {
  data?: DashboardSnapshot["activities"]
  loading?: boolean
  error?: string | null
}) {
  const seed = useMemo(
    () => (data && data.length ? data : getActivities()),
    [data]
  )
  const [wireIndex, setWireIndex] = useState(0)
  const [items, setItems] = useState(() =>
    seed.slice(0, 4).map((item, i) => ({
      ...item,
      uid: `${item.id}-seed-${i}`,
      ageSec: i * 18,
    }))
  )

  useEffect(() => {
    const pushTimer = window.setInterval(() => {
      setWireIndex((i) => {
        const next = (i + 1) % newsWire.length
        const incoming = newsWire[next]
        setItems((prev) => {
          const aged = prev.map((item) => ({ ...item, ageSec: item.ageSec + 8 }))
          const entry = {
            ...incoming,
            uid: `${incoming.id}-${Date.now()}`,
            ageSec: 0,
          }
          return [entry, ...aged].slice(0, 4)
        })
        return next
      })
    }, 8000)
    return () => window.clearInterval(pushTimer)
  }, [])

  return (
    <div className="flex h-full flex-col overflow-hidden rounded border border-cyan-500/10 bg-[#0c0c14] p-4">
      <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-medium text-white">Operating log</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          Live
        </span>
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {error && !data ? <p className="mb-2 text-xs text-red-400">{error}</p> : null}
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((activity) => {
            const Icon = iconMap[activity.type]
            const colors = colorMap[activity.type]

            return (
              <motion.div
                key={activity.uid}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <div className="flex items-start gap-2 rounded bg-white/[0.02] p-2 ring-1 ring-white/[0.03]">
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${colors}`}>
                    <Icon className="h-3 w-3" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-xs leading-snug text-gray-300">{activity.message}</p>
                    <span className="font-mono text-[9px] text-gray-600">{stamp(activity.ageSec)}</span>
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
