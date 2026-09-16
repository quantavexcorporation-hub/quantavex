export interface KPIItem {
  id: string
  label: string
  value: number
  suffix: string
  range: string
  trend: number
  color: "cyan" | "purple" | "emerald" | "amber"
}

export interface RealtimePoint {
  time: string
  learning: number
  engagement: number
  conversion: number
}

export interface ActivityItem {
  id: string
  type: "learning" | "content" | "commerce" | "system"
  message: string
  timestamp: string
}

export interface DashboardSnapshot {
  kpis: KPIItem[]
  chart: RealtimePoint[]
  activities: ActivityItem[]
  markets: { name: string; value: number; color: string; growth: string }[]
  comparisons: { category: string; traditional: string; quantavex: string; improvement: string }[]
  productPanels: {
    id: "quantrion" | "vdoc" | "exorax"
    title: string
    subtitle: string
    metrics: { label: string; value: string }[]
    preview: { bars?: number[]; highlight?: string; badges?: string[]; products?: { name: string; score: number }[] }
  }[]
  regions: Record<
    string,
    {
      name: string
      coordinates: [number, number]
      metrics: { learning: number; engagement: number; commerce: number }
      trend: number[]
      intensity: "low" | "medium" | "high"
    }
  >
  lastSyncSeconds: number
}
