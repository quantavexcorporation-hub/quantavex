"use client"

import Link from "next/link"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { company } from "@/lib/company"
import { GrowthSystem } from "@/components/dashboard/growth-system"
import { OperatingProgram } from "@/components/dashboard/operating-program"
import { capital, engines, phases, roadmap } from "@/lib/roadmap"

const engineTone: Record<ProductId, string> = {
  quantrion: "border-teal-400/30",
  vdoc: "border-rose-400/30",
  exorax: "border-zinc-300/25",
}

export function ForecastView() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="relative overflow-hidden border border-white/15 bg-[#050506]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_52%)]" />
        <div className="relative p-5 sm:p-8 lg:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
            {roadmap.targetLabel} · {roadmap.targetDate}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.02]">
            {roadmap.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Research-informed growth engineering, {roadmap.start} to {roadmap.targetDate}. The goal is activated users, returning users, and referrals — not three advertised websites. Registrations and monthly active users are counted apart.
          </p>

          <div className="mt-8 border border-white/10 bg-black/50 p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">Registrations</p>
            <p className="mt-2 text-6xl font-semibold tracking-tighter text-white sm:text-8xl">{roadmap.users}</p>
            <p className="mt-2 text-sm text-zinc-400">company total · stretch target</p>
          </div>

          <ul className="mt-3 grid gap-3 lg:grid-cols-2">
            {engines.map((engine) => (
              <li
                key={engine.id}
                className={`border bg-black/40 p-4 ${engineTone[engine.id]} ${engine.featured ? "lg:col-span-2" : ""}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <ProductLogo product={engine.id} size={22} />
                    <span className="text-sm font-medium text-white">{engine.name}</span>
                  </span>
                  {engine.featured ? (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Half the company target</span>
                  ) : null}
                </span>
                <p className={`mt-3 font-mono font-semibold tracking-tight text-white ${engine.featured ? "text-6xl sm:text-7xl" : "text-4xl"}`}>
                  {engine.target}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-zinc-500">registrations</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300">{roadmap.mau}</p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-zinc-500">{roadmap.disclaimer}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border-t border-white/10 lg:grid-cols-4 lg:divide-y-0">
          {[
            { k: "Start", v: roadmap.start, n: "Plan begins" },
            { k: "Horizon", v: "18 months", n: "Execution window" },
            { k: "Close", v: roadmap.targetDate, n: "Strategic target" },
            { k: "Split", v: "6 · 3 · 3", n: "ExoraX · Quantrion · Vdoc" },
          ].map((item) => (
            <div key={item.k} className="px-4 py-4 sm:px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">{item.k}</p>
              <p className="mt-2 font-mono text-lg font-semibold text-white sm:text-xl">{item.v}</p>
              <p className="mt-1 text-[11px] text-zinc-500">{item.n}</p>
            </div>
          ))}
        </div>
      </section>

      <OperatingProgram />

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Four phases</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Across 18 months</h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-zinc-500">
            Each phase ends at a gate. Spend on acquisition rises only after the gate is met.
          </p>
        </div>
        <ol className="grid gap-3 lg:grid-cols-4">
          {phases.map((phase) => (
            <li key={phase.n} className="flex flex-col border border-white/10 bg-[#09090b]">
              <div className="border-b border-white/10 px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Phase {phase.n}</p>
                <p className="mt-3 font-mono text-4xl font-semibold tracking-tight text-white">{phase.window}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">{phase.months}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug text-white">{phase.title}</h3>
              </div>
              <ul className="flex-1 space-y-2.5 px-4 py-4">
                {phase.points.map((point) => (
                  <li key={point} className="text-xs leading-relaxed text-zinc-400">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="border-t border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-zinc-200">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Gate · </span>
                {phase.gate}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Three independent growth engines</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Separate acquisition. Shared company.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Each platform needs separate acquisition metrics and a dedicated growth strategy, even while Quantavex shares infrastructure and company operations.
        </p>
        <ul className="mt-5 grid gap-3 lg:grid-cols-3">
          {engines.map((engine) => (
            <li key={engine.id} className={`border bg-[#050506] p-5 ${engineTone[engine.id]}`}>
              <span className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <ProductLogo product={engine.id} size={28} />
                  {engine.name}
                </span>
                <span className="font-mono text-sm text-zinc-400">{engine.target}</span>
              </span>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">{engine.text}</p>
              <Link
                href={`/${engine.id}`}
                className={`mt-5 inline-flex text-xs underline decoration-white/20 underline-offset-4 ${productAccents[engine.id].text}`}
              >
                Open dossier
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-white/15 bg-[#050506]">
        <div className="border-b border-white/10 px-5 py-6 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Capital strategy</p>
          <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Plan the first rupees. Earn the right to spend more.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-white/10 p-5 sm:p-8 lg:border-r lg:border-b-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Initial planning scenario</p>
            <p className="mt-3 font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl">{capital.initial}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{capital.initialNote}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Allocate it to production engineering, customer validation, AI infrastructure, growth experiments, and essential operations.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{capital.release}</p>
          </div>
          <div className="p-5 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Arithmetic at {capital.cac} per registration
            </p>
            <p className="mt-3 font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl">{capital.registrationCost}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{capital.registrationNote}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{capital.organic}</p>
          </div>
        </div>
        <p className="border-t border-white/10 px-5 py-5 text-sm leading-relaxed text-zinc-200 sm:px-8">{roadmap.promise}</p>
      </section>

      <GrowthSystem />

      <div className="flex flex-wrap gap-2 border border-white/10 bg-[#09090b] p-5">
        <Link href="/#contact" className="inline-flex border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200">
          Contact
        </Link>
        <Link href={company.founder.path} className="inline-flex border border-white/15 px-4 py-2 text-sm text-white hover:border-white/30">
          Founder
        </Link>
      </div>
    </div>
  )
}
