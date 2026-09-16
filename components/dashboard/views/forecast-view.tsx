"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { PageHeader } from "@/components/dashboard/page-header"
import { DataTable } from "@/components/dashboard/data-table"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { useDashboard } from "@/components/dashboard/dashboard-provider"
import { company, investorMailto } from "@/lib/company"

const toneClass = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
  purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-300",
  amber: "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-300",
}

export function ForecastView() {
  const { forecast } = useDashboard()

  return (
    <div className="space-y-5">
      <PageHeader
        title="Fundraising"
        subtitle={`${company.stage} · ${company.round} · ${company.raise} (${company.raiseInr}) · ${company.equity} equity · ${company.valuation} pre-money`}
        actionLabel="Download company paper"
        actionHref={company.paperPdf}
      />

      <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3 text-sm leading-relaxed text-amber-100/90">
        {company.confidentiality}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {forecast.kpis.map((kpi) => (
          <div key={kpi.id} className={`rounded-xl border bg-gradient-to-br p-4 ${toneClass[kpi.tone]}`}>
            <p className="text-xs text-gray-400">{kpi.label}</p>
            <p className="mt-2 font-mono text-3xl font-semibold text-white">{kpi.value}</p>
            <p className="mt-2 text-[11px] text-gray-400">{kpi.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {company.terms.map((term) => (
          <div key={term.label} className="rounded-xl border border-white/8 bg-[#101018] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{term.label}</p>
            <p className="mt-2 text-sm font-medium text-white">{term.value}</p>
            <p className="mt-1 text-[11px] text-gray-500">{term.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Panel>
          <PanelHeader title="Twelve-month roadmap" subtitle="From the Quantavex company paper" />
          <DataTable
            rows={forecast.milestones}
            columns={[
              { key: "period", label: "Period" },
              { key: "title", label: "Milestone" },
              { key: "outcome", label: "Outcome" },
            ]}
          />
        </Panel>
        <Panel>
          <PanelHeader title="Use of funds" subtitle={`${company.raise} allocation`} />
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={forecast.mix} dataKey="value" nameKey="name" innerRadius={52} outerRadius={88} paddingAngle={3}>
                  {forecast.mix.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#0b0b12",
                    border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {forecast.mix.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-3 text-sm text-gray-300">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: item.color }} />
                  <span className="truncate">{item.name}</span>
                </span>
                <span className="font-mono text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel>
          <PanelHeader title="Market opportunity" subtitle={`TAM ${company.tam}`} />
          <ul className="space-y-3">
            {company.markets.map((market) => (
              <li key={market.name} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm text-white">{market.name}</p>
                  <p className="text-[11px] text-gray-500">{market.note}</p>
                </div>
                <p className="font-mono text-sm text-cyan-300">{market.size}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Projected results" subtitle="Early validation from the company paper" />
          <ul className="space-y-3">
            {company.results.map((item) => (
              <li key={item.label} className="rounded-lg border border-white/6 bg-black/25 p-3">
                <p className="font-mono text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-gray-200">{item.label}</p>
                <p className="mt-1 text-[11px] text-gray-500">{item.note}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Advantage and risk" subtitle="As stated in the company paper" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">Advantage</p>
          <ul className="mt-2 space-y-2">
            {company.advantages.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-gray-300">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">Risks</p>
          <ul className="mt-2 space-y-2">
            {company.risks.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-gray-400">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={investorMailto("conversation")}
            className="mt-4 inline-flex text-sm text-cyan-300 hover:text-cyan-200"
          >
            Discuss terms
          </a>
        </Panel>
      </div>
    </div>
  )
}
