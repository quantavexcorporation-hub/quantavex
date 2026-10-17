"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { MarketManifest } from "@/components/dashboard/market-manifest"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { getPriorityRegions } from "@/lib/priority-markets"

export function IntelligenceView() {
  const { snapshot } = useDashboard()
  const regions = Object.values(snapshot?.regions ?? getPriorityRegions())
    .slice()
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))

  const home = regions.find((r) => r.priority === 1)
  const core = regions.filter((r) => r.priority > 1 && r.priority <= 10).length
  const total = regions.length

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        title="Priority markets"
        subtitle="Build in India. Expand into high-economy countries in a fixed order. This is the operating sequence — not traffic, revenue, or live telemetry."
      />

      <div className="grid grid-cols-3 border border-white/10">
        {[
          { k: "Home", v: home?.name ?? "India" },
          { k: "Core expansion", v: String(core) },
          { k: "Full corridor", v: String(total) },
        ].map((item) => (
          <div key={item.k} className="border-r border-white/10 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">{item.k}</p>
            <p className="mt-2 font-mono text-xl font-semibold tracking-tight text-white sm:text-2xl">{item.v}</p>
          </div>
        ))}
      </div>

      <GlobalIntelligenceMap data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />

      <MarketManifest />
    </div>
  )
}
