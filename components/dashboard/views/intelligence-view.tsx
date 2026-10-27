"use client"

import { useState } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { MarketManifest } from "@/components/dashboard/market-manifest"
import { DomainMarketBook } from "@/components/dashboard/domain-market-book"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { getPriorityRegions } from "@/lib/priority-markets"

export function IntelligenceView() {
  const { snapshot } = useDashboard()
  const [country, setCountry] = useState("IND")
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
        subtitle="India first, then the high-economy corridor. Click a country to read the 2026 size of education, entertainment, and commerce. Market understanding — not a company figure."
      />

      <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          { k: "Home", v: home?.name ?? "India" },
          { k: "Core expansion", v: String(core) },
          { k: "Full corridor", v: String(total) },
        ].map((item) => (
          <div key={item.k} className="px-4 py-3 sm:px-6 sm:py-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">{item.k}</p>
            <p className="mt-1.5 font-mono text-lg font-semibold tracking-tight text-white sm:mt-2 sm:text-2xl">{item.v}</p>
          </div>
        ))}
      </div>

      <DomainMarketBook selected={country} onSelect={setCountry} markets={snapshot?.markets} />

      <GlobalIntelligenceMap
        data={snapshot?.regions}
        lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0}
        selected={country}
        onSelect={setCountry}
      />

      <MarketManifest selected={country} onSelect={setCountry} />
    </div>
  )
}
