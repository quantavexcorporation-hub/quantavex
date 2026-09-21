"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { DataTable } from "@/components/dashboard/data-table"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { getPriorityRegions } from "@/lib/priority-markets"

const fallbackRows = Object.values(getPriorityRegions())
  .sort((a, b) => a.priority - b.priority)
  .map((region) => ({
    region: region.name,
    learning: region.metrics.learning,
    engagement: region.metrics.engagement,
    commerce: region.metrics.commerce,
    intensity: region.intensity,
    trend: `${region.trend[region.trend.length - 1]}`,
  }))

export function IntelligenceView() {
  const { snapshot } = useDashboard()
  const rows = Object.values(snapshot?.regions ?? {})
    .slice()
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
    .map((region) => ({
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
        subtitle="30-country future expansion plan. India first, then USA, UK, and high-economy peers. Numbers are ambitious predicted priority — not real market data."
      />
      <GlobalIntelligenceMap data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />
      <Panel>
        <PanelHeader
          title="Planned regional priority"
          subtitle="Roadmap scores for learning, entertainment, and commerce fit — predictive and highly ambitious, not live telemetry"
        />
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
