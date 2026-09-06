import { NextResponse } from "next/server"
import { getProductPanels } from "@/lib/dashboard-data"

export async function GET() {
  return NextResponse.json({ productPanels: getProductPanels() })
}
