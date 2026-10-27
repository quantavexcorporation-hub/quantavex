"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { productAccents } from "@/lib/product-accents"
import { roadmap } from "@/lib/roadmap"

const shares = [
  { id: "exorax" as const, name: "ExoraX", value: 6, label: "6 million" },
  { id: "quantrion" as const, name: "Quantrion", value: 3, label: "3 million" },
  { id: "vdoc" as const, name: "Vdoc", value: 3, label: "3 million" },
]

export function RegistrationGoal() {
  const max = Math.max(...shares.map((share) => share.value))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-auto flex-col border border-white/10 bg-[#09090b] p-4 sm:h-full"
    >
      <div className="mb-4 flex shrink-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-white">Registration goal</h3>
          <p className="mt-0.5 text-xs text-pretty text-gray-500">
            Targeted 12 million users by April 2028.
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="font-mono text-base font-bold text-white sm:text-lg">{roadmap.users}</div>
          <div className="text-[10px] text-gray-500">Company total</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:min-h-0 sm:flex-row sm:items-center sm:gap-6">
        <div className="mx-auto h-36 w-36 shrink-0 sm:mx-0 sm:h-32 sm:w-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={shares} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value">
                {shares.map((entry) => (
                  <Cell key={entry.id} fill={productAccents[entry.id].hex} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0c0c14",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "4px",
                  fontSize: "11px",
                }}
                formatter={(_value: number, name: string) => [shares.find((item) => item.name === name)?.label ?? name, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          {shares.map((share, index) => (
            <div key={share.id}>
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: productAccents[share.id].hex }} />
                  <span className="text-xs text-gray-400">{share.name}</span>
                </div>
                <span className="font-mono text-xs text-white">{share.label}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(share.value / max) * 100}%` }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: productAccents[share.id].hex }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
