import { DashboardSnapshot } from "@/lib/dashboard-types"

const activityTemplates: DashboardSnapshot["activities"] = [
  { id: "a1", type: "learning", message: "Learning path recalibrated for Segment 12", timestamp: "00:00:00" },
  { id: "a2", type: "content", message: "Narrative model pushed to production", timestamp: "00:00:00" },
  { id: "a3", type: "commerce", message: "Checkout intent score increased 14%", timestamp: "00:00:00" },
  { id: "a4", type: "system", message: "Edge cache warmed for analytics queries", timestamp: "00:00:00" },
  { id: "a5", type: "learning", message: "Adaptive quiz generated from weak-topic signals", timestamp: "00:00:00" },
  { id: "a6", type: "system", message: "Realtime stream heartbeat healthy", timestamp: "00:00:00" },
]

function timestamp() {
  return new Date().toLocaleTimeString("en-US", { hour12: false })
}

function random(base: number, variance: number) {
  return Number((base + (Math.random() * 2 - 1) * variance).toFixed(1))
}

export function getKpis(): DashboardSnapshot["kpis"] {
  return [
    { id: "learning", label: "Learning Efficiency", value: Math.round(random(67, 12)), suffix: "%", range: "+48-88%", trend: random(10, 4), color: "cyan" },
    { id: "engagement", label: "Engagement Rate", value: Number(random(3.6, 1)), suffix: "x", range: "2x-5x", trend: random(8, 3), color: "purple" },
    { id: "conversion", label: "Conversion Lift", value: Math.round(random(29, 6)), suffix: "%", range: "+20-35%", trend: random(12, 4), color: "emerald" },
  ]
}

export function getChart(): DashboardSnapshot["chart"] {
  return Array.from({ length: 20 }, (_, index) => ({
    time: `${index + 1}s`,
    learning: random(72, 10),
    engagement: random(60, 14),
    conversion: random(38, 8),
  }))
}

export function getActivities(): DashboardSnapshot["activities"] {
  return activityTemplates
    .map((item, index) => ({
      ...item,
      id: `${item.id}-${Date.now()}-${index}`,
      timestamp: timestamp(),
    }))
    .slice(0, 6)
}

export function getMarkets(): DashboardSnapshot["markets"] {
  return [
    { name: "EdTech", value: Math.round(random(420, 40)), color: "#22d3ee", growth: `+${random(12, 2)}%` },
    { name: "Entertainment", value: Math.round(random(2820, 220)), color: "#a855f7", growth: `+${random(9, 2)}%` },
    { name: "E-commerce", value: Math.round(random(5980, 320)), color: "#10b981", growth: `+${random(15, 2)}%` },
  ]
}

export function getComparisons(): DashboardSnapshot["comparisons"] {
  return [
    { category: "Learning", traditional: "Static Content", quantavex: "Adaptive Pathways", improvement: "+48-88%" },
    { category: "Engagement", traditional: "Passive Viewing", quantavex: "Interactive AI", improvement: "2-5x" },
    { category: "Commerce", traditional: "Manual Browsing", quantavex: "Purchase Intelligence", improvement: "+20-35%" },
    { category: "Personalization", traditional: "Segment-based", quantavex: "Individual AI", improvement: "Real-time" },
    { category: "Scalability", traditional: "Linear Cost", quantavex: "Zero Marginal", improvement: "Infinite" },
  ]
}

