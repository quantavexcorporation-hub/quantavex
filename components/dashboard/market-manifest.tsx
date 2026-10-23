"use client"

import { useEffect, useMemo, useState } from "react"
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps"
import {
  getManifestModel,
  getPriorityRegions,
  marketBand,
  type ManifestNode,
  type MarketBand,
} from "@/lib/priority-markets"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const regionData = getPriorityRegions()
const modelEdges = getManifestModel().edges

const W = 1000
const H = 620
const bands: Array<MarketBand | "All"> = ["All", "Home", "Core", "Next", "Later"]

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function formatKm(km: number) {
  return `${km.toLocaleString("en-IN")} km`
}

function formatCoord(lon: number, lat: number) {
  const ns = lat >= 0 ? "N" : "S"
  const ew = lon >= 0 ? "E" : "W"
  return `${Math.abs(lat).toFixed(2)}°${ns}  ${Math.abs(lon).toFixed(2)}°${ew}`
}

function networkPoint(node: ManifestNode) {
  const cx = W / 2
  const cy = H / 2
  if (node.code === "IND") return { x: cx, y: cy }
  const radius =
    node.band === "Core" ? 0.3 : node.band === "Next" ? 0.54 : 0.78
  const r = radius * Math.min(cx, cy) * 0.9
  const angle = ((node.lon + 180) / 360) * Math.PI * 2 - Math.PI / 2
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
}

function ManifestWorldMap({
  selected,
  band,
  onSelect,
}: {
  selected: string
  band: MarketBand | "All"
  onSelect: (code: string) => void
}) {
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setMapReady(true)
  }, [])

  const inBand = (code: string) => {
    const node = regionData[code]
    if (!node) return false
    if (band === "All") return true
    return marketBand(node.priority) === band
  }

  if (!mapReady) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        Loading geography
      </div>
    )
  }

  return (
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
            const isSelected = selected === regionCode
            const faded = isActive && !inBand(regionCode) && !isSelected

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  if (isActive) onSelect(regionCode)
                }}
                style={{
                  default: {
                    fill: isActive
                      ? isSelected
                        ? "#d4d4d8"
                        : faded
                          ? "#18181b"
                          : "#2a2a2e"
                      : "#111114",
                    stroke: isActive ? "#a1a1aa" : "#3f3f46",
                    strokeWidth: isActive ? 0.6 : 0.25,
                    outline: "none",
                    cursor: isActive ? "pointer" : "default",
                  },
                  hover: {
                    fill: isActive ? "#f4f4f5" : "#18181b",
                    stroke: isActive ? "#fafafa" : "#3f3f46",
                    strokeWidth: isActive ? 0.8 : 0.3,
                    outline: "none",
                  },
                  pressed: {
                    fill: isActive ? "#d4d4d8" : "#111114",
                    outline: "none",
                  },
                }}
              />
            )
          })
        }
      </Geographies>
      {modelEdges.map((conn) => {
        const from = regionData[conn.from]
        const to = regionData[conn.to]
        if (!from || !to) return null
        const hot = conn.from === selected || conn.to === selected
        const shown = inBand(conn.from) && inBand(conn.to)
        if (!shown && !hot) return null
        return (
          <Line
            key={`${conn.from}-${conn.to}`}
            from={from.coordinates}
            to={to.coordinates}
            stroke={hot ? "rgba(250,250,250,0.75)" : "rgba(228,228,231,0.28)"}
            strokeWidth={hot ? 1.2 : 0.7}
            strokeLinecap="round"
          />
        )
      })}
      {Object.entries(regionData).map(([code, data]) => {
        const isSelected = selected === code
        const faded = !inBand(code) && !isSelected
        return (
          <Marker key={code} coordinates={data.coordinates}>
            <g onClick={() => onSelect(code)} style={{ cursor: "pointer", opacity: faded ? 0.2 : 1 }}>
              <circle r={isSelected ? 5 : 3} fill="#fafafa" />
              {isSelected ? (
                <text
                  y={-10}
                  textAnchor="middle"
                  fill="#fafafa"
                  fontSize="9"
                  fontFamily="ui-monospace, monospace"
                >
                  {code}
                </text>
              ) : null}
            </g>
          </Marker>
        )
      })}
    </ComposableMap>
  )
}

