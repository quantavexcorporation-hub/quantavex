"use client"

import { useEffect, useMemo, useRef } from "react"
import { MarketVisualization } from "@/components/dashboard/market-visualization"
import {
  countryDomainSizes,
  domainSizeSource,
  domainSizeYear,
  formatDomainUsd,
} from "@/lib/domain-markets"
import { getManifestModel, type ManifestNode } from "@/lib/priority-markets"
import type { DashboardSnapshot } from "@/lib/dashboard-types"

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function CountryDomainReadout({
  code,
  variant = "full",
}: {
  code: string
  variant?: "full" | "rail"
}) {
  const model = useMemo(() => getManifestModel(), [])
  const node = model.nodes.find((item) => item.code === code)
  const fields = countryDomainSizes(code)
  if (!node || !fields) return null

  const peak = Math.max(...fields.map((field) => field.usdMillions))
  const lead = fields.reduce((best, field) => (field.usdMillions > best.usdMillions ? field : best))

  if (variant === "rail") {
    return (
      <div className="border-b border-white/10 px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          {pad(node.priority)} · {node.name}
        </p>
        <ul className="mt-2 space-y-1.5">
          {fields.map((field) => (
            <li key={field.key} className="flex items-baseline justify-between gap-3">
              <span className="min-w-0 truncate text-[11px] text-zinc-400">{field.field}</span>
              <span className="shrink-0 font-mono text-xs text-white">{field.label}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {pad(node.priority)} · {node.band} · {node.theatre}
        </p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">{node.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          Largest field here is {lead.field} at {lead.label}.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-white/10">
        {fields.map((field) => {
          const width = peak > 0 ? Math.max(8, (field.usdMillions / peak) * 100) : 0
          return (
            <article key={field.key} className="px-4 py-3 sm:px-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium tracking-tight text-white">{field.field}</p>
                <p className="shrink-0 font-mono text-xl font-semibold tracking-tight text-white">{field.label}</p>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">{field.detail}</p>
              <div className="mt-2 h-px bg-white/10">
                <div className="h-px bg-white/70" style={{ width: `${width}%` }} />
              </div>
            </article>
          )
        })}
      </div>

      <p className="border-t border-white/10 px-4 py-3 text-[11px] leading-relaxed text-zinc-500 sm:px-5">
        {domainSizeYear} revenue forecast · {domainSizeSource} · USD. Field size, not a company figure.
      </p>
    </div>
  )
}

export function DomainMarketBook({
  selected,
  onSelect,
  markets,
}: {
  selected: string
  onSelect: (code: string) => void
  markets?: DashboardSnapshot["markets"]
}) {
  const nodes = useMemo(() => getManifestModel().nodes.slice().sort((a, b) => a.priority - b.priority), [])
  const readoutRef = useRef<HTMLElement>(null)
  const skipScroll = useRef(true)

  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false
      return
    }
    if (window.matchMedia("(max-width: 1023px)").matches) {
      readoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selected])

  return (
    <section className="overflow-hidden border border-white/10 bg-[#09090b]">
      <div className="border-b border-white/10 px-4 py-4 sm:px-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Domain size</p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
          Thirty countries. Three fields.
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Click a country. Education, entertainment, and commerce each show their published {domainSizeYear} size.
          Same source, same year, so the countries compare. This is market understanding, not a company figure.
        </p>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="order-2 min-w-0 lg:order-1 lg:border-r lg:border-white/10">
          <div className="sticky top-0 z-10 hidden grid-cols-[3.25rem_minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-2 border-b border-white/10 bg-[#09090b] px-4 py-2 sm:grid sm:px-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">#</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">Country</span>
            <span className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Education</span>
            <span className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Entertainment</span>
            <span className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Commerce</span>
          </div>
          <div className="max-h-[640px] overflow-y-auto">
            {nodes.map((node) => (
              <CountryRow key={node.code} node={node} selected={node.code === selected} onSelect={onSelect} />
            ))}
          </div>
        </div>
        <div className="order-1 flex min-w-0 flex-col border-b border-white/10 bg-[#08080a] lg:order-2 lg:border-b-0 lg:border-l">
          <aside ref={readoutRef}>
            <CountryDomainReadout code={selected} />
          </aside>
          <MarketVisualization data={markets} embedded />
        </div>
      </div>
    </section>
  )
}

function CountryRow({
  node,
  selected,
  onSelect,
}: {
  node: ManifestNode
  selected: boolean
  onSelect: (code: string) => void
}) {
  const fields = countryDomainSizes(node.code)
  if (!fields) return null

  return (
    <button
      type="button"
      onClick={() => onSelect(node.code)}
      aria-pressed={selected}
      className={`grid w-full grid-cols-1 gap-2 border-b border-white/[0.06] px-4 py-3 text-left transition sm:grid-cols-[3.25rem_minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] sm:items-center sm:px-5 ${
        selected ? "bg-white text-black" : "text-zinc-200 hover:bg-white/[0.04]"
      }`}
    >
      <span className={`font-mono text-[11px] tracking-wider ${selected ? "text-black/45" : "text-zinc-600"}`}>
        {pad(node.priority)}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium tracking-tight">{node.name}</span>
        <span className={`mt-0.5 block text-[10px] uppercase tracking-[0.14em] sm:hidden ${selected ? "text-black/50" : "text-zinc-600"}`}>
          {node.band}
        </span>
      </span>
      <span className="grid grid-cols-3 gap-2 sm:contents">
        {fields.map((field) => (
          <span key={field.key} className="min-w-0 sm:text-right">
            <span className={`block font-mono text-[10px] uppercase tracking-[0.12em] sm:hidden ${selected ? "text-black/45" : "text-zinc-600"}`}>
              {field.field}
            </span>
            <span className={`block font-mono text-[13px] tabular-nums ${selected ? "text-black" : "text-zinc-100"}`}>
              {formatDomainUsd(field.usdMillions)}
            </span>
          </span>
        ))}
      </span>
    </button>
  )
}
