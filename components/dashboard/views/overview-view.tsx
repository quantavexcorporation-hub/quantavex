"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { ComparativeTable } from "@/components/dashboard/comparative-table"
import { MarketVisualization } from "@/components/dashboard/market-visualization"
import { EconomyHorizons } from "@/components/dashboard/economy-horizons"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { QuantavexLogo } from "@/components/brand/quantavex-logo"
import { PlatformAtlas } from "@/components/dashboard/platform-atlas"
import { CompanyBrief } from "@/components/dashboard/company-brief"
import { CompanyContact } from "@/components/dashboard/company-contact"

export function OverviewView() {
  const { snapshot, isLoading, error } = useDashboard()

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title="Parent company"
        brand="Quantavex"
        subtitle="One company. Three platforms — Quantrion, Vdoc, and ExoraX."
        mark={<QuantavexLogo size={40} priority />}
      />

      <CompanyBrief />

      <PlatformAtlas />

      <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <div className="h-[260px] sm:h-[300px] xl:h-[320px]">
          <ComparativeTable data={snapshot?.comparisons} />
        </div>
        <div className="h-[260px] sm:h-[300px] xl:h-[320px]">
          <MarketVisualization data={snapshot?.markets} />
        </div>
        <div className="h-[260px] sm:h-[300px] lg:col-span-2 xl:col-span-1 xl:h-[320px]">
          <ActivityFeed data={snapshot?.activities} loading={isLoading} error={error} />
        </div>
      </div>

      <EconomyHorizons />

      <GlobalIntelligenceMap compact data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />

      <CompanyContact />
    </div>
  )
}
