import { NextResponse } from "next/server"

const notifications = [
  { id: "n1", title: "Model Sync Complete", detail: "Global model cluster sync finished successfully." },
  { id: "n2", title: "Traffic Spike", detail: "Engagement traffic increased 18% in the last 5 minutes." },
  { id: "n3", title: "Pipeline Healthy", detail: "No dropped events on the realtime stream." },
]

export async function GET() {
  return NextResponse.json({
    unreadCount: notifications.length,
    notifications,
    fetchedAt: new Date().toISOString(),
  })
}
