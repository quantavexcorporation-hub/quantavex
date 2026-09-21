"use client"

import { useState, useEffect, memo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps"
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { getPriorityRegions, priorityMarketConnections } from "@/lib/priority-markets"

type RegionMap = DashboardSnapshot["regions"]
type RegionValue = RegionMap[string]

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const fallbackRegionData = getPriorityRegions()
const connections = priorityMarketConnections

type MetricType = "learning" | "engagement" | "commerce"

const intensityColors = {
  low: "#1e3a5f",
  medium: "#7c3aed",
  high: "#00ffff",
}

// Floating data card component
const FloatingDataCard = memo(function FloatingDataCard({
  region,
  data,
  activeMetric,
}: {
  region: string
  data: RegionValue
  activeMetric: MetricType
}) {
  const [isHovered, setIsHovered] = useState(false)

  const metricLabels: Record<MetricType, string> = {
    learning: "Learning",
    engagement: "Engagement",
    commerce: "Commerce",
  }

  const metricSuffixes: Record<MetricType, string> = {
    learning: "%",
    engagement: "x",
    commerce: "%",
  }

  const metricPrefixes: Record<MetricType, string> = {
    learning: "+",
    engagement: "",
    commerce: "+",
  }

  const value = data.metrics[activeMetric]
  const displayValue =
    activeMetric === "engagement"
      ? (value / 100).toFixed(1)
      : value.toString()

  return (
    <Marker coordinates={data.coordinates}>
      <motion.g
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: "pointer" }}
      >
        {/* Pulse animation */}
        <motion.circle
          r={isHovered ? 20 : 12}
          fill={intensityColors[data.intensity]}
          opacity={0.3}
          initial={false}
          animate={{
            r: isHovered ? [20, 25, 20] : [12, 16, 12],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Center dot */}
        <motion.circle
          r={isHovered ? 8 : 5}
          fill={intensityColors[data.intensity]}
          stroke="#0a0a0f"
          strokeWidth={2}
          initial={false}
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          style={{
            filter: `drop-shadow(0 0 ${isHovered ? "10px" : "5px"} ${intensityColors[data.intensity]})`,
          }}
        />

        {/* Data card */}
        <AnimatePresence>
          {isHovered && (
            <motion.foreignObject
              x={10}
              y={-50}
              width={140}
              height={80}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-[#0f0f18]/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 shadow-xl shadow-cyan-500/10">
                <p className="text-xs text-gray-400 font-medium">{data.name}</p>
                <p className="text-lg font-bold text-cyan-400">
                  {metricPrefixes[activeMetric]}
                  {displayValue}
                  {metricSuffixes[activeMetric]}
                </p>
                <p className="text-[10px] text-gray-500">
                  {metricLabels[activeMetric]} Activity
                </p>
              </div>
            </motion.foreignObject>
          )}
        </AnimatePresence>
      </motion.g>
    </Marker>
  )
})

// Network connection lines
const NetworkLines = memo(function NetworkLines({
  connections,
  regionData,
}: {
  connections: { from: string; to: string }[]
  regionData: RegionMap
}) {
  return (
    <>
      {connections.map((conn) => {
        const from = regionData[conn.from]
        const to = regionData[conn.to]
        if (!from || !to) return null

        return (
          <Line
            key={`${conn.from}-${conn.to}`}
            from={from.coordinates}
            to={to.coordinates}
            stroke="#22d3ee"
            strokeWidth={1}
            strokeLinecap="round"
          />
        )
      })}
    </>
  )
})

// Mini sparkline chart for side panel
const MiniSparkline = memo(function MiniSparkline({
  data,
  color,
}: {
  data: number[]
  color: string
}) {
  const chartData = data.map((value, index) => ({ value, index }))

  return (
    <ResponsiveContainer width="100%" height={30}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          fill={`url(#spark-${color})`}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
})

// Side panel region item
const RegionItem = memo(function RegionItem({
  code,
  data,
  activeMetric,
  rank,
  isSelected,
  onClick,
}: {
  code: string
  data: RegionValue
  activeMetric: MetricType
  rank: number
  isSelected: boolean
  onClick: () => void
}) {
  const value = data.metrics[activeMetric]
  const displayValue =
    activeMetric === "engagement"
      ? (value / 100).toFixed(1) + "x"
      : "+" + value + "%"

  return (
    <motion.button
      onClick={onClick}
      className={`w-full p-3 rounded-lg border transition-all text-left ${
        isSelected
          ? "bg-cyan-500/10 border-cyan-500/40"
          : "bg-[#0f0f18]/60 border-white/5 hover:border-cyan-500/20"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <span
          className={`text-xs font-bold w-5 h-5 rounded flex items-center justify-center ${
            rank <= 3
              ? "bg-cyan-500/20 text-cyan-400"
              : "bg-white/5 text-gray-500"
          }`}
        >
          {rank}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white truncate">
              {data.name}
            </span>
            <span
              className={`text-sm font-bold ${
                data.intensity === "high"
                  ? "text-cyan-400"
                  : data.intensity === "medium"
                    ? "text-purple-400"
                    : "text-blue-400"
              }`}
            >
              {displayValue}
            </span>
          </div>
          <div className="mt-1">
            <MiniSparkline
              data={data.trend}
              color={intensityColors[data.intensity]}
            />
          </div>
        </div>
      </div>
    </motion.button>
  )
})

// Main component
export function GlobalIntelligenceMap({
  data,
  lastSyncSeconds = 2,
  compact = false,
}: {
  data?: DashboardSnapshot["regions"]
  lastSyncSeconds?: number
  compact?: boolean
}) {
  const regionData = data ?? fallbackRegionData
  const [activeMetric, setActiveMetric] = useState<MetricType>("learning")
  const [selectedRegion, setSelectedRegion] = useState<string | null>("IND")
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; opacity: number }[]
  >([])
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setMapReady(true)
  }, [])

  // Generate floating particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [
          ...prev.filter((p) => p.opacity > 0.1),
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0.6,
          },
        ].slice(-20)

        return newParticles.map((p) => ({
          ...p,
          x: p.x + (Math.random() - 0.5) * 2,
          y: p.y + (Math.random() - 0.5) * 2,
          opacity: p.opacity * 0.95,
        }))
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  // India first, then high-economy expansion; metric as tie-breaker
  const sortedRegions = Object.entries(regionData).sort(([, a], [, b]) => {
    const pa = a.priority ?? 99
    const pb = b.priority ?? 99
    if (pa !== pb) return pa - pb
    return b.metrics[activeMetric] - a.metrics[activeMetric]
  })


  const handleRegionClick = useCallback((code: string) => {
    setSelectedRegion((prev) => (prev === code ? null : code))
  }, [])

  return (
    <div className="bg-[#0a0a0f] rounded-xl border border-cyan-500/10 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-cyan-500/10 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
          <h2 className={`${compact ? "text-sm font-medium" : "text-base font-semibold sm:text-lg"} text-white`}>
            Priority markets
          </h2>
          <span className="rounded bg-white/5 px-2 py-1 text-[10px] text-gray-500 sm:text-xs">
            Future plan
          </span>
        </div>
        <p className="text-[10px] text-gray-500 sm:text-xs sm:text-gray-400">
          Ambitious projection · not live data
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Map Container */}
        <div
          className={`relative min-w-0 flex-1 overflow-hidden ${
            compact ? "h-[220px] sm:h-[280px]" : "h-[260px] sm:h-[380px] lg:h-[500px]"
          }`}
        >          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
              }}
            />
          ))}

          {/* Map */}
          {mapReady ? (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
              center: [20, 20],
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity={0} />
                <stop offset="50%" stopColor="#00ffff" stopOpacity={1} />
                <stop offset="100%" stopColor="#00ffff" stopOpacity={0} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionCode = geo.properties.ISO_A3
                  const isActive = regionData[regionCode]
                  const isSelected = selectedRegion === regionCode

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (isActive) handleRegionClick(regionCode)
                      }}
                      style={{
                        default: {
                          fill: isActive
                            ? isSelected
                              ? intensityColors[regionData[regionCode].intensity]
                              : `${intensityColors[regionData[regionCode].intensity]}40`
                            : "#1a1a2e",
                          stroke: isActive
                            ? intensityColors[regionData[regionCode].intensity]
                            : "#2a2a3e",
                          strokeWidth: isActive ? 0.8 : 0.3,
                          outline: "none",
                          transition: "all 0.3s ease",
                          cursor: isActive ? "pointer" : "default",
                        },
                        hover: {
                          fill: isActive
                            ? `${intensityColors[regionData[regionCode].intensity]}80`
                            : "#252540",
                          stroke: isActive
                            ? intensityColors[regionData[regionCode].intensity]
                            : "#3a3a4e",
                          strokeWidth: isActive ? 1.2 : 0.5,
                          outline: "none",
                        },
                        pressed: {
                          fill: isActive
                            ? intensityColors[regionData[regionCode].intensity]
                            : "#1a1a2e",
                          outline: "none",
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>

            {/* Network connection lines */}
            {mapReady ? <NetworkLines connections={connections} regionData={regionData} /> : null}

            {/* Data markers */}
            {Object.entries(regionData).map(([code, data]) => (
              <FloatingDataCard
                key={code}
                region={code}
                data={data}
                activeMetric={activeMetric}
              />
            ))}
          </ComposableMap>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-gray-500">Loading geography...</div>
          )}

          {/* Legend */}
          <div className="absolute bottom-2 left-2 rounded-lg border border-white/10 bg-[#0f0f18]/90 p-2 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:p-3">
            <p className="mb-1.5 text-[9px] uppercase tracking-wider text-gray-400 sm:mb-2 sm:text-[10px]">
              Planned intensity
            </p>
            <div className="flex items-center gap-2.5 sm:gap-4">
              {(["low", "medium", "high"] as const).map((level) => (
                <div key={level} className="flex items-center gap-1.5 sm:gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                    style={{
                      backgroundColor: intensityColors[level],
                      boxShadow: `0 0 8px ${intensityColors[level]}`,
                    }}
                  />
                  <span className="text-[10px] capitalize text-gray-400 sm:text-xs">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        {!compact ? (
        <div className="w-full border-t border-cyan-500/10 bg-[#0a0a0f] lg:w-72 lg:shrink-0 lg:border-t-0 lg:border-l">
          {/* Metric Toggle */}
          <div className="border-b border-cyan-500/10 p-3 sm:p-4">
            <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">
              Metrics
            </p>
            <div className="flex gap-2">
              {(["learning", "engagement", "commerce"] as const).map(
                (metric) => (
                  <button
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`flex-1 rounded px-2 py-2 text-[11px] font-medium transition-all sm:py-1.5 sm:text-xs ${
                      activeMetric === metric
                        ? "border border-cyan-500/40 bg-cyan-500/20 text-cyan-400"
                        : "border border-transparent bg-white/5 text-gray-400 hover:border-white/10"
                    }`}
                  >
                    {metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Region Ranking */}
          <div className="p-3 sm:p-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-400 sm:mb-3">
              Planned entry order
            </p>
            <p className="mb-3 text-[10px] leading-relaxed text-gray-600">
              Highly ambitious roadmap scores — predicted fit for the future, not current traffic or revenue.
            </p>
            <div className="custom-scrollbar max-h-[280px] space-y-2 overflow-y-auto sm:max-h-[360px] lg:max-h-[520px]">
              {sortedRegions.map(([code, data], index) => (
                <RegionItem
                  key={code}
                  code={code}
                  data={data}
                  activeMetric={activeMetric}
                  rank={index + 1}
                  isSelected={selectedRegion === code}
                  onClick={() => handleRegionClick(code)}
                />
              ))}
            </div>
          </div>
        </div>
        ) : null}
      </div>

      {/* Animated dash keyframes */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.2);
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}
