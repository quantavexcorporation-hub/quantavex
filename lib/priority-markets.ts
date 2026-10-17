import type { DashboardSnapshot } from "@/lib/dashboard-types"

type Region = DashboardSnapshot["regions"][string]

function trendTo(end: number): number[] {
  const start = Math.max(12, end - 48)
  const step = (end - start) / 9
  return Array.from({ length: 10 }, (_, i) => Math.round(start + step * i))
}

function intensityFor(priority: number): Region["intensity"] {
  if (priority <= 10) return "high"
  if (priority <= 22) return "medium"
  return "low"
}

export function marketBand(priority: number) {
  if (priority === 1) return "Home"
  if (priority <= 10) return "Core"
  if (priority <= 22) return "Next"
  return "Later"
}

export type MarketBand = ReturnType<typeof marketBand>

const theatres: Record<string, string> = {
  IND: "South Asia",
  USA: "North America",
  CAN: "North America",
  MEX: "North America",
  BRA: "South America",
  GBR: "Europe",
  DEU: "Europe",
  FRA: "Europe",
  CHE: "Europe",
  NLD: "Europe",
  SWE: "Europe",
  NOR: "Europe",
  ITA: "Europe",
  ESP: "Europe",
  IRL: "Europe",
  BEL: "Europe",
  AUT: "Europe",
  DNK: "Europe",
  FIN: "Europe",
  POL: "Europe",
  SGP: "Southeast Asia",
  MYS: "Southeast Asia",
  IDN: "Southeast Asia",
  JPN: "East Asia",
  KOR: "East Asia",
  AUS: "Oceania",
  NZL: "Oceania",
  ARE: "Middle East",
  SAU: "Middle East",
  ISR: "Middle East",
}

const EARTH_RADIUS_KM = 6371

export function haversineKm(from: [number, number], to: [number, number]) {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dLat = toRad(to[1] - from[1])
  const dLon = toRad(to[0] - from[0])
  const lat1 = toRad(from[1])
  const lat2 = toRad(to[1])
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)))
}

/** India first, then USA / UK / high-economy expansion (30 markets).
 * Scores are an ambitious future GTM plan / predicted priority — not live data. */
const markets: {
  code: string
  name: string
  coordinates: [number, number]
  priority: number
}[] = [
  { code: "IND", name: "India", coordinates: [78.9629, 20.5937], priority: 1 },
  { code: "USA", name: "United States", coordinates: [-95.7129, 37.0902], priority: 2 },
  { code: "GBR", name: "United Kingdom", coordinates: [-3.436, 55.3781], priority: 3 },
  { code: "SGP", name: "Singapore", coordinates: [103.8198, 1.3521], priority: 4 },
  { code: "DEU", name: "Germany", coordinates: [10.4515, 51.1657], priority: 5 },
  { code: "JPN", name: "Japan", coordinates: [138.2529, 36.2048], priority: 6 },
  { code: "AUS", name: "Australia", coordinates: [133.7751, -25.2744], priority: 7 },
  { code: "CAN", name: "Canada", coordinates: [-106.3468, 56.1304], priority: 8 },
  { code: "FRA", name: "France", coordinates: [2.2137, 46.2276], priority: 9 },
  { code: "KOR", name: "South Korea", coordinates: [127.7669, 35.9078], priority: 10 },
  { code: "CHE", name: "Switzerland", coordinates: [8.2275, 46.8182], priority: 11 },
  { code: "NLD", name: "Netherlands", coordinates: [5.2913, 52.1326], priority: 12 },
  { code: "ARE", name: "United Arab Emirates", coordinates: [53.8478, 23.4241], priority: 13 },
  { code: "SWE", name: "Sweden", coordinates: [18.6435, 60.1282], priority: 14 },
  { code: "NOR", name: "Norway", coordinates: [8.4689, 60.472], priority: 15 },
  { code: "ITA", name: "Italy", coordinates: [12.5674, 41.8719], priority: 16 },
  { code: "ESP", name: "Spain", coordinates: [-3.7492, 40.4637], priority: 17 },
  { code: "IRL", name: "Ireland", coordinates: [-8.2439, 53.4129], priority: 18 },
  { code: "ISR", name: "Israel", coordinates: [34.8516, 31.0461], priority: 19 },
  { code: "NZL", name: "New Zealand", coordinates: [174.886, -40.9006], priority: 20 },
  { code: "BEL", name: "Belgium", coordinates: [4.4699, 50.5039], priority: 21 },
  { code: "AUT", name: "Austria", coordinates: [14.5501, 47.5162], priority: 22 },
  { code: "DNK", name: "Denmark", coordinates: [9.5018, 56.2639], priority: 23 },
  { code: "FIN", name: "Finland", coordinates: [25.7482, 61.9241], priority: 24 },
  { code: "SAU", name: "Saudi Arabia", coordinates: [45.0792, 23.8859], priority: 25 },
  { code: "MYS", name: "Malaysia", coordinates: [101.9758, 4.2105], priority: 26 },
  { code: "POL", name: "Poland", coordinates: [19.1451, 51.9194], priority: 27 },
  { code: "MEX", name: "Mexico", coordinates: [-102.5528, 23.6345], priority: 28 },
  { code: "IDN", name: "Indonesia", coordinates: [113.9213, -0.7893], priority: 29 },
  { code: "BRA", name: "Brazil", coordinates: [-51.9253, -14.235], priority: 30 },
]

