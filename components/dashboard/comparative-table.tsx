"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, X } from "lucide-react"
import { DashboardSnapshot } from "@/lib/dashboard-types"

const fallbackComparisons = [
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
]

export function ComparativeTable({ data }: { data?: DashboardSnapshot["comparisons"] }) {
  const comparisons = data ?? fallbackComparisons
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0c0c14] border border-cyan-500/10 rounded p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-white">Category contrast</h3>
          <p className="text-xs text-gray-500">Incumbent software versus Quantavex architecture</p>
        </div>
      </div>

      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="border-b border-cyan-500/10">
              <th className="text-left text-[10px] font-mono text-gray-500 pb-2 w-24">CATEGORY</th>
              <th className="text-left text-[10px] font-mono text-gray-500 pb-2">
                <span className="flex items-center gap-1">
                  <X className="w-3 h-3 text-red-400" />
                  TRADITIONAL
                </span>
              </th>
              <th className="text-center text-[10px] font-mono text-gray-500 pb-2 w-12"></th>
              <th className="text-left text-[10px] font-mono text-gray-500 pb-2">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-cyan-400" />
                  QUANTAVEX
                </span>
              </th>
              <th className="text-right text-[10px] font-mono text-gray-500 pb-2 w-20">IMPACT</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, index) => (
              <motion.tr
                key={row.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/5 group hover:bg-white/[0.02]"
              >
                <td className="py-2.5 text-xs font-medium text-white">{row.category}</td>
                <td className="py-2.5">
                  <span className="text-xs text-gray-500 bg-red-500/10 px-2 py-0.5 rounded">
                    {row.traditional}
                  </span>
                </td>
                <td className="py-2.5 text-center">
                  <ArrowRight className="w-4 h-4 text-gray-600 inline-block group-hover:text-cyan-400 transition-colors" />
                </td>
                <td className="py-2.5">
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    {row.quantavex}
                  </span>
                </td>
                <td className="py-2.5 text-right">
                  <span className="text-xs font-mono text-emerald-400">{row.improvement}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
