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

const fundColors = ["#22d3ee", "#a855f7", "#10b981", "#f59e0b", "#38bdf8", "#c084fc", "#94a3b8"]

export function getForecast(): {
  series: ForecastMonth[]
  kpis: ForecastKpi[]
  mix: { name: string; value: number; color: string }[]
  milestones: CapitalMilestone[]
} {
  return {
    series: [],
    kpis: [
      { id: "raise", label: "Investment", value: company.raise, delta: `${company.raiseInr} · ${company.round}`, tone: "cyan" },
      { id: "equity", label: "Equity offered", value: company.equity, delta: company.instrument, tone: "purple" },
      { id: "valuation", label: "Pre-money", value: company.valuation, delta: company.valuationNote, tone: "emerald" },
      { id: "horizon", label: "Roadmap", value: company.horizon, delta: "Quantrion first, then Vdoc and ExoraX", tone: "amber" },
    ],
    mix: company.funds.map((item, index) => ({
      name: item.label,
      value: item.percentage,
      color: fundColors[index] ?? "#64748b",
    })),
    milestones: company.milestones.map((item) => ({
      period: item.period,
      title: item.title,
      capital: company.round,
      outcome: item.detail,
    })),
  }
}
