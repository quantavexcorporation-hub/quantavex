import { NextResponse } from "next/server"
import { DashboardSnapshot } from "@/lib/dashboard-types"
import {
  getActivities,
  getChart,
  getComparisons,
  getKpis,
  getMarkets,
  getProductPanels,
  getRegions,
} from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({
    kpis: getKpis(),
    chart: getChart(),
    activities: getActivities(),
    markets: getMarkets(),
    comparisons: getComparisons(),
    productPanels: getProductPanels(),
    regions: getRegions(),
    lastSyncSeconds: 2,
  } satisfies DashboardSnapshot)
}
