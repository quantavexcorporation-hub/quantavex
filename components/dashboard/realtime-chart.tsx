"use client"

import { useEffect, useState } from "react"
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import { DashboardSnapshot } from "@/lib/dashboard-types"

type DataPoint = DashboardSnapshot["chart"][number]

function generateInitialData(): DataPoint[] {
  const data: DataPoint[] = []
  for (let i = 0; i < 20; i++) {
    data.push({
      time: `${i}s`,
      learning: 60 + Math.random() * 30,
      engagement: 40 + Math.random() * 40,
      conversion: 20 + Math.random() * 25,
    })
  }
  return data
}

export function RealtimeChart({
  data: serverData,
  loading,
  error,
  chartHeight = 180,
}: {
  data?: DashboardSnapshot["chart"]
  loading?: boolean
  error?: string | null
  chartHeight?: number
}) {
  const [data, setData] = useState<DataPoint[]>([])
  const [activeMetric, setActiveMetric] = useState<"all" | "learning" | "engagement" | "conversion">("all")

  useEffect(() => {
    if (serverData?.length) {
      setData(serverData)
      return
    }

    setData(generateInitialData())
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)]
        newData.push({
          time: `${Date.now() % 100}s`,
          learning: 60 + Math.random() * 30,
          engagement: 40 + Math.random() * 40,
          conversion: 20 + Math.random() * 25,
        })
        return newData
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [serverData])

  const metrics = [
    { key: "all", label: "All Metrics", color: "white" },
    { key: "learning", label: "Learning", color: "#2dd4bf" },
    { key: "engagement", label: "Engagement", color: "#f43f5e" },
    { key: "conversion", label: "Conversion", color: "#a1a1aa" },
  ]

  return (
    <div className="bg-[#101018] border border-white/5 rounded-xl p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-white">Revenue Generated</h3>
          <p className="text-xs text-gray-500">Live learning, entertainment, and commerce yield</p>
        </div>
        <div className="flex gap-1">
          {metrics.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveMetric(m.key as typeof activeMetric)}
              className={`px-2 py-1 text-[10px] font-mono rounded transition-all ${
                activeMetric === m.key
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: chartHeight }}>
        {loading && !serverData && <p className="text-xs text-gray-500 mb-2">Loading chart data...</p>}
        {error && !serverData && <p className="text-xs text-red-400 mb-2">Chart error: {error}</p>}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradientLearning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradientEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradientConversion" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a1a1aa" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4b5563", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#4b5563", fontSize: 10 }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0c0c14",
                border: "1px solid rgba(34, 211, 238, 0.2)",
                borderRadius: "4px",
                fontSize: "11px",
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            {(activeMetric === "all" || activeMetric === "learning") && (
              <>
                <Area
                  type="monotone"
                  dataKey="learning"
                  stroke="#2dd4bf"
                  strokeWidth={2}
                  fill="url(#gradientLearning)"
                />
              </>
            )}
            {(activeMetric === "all" || activeMetric === "engagement") && (
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#f43f5e"
                strokeWidth={2}
                fill="url(#gradientEngagement)"
              />
            )}
            {(activeMetric === "all" || activeMetric === "conversion") && (
              <Area
                type="monotone"
                dataKey="conversion"
                stroke="#a1a1aa"
                strokeWidth={2}
                fill="url(#gradientConversion)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-cyan-500/10">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-[10px] text-gray-400">Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-[10px] text-gray-400">Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-300" />
            <span className="text-[10px] text-gray-400">Conversion</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-gray-500">LIVE</span>
      </div>
    </div>
  )
}
