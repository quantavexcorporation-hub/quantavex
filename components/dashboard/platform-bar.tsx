"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Quantrion", value: 68 },
  { name: "Vdoc", value: 81 },
  { name: "ExoraX", value: 74 },
]

export function PlatformBar() {
  return (
    <section className="h-full rounded-xl border border-white/5 bg-[#101018] p-4">
      <h3 className="text-sm font-medium text-white">Sales Quantity</h3>
      <p className="text-xs text-gray-500">Relative platform throughput</p>
      <div className="mt-4 h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: "#0b0b12",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 12,
              }}
            />
            <Bar dataKey="value" fill="#22d3ee" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
