"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { DataTable } from "@/components/dashboard/data-table"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { useDashboard } from "@/components/dashboard/dashboard-provider"

const fallbackRows = [
  { region: "United States", learning: 65, engagement: 350, commerce: 42, intensity: "high", trend: "78" },
  { region: "India", learning: 72, engagement: 280, commerce: 35, intensity: "high", trend: "85" },
  { region: "United Kingdom", learning: 58, engagement: 220, commerce: 38, intensity: "medium", trend: "68" },
  { region: "Germany", learning: 52, engagement: 195, commerce: 28, intensity: "medium", trend: "58" },
  { region: "Japan", learning: 48, engagement: 175, commerce: 32, intensity: "medium", trend: "58" },
  { region: "Brazil", learning: 42, engagement: 145, commerce: 25, intensity: "low", trend: "52" },
  { region: "Australia", learning: 55, engagement: 185, commerce: 30, intensity: "medium", trend: "65" },
  { region: "Singapore", learning: 68, engagement: 320, commerce: 45, intensity: "high", trend: "88" },
]

export function IntelligenceView() {
  const { snapshot } = useDashboard()
  const rows = Object.values(snapshot?.regions ?? {}).map((region) => ({
    region: region.name,
    learning: region.metrics.learning,
    engagement: region.metrics.engagement,
    commerce: region.metrics.commerce,
    intensity: region.intensity,
    trend: `${region.trend[region.trend.length - 1]}`,
  }))
  const tableRows = rows.length ? rows : fallbackRows

  return (
    <div className="space-y-5">
      <PageHeader
        title="Priority markets"
        subtitle="Where Quantavex intends to enter first. Scores are a GTM priority index, not live traffic."
      />
      <GlobalIntelligenceMap data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />
      <Panel>
        <PanelHeader title="Regional priority" subtitle="Learning, entertainment, and commerce fit by market" />
        <DataTable
          rows={tableRows}
          columns={[
            { key: "region", label: "Region" },
            { key: "learning", label: "Learning", align: "right" },
            { key: "engagement", label: "Engagement", align: "right" },
            { key: "commerce", label: "Commerce", align: "right" },
            { key: "intensity", label: "Intensity" },
            { key: "trend", label: "Trend", align: "right" },
          ]}
        />
      </Panel>
    </div>
  )
}
