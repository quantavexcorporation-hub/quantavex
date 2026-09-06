import { NextResponse } from "next/server"
import { getChart } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ chart: getChart() })
}
