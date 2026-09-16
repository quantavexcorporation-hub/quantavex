"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, Send } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

type FormStatus = "idle" | "sending" | "sent" | "error"

const TOPICS = [
  "Quantavex",
  "Research",
  "Quantrion",
  "Vdoc",
  "ExoraX",
  "Partnership",
] as const

const fieldClass =
  "w-full rounded-lg border border-border/50 bg-secondary/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/30 focus:ring-1 focus:ring-primary/20 focus:outline-none sm:px-4 sm:py-3"

function openQueryMail(params: {
  from: string
  inbox: string
  topic: string
  query: string
}) {
  const subject = `Contact · ${params.topic} · ${params.from}`
  const body = [
    `Topic: ${params.topic}`,
    `From: ${params.from}`,
    `Reply inbox: ${params.inbox}`,
    "",
    params.query,
  ].join("\n")
  window.location.href = `mailto:${company.founder.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactSection() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("Quantavex")
  const [status, setStatus] = useState<FormStatus>("idle")
  const [error, setError] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const from = (form.elements.namedItem("from") as HTMLInputElement).value.trim()
    const inbox = (form.elements.namedItem("inbox") as HTMLInputElement).value.trim()
    const query = (form.elements.namedItem("query") as HTMLTextAreaElement).value.trim()
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim()

    setStatus("sending")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, inbox, topic, query, website }),
      })
      const payload = (await response.json().catch(() => null)) as {
        error?: string
      } | null

      if (!response.ok) {
        throw new Error(payload?.error || "Could not send.")
      }

      setStatus("sent")
      form.reset()
      setTopic("Quantavex")
    } catch {
      openQueryMail({ from, inbox, topic, query })
      setStatus("sent")
      form.reset()
      setTopic("Quantavex")
    }
  }

  return (
    <section id="contact" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Contact
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Get in touch</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Anyone can write about the company, the research, or a platform.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <Reveal className="flex flex-col justify-between gap-8 rounded-xl border border-border/50 bg-card/20 p-6 backdrop-blur-sm sm:p-8">
            <div>
              <p className="text-[10px] font-medium tracking-widest text-primary uppercase sm:text-xs">
                Inbox
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Pick a topic. Write the message. Add name and email so we can
                reply. Send — it arrives here.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${company.founder.email}?subject=${encodeURIComponent("Contact")}`}
                className="group flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-background/40 px-4 py-3 transition-colors hover:border-primary/30"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{company.founder.email}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
              <ul className="grid gap-2 text-xs text-muted-foreground sm:text-sm">
                <li>Research monographs and architecture</li>
                <li>Quantrion, Vdoc, and ExoraX</li>
                <li>Space, virtual, and trade economies</li>
                <li>Partnership and company</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm sm:gap-6 sm:p-8"
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Company site</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
                  Topic
                </p>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((item) => {
                    const selected = topic === item
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors sm:text-sm ${
                          selected
                            ? "border-primary/40 bg-primary/15 text-foreground"
                            : "border-border/50 bg-secondary/20 text-muted-foreground hover:border-primary/20 hover:text-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="query" className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
                  Message
                </label>
                <textarea
                  id="query"
                  name="query"
                  required
                  maxLength={5000}
                  rows={7}
                  placeholder="Write your message"
                  className={`${fieldClass} min-h-[10rem] resize-none`}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="from" className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Name"
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="inbox" className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
                    Email
                  </label>
                  <input
                    type="email"
                    id="inbox"
                    name="inbox"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className={fieldClass}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="founder-button mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg sm:mt-2 sm:py-3"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending…" : "Send"}
              </Button>

              {status === "sent" ? (
                <p className="text-xs text-primary sm:text-sm">
                  Sent. We will reply.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="text-xs text-destructive sm:text-sm">{error}</p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
