"use client"

import Link from "next/link"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { company } from "@/lib/company"
import { LaterDisplays } from "@/components/dashboard/later-displays"
import { grab, grabStrategies, mesh, months, opex, platformClock, program, quantavexClock, roadmap } from "@/lib/roadmap"

const followAccent: Record<string, string> = {
  quantrion: "border-teal-500/35 bg-teal-400/10 text-teal-100",
  vdoc: "border-rose-500/35 bg-rose-500/10 text-rose-100",
  exorax: "border-zinc-400/35 bg-zinc-400/10 text-zinc-100",
}

export function ForecastView() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="relative overflow-hidden border border-white/15 bg-[#050506]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">Operating program</p>
            <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.05]">
              Three platforms.
              <span className="block text-zinc-400">One clock.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {roadmap.promise}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
              {roadmap.posture} · {roadmap.clock} · founder-led from {company.headquarters}
            </p>
          </div>
          <div className="flex flex-col justify-end border border-white/10 bg-black/40 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">Month 6 target</p>
            <p className="mt-2 text-6xl font-semibold tracking-tighter text-white sm:text-7xl">
              {roadmap.users}
            </p>
            <p className="mt-2 text-sm text-zinc-400">users · company total</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">
              {roadmap.perPlatform} × 3 platforms
            </p>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">{roadmap.usersNote}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border-t border-white/10 lg:grid-cols-4 lg:divide-y-0">
          {[
            { k: "Clock", v: "6 months", n: "After investment" },
            { k: "Build", v: "Parallel", n: "Quantrion · Vdoc · ExoraX" },
            { k: "Infrastructure", v: "Full company", n: "Identity · data · compute" },
            { k: "Grab", v: "6 channels", n: "YouTube to Reddit" },
          ].map((item) => (
            <div key={item.k} className="px-4 py-4 sm:px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">{item.k}</p>
              <p className="mt-2 font-mono text-xl font-semibold text-white">{item.v}</p>
              <p className="mt-1 text-[11px] text-zinc-500">{item.n}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Figure · six-month parallel clock</p>
        <div className="overflow-x-auto border border-white/10 bg-[#050506]">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="w-40 px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">Who</th>
                {months.map((month) => (
                  <th key={month} className="px-2 py-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/15 bg-white/[0.03]">
                <th className="px-3 py-3 text-left">
                  <p className="text-sm font-semibold text-white">Quantavex</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Instruction</p>
                </th>
                {quantavexClock.map((step) => (
                  <td key={step.order} className="px-1.5 py-2">
                    <div className="border border-white/30 bg-white px-2 py-2 text-center text-black">
                      <p className="font-mono text-[11px] font-semibold leading-tight">{step.order}</p>
                      <p className="mt-1 text-[10px] leading-tight text-zinc-700">{step.work}</p>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td colSpan={7} className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                  Platforms change on that instruction
                </td>
              </tr>
              {platformClock.map((platform) => (
                <tr key={platform.id} className="border-t border-white/[0.06]">
                  <th className="px-3 py-2.5 text-left text-xs font-medium text-white">
                    <span className="inline-flex items-center gap-2">
                      <ProductLogo product={platform.id} size={18} />
                      {platform.id === "quantrion" ? "Quantrion" : platform.id === "vdoc" ? "Vdoc" : "ExoraX"}
                    </span>
                  </th>
                  {platform.cells.map((cell, index) => (
                    <td key={`${platform.id}-${index}`} className="px-1.5 py-2">
                      <div className={`border px-2 py-2 text-center font-mono text-[10px] leading-tight sm:text-[11px] ${followAccent[platform.id]}`}>
                        {cell}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
          Quantavex runs infrastructure, APIs, cost, and growth. The three platforms move when that instruction changes.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <figure className="border border-white/10 bg-[#050506] p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Figure · company infrastructure</p>
          <MeshFigure />
          <figcaption className="mt-3 space-y-1.5">
            {mesh.map((edge) => (
              <p key={edge.from} className="font-mono text-[11px] text-zinc-500">
                {edge.from} → {edge.via} → {edge.to}
              </p>
            ))}
          </figcaption>
        </figure>
        <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Instruction</p>
          <ol className="mt-4 space-y-0">
            {program.map((step) => (
              <li key={step.n} className="grid grid-cols-[2.75rem_1fr] gap-3 border-b border-white/[0.06] py-3 last:border-0 last:pb-0">
                <span className="font-mono text-sm text-zinc-500">{step.n}</span>
                <div>
                  <p className="text-sm font-medium text-white">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">User grab · nine strategies</p>
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Taken from how ChatGPT, Dropbox, Slack, Zoom, and Notion actually filled. The product carries the next user. Social channels come next. Advertising banners come after those.
        </p>
        <ol className="grid gap-2 lg:grid-cols-3">
          {grabStrategies.map((item) => (
            <li key={item.n} className="border border-white/10 bg-[#09090b] p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-[10px] text-zinc-600">{item.n}</p>
                <p className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{item.move}</p>
              </div>
              <p className="mt-2 text-base font-semibold text-white">{item.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Where it runs · six channels</p>
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Social distribution stays on these six marks. The nine strategies above are the speed. The banners below wait for the grab.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {grab.map((channel) => (
            <li key={channel.name} className="border border-white/10 bg-[#09090b] p-4">
              <div className="flex items-center justify-between gap-3">
                <img src={`/brands/${channel.slug}.svg`} alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{channel.yield}</p>
              </div>
              <p className="mt-3 text-base font-semibold text-white">{channel.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{channel.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-zinc-600">
          Planned distribution. Not live follower counts, paid-reach claims, or current cohorts.
        </p>
      </section>

      <LaterDisplays />

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Operating cost</p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {opex.map((item) => (
            <li key={item.name} className="border border-white/10 bg-[#09090b] p-4">
              <p className="text-sm font-medium text-white">{item.name}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{item.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-zinc-600">
          Categories the company will pay to run production. Not a live burn rate and not a public raise table.
        </p>
      </section>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Month gates</p>
        <ol className="border border-white/10 bg-[#09090b]">
          {company.milestones.map((item) => (
            <li
              key={`${item.period}-${item.title}`}
              className="grid gap-2 border-b border-white/10 px-4 py-4 last:border-0 sm:grid-cols-[4rem_8rem_1fr] sm:items-baseline sm:gap-4 sm:px-5"
            >
              <p className="font-mono text-sm text-white">{item.period}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.product}</p>
              <div>
                <p className="text-sm text-white">
                  {item.title}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">{item.status}</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Already specified</p>
          <ul className="mt-4 space-y-3">
            {(["quantrion", "vdoc", "exorax"] as ProductId[]).map((id) => (
              <li key={id} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-white">
                  <ProductLogo product={id} size={22} />
                  {id === "quantrion" ? "Quantrion" : id === "vdoc" ? "Vdoc" : "ExoraX"}
                </span>
                <Link
                  href={`/${id}/architecture`}
                  className={`text-xs underline decoration-white/20 underline-offset-4 ${productAccents[id].text}`}
                >
                  Open architecture
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Constraints</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
            <li>
              <span className="text-white">Target, not telemetry.</span> 90,000 users on each platform via six channels. 270,000 company total at month 6 after investment.
            </li>
            <li>
              <span className="text-white">Founder-led.</span> {company.founder.name} builds this. The six fields below are hires — not a team already in place.
            </li>
            <li>
              <span className="text-white">India first as market.</span> Build is simultaneous. Geography expansion remains a later plan.
            </li>
            <li>
              <span className="text-white">Terms stay private.</span> Write through Contact. This page is the operating program.
            </li>
          </ul>
        </section>
      </div>

      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">What the build needs</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{company.team.note}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {company.team.seats.map((seat) => (
            <li key={seat.field} className="border border-white/8 bg-black/25 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{seat.role}</p>
              <p className="mt-1.5 text-sm font-medium text-white">{seat.field}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">{seat.detail}</p>
            </li>
          ))}
        </ul>
      </section>

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

function MeshFigure() {
  return (
    <svg viewBox="0 0 640 340" className="mt-4 h-auto w-full" role="img" aria-label="Quantavex company infrastructure running three platforms">
      <rect width="640" height="340" fill="#050506" />
      <circle cx="320" cy="170" r="58" fill="#09090b" stroke="#fafafa" strokeWidth="1.4" />
      <text x="320" y="164" textAnchor="middle" fill="#fafafa" fontSize="12" fontWeight="600">
        QUANTAVEX
      </text>
      <text x="320" y="182" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Infrastructure
      </text>
      <Node cx={120} cy={70} label="Quantrion" stroke="#2dd4bf" />
      <Node cx={520} cy={70} label="Vdoc" stroke="#f43f5e" />
      <Node cx={320} cy={290} label="ExoraX" stroke="#d4d4d8" />
      <line x1="168" y1="92" x2="272" y2="138" stroke="#2dd4bf" strokeWidth="1.2" />
      <line x1="472" y1="92" x2="368" y2="138" stroke="#f43f5e" strokeWidth="1.2" />
      <line x1="320" y1="228" x2="320" y2="252" stroke="#d4d4d8" strokeWidth="1.2" />
      <text x="188" y="128" fill="#5eead4" fontSize="9">
        data · compute
      </text>
      <text x="392" y="128" fill="#fda4af" fontSize="9">
        data · compute
      </text>
      <text x="332" y="246" fill="#d4d4d8" fontSize="9">
        data · compute
      </text>
    </svg>
  )
}

function Node({
  cx,
  cy,
  label,
  stroke,
}: {
  cx: number
  cy: number
  label: string
  stroke: string
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="38" fill="#09090b" stroke={stroke} strokeWidth="1.4" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#fafafa" fontSize="11" fontWeight="600">
        {label}
      </text>
    </g>
  )
}
