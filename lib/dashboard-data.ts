import { DashboardSnapshot } from "@/lib/dashboard-types"

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
  return {
    IND: { name: "India", coordinates: [78.9629, 20.5937], metrics: { learning: 92, engagement: 70, commerce: 78 }, trend: [40, 48, 55, 62, 68, 74, 80, 84, 88, 92], intensity: "high" },
    USA: { name: "United States", coordinates: [-95.7129, 37.0902], metrics: { learning: 78, engagement: 88, commerce: 90 }, trend: [38, 44, 50, 56, 62, 68, 72, 76, 80, 84], intensity: "high" },
    SGP: { name: "Singapore", coordinates: [103.8198, 1.3521], metrics: { learning: 74, engagement: 80, commerce: 86 }, trend: [35, 42, 50, 56, 62, 68, 72, 76, 80, 84], intensity: "high" },
    GBR: { name: "United Kingdom", coordinates: [-3.436, 55.3781], metrics: { learning: 66, engagement: 76, commerce: 72 }, trend: [30, 36, 42, 48, 52, 56, 60, 64, 66, 68], intensity: "medium" },
    DEU: { name: "Germany", coordinates: [10.4515, 51.1657], metrics: { learning: 62, engagement: 70, commerce: 68 }, trend: [28, 32, 38, 42, 46, 50, 54, 58, 60, 62], intensity: "medium" },
    JPN: { name: "Japan", coordinates: [138.2529, 36.2048], metrics: { learning: 70, engagement: 82, commerce: 74 }, trend: [32, 38, 42, 48, 52, 56, 60, 64, 66, 70], intensity: "medium" },
    AUS: { name: "Australia", coordinates: [133.7751, -25.2744], metrics: { learning: 64, engagement: 68, commerce: 66 }, trend: [26, 32, 36, 42, 46, 50, 54, 58, 60, 64], intensity: "medium" },
    BRA: { name: "Brazil", coordinates: [-51.9253, -14.235], metrics: { learning: 58, engagement: 64, commerce: 60 }, trend: [22, 28, 32, 36, 40, 44, 48, 52, 54, 58], intensity: "low" },
  }
}
