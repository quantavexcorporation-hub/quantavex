import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { company } from "@/lib/company"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TOPICS = new Set([
  "Company",
  "Investor",
  "Partnership",
  "Research",
  "Quantrion",
  "Vdoc",
  "ExoraX",
])

function inbox() {
  return process.env.CONTACT_TO_EMAIL?.trim() || company.companyEmail
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    from?: string
    email?: string
    topic?: string
    message?: string
    website?: string
  } | null

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  const from = body.from?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const topic = TOPICS.has(body.topic?.trim() ?? "") ? body.topic!.trim() : "Company"
  const message = body.message?.trim() ?? ""

  if (!from || from.length > 120) {
    return NextResponse.json({ error: "Add a name." }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Add an email." }, { status: 400 })
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Write a message." }, { status: 400 })
  }

  const to = inbox()
  const subject = `Quantavex · ${topic} · ${from}`
  const text = `Topic: ${topic}\nFrom: ${from}\nReply to: ${email}\n\n${message}`

  const smtpPass = process.env.SMTP_PASS?.replace(/\s/g, "")
  if (smtpPass) {
    try {
      const user = process.env.SMTP_USER?.trim() || to
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user, pass: smtpPass },
      })
      await transporter.sendMail({
        from: `"Quantavex" <${user}>`,
        to,
        replyTo: `${from} <${email}>`,
        subject,
        text,
      })
      return NextResponse.json({ ok: true })
    } catch (error) {
      console.error("SMTP contact failed", error)
    }
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: from,
        email,
        topic,
        message,
        _subject: subject,
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    })
    if (response.ok) {
      return NextResponse.json({ ok: true })
    }
  } catch (error) {
    console.error("FormSubmit contact failed", error)
  }

  return NextResponse.json({ error: "Could not send." }, { status: 502 })
}
