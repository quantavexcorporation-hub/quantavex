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
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { getPriorityRegions, marketBand, priorityMarketConnections } from "@/lib/priority-markets"

type RegionMap = DashboardSnapshot["regions"]
type RegionValue = RegionMap[string]

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const fallbackRegionData = getPriorityRegions()
const connections = priorityMarketConnections

const ink = {
  land: "#111114",
  landActive: "#2a2a2e",
  landSelected: "#d4d4d8",
  stroke: "#3f3f46",
  strokeActive: "#a1a1aa",
  line: "rgba(228,228,231,0.28)",
  mark: "#fafafa",
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

const MapMarker = memo(function MapMarker({
  data,
  rank,
  selected,
}: {
  data: RegionValue
  rank: number
  selected: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const open = hovered || selected

  return (
    <Marker coordinates={data.coordinates}>
      <g
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: "pointer" }}
      >
        <circle r={selected ? 5 : 3} fill={ink.mark} />
        <AnimatePresence>
          {open ? (
            <motion.foreignObject
              x={10}
              y={-36}
              width={168}
              height={56}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="border border-white/15 bg-[#09090b]/95 px-2.5 py-2">
                <p className="font-mono text-[10px] tracking-[0.18em] text-zinc-500">
                  {pad(rank)} · {marketBand(data.priority).toUpperCase()}
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-tight text-white">{data.name}</p>
              </div>
            </motion.foreignObject>
          ) : null}
        </AnimatePresence>
      </g>
    </Marker>
  )
})

const NetworkLines = memo(function NetworkLines({
  regionData,
}: {
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
            stroke={ink.line}
            strokeWidth={0.7}
            strokeLinecap="round"
          />
        )
      })}
    </>
  )
})

export function GlobalIntelligenceMap({
  data,
  compact = false,
}: {
  data?: DashboardSnapshot["regions"]
  lastSyncSeconds?: number
  compact?: boolean
}) {
  const regionData = data ?? fallbackRegionData
  const [selectedRegion, setSelectedRegion] = useState<string | null>("IND")
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setMapReady(true)
  }, [])

  const sortedRegions = Object.entries(regionData).sort(
    ([, a], [, b]) => (a.priority ?? 99) - (b.priority ?? 99)
  )

  const handleRegionClick = useCallback((code: string) => {
    setSelectedRegion((prev) => (prev === code ? null : code))
  }, [])

  return (
    <div className="overflow-hidden rounded-none border border-white/10 bg-[#08080a]">
      <div className="flex items-end justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Operations</p>
          <h2 className={`${compact ? "text-sm" : "text-lg sm:text-xl"} mt-1 font-semibold tracking-tight text-white`}>
            Entry sequence
          </h2>
        </div>
        <p className="max-w-[14rem] text-right text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          India first · 30 markets
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div
          className={`relative min-w-0 flex-1 overflow-hidden ${
            compact ? "h-[220px] sm:h-[280px]" : "h-[280px] sm:h-[420px] lg:h-[560px]"
          }`}
        >
          {mapReady ? (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 130, center: [20, 20] }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const regionCode = geo.properties.ISO_A3 as string
                    const isActive = Boolean(regionData[regionCode])
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
                            fill: isActive ? (isSelected ? ink.landSelected : ink.landActive) : ink.land,
                            stroke: isActive ? ink.strokeActive : ink.stroke,
                            strokeWidth: isActive ? 0.6 : 0.25,
                            outline: "none",
                            cursor: isActive ? "pointer" : "default",
                          },
                          hover: {
                            fill: isActive ? "#f4f4f5" : "#18181b",
                            stroke: isActive ? "#fafafa" : ink.stroke,
                            strokeWidth: isActive ? 0.8 : 0.3,
                            outline: "none",
                          },
                          pressed: {
                            fill: isActive ? ink.landSelected : ink.land,
                            outline: "none",
                          },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
              <NetworkLines regionData={regionData} />
              {sortedRegions.map(([code, data]) => (
                <MapMarker
                  key={code}
                  data={data}
                  rank={data.priority}
                  selected={selectedRegion === code}
                />
              ))}
            </ComposableMap>
          ) : (
            <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Loading geography
            </div>
          )}
        </div>

        {!compact ? (
          <div className="w-full border-t border-white/10 lg:w-80 lg:shrink-0 lg:border-t-0 lg:border-l">
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Corridor</p>
            </div>
            <div className="max-h-[280px] overflow-y-auto sm:max-h-[360px] lg:max-h-[520px]">
              {sortedRegions.map(([code, data]) => {
                const selected = selectedRegion === code
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleRegionClick(code)}
                    className={`flex w-full items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-2.5 text-left transition ${
                      selected ? "bg-white text-black" : "text-zinc-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span
                        className={`font-mono text-[11px] tracking-wider ${
                          selected ? "text-black/50" : "text-zinc-600"
                        }`}
                      >
                        {pad(data.priority)}
                      </span>
                      <span className="truncate text-sm font-medium tracking-tight">{data.name}</span>
                    </span>
                    <span
                      className={`shrink-0 text-[10px] uppercase tracking-[0.16em] ${
                        selected ? "text-black/55" : "text-zinc-600"
                      }`}
                    >
                      {marketBand(data.priority)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
