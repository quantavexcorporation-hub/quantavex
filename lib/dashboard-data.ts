import { DashboardSnapshot } from "@/lib/dashboard-types"
import { getPriorityRegions } from "@/lib/priority-markets"

export function getKpis(): DashboardSnapshot["kpis"] {
  return [
    { id: "learning", label: "Platforms", value: 3, suffix: "", range: "In development", trend: 0, color: "cyan" },
    { id: "engagement", label: "Monographs", value: 3, suffix: "", range: "Original research", trend: 0, color: "purple" },
    { id: "conversion", label: "Industries", value: 3, suffix: "", range: "Learning · entertainment · commerce", trend: 0, color: "emerald" },
    { id: "traffic", label: "Exam atlas", value: 150, suffix: "+", range: "Pathways specified in Quantrion", trend: 0, color: "amber" },
  ]
}

export function getChart(): DashboardSnapshot["chart"] {
  return Array.from({ length: 12 }, (_, index) => ({
    time: `M${index + 1}`,
    learning: 42 + index * 2,
    engagement: 36 + index * 1.5,
    conversion: 28 + index,
  }))
}

export function getActivities(): DashboardSnapshot["activities"] {
  return [
    { id: "m1", type: "system", message: "Quantavex parent company record published for Quantrion, Vdoc, and ExoraX.", timestamp: "Now" },
    { id: "m2", type: "learning", message: "Quantrion monograph complete — 99 pages, exam intelligence architecture.", timestamp: "Research" },
    { id: "m3", type: "content", message: "Vdoc monograph complete — 108 pages, interactive entertainment OS.", timestamp: "Research" },
    { id: "m4", type: "commerce", message: "ExoraX monograph complete — 58 pages, decision commerce architecture.", timestamp: "Research" },
    { id: "m5", type: "system", message: "Three product dossiers specified. Live sites pending upload.", timestamp: "Build" },
    { id: "m6", type: "system", message: "Founder-led company behind Quantrion, Vdoc, and ExoraX.", timestamp: "Company" },
  ]
}

export function getMarkets(): DashboardSnapshot["markets"] {
  return [
    { name: "EdTech", value: 400, color: "#2dd4bf", growth: "$400B+" },
    { name: "Entertainment", value: 2800, color: "#f43f5e", growth: "$2.8T+" },
    { name: "E-commerce", value: 6000, color: "#a1a1aa", growth: "$6T+" },
  ]
}

export function getComparisons(): DashboardSnapshot["comparisons"] {
  return [
    { category: "Learning", traditional: "Static content", quantavex: "Adaptive intelligence", improvement: "+48–88%" },
    { category: "Entertainment", traditional: "Passive viewing", quantavex: "Interactive AI-driven", improvement: "2x–5x" },
    { category: "Commerce", traditional: "Static browsing", quantavex: "Immersive decision systems", improvement: "+20–35%" },
    { category: "Cost shape", traditional: "Linear content cost", quantavex: "Low marginal cost per user", improvement: "Architecture" },
  ]
}

export function getProductPanels(): DashboardSnapshot["productPanels"] {
  return [
    {
      id: "quantrion",
      title: "Quantrion",
      subtitle: "Exam intelligence engine",
      metrics: [
        { label: "Atlas", value: "150+" },
        { label: "Paper", value: "99 pp" },
        { label: "Loop", value: "4-phase" },
        { label: "Status", value: "In build" },
      ],
      preview: { bars: [40, 55, 45, 70, 65, 80, 75, 88], highlight: "Research" },
    },
    {
      id: "vdoc",
      title: "Vdoc",
      subtitle: "Entertainment operating system",
      metrics: [
        { label: "Paper", value: "108 pp" },
        { label: "Layers", value: "3" },
        { label: "Entry", value: "Speak" },
        { label: "Status", value: "In build" },
      ],
      preview: { badges: ["Audience", "Creation", "Economy"], highlight: "In build" },
    },
    {
      id: "exorax",
      title: "ExoraX",
      subtitle: "Decision commerce",
      metrics: [
        { label: "Paper", value: "58 pp" },
        { label: "Layers", value: "6" },
        { label: "Categories", value: "6" },
        { label: "Status", value: "In build" },
      ],
      preview: {
        products: [
          { name: "Fashion", score: 82 },
          { name: "Electronics", score: 74 },
          { name: "Home", score: 68 },
        ],
        highlight: "Architecture",
      },
    },
  ]
}

export function getRegions(): DashboardSnapshot["regions"] {
  return getPriorityRegions()
}

