"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { DashboardSnapshot } from "@/lib/dashboard-types"

const fallbackMarkets = [
  { name: "EdTech", value: 400, color: "#22d3ee", growth: "+12.3%" },
  { name: "Entertainment", value: 2800, color: "#a855f7", growth: "+8.7%" },
  { name: "E-commerce", value: 6000, color: "#10b981", growth: "+15.2%" },
]

export function MarketVisualization({ data }: { data?: DashboardSnapshot["markets"] }) {
  const markets = data ?? fallbackMarkets
  const totalMarket = markets.reduce((sum, m) => sum + m.value, 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0c0c14] border border-cyan-500/10 rounded p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-white">Market Opportunity</h3>
          <p className="text-xs text-gray-500">Total addressable market by sector</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-mono font-bold text-white">${(totalMarket / 1000).toFixed(1)}T</div>
          <div className="text-[10px] text-gray-500">Combined TAM</div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Pie Chart */}
        <div className="w-32 h-32 flex-shrink-0">
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
                formatter={(value: number) => [`$${value}B`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Market Bars */}
        <div className="flex-1 space-y-3">
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
                  <span className="text-xs font-mono text-white">${market.value}B</span>
                  <span className="text-[10px] text-emerald-400">{market.growth}</span>
                </div>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(market.value / 6000) * 100}%` }}
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
