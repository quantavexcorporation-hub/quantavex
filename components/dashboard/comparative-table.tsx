"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, X } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"

const wire: DashboardSnapshot["comparisons"] = [
  {
    category: "Learning",
    traditional: "Static content",
    quantavex: "Adaptive intelligence",
    improvement: "+48–88%",
  },
  {
    category: "Entertainment",
    traditional: "Passive viewing",
    quantavex: "Interactive AI-driven",
    improvement: "2x–5x",
  },
  {
    category: "Commerce",
    traditional: "Static browsing",
    quantavex: "Immersive decision systems",
    improvement: "+20–35%",
  },
  {
    category: "Cost shape",
    traditional: "Linear content cost",
    quantavex: "Low marginal cost per user",
    improvement: "Architecture",
  },
  {
    category: "Feedback",
    traditional: "Delayed grading",
    quantavex: "Real-time loop",
    improvement: "Latency cut",
  },
  {
    category: "Story",
    traditional: "Linear catalog",
    quantavex: "Branching worlds",
    improvement: "Agency",
  },
  {
    category: "Purchase",
    traditional: "Comparison fatigue",
    quantavex: "Choreographed decision",
    improvement: "Confidence",
  },
  {
    category: "Returns",
    traditional: "20–35% wrong-item",
    quantavex: "Know it before it arrives",
    improvement: "30% → 10%",
  },
  {
    category: "Space",
    traditional: "Earth-only curricula",
    quantavex: "Intelligence for harder economies",
    improvement: "$1.8T horizon",
  },
  {
    category: "Virtual",
    traditional: "Skins as add-ons",
    quantavex: "Ownership in-world",
    improvement: "$100B+ goods",
  },
  {
    category: "Trade",
    traditional: "Shelf → checkout",
    quantavex: "Trading-grade clarity",
    improvement: "$35T scale",
  },
]

const WINDOW = 4

export function ComparativeTable({ data }: { data?: DashboardSnapshot["comparisons"] }) {
  const pool = useMemo(() => (data && data.length >= 4 ? [...data, ...wire.slice(4)] : wire), [data])
  const [offset, setOffset] = useState(0)
  const [activeRow, setActiveRow] = useState(0)

  useEffect(() => {
    const rotate = window.setInterval(() => {
      setOffset((o) => (o + 1) % pool.length)
      setActiveRow(0)
    }, 8000)
    return () => window.clearInterval(rotate)
  }, [pool.length])

  useEffect(() => {
    const highlight = window.setInterval(() => {
      setActiveRow((r) => (r + 1) % WINDOW)
    }, 4000)
    return () => window.clearInterval(highlight)
  }, [])

  const rows = Array.from({ length: WINDOW }, (_, i) => pool[(offset + i) % pool.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col overflow-hidden rounded border border-cyan-500/10 bg-[#0c0c14] p-4"
    >
      <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium text-white">Category contrast</h3>
          <p className="text-xs text-gray-500">Incumbent software versus Quantavex architecture</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cyan-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          Live
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden">
        <table className="w-full min-w-[480px] table-fixed">
          <thead>
            <tr className="border-b border-cyan-500/10">
              <th className="w-[18%] pb-2 text-left text-[10px] font-mono text-gray-500">CATEGORY</th>
              <th className="w-[28%] pb-2 text-left text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <X className="h-3 w-3 text-red-400" />
                  TRADITIONAL
                </span>
              </th>
              <th className="w-8 pb-2 text-center text-[10px] font-mono text-gray-500" />
              <th className="w-[28%] pb-2 text-left text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-cyan-400" />
                  QUANTAVEX
                </span>
              </th>
              <th className="w-[18%] pb-2 text-right text-[10px] font-mono text-gray-500">IMPACT</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {rows.map((row, index) => (
                <motion.tr
                  key={`${row.category}-${offset}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    backgroundColor: activeRow === index ? "rgba(34,211,238,0.06)" : "rgba(0,0,0,0)",
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-b border-white/5 group"
                >
                  <td className="truncate py-2 text-xs font-medium text-white">{row.category}</td>
                  <td className="py-2">
                    <span className="line-clamp-1 rounded bg-red-500/10 px-2 py-0.5 text-xs text-gray-500">
                      {row.traditional}
                    </span>
                  </td>
                  <td className="py-2 text-center">
                    <ArrowRight className="inline-block h-4 w-4 text-gray-600 transition-colors group-hover:text-cyan-400" />
                  </td>
                  <td className="py-2">
                    <span className="line-clamp-1 rounded bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-400">
                      {row.quantavex}
                    </span>
                  </td>
                  <td className="truncate py-2 text-right font-mono text-xs text-teal-300">{row.improvement}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
