"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import { getForecast, type CapitalMilestone, type ForecastKpi, type ForecastMonth } from "@/lib/forecast-data"

interface DashboardContextValue {
  snapshot: DashboardSnapshot | null
  isLoading: boolean
  error: string | null
  forecast: {
    series: ForecastMonth[]
    kpis: ForecastKpi[]
    mix: { name: string; value: number; color: string }[]
    milestones: CapitalMilestone[]
  }
  searchResponse: string
  searchStatus: "idle" | "loading" | "success" | "error"
  searchError: string | null
  notificationDot: boolean
  handleSearch: (query: string) => Promise<void>
  handleNotificationsClick: () => Promise<void>
}

const DashboardContext = createContext<DashboardContextValue | null>(null)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchResponse, setSearchResponse] = useState("")
  const [searchStatus, setSearchStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [searchError, setSearchError] = useState<string | null>(null)
  const [notificationDot, setNotificationDot] = useState(true)
  const forecast = useMemo(() => getForecast(), [])

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

        if (!cancelled) {
          setSnapshot({
            kpis,
            chart,
            activities,
            markets,
            comparisons,
            productPanels,
            regions: regionsPayload.regions,
            lastSyncSeconds: regionsPayload.lastSyncSeconds ?? 2,
          })
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

    return () => {
      cancelled = true
    }
  }, [])

  const handleNotificationsClick = async () => {
    const response = await fetch("/api/notifications", { cache: "no-store" })
    if (response.ok) setNotificationDot(false)
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

  return (
    <DashboardContext.Provider
      value={{
        snapshot,
        isLoading,
        error,
        forecast,
        searchResponse,
        searchStatus,
        searchError,
        notificationDot,
        handleSearch,
        handleNotificationsClick,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider")
  }
  return context
}
