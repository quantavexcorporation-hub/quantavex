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
      { id: "horizon", label: "Horizon", value: "6 months", delta: "After investment — not live operations", tone: "amber" },
      { id: "posture", label: "Build", value: "Simultaneous", delta: "All three platforms in parallel", tone: "cyan" },
      { id: "mesh", label: "Infrastructure", value: "Full company", delta: "Identity, data, compute, and the three products", tone: "purple" },
      { id: "users", label: "Target", value: "270,000", delta: "90,000 on each platform — not live traffic", tone: "emerald" },
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
