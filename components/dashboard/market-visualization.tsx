"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { DashboardSnapshot } from "@/lib/dashboard-types"

const fallbackMarkets = [
  { name: "EdTech", value: 400, color: "#2dd4bf", growth: "$400B" },
  { name: "Entertainment", value: 2800, color: "#f43f5e", growth: "$2.8T" },
  { name: "Commerce", value: 6000, color: "#a1a1aa", growth: "$6T" },
]

export function MarketVisualization({ data }: { data?: DashboardSnapshot["markets"] }) {
  const markets = data ?? fallbackMarkets
  const max = Math.max(...markets.map((market) => market.value), 1)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col overflow-hidden border border-white/10 bg-[#09090b] p-4"
    >
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-white">Global market size</h3>
          <p className="text-xs text-gray-500">EdTech, entertainment, and commerce — industry scale, not Quantavex revenue.</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-mono font-bold text-white">$8T+</div>
          <div className="text-[10px] text-gray-500">Combined TAM</div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        {/* Pie Chart */}
        <div className="mx-auto h-32 w-32 shrink-0 sm:mx-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={markets}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={55}
                paddingAngle={2}
                dataKey="value"
              >
                {markets.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0c0c14",
                  border: "1px solid rgba(34, 211, 238, 0.2)",
                  borderRadius: "4px",
                  fontSize: "11px",
                }}
                formatter={(_value: number, name: string) => [
                  markets.find((m) => m.name === name)?.growth ?? name,
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Market Bars */}
        <div className="min-w-0 flex-1 space-y-3">
          {markets.map((market, index) => (
            <div key={market.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: market.color }}
                  />
                  <span className="text-xs text-gray-400">{market.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white">{market.growth}</span>
                </div>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(market.value / max) * 100}%` }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: market.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
