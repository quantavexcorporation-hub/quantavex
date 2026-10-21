"use client"

import { useEffect, useState } from "react"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { platformDisplays, type DisplayCard } from "@/lib/roadmap"

const names: Record<ProductId, string> = {
  quantrion: "Quantrion",
  vdoc: "Vdoc",
  exorax: "ExoraX",
}

export function LaterDisplays() {
  return (
    <section id="banners" className="space-y-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Three displays · later</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          The same three dashboard displays return on each platform when user grab is on. Intelligence, Spotlight, and the ad rail.
        </p>
      </div>
      {platformDisplays.map((platform) => (
        <article key={platform.id} className={`border bg-[#070708] p-3 sm:p-4 ${productAccents[platform.id].border}`}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <ProductLogo product={platform.id} size={22} />
              {names[platform.id]}
            </span>
            <span className={`font-mono text-[10px] uppercase tracking-[0.14em] ${productAccents[platform.id].text}`}>
              With user grab
            </span>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            <RotatingDisplay label={platform.labels[0]} cards={platform.intelligence} />
            <SpotlightDisplay label={platform.labels[1]} card={platform.spotlight} />
            <RotatingDisplay label={platform.labels[2]} cards={platform.ads} sponsored />
          </div>
        </article>
      ))}
    </section>
  )
}

function RotatingDisplay({
  label,
  cards,
  sponsored = false,
}: {
  label: string
  cards: readonly DisplayCard[]
  sponsored?: boolean
}) {
  const [index, setIndex] = useState(0)
  const card = cards[index]

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || cards.length < 2) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % cards.length)
    }, sponsored ? 6500 : 7000)
    return () => window.clearInterval(timer)
  }, [cards.length, sponsored])

  return (
    <div>
      <p className="mb-1.5 px-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">{label}</p>
      <div
        className="relative flex min-h-[210px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101014] p-4"
        style={{ boxShadow: `inset 0 0 40px ${card.accent}22` }}
      >
        <span
          className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full blur-2xl"
          style={{ background: card.accent, opacity: 0.28 }}
        />
        <p className="relative text-[10px] font-medium uppercase tracking-[0.16em]" style={{ color: card.accent }}>
          {card.eyebrow}
        </p>
        <h3 className="relative mt-2 text-base font-semibold tracking-tight text-white">{card.headline}</h3>
        <p className="relative mt-2 flex-1 text-xs leading-relaxed text-zinc-400">{card.body}</p>
        <div className="relative mt-4 flex items-center justify-between gap-3">
          <span
            className="inline-flex px-3 py-1.5 text-[11px] font-semibold text-black"
            style={{ background: card.accent }}
          >
            {card.cta}
          </span>
          <span className="flex gap-1">
            {cards.map((item, dot) => (
              <button
                key={item.headline}
                type="button"
                aria-label={`${label} ${dot + 1}`}
                onClick={() => setIndex(dot)}
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: dot === index ? card.accent : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

function SpotlightDisplay({ label, card }: { label: string; card: DisplayCard }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2 px-0.5">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-amber-300/80">{label}</p>
        <span className="ml-auto rounded-full border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-amber-300">
          Live
        </span>
      </div>
      <div className="relative flex min-h-[210px] flex-col overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/10 via-[#14120c] to-cyan-400/10 p-4">
        <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-400/20 blur-3xl" />
        <p className="relative text-[10px] font-medium uppercase tracking-[0.16em] text-amber-200/80">{card.eyebrow}</p>
        <h3 className="relative mt-2 text-lg font-semibold tracking-tight text-white">{card.headline}</h3>
        <p className="relative mt-2 flex-1 text-xs leading-relaxed text-zinc-400">{card.body}</p>
        <span className="relative mt-4 inline-flex w-full items-center justify-center bg-gradient-to-r from-amber-300 to-cyan-300 px-3 py-2 text-xs font-semibold text-black">
          {card.cta}
        </span>
      </div>
    </div>
  )
}
