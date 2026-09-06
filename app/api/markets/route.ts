import { NextResponse } from "next/server"
import { getMarkets } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ markets: getMarkets() })
}
