"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { ProductPanels } from "@/components/dashboard/product-panels"
import { ComparativeTable } from "@/components/dashboard/comparative-table"
import { MarketVisualization } from "@/components/dashboard/market-visualization"
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

      <ProductPanels data={snapshot?.productPanels} />

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(260px,320px)]">
        <ComparativeTable data={snapshot?.comparisons} />
        <MarketVisualization data={snapshot?.markets} />
        <div className="lg:col-span-2 xl:col-span-1">
          <ActivityFeed data={snapshot?.activities} loading={isLoading} error={error} />
        </div>
      </div>

      <GlobalIntelligenceMap compact data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />

      <CompanyContact />
    </div>
  )
}
