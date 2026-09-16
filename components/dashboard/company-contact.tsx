"use client"

import { useEffect, useState } from "react"
import { Mail, Send } from "lucide-react"
import { company } from "@/lib/company"

const TOPICS = ["Company", "Investor", "Partnership", "Research", "Quantrion", "Vdoc", "ExoraX"] as const

const fieldClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-cyan-400/40"

export function CompanyContact() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("Company")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  useEffect(() => {
    const go = () => {
      if (window.location.hash === "#contact") {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
    }
    go()
    window.addEventListener("hashchange", go)
    return () => window.removeEventListener("hashchange", go)
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("sending")
    setError("")

    const payload = {
      from: (form.elements.namedItem("from") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      topic,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      website: (form.elements.namedItem("website") as HTMLInputElement).value.trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const body = (await response.json().catch(() => null)) as { error?: string } | null
      if (!response.ok) throw new Error(body?.error || "Could not send.")
      setStatus("sent")
      form.reset()
      setTopic("Company")
    } catch (caught) {
      setStatus("error")
      setError(caught instanceof Error ? caught.message : "Could not send.")
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 rounded-xl border border-cyan-500/15 bg-[#0c0c14]/90 p-5 md:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">Contact</p>
          <h2 className="mt-1 text-xl font-semibold text-white md:text-2xl">Write to Quantavex</h2>
          <p className="mt-2 max-w-xl text-sm text-gray-400">
            Company, investor, or partnership. The mail lands in the Quantavex inbox.
          </p>
        </div>
        <a
          href={`mailto:${company.companyEmail}`}
          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
        >
          <Mail className="h-4 w-4" />
          {company.companyEmail}
        </a>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="flex flex-wrap gap-2">
          {TOPICS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`rounded-full border px-3 py-1.5 text-xs ${
                topic === item
                  ? "border-cyan-400/40 bg-cyan-400/15 text-white"
                  : "border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <textarea
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Message"
          className={`${fieldClass} min-h-[8rem] resize-none`}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <input name="from" required maxLength={120} autoComplete="name" placeholder="Name" className={fieldClass} />
          <input name="email" type="email" required autoComplete="email" placeholder="Email" className={fieldClass} />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#061016] hover:bg-cyan-300 disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        {status === "sent" ? <p className="text-sm text-cyan-300">Received. We will reply.</p> : null}
        {status === "error" ? (
          <p className="text-sm text-red-400">
            {error} Mail {company.companyEmail} directly if this fails.
          </p>
        ) : null}
      </form>
    </section>
  )
}
