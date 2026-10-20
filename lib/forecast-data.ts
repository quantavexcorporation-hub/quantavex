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
      { id: "horizon", label: "Horizon", value: company.horizon, delta: "Build sequence — not live operations", tone: "amber" },
      { id: "first", label: "First product", value: "Quantrion", delta: "India competitive exams", tone: "cyan" },
      { id: "second", label: "Then", value: "Vdoc", delta: "Interactive entertainment", tone: "purple" },
      { id: "third", label: "Then", value: "ExoraX", delta: "Decision commerce", tone: "emerald" },
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
