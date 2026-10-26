import { company } from "@/lib/company"

export interface ForecastMonth {
  month: string
  revenue: number
  expenses: number
  profit: number
  predicted: boolean
}

export interface ForecastKpi {
  id: string
  label: string
  value: string
  delta: string
  tone: "cyan" | "purple" | "emerald" | "amber"
}

export interface CapitalMilestone {
  period: string
  title: string
  capital: string
  outcome: string
}

export function getForecast(): {
  series: ForecastMonth[]
  kpis: ForecastKpi[]
  mix: { name: string; value: number; color: string }[]
  milestones: CapitalMilestone[]
} {
  return {
    series: [],
    kpis: [
      { id: "horizon", label: "Horizon", value: "18 months", delta: "October 2026 to April 2028 — not live operations", tone: "amber" },
      { id: "posture", label: "Phases", value: "Four gates", delta: "Value before acquisition spend", tone: "cyan" },
      { id: "mesh", label: "Infrastructure", value: "Shared", delta: "One company, three growth engines", tone: "purple" },
      { id: "users", label: "Target", value: "9 million", delta: "3 million registrations on each platform — a stretch target", tone: "emerald" },
    ],
    mix: [],
    milestones: company.milestones.map((item) => ({
      period: item.period,
      title: item.title,
      capital: item.product,
      outcome: item.detail,
    })),
  }
}