export function MarketManifest({
  selected: selectedProp,
  onSelect,
}: {
  selected?: string
  onSelect?: (code: string) => void
} = {}) {
  const model = useMemo(() => getManifestModel(), [])
  const [mode, setMode] = useState<"network" | "geo">("network")
  const [band, setBand] = useState<MarketBand | "All">("All")
  const [internalSelected, setInternalSelected] = useState("IND")
  const selected = selectedProp ?? internalSelected
  const setSelected = (code: string) => {
    onSelect?.(code)
    if (selectedProp === undefined) setInternalSelected(code)
  }
  const [hovered, setHovered] = useState<string | null>(null)

  const byCode = useMemo(() => {
    const map = new Map(model.nodes.map((node) => [node.code, node]))
    return map
  }, [model.nodes])

  const points = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>()
    for (const node of model.nodes) {
      map.set(node.code, networkPoint(node))
    }
    return map
  }, [model.nodes])

  const active = byCode.get(selected) ?? model.nodes[0]
  const focus = hovered ?? selected
  const neighbors = new Set(
    model.edges.flatMap((edge) => {
      if (edge.from === selected) return [edge.to]
      if (edge.to === selected) return [edge.from]
      return []
    })
  )

  const visible = (code: string) => {
    if (band === "All") return true
    return byCode.get(code)?.band === band
  }

  return (
    <section className="overflow-hidden border border-white/10 bg-[#09090b]">
      <div className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Manifest</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
            Expansion graph · G = (V, E)
          </h3>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-500">
            Geometry of the entry plan. Nodes are markets. Edges are corridor hops.
            Distance is great-circle from HQ. Not live traffic.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["network", "geo"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                mode === item ? "bg-white text-black" : "border border-white/15 text-zinc-400 hover:text-white"
              }`}
            >
              {item === "network" ? "Network" : "Geography"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-4">
        {[
          { k: "Markets", v: String(model.stats.n) },
          { k: "Hops", v: String(model.stats.e) },
          { k: "Mean hops", v: model.stats.meanHops.toFixed(2) },
          { k: "Max d(HQ)", v: formatKm(model.stats.maxKm) },
        ].map((item) => (
          <div key={item.k} className="border-b border-r border-white/10 px-3 py-3 even:border-r-0 sm:border-b-0 sm:px-5 sm:even:border-r sm:last:border-r-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{item.k}</p>
            <p className="mt-1 break-words font-mono text-sm text-white sm:text-base">{item.v}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3 sm:px-6">
        {bands.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setBand(item)}
            className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
              band === item ? "bg-white text-black" : "text-zinc-500 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="relative h-[300px] overflow-hidden bg-[#07070a] sm:h-[420px] lg:h-[520px]">
          {mode === "geo" ? (
            <ManifestWorldMap selected={selected} band={band} onSelect={setSelected} />
          ) : (
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-full w-full"
            role="img"
            aria-label="Priority market expansion graph"
          >
            {[0.3, 0.54, 0.78].map((radius, index) => (
                  <circle
                    key={radius}
                    cx={W / 2}
                    cy={H / 2}
                    r={radius * Math.min(W, H) * 0.45}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray={index === 2 ? "3 5" : "0"}
                  />
                ))}

            {model.edges.map((edge) => {
              const a = points.get(edge.from)
              const b = points.get(edge.to)
              if (!a || !b) return null
              const hot = edge.from === selected || edge.to === selected
              const shown = visible(edge.from) && visible(edge.to)
              if (!shown && !hot) return null
              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <line
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={hot ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.14)"}
                    strokeWidth={hot ? 1.6 : 0.8}
                  />
                  {hot ? (
                    <circle r="2.4" fill="#fafafa">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path={`M ${a.x} ${a.y} L ${b.x} ${b.y}`} />
                    </circle>
                  ) : null}
                </g>
              )
            })}

            {model.nodes.map((node) => {
              const p = points.get(node.code)
              if (!p) return null
              const isSelected = node.code === selected
              const isFocus = node.code === focus
              const faded = !visible(node.code) && !isSelected
              const linked = neighbors.has(node.code)
              return (
                <g
                  key={node.code}
                  transform={`translate(${p.x} ${p.y})`}
                  onClick={() => setSelected(node.code)}
                  onMouseEnter={() => setHovered(node.code)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                  opacity={faded ? 0.18 : 1}
                >
                  {isSelected ? (
                    <circle r="16" fill="none" stroke="rgba(255,255,255,0.28)" strokeDasharray="2 3">
                      <animate attributeName="r" values="12;18;12" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                  ) : null}
                  <circle
                    r={isSelected ? 6.5 : linked ? 5 : 3.6}
                    fill={isSelected ? "#fafafa" : linked ? "#d4d4d8" : "#71717a"}
                  />
                  {(isFocus || isSelected || node.code === "IND") && (
                    <text
                      y={-12}
                      textAnchor="middle"
                      fill={isSelected ? "#fafafa" : "#a1a1aa"}
                      fontSize="11"
                      fontFamily="ui-monospace, monospace"
                      letterSpacing="0.12em"
                    >
                      {node.code}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
          )}
        </div>

        <aside className="border-t border-white/10 lg:border-t-0 lg:border-l">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              {pad(active.priority)} · {active.band}
            </p>
            <p className="mt-1 text-base font-semibold tracking-tight text-white">{active.name}</p>
            <p className="mt-0.5 text-xs text-zinc-500">{active.theatre}</p>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-white/10">
            {[
              { k: "ISO", v: active.code },
              { k: "h(IND)", v: String(active.hops) },
              { k: "deg(v)", v: String(active.degree) },
              { k: "d(HQ)", v: formatKm(active.distanceKm) },
            ].map((item) => (
              <div key={item.k} className="bg-[#09090b] px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.k}</dt>
                <dd className="mt-1 font-mono text-sm text-white">{item.v}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-3 px-4 py-4">
            <p className="font-mono text-[10px] leading-relaxed text-zinc-500">
              φ, λ = {formatCoord(active.lon, active.lat)}
            </p>
            <p className="font-mono text-[10px] leading-relaxed text-zinc-500">
              d = 2R arcsin(√h) · R = {model.earthRadiusKm.toLocaleString()} km
            </p>
            <p className="text-[11px] leading-relaxed text-zinc-400">
              {active.priority === 1
                ? "Home node. All expansion hops originate here."
                : `${active.hops} corridor hop${active.hops === 1 ? "" : "s"} from India. ${active.degree} regional links.`}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {model.edges
                .filter((edge) => edge.from === active.code || edge.to === active.code)
                .map((edge) => {
                  const other = edge.from === active.code ? edge.to : edge.from
                  const node = byCode.get(other)
                  return (
                    <button
                      key={`${edge.from}-${edge.to}`}
                      type="button"
                      onClick={() => setSelected(other)}
                      className="border border-white/10 px-2 py-1 font-mono text-[10px] text-zinc-300 hover:border-white/30 hover:text-white"
                    >
                      {node?.code} · {node?.name}
                    </button>
                  )
                })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
