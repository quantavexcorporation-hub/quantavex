"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ForecastMonth } from "@/lib/forecast-data"

export function ForecastChart({
  data,
  showPredictions,
}: {
  data: ForecastMonth[]
  showPredictions: boolean
}) {
  const lastActualIndex = data.findIndex((row) => row.predicted) - 1
  const series = data
    .filter((row) => showPredictions || !row.predicted)
    .map((row, index) => ({
      month: row.month,
      actualRevenue: row.predicted ? undefined : row.revenue,
      predictedRevenue:
        showPredictions && (row.predicted || index === lastActualIndex) ? row.revenue : undefined,
      expenses: row.expenses,
      profit: showPredictions ? row.profit : undefined,
    }))

  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="rgba(34,211,238,0.08)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            contentStyle={{
              background: "#0b0b12",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: 12,
              color: "#fff",
            }}
            formatter={(value: number, name: string) => [`$${Number(value).toFixed(2)}M`, name]}
          />
          <Legend wrapperStyle={{ color: "#9ca3af", fontSize: 12 }} />
          <Line type="monotone" dataKey="actualRevenue" name="Actual Revenue" stroke="#22d3ee" strokeWidth={2.4} connectNulls={false} dot={false} />
          {showPredictions ? (
            <Line
              type="monotone"
              dataKey="predictedRevenue"
              name="Predicted Revenue"
              stroke="#a855f7"
              strokeWidth={2.4}
              strokeDasharray="6 4"
              connectNulls={false}
              dot={false}
            />
          ) : null}
          <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#94a3b8" strokeWidth={2} dot={false} />
          {showPredictions ? (
            <Line
              type="monotone"
              dataKey="profit"
              name="Predicted Profit"
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
