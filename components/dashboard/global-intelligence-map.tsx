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

type RegionMap = DashboardSnapshot["regions"]
type RegionValue = RegionMap[string]

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Region data with coordinates and metrics
const fallbackRegionData: Record<string, {
  name: string
  coordinates: [number, number]
  metrics: {
    learning: number
    engagement: number
    commerce: number
  }
  trend: number[]
  intensity: "low" | "medium" | "high"
}> = {
  USA: {
    name: "United States",
    coordinates: [-95.7129, 37.0902],
    metrics: { learning: 65, engagement: 350, commerce: 42 },
    trend: [30, 45, 38, 52, 48, 60, 55, 68, 72, 78],
    intensity: "high",
  },
  IND: {
    name: "India",
    coordinates: [78.9629, 20.5937],
    metrics: { learning: 72, engagement: 280, commerce: 35 },
    trend: [25, 32, 45, 52, 58, 65, 70, 75, 80, 85],
    intensity: "high",
  },
  GBR: {
    name: "United Kingdom",
    coordinates: [-3.436, 55.3781],
    metrics: { learning: 58, engagement: 220, commerce: 38 },
    trend: [28, 35, 42, 48, 55, 52, 58, 62, 65, 68],
    intensity: "medium",
  },
  DEU: {
    name: "Germany",
    coordinates: [10.4515, 51.1657],
    metrics: { learning: 52, engagement: 195, commerce: 28 },
    trend: [22, 28, 32, 38, 42, 45, 48, 52, 55, 58],
    intensity: "medium",
  },
  JPN: {
    name: "Japan",
    coordinates: [138.2529, 36.2048],
    metrics: { learning: 48, engagement: 175, commerce: 32 },
    trend: [20, 25, 30, 35, 40, 45, 48, 52, 55, 58],
    intensity: "medium",
  },
  BRA: {
    name: "Brazil",
    coordinates: [-51.9253, -14.235],
    metrics: { learning: 42, engagement: 145, commerce: 25 },
    trend: [18, 22, 28, 32, 38, 42, 45, 48, 50, 52],
    intensity: "low",
  },
  AUS: {
    name: "Australia",
    coordinates: [133.7751, -25.2744],
    metrics: { learning: 55, engagement: 185, commerce: 30 },
    trend: [25, 30, 35, 42, 48, 52, 55, 58, 62, 65],
    intensity: "medium",
  },
  SGP: {
    name: "Singapore",
    coordinates: [103.8198, 1.3521],
    metrics: { learning: 68, engagement: 320, commerce: 45 },
    trend: [35, 42, 50, 58, 65, 72, 78, 82, 85, 88],
    intensity: "high",
  },
}

// Network connections between regions
const connections = [
  { from: "USA", to: "GBR" },
  { from: "USA", to: "JPN" },
  { from: "USA", to: "IND" },
  { from: "GBR", to: "DEU" },
  { from: "IND", to: "SGP" },
  { from: "JPN", to: "SGP" },
  { from: "AUS", to: "SGP" },
  { from: "BRA", to: "USA" },
]

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
      {connections.map((conn, i) => {
        const from = regionData[conn.from]
        const to = regionData[conn.to]
        if (!from || !to) return null

        return (
          <Line
            key={`${conn.from}-${conn.to}`}
            from={from.coordinates}
            to={to.coordinates}
            stroke="url(#lineGradient)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray="4 2"
            style={{
              opacity: 0.4,
              animation: `dash ${3 + i * 0.5}s linear infinite`,
            }}
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
}: {
  data?: DashboardSnapshot["regions"]
  lastSyncSeconds?: number
}) {
  const regionData = data ?? fallbackRegionData
  const [activeMetric, setActiveMetric] = useState<MetricType>("learning")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; opacity: number }[]
  >([])

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

  // Sort regions by active metric
  const sortedRegions = Object.entries(regionData).sort(
    ([, a], [, b]) => b.metrics[activeMetric] - a.metrics[activeMetric]
  )

  const handleRegionClick = useCallback((code: string) => {
    setSelectedRegion((prev) => (prev === code ? null : code))
  }, [])

  return (
    <div className="bg-[#0a0a0f] rounded-xl border border-cyan-500/10 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <h2 className="text-lg font-semibold text-white">
            Global Intelligence Map
          </h2>
          <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
            LIVE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Last sync: {lastSyncSeconds}s ago</span>
        </div>
      </div>

      <div className="flex">
        {/* Map Container */}
        <div className="flex-1 relative h-[500px] overflow-hidden">
          {/* Grid overlay */}
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
            <NetworkLines connections={connections} regionData={regionData} />

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

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-[#0f0f18]/90 backdrop-blur-sm border border-white/10 rounded-lg p-3">
            <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">
              Activity Intensity
            </p>
            <div className="flex items-center gap-4">
              {(["low", "medium", "high"] as const).map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: intensityColors[level],
                      boxShadow: `0 0 8px ${intensityColors[level]}`,
                    }}
                  />
                  <span className="text-xs text-gray-400 capitalize">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-72 border-l border-cyan-500/10 bg-[#0a0a0f]">
          {/* Metric Toggle */}
          <div className="p-4 border-b border-cyan-500/10">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
              Metrics
            </p>
            <div className="flex gap-2">
              {(["learning", "engagement", "commerce"] as const).map(
                (metric) => (
                  <button
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`flex-1 px-2 py-1.5 rounded text-xs font-medium transition-all ${
                      activeMetric === metric
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                        : "bg-white/5 text-gray-400 border border-transparent hover:border-white/10"
                    }`}
                  >
                    {metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Region Ranking */}
          <div className="p-4">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
              Region Ranking
            </p>
            <div className="space-y-2 max-h-[380px] overflow-y-auto custom-scrollbar">
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
