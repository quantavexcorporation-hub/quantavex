import Link from "next/link"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { LaterDisplays } from "@/components/dashboard/later-displays"
import { productAccents } from "@/lib/product-accents"
import { company } from "@/lib/company"
import {
  grab,
  grabStrategies,
  mesh,
  months,
  opex,
  platformClock,
  program,
  quantavexClock,
} from "@/lib/roadmap"

const followAccent: Record<string, string> = {
  quantrion: "border-teal-500/35 bg-teal-400/10 text-teal-100",
  vdoc: "border-rose-500/35 bg-rose-500/10 text-rose-100",
  exorax: "border-zinc-400/35 bg-zinc-400/10 text-zinc-100",
}

const platformName: Record<ProductId, string> = {
  quantrion: "Quantrion",
  vdoc: "Vdoc",
  exorax: "ExoraX",
}

export function OperatingProgram() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">What the build needs</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Six fields to hire.</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">{company.team.note}</p>
        <p className="mt-2 text-xs text-zinc-500">{company.team.hiring}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {company.team.seats.map((seat) => (
            <li key={seat.field} className="border border-white/10 bg-black/25 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{seat.role}</p>
              <p className="mt-1.5 text-sm font-medium text-white">{seat.field}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">{seat.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <figure className="overflow-hidden border border-white/10 bg-[#050506]">
        <div className="border-b border-white/10 px-4 py-4 sm:px-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Figure · first six months</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
            The opening window inside the 18-month plan. The registration target stays 12 million by April 2028.
          </p>
        </div>

        <div className="hidden px-4 py-6 lg:block sm:px-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Quantavex · Instruction</p>
          <ol className="relative mt-5 grid grid-cols-6 gap-3">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[6px] h-px bg-white/30" />
            {months.map((month, index) => {
              const step = quantavexClock[index]
              return (
                <li key={month} className="relative">
                  <span className="relative z-10 mx-auto block h-3.5 w-3.5 rounded-full border border-white bg-[#050506]" />
                  <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{month}</p>
                  <div className="mt-2 bg-white px-2 py-2.5 text-center text-black">
                    <p className="font-mono text-[11px] font-semibold leading-tight">{step.order}</p>
                    <p className="mt-1 text-[10px] leading-tight text-zinc-600">{step.work}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Platforms change on that instruction
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {platformClock.map((platform) => (
              <li key={platform.id} className="inline-flex items-center gap-2 text-xs text-white">
                <ProductLogo product={platform.id} size={16} decorative />
                {platformName[platform.id]}
              </li>
            ))}
          </ul>
          <ol className="mt-3 grid grid-cols-6 gap-3">
            {months.map((month, index) => (
              <li key={month} className="space-y-1.5">
                {platformClock.map((platform) => (
                  <p
                    key={platform.id}
                    className={`border px-2 py-1.5 text-center font-mono text-[10px] leading-tight ${followAccent[platform.id]}`}
                  >
                    {platform.cells[index]}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </div>

        <ol className="lg:hidden">
          {months.map((month, index) => (
            <li key={month} className="border-b border-white/10 px-4 py-4 last:border-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{month}</p>
              <div className="mt-2 border border-white/30 bg-white px-3 py-2.5 text-black">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">Quantavex · Instruction</p>
                <p className="mt-1 font-mono text-sm font-semibold leading-tight">{quantavexClock[index].order}</p>
                <p className="mt-1 text-xs leading-snug text-zinc-700">{quantavexClock[index].work}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {platformClock.map((platform) => (
                  <li
                    key={platform.id}
                    className={`flex items-center justify-between gap-3 border px-2.5 py-2 ${followAccent[platform.id]}`}
                  >
                    <span className="inline-flex min-w-0 items-center gap-2 text-xs font-medium">
                      <ProductLogo product={platform.id} size={16} decorative />
                      {platformName[platform.id]}
                    </span>
                    <span className="text-right font-mono text-[11px] leading-tight">{platform.cells[index]}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 sm:px-5">
          Quantavex runs infrastructure, APIs, cost, and growth. The three platforms move when that instruction changes.
        </figcaption>
      </figure>

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
              <span className="text-white">Target, not telemetry.</span> Twelve million registrations by April 2028 is the stretch target: 6 million on ExoraX, 3 million on Quantrion, 3 million on Vdoc. The six-month clock is the first window.
            </li>
            <li>
              <span className="text-white">Founder-led.</span> {company.founder.name} builds this. The six fields above are hires — not a team already in place.
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
