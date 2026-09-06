import { NextResponse } from "next/server"
import { getKpis } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ kpis: getKpis() })
}
