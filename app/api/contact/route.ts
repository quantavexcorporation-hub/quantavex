import { NextResponse } from "next/server"
import { company } from "@/lib/company"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FROM = 120
const MAX_QUERY = 5000
const TOPICS = new Set([
  "Quantavex",
  "Research",
  "Quantrion",
  "Vdoc",
  "ExoraX",
  "Partnership",
])

function contactInbox() {
  return process.env.CONTACT_TO_EMAIL?.trim() || company.founder.email
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    from?: string
    inbox?: string
    topic?: string
    query?: string
    website?: string
  } | null

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  const from = body.from?.trim() ?? ""
  const inbox = body.inbox?.trim() ?? ""
  const topic = TOPICS.has(body.topic?.trim() ?? "")
    ? body.topic!.trim()
    : "Quantavex"
  const query = body.query?.trim() ?? ""

  if (!from || from.length > MAX_FROM) {
    return NextResponse.json({ error: "Add a name." }, { status: 400 })
  }
  if (!EMAIL_RE.test(inbox)) {
    return NextResponse.json({ error: "Add an email." }, { status: 400 })
  }
  if (!query || query.length > MAX_QUERY) {
    return NextResponse.json({ error: "Write a message." }, { status: 400 })
  }

  const to = contactInbox()
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from,
        inbox,
        topic,
        query,
        _subject: `Contact · ${topic} · ${from}`,
        _template: "table",
        _captcha: "false",
        _replyto: inbox,
      }),
    }
  )

  if (!response.ok) {
    const detail = await response.text().catch(() => "")
    console.error("Contact delivery failed", response.status, detail)
    return NextResponse.json(
      { error: "Could not send." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