export function getPriorityRegions(): DashboardSnapshot["regions"] {
  const regions: DashboardSnapshot["regions"] = {}

  for (const market of markets) {
    const score = Math.max(42, 98 - (market.priority - 1) * 1.8)
    const learning = Math.round(score)
    const engagement = Math.round(score - 1 + (market.priority % 3 === 0 ? 2 : 0))
    const commerce = Math.round(score - 2 + (market.priority % 2 === 0 ? 2 : 0))
    regions[market.code] = {
      name: market.name,
      coordinates: market.coordinates,
      metrics: { learning, engagement, commerce },
      trend: trendTo(learning),
      intensity: intensityFor(market.priority),
      priority: market.priority,
    }
  }

  return regions
}

/** Hub lines: India → core expansion, then regional high-economy links */
export const priorityMarketConnections = [
  { from: "IND", to: "USA" },
  { from: "IND", to: "GBR" },
  { from: "IND", to: "SGP" },
  { from: "IND", to: "ARE" },
  { from: "IND", to: "AUS" },
  { from: "IND", to: "JPN" },
  { from: "USA", to: "CAN" },
  { from: "USA", to: "MEX" },
  { from: "USA", to: "BRA" },
  { from: "GBR", to: "DEU" },
  { from: "GBR", to: "FRA" },
  { from: "GBR", to: "IRL" },
  { from: "DEU", to: "NLD" },
  { from: "DEU", to: "CHE" },
  { from: "FRA", to: "ESP" },
  { from: "FRA", to: "ITA" },
  { from: "NLD", to: "BEL" },
  { from: "SWE", to: "NOR" },
  { from: "SWE", to: "DNK" },
  { from: "SWE", to: "FIN" },
  { from: "SGP", to: "KOR" },
  { from: "SGP", to: "MYS" },
  { from: "SGP", to: "IDN" },
  { from: "AUS", to: "NZL" },
  { from: "ARE", to: "SAU" },
  { from: "ARE", to: "ISR" },
  { from: "DEU", to: "AUT" },
  { from: "DEU", to: "POL" },
] as const

export type ManifestNode = {
  code: string
  name: string
  coordinates: [number, number]
  priority: number
  band: MarketBand
  theatre: string
  hops: number
  degree: number
  distanceKm: number
  lon: number
  lat: number
}

export type ManifestEdge = { from: string; to: string }

export function getManifestModel() {
  const hq = markets.find((m) => m.code === "IND")?.coordinates ?? ([78.96, 20.59] as [number, number])

  const adj = new Map<string, string[]>()
  for (const market of markets) adj.set(market.code, [])
  for (const edge of priorityMarketConnections) {
    adj.get(edge.from)?.push(edge.to)
    adj.get(edge.to)?.push(edge.from)
  }

  const hops = new Map<string, number>()
  hops.set("IND", 0)
  const queue = ["IND"]
  while (queue.length) {
    const current = queue.shift()
    if (!current) break
    const depth = hops.get(current) ?? 0
    for (const next of adj.get(current) ?? []) {
      if (hops.has(next)) continue
      hops.set(next, depth + 1)
      queue.push(next)
    }
  }

  const nodes: ManifestNode[] = markets.map((market) => ({
    code: market.code,
    name: market.name,
    coordinates: market.coordinates,
    priority: market.priority,
    band: marketBand(market.priority),
    theatre: theatres[market.code] ?? "Global",
    hops: hops.get(market.code) ?? 99,
    degree: adj.get(market.code)?.length ?? 0,
    distanceKm: Math.round(haversineKm(hq, market.coordinates)),
    lon: market.coordinates[0],
    lat: market.coordinates[1],
  }))

  const hopValues = nodes.map((n) => n.hops).filter((h) => h < 99)
  const meanHops = hopValues.reduce((sum, h) => sum + h, 0) / hopValues.length
  const maxKm = Math.max(...nodes.map((n) => n.distanceKm))

  return {
    nodes,
    edges: priorityMarketConnections.map((edge) => ({ from: edge.from, to: edge.to })) as ManifestEdge[],
    earthRadiusKm: EARTH_RADIUS_KM,
    stats: {
      n: nodes.length,
      e: priorityMarketConnections.length,
      meanHops,
      maxKm,
      theatres: [...new Set(nodes.map((n) => n.theatre))].length,
    },
  }
}
