"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { GlobalIntelligenceMap } from "@/components/dashboard/global-intelligence-map"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { getPriorityRegions, marketBand } from "@/lib/priority-markets"
import { TargetBanner } from "@/components/dashboard/target-note"

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function IntelligenceView() {
  const { snapshot } = useDashboard()
  const regions = Object.values(snapshot?.regions ?? getPriorityRegions())
    .slice()
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))

  const home = regions.find((r) => r.priority === 1)
  const core = regions.filter((r) => r.priority > 1 && r.priority <= 10).length
  const total = regions.length

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        title="Priority markets"
        subtitle="Build in India. Expand into high-economy countries in a fixed order. This is the operating sequence — not traffic, revenue, or live telemetry."
      />
      <TargetBanner />

      <div className="grid grid-cols-3 border border-white/10">
        {[
          { k: "Home", v: home?.name ?? "India" },
          { k: "Core expansion", v: String(core) },
          { k: "Full corridor", v: String(total) },
        ].map((item) => (
          <div key={item.k} className="border-r border-white/10 px-4 py-4 last:border-r-0 sm:px-6 sm:py-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">{item.k}</p>
            <p className="mt-2 font-mono text-xl font-semibold tracking-tight text-white sm:text-2xl">{item.v}</p>
          </div>
        ))}
      </div>

      <GlobalIntelligenceMap data={snapshot?.regions} lastSyncSeconds={snapshot?.lastSyncSeconds ?? 0} />

      <section className="overflow-hidden border border-white/10">
        <div className="flex items-end justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Manifest</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">Thirty markets. One order.</h3>
          </div>
          <p className="hidden text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:block">
            Home · Core · Next · Later
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:px-6">
                  Seq
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:px-6">
                  Market
                </th>
                <th className="px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:px-6">
                  Band
                </th>
                <th className="px-4 py-3 text-right font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region) => {
                const band = marketBand(region.priority)
                return (
                  <tr key={region.name} className="border-b border-white/[0.06] last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-zinc-500 sm:px-6">{pad(region.priority)}</td>
                    <td className="px-4 py-3 text-sm font-medium tracking-tight text-white sm:px-6">{region.name}</td>
                    <td className="px-4 py-3 text-xs uppercase tracking-[0.14em] text-zinc-400 sm:px-6">{band}</td>
                    <td className="px-4 py-3 text-right text-xs text-zinc-500 sm:px-6">
                      {region.priority === 1 ? "Build" : "Planned"}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
