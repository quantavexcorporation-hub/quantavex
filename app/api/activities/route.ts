import { NextResponse } from "next/server"
import { getActivities } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ activities: getActivities() })
}
