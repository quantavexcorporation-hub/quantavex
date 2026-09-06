import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    action?: string
    source?: string
    payload?: Record<string, unknown>
  }

  return NextResponse.json(
    {
      ok: true,
      action: body.action ?? "unknown_action",
      source: body.source ?? "unknown_source",
      processedAt: new Date().toISOString(),
    },
    { status: 200 }
  )
}
