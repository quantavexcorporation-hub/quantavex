"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { getProductQuant, quantChartColor } from "@/lib/product-quant"

const tooltipStyle = {
  background: "#0b0b12",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  fontSize: 12,
}

function ChartCard({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`rounded-xl border border-white/8 bg-[#101018] p-4 ${className}`}>
      <div className="mb-3">
        <h3 className="text-sm font-semibold tracking-tight text-white">{title}</h3>
        {subtitle ? <p className="mt-0.5 text-[11px] text-gray-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}

export function ResearchAnalyticsDeck({ productId }: { productId: ProductId }) {
  const deck = getProductQuant(productId)
  const accent = productAccents[productId]
  const color = quantChartColor(productId)
  const muted = "#4b5563"

  return (
    <section className="space-y-4">
      <div className={`relative overflow-hidden rounded-xl border ${accent.border} bg-[#0a0a12]`}>
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent`} />
        <div className={`absolute left-0 top-0 h-full w-[3px] ${accent.solid}`} />
        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0 max-w-3xl">
              <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${accent.text}`}>
                Quantitative research deck
              </p>
              <h2 className="mt-2 font-mono text-lg font-semibold tracking-tight text-white md:text-xl">
                {deck.headline}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{deck.premise}</p>
            </div>
            <span className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-gray-400">
              {deck.disclaimer}
            </span>
          </div>
        </div>
      </div>

      {/* EdRoh-style KPI strip */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {deck.kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-white/8 bg-[#101018] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{kpi.label}</p>
            <p className={`mt-2 font-mono text-2xl font-bold tracking-tight ${accent.text}`}>{kpi.value}</p>
            <p className={`mt-1 text-xs font-medium ${accent.textSoft}`}>{kpi.delta}</p>
            <p className="mt-2 text-[11px] leading-snug text-gray-500">{kpi.interpretation}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard
          title="Efficiency ladder"
          subtitle="Indexed system yield — traditional stack → proposed architecture"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deck.efficiency} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value: number, _name, item) => [
                    `${value} · ${item?.payload?.note ?? "index"}`,
                    "Score",
                  ]}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {deck.efficiency.map((row, index) => (
                    <Cell
                      key={row.name}
                      fill={index === deck.efficiency.length - 1 ? color : muted}
                      fillOpacity={index === deck.efficiency.length - 1 ? 1 : 0.55}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Traditional vs proposed"
          subtitle="Factor scores from the monograph comparison matrix (0–100)"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deck.comparison} layout="vertical" margin={{ top: 4, right: 12, left: 8, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={108}
                  tick={{ fill: "#9ca3af", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="traditional" name="Traditional" fill={muted} radius={[0, 4, 4, 0]} barSize={10} />
                <Bar dataKey="proposed" name="Proposed" fill={color} radius={[0, 4, 4, 0]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <ChartCard
          title="Intelligence loop intensity"
          subtitle="Phase readiness scores — how the machine compounds through the loop"
        >
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deck.funnel} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="stage" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[50, 100]} tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}`, "Intensity"]} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: color, strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Architecture composition" subtitle="Relative weight across divisions / layers">
          <div className="flex h-56 items-center gap-3">
            <div className="h-full w-[55%]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deck.composition}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={48}
                    outerRadius={78}
                    paddingAngle={3}
                    stroke="transparent"
                  >
                    {deck.composition.map((slice, index) => (
                      <Cell
                        key={slice.name}
                        fill={color}
                        fillOpacity={0.35 + (index / Math.max(deck.composition.length - 1, 1)) * 0.55}
                      />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} formatter={(v: number, name: string) => [`${v}%`, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="min-w-0 flex-1 space-y-2">
              {deck.composition.map((slice, index) => (
                <li key={slice.name} className="flex items-center justify-between gap-2 text-xs">
                  <span className="flex min-w-0 items-center gap-2 text-gray-300">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ background: color, opacity: 0.35 + (index / Math.max(deck.composition.length - 1, 1)) * 0.55 }}
                    />
                    <span className="truncate">{slice.name}</span>
                  </span>
                  <span className={`font-mono ${accent.text}`}>{slice.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </ChartCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
        <ChartCard
          title="Research delta matrix"
          subtitle="Structural shift — before / after with scored lift"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs">
              <thead>
                <tr className="border-b border-white/8 text-[10px] uppercase tracking-[0.16em] text-gray-500">
                  <th className="pb-2 pr-3 font-semibold">Factor</th>
                  <th className="pb-2 pr-3 font-semibold">Before</th>
                  <th className="pb-2 pr-3 font-semibold">After</th>
                  <th className="pb-2 pr-3 font-semibold">Delta</th>
                  <th className="pb-2 font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {deck.deltas.map((row) => (
                  <tr key={row.factor} className="border-b border-white/5 last:border-0">
                    <td className="py-2.5 pr-3 font-medium text-white">{row.factor}</td>
                    <td className="py-2.5 pr-3 text-gray-500">{row.before}</td>
                    <td className="py-2.5 pr-3 text-gray-200">{row.after}</td>
                    <td className={`py-2.5 pr-3 font-mono ${accent.text}`}>{row.delta}</td>
                    <td className="py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full rounded-full" style={{ width: `${row.score}%`, background: color }} />
                        </div>
                        <span className="font-mono text-gray-300">{row.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        <ChartCard title="Module readiness" subtitle="Specification depth by architecture module">
          <ul className="space-y-3">
            {deck.modules.map((mod) => (
              <li key={mod.module}>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">{mod.module}</p>
                    <p className="truncate text-[11px] text-gray-500">
                      {mod.layer} · {mod.evidence}
                    </p>
                  </div>
                  <span className={`shrink-0 font-mono text-sm ${accent.text}`}>{mod.readiness}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${mod.readiness}%`, background: color }} />
                </div>
              </li>
            ))}
          </ul>
        </ChartCard>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {deck.interpretation.map((note) => (
          <article
            key={note.title}
            className="rounded-xl border border-white/8 bg-[#101018] p-4"
          >
            <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent.text}`}>
              Founder interpretation
            </p>
            <h3 className="mt-2 text-sm font-semibold text-white">{note.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
