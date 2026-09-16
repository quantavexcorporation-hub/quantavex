"use client"

import { useEffect, useState } from "react"
import { Check, Download, FileText, Quote } from "lucide-react"
import { ProductDossier as Dossier } from "@/lib/products"
import { getResearch } from "@/lib/research"

const accents: Record<
  Dossier["id"],
  { text: string; border: string; chip: string; glow: string; rule: string }
> = {
  quantrion: {
    text: "text-cyan-300",
    border: "border-cyan-500/25",
    chip: "bg-cyan-400/10 text-cyan-200",
    glow: "from-cyan-500/12",
    rule: "bg-cyan-400",
  },
  vdoc: {
    text: "text-purple-300",
    border: "border-purple-500/25",
    chip: "bg-purple-400/10 text-purple-200",
    glow: "from-purple-500/12",
    rule: "bg-purple-400",
  },
  exorax: {
    text: "text-emerald-300",
    border: "border-emerald-500/25",
    chip: "bg-emerald-400/10 text-emerald-200",
    glow: "from-emerald-500/12",
    rule: "bg-emerald-400",
  },
}

export function ResearchMonograph({ productId }: { productId: Dossier["id"] }) {
  const paper = getResearch(productId)
  const accent = accents[productId]
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (window.location.hash !== "#research") return
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  async function copyCitation() {
    await navigator.clipboard.writeText(paper.citation)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section
      id="research"
      className={`relative scroll-mt-24 overflow-hidden rounded-xl border ${accent.border} bg-[#0a0a12] shadow-[0_0_0_1px_rgba(212,175,55,0.08)]`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-amber-500/[0.04]`} />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-amber-300 via-amber-500/80 to-transparent" />

      <div className="relative p-5 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-amber-200/10 pb-5">
          <div className="min-w-0 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-amber-300/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                {paper.journal}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {paper.date} · {paper.pages} pages · {paper.caseStudy}
              </span>
            </div>
            <h2 className="mt-3 font-mono text-xl font-semibold leading-snug tracking-tight text-white md:text-[1.65rem]">
              {paper.title}
            </h2>
            <p className={`mt-2 text-sm italic ${accent.text}`}>{paper.subtitle}</p>
            <p className="mt-3 text-xs text-gray-400">
              <span className="font-medium text-white">{paper.author}</span>
              <span className="mx-2 text-gray-600">·</span>
              {paper.organization}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={paper.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-300 px-3.5 py-2 text-xs font-semibold text-[#1a1408] shadow-[0_8px_24px_rgba(251,191,36,0.2)] transition hover:bg-amber-200"
            >
              <Download className="h-3.5 w-3.5" />
              Download monograph
            </a>
            <button
              type="button"
              onClick={() => void copyCitation()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-gray-200 transition hover:bg-white/10"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <FileText className="h-3.5 w-3.5" />}
              {copied ? "Citation copied" : "Copy citation"}
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200/80">Abstract</p>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-200">{paper.abstract}</p>
          </div>
          <aside className="rounded-lg border border-amber-200/15 bg-black/35 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200/80">Research gap</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">{paper.gap}</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white">{paper.contribution}</p>
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {paper.findings.map((finding) => (
            <div key={finding.label} className="rounded-lg border border-white/6 bg-black/30 p-3">
              <p className={`font-mono text-lg font-semibold ${accent.text}`}>{finding.value}</p>
              <p className="mt-1 text-[11px] font-medium text-white">{finding.label}</p>
              <p className="mt-1 text-[10px] leading-snug text-gray-500">{finding.detail}</p>
            </div>
          ))}
        </div>

        {paper.model ? (
          <div className="mt-6 rounded-lg border border-white/8 bg-gradient-to-r from-black/50 to-black/20 px-4 py-4 md:px-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500">{paper.model.name}</p>
            <p className={`mt-2 font-mono text-sm md:text-base ${accent.text}`}>{paper.model.formula}</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">{paper.model.meaning}</p>
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500">
              Traditional versus proposed system
            </p>
            <div className="overflow-hidden rounded-lg border border-white/8">
              <div className="grid grid-cols-[0.9fr_1fr_1fr] gap-2 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                <span>Factor</span>
                <span>Incumbent</span>
                <span className={accent.text}>This research</span>
              </div>
              {paper.comparison.map((row) => (
                <div
                  key={row.factor}
                  className="grid grid-cols-[0.9fr_1fr_1fr] gap-2 border-t border-white/5 px-3 py-2.5 text-xs"
                >
                  <span className="font-medium text-gray-300">{row.factor}</span>
                  <span className="text-gray-500">{row.traditional}</span>
                  <span className="text-white">{row.proposed}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                Primary contributions
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {paper.pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-lg border border-white/6 bg-black/25 p-3">
                    <p className="text-sm font-medium text-white">{pillar.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                Architecture in the monograph
              </p>
              <ol className="space-y-2">
                {paper.architecture.map((item, index) => (
                  <li key={item.layer} className="flex gap-3 rounded-lg border border-white/5 bg-black/20 px-3 py-2">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-[#061016] ${accent.rule}`}>
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-white">{item.layer}</p>
                      <p className="text-[11px] text-gray-400">{item.role}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <blockquote className="mt-6 flex gap-3 border-t border-amber-200/10 pt-5">
          <Quote className="mt-0.5 h-4 w-4 shrink-0 text-amber-300/80" />
          <p className="text-sm italic leading-relaxed text-gray-200">{paper.close}</p>
        </blockquote>
      </div>
    </section>
  )
}
