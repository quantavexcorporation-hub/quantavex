import { NextResponse } from "next/server"
import { getRegions } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ regions: getRegions(), lastSyncSeconds: 2 })
}
