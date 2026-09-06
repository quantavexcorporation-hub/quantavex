import { NextResponse } from "next/server"
import { getComparisons } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ comparisons: getComparisons() })
}
