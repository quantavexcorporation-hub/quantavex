import { FOUNDER_PORTFOLIO_PATH } from "@/lib/site"

export const company = {
  name: "Quantavex",
  headquarters: "India",
  sector: "Artificial Intelligence — EdTech, Entertainment, Commerce",
  stage: "Pre-seed",
  stageDetail: "Early-stage deep tech",
  round: "Seed / Pre-Series A",
  raise: "$1.5–3M",
  raiseInr: "₹12–25 Cr",
  equity: "1.5–3%",
  valuation: "$100–120M",
  valuationNote: "Pre-money, vision-driven",
  instrument: "Equity / convertible",
  instrumentNote: "To be finalized",
  horizon: "12 months",
  paperPdf: "/research/quantavex.pdf",
  tam: "$8T+",
  thesis:
    "Quantavex builds AI-driven products for how people learn, create, discover, and transact.",
  proof:
    "Three platforms specified in original monographs — Quantrion, Vdoc, and ExoraX. Product websites appear here when each site is uploaded.",
  geography:
    "Ambitious future plan — not live market data. India first, then expand across 30 high-economy markets beginning with the USA and UK. Scores are predicted GTM priority for the roadmap ahead.",
  founder: {
    name: "Udit Gour",
    role: "Founder & CEO",
    email: "quantavexcorporation@gmail.com",
    path: FOUNDER_PORTFOLIO_PATH,
  },
  companyEmail: "quantavexcorporation@gmail.com",
  facts: [
    { label: "Round", value: "Seed / Pre-Series A", note: "India" },
    { label: "Raise", value: "$1.5–3M", note: "₹12–25 Cr" },
    { label: "Equity", value: "1.5–3%", note: "Equity / convertible" },
    { label: "Valuation", value: "$100–120M", note: "Pre-money, vision-driven" },
  ],
  terms: [
    { label: "Security", value: "Equity / convertible", note: "To be finalized" },
    { label: "Investor rights", value: "Standard", note: "Information, pro-rata" },
    { label: "Board", value: "To be defined", note: "Post-investment" },
    { label: "Founder vesting", value: "4-year", note: "If required" },
  ],
  funds: [
    { label: "AI research & development", percentage: 30, detail: "Core models and algorithms." },
    { label: "Engineering & product team", percentage: 25, detail: "Hiring developers and AI engineers." },
    { label: "Data & cloud infrastructure", percentage: 15, detail: "Compute, storage, pipelines." },
    { label: "Product development", percentage: 10, detail: "UI/UX and platform build." },
    { label: "Marketing & growth", percentage: 10, detail: "User acquisition and branding." },
    { label: "Operations & legal", percentage: 5, detail: "Compliance and administration." },
    { label: "Contingency", percentage: 5, detail: "Risk buffer." },
  ],
  milestones: [
    { period: "0–3 mo", title: "Quantrion MVP", detail: "Exam intelligence platform into first working product." },
    { period: "3–5 mo", title: "Beta launch", detail: "Users and testing on Quantrion." },
    { period: "5–7 mo", title: "Early traction", detail: "Iterate from live usage." },
    { period: "6–8 mo", title: "Vdoc prototype", detail: "Core entertainment AI engine." },
    { period: "7–9 mo", title: "ExoraX MVP", detail: "Basic decision-commerce version." },
    { period: "9–12 mo", title: "Scale & optimization", detail: "Performance, cost, and cross-platform loops." },
  ],
  results: [
    { label: "Learning efficiency", value: "+48–88%", note: "Projected / early validation" },
    { label: "Engagement", value: "2x–5x", note: "Projected / early validation" },
    { label: "Conversion", value: "+20–35%", note: "Projected / early validation" },
  ],
  markets: [
    { name: "EdTech", size: "$400B+", note: "Learning" },
    { name: "Entertainment", size: "$2.8T+", note: "Vdoc" },
    { name: "E-commerce", size: "$6T+", note: "ExoraX" },
  ],
  advantages: [
    "Unified intelligence across three industries",
    "Learning intelligence, story intelligence, and decision intelligence",
    "Data network effects across domains",
  ],
  risks: [
    "High R&D and infrastructure cost",
    "Multi-product execution complexity",
    "Competitive market landscape",
  ],
  confidentiality:
    "The company paper is confidential and intended for discussion with potential investors, partners, and government funding bodies. Terms are non-binding except where noted.",
} as const

export function investorMailto(kind: "conversation" | "deck" = "conversation") {
  const subject =
    kind === "deck" ? "Quantavex — request company paper" : "Quantavex — investment conversation"
  return `mailto:${company.founder.email}?subject=${encodeURIComponent(subject)}`
}
