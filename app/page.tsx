"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { KPICards } from "@/components/dashboard/kpi-cards"
import { RealtimeChart } from "@/components/dashboard/realtime-chart"
import { AIDecisionFlow } from "@/components/dashboard/ai-decision-flow"
import { ProductPanels } from "@/components/dashboard/product-panels"
import { ComparativeTable } from "@/components/dashboard/comparative-table"
import { MarketVisualization } from "@/components/dashboard/market-visualization"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { FounderPortfolio } from "@/components/founder/founder-portfolio"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchResponse, setSearchResponse] = useState("")
  const [searchStatus, setSearchStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [searchError, setSearchError] = useState<string | null>(null)
  const [notificationDot, setNotificationDot] = useState(true)

  useEffect(() => {
    let cancelled = false

    const parseJson = async <T,>(response: Response, key: string): Promise<T> => {
      if (!response.ok) {
        throw new Error(`${key} request failed (${response.status})`)
      }
      const payload = (await response.json()) as Record<string, T>
      return payload[key]
    }

    const fetchSnapshot = async () => {
      try {
        const [
          kpisResponse,
          chartResponse,
          activitiesResponse,
          marketsResponse,
          comparisonsResponse,
          productsResponse,
          regionsResponse,
        ] = await Promise.all([
          fetch("/api/kpis", { cache: "no-store" }),
          fetch("/api/chart", { cache: "no-store" }),
          fetch("/api/activities", { cache: "no-store" }),
          fetch("/api/markets", { cache: "no-store" }),
          fetch("/api/comparisons", { cache: "no-store" }),
          fetch("/api/products", { cache: "no-store" }),
          fetch("/api/regions", { cache: "no-store" }),
        ])

        const [kpis, chart, activities, markets, comparisons, productPanels] = await Promise.all([
          parseJson<DashboardSnapshot["kpis"]>(kpisResponse, "kpis"),
          parseJson<DashboardSnapshot["chart"]>(chartResponse, "chart"),
          parseJson<DashboardSnapshot["activities"]>(activitiesResponse, "activities"),
          parseJson<DashboardSnapshot["markets"]>(marketsResponse, "markets"),
          parseJson<DashboardSnapshot["comparisons"]>(comparisonsResponse, "comparisons"),
          parseJson<DashboardSnapshot["productPanels"]>(productsResponse, "productPanels"),
        ])
        const regionsPayload = (await regionsResponse.json()) as {
          regions: DashboardSnapshot["regions"]
          lastSyncSeconds: number
        }

        if (!regionsResponse.ok) {
          throw new Error(`regions request failed (${regionsResponse.status})`)
        }

        const data: DashboardSnapshot = {
          kpis,
          chart,
          activities,
          markets,
          comparisons,
          productPanels,
          regions: regionsPayload.regions,
          lastSyncSeconds: regionsPayload.lastSyncSeconds ?? 2,
        }
        if (!cancelled) {
          setSnapshot(data)
          setError(null)
        }
      } catch (fetchError) {
        if (!cancelled) {
          setError(fetchError instanceof Error ? fetchError.message : "Failed to fetch dashboard snapshot")
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void fetchSnapshot()

    const interval = setInterval(() => {
      void fetchSnapshot()
    }, 5000)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  const handleNotificationsClick = async () => {
    const response = await fetch("/api/notifications", { cache: "no-store" })
    if (response.ok) {
      setNotificationDot(false)
    }
  }

  const handleSearch = async (query: string) => {
    setSearchStatus("loading")
    setSearchError(null)
    setSearchResponse("")

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })

      if (!response.ok || !response.body) {
        throw new Error(`Assistant request failed (${response.status})`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setSearchResponse(accumulated.trim())
      }

      setSearchStatus("success")
    } catch (searchRequestError) {
      setSearchStatus("error")
      setSearchError(searchRequestError instanceof Error ? searchRequestError.message : "Search failed")
    }
  }

  const showOverview = activeTab === "overview"
  const showPortfolio = activeTab === "portfolio"

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="ml-[220px] transition-all duration-300">
        <TopNavbar
          onNotificationsClick={handleNotificationsClick}
          onSearch={handleSearch}
          searchResponse={searchResponse}
          searchStatus={searchStatus}
          searchError={searchError}
        />

        {showPortfolio ? (
          <main className="h-[calc(100vh-3.5rem)] overflow-y-auto">
            <FounderPortfolio />
          </main>
        ) : (
        <div className="flex">
          {/* Main Dashboard Grid */}
          <main className="flex-1 p-4 space-y-4">
            {!showOverview && (
              <div className="border border-cyan-500/20 rounded p-3 bg-cyan-500/5 text-xs text-cyan-300">
                Viewing `{activeTab}` module data stream.
              </div>
            )}
            {/* Row 1: KPI Cards */}
            <KPICards data={snapshot?.kpis} loading={isLoading} error={error} />

            {/* Row 2: Charts */}
            <div className="grid grid-cols-2 gap-4">
              <RealtimeChart data={snapshot?.chart} loading={isLoading} error={error} />
              <AIDecisionFlow />
            </div>

{/* Row 3: Product Panels */}
            {(showOverview || activeTab === "quantrion" || activeTab === "vdoc" || activeTab === "exorax") && (
              <ProductPanels data={snapshot?.productPanels} />
            )}

            {/* Row 4: Global Intelligence Map */}
            {(showOverview || activeTab === "intelligence") && (
              <GlobalIntelligenceMap data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 2} />
            )}

            {/* Row 5: Comparative + Market */}
            {(showOverview || activeTab === "fundraising") && (
              <div className="grid grid-cols-2 gap-4">
                <ComparativeTable data={snapshot?.comparisons} />
                <MarketVisualization data={snapshot?.markets} />
              </div>
            )}
          </main>

          {/* Right Panel: Activity Feed */}
          <aside className="w-72 p-4 border-l border-cyan-500/10">
            <div className={notificationDot ? "" : "opacity-95"}>
              <ActivityFeed data={snapshot?.activities} loading={isLoading} error={error} />
            </div>
          </aside>
        </div>
        )}
      </div>
    </div>
  )
}