export function getProductPanels(): DashboardSnapshot["productPanels"] {
  return [
    {
      id: "quantrion",
      title: "Quantrion AI",
      subtitle: "Adaptive Learning System",
      metrics: [
        { label: "Efficiency", value: `+${Math.round(random(83, 5))}%` },
        { label: "Users", value: `${random(12.3, 0.5)}K` },
        { label: "Modules", value: `${Math.round(random(840, 20))}` },
        { label: "Accuracy", value: `${Math.round(random(96, 2))}%` },
      ],
      preview: { bars: [40, 55, 45, 70, 65, 80, 75, 88], highlight: `+${Math.round(random(48, 6))}%` },
    },
    {
      id: "vdoc",
      title: "Vdoc AI",
      subtitle: "Content Generation Engine",
      metrics: [
        { label: "Engagement", value: `${random(4.7, 0.4)}x` },
        { label: "Content", value: `${random(2.1, 0.2)}M` },
        { label: "Retention", value: `${Math.round(random(90, 3))}%` },
        { label: "Quality", value: `${Math.round(random(94, 2))}%` },
      ],
      preview: { badges: ["Scene 1", "Scene 2", "Scene 3"], highlight: "LIVE" },
    },
    {
      id: "exorax",
      title: "ExoraX AI",
      subtitle: "Commerce Intelligence",
      metrics: [
        { label: "Conversion", value: `+${Math.round(random(35, 4))}%` },
        { label: "Products", value: `${Math.round(random(45, 4))}K` },
        { label: "Revenue", value: `+$${random(2.4, 0.3)}M` },
        { label: "ROI", value: `${Math.round(random(340, 20))}%` },
      ],
      preview: {
        products: [
          { name: "Product A", score: Math.round(random(94, 4)) },
          { name: "Product B", score: Math.round(random(78, 6)) },
          { name: "Product C", score: Math.round(random(65, 6)) },
        ],
        highlight: `+${Math.round(random(35, 4))}%`,
      },
    },
  ]
}

export function getRegions(): DashboardSnapshot["regions"] {
  return {
    USA: { name: "United States", coordinates: [-95.7129, 37.0902], metrics: { learning: Math.round(random(65, 8)), engagement: Math.round(random(350, 30)), commerce: Math.round(random(42, 6)) }, trend: [30, 45, 38, 52, 48, 60, 55, 68, 72, 78], intensity: "high" },
    IND: { name: "India", coordinates: [78.9629, 20.5937], metrics: { learning: Math.round(random(72, 8)), engagement: Math.round(random(280, 25)), commerce: Math.round(random(35, 6)) }, trend: [25, 32, 45, 52, 58, 65, 70, 75, 80, 85], intensity: "high" },
    GBR: { name: "United Kingdom", coordinates: [-3.436, 55.3781], metrics: { learning: Math.round(random(58, 6)), engagement: Math.round(random(220, 20)), commerce: Math.round(random(38, 4)) }, trend: [28, 35, 42, 48, 55, 52, 58, 62, 65, 68], intensity: "medium" },
    DEU: { name: "Germany", coordinates: [10.4515, 51.1657], metrics: { learning: Math.round(random(52, 6)), engagement: Math.round(random(195, 15)), commerce: Math.round(random(28, 4)) }, trend: [22, 28, 32, 38, 42, 45, 48, 52, 55, 58], intensity: "medium" },
    JPN: { name: "Japan", coordinates: [138.2529, 36.2048], metrics: { learning: Math.round(random(48, 7)), engagement: Math.round(random(175, 18)), commerce: Math.round(random(32, 4)) }, trend: [20, 25, 30, 35, 40, 45, 48, 52, 55, 58], intensity: "medium" },
    BRA: { name: "Brazil", coordinates: [-51.9253, -14.235], metrics: { learning: Math.round(random(42, 5)), engagement: Math.round(random(145, 14)), commerce: Math.round(random(25, 4)) }, trend: [18, 22, 28, 32, 38, 42, 45, 48, 50, 52], intensity: "low" },
    AUS: { name: "Australia", coordinates: [133.7751, -25.2744], metrics: { learning: Math.round(random(55, 6)), engagement: Math.round(random(185, 16)), commerce: Math.round(random(30, 4)) }, trend: [25, 30, 35, 42, 48, 52, 55, 58, 62, 65], intensity: "medium" },
    SGP: { name: "Singapore", coordinates: [103.8198, 1.3521], metrics: { learning: Math.round(random(68, 7)), engagement: Math.round(random(320, 28)), commerce: Math.round(random(45, 6)) }, trend: [35, 42, 50, 58, 65, 72, 78, 82, 85, 88], intensity: "high" },
  }
}
