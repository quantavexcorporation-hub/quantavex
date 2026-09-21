"use client"

import { useEffect, useState } from "react"
import { Mail, Send } from "lucide-react"
import { company } from "@/lib/company"

const fieldClass =
  "w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-gray-600 outline-none focus:border-cyan-400/40"

export function CompanyContact() {
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
      topic: "Company",
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
    } catch (caught) {
      setStatus("error")
      setError(caught instanceof Error ? caught.message : "Could not send.")
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 rounded-xl border border-cyan-500/10 bg-[#0c0c14]/90 p-4 sm:scroll-mt-24 sm:p-5"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <p className="mt-0.5 text-xs text-gray-500">Write once. We reply by email.</p>
        </div>
        <a
          href={`mailto:${company.companyEmail}`}
          className="inline-flex items-center gap-1.5 text-xs text-cyan-300/90 hover:text-cyan-200"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{company.companyEmail}</span>
        </a>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid gap-3 sm:grid-cols-2">
          <input name="from" required maxLength={120} autoComplete="name" placeholder="Name" className={fieldClass} />
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            className={fieldClass}
          />
        </div>

        <textarea
          name="message"
          required
          maxLength={5000}
          rows={3}
          placeholder="Your message"
          className={`${fieldClass} resize-none`}
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#061016] hover:bg-cyan-300 disabled:opacity-60"
          >
            <Send className="h-3.5 w-3.5" />
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          {status === "sent" ? <p className="text-xs text-cyan-300">Sent. We will reply.</p> : null}
          {status === "error" ? (
            <p className="text-xs text-red-400">
              {error} Or mail {company.companyEmail}.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  )
}
