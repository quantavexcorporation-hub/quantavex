import { NextResponse } from "next/server"
import { getForecast } from "@/lib/forecast-data"

export async function GET() {
  return NextResponse.json(getForecast())
}
