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
  equity: "To be discussed",
  valuation: "To be discussed",
  valuationNote: "Not a public company mark",
  instrument: "Equity / convertible",
  instrumentNote: "To be finalized",
  horizon: "12 months",
  paperPdf: "/research/quantavex.pdf",
  tam: "Learning, entertainment, and commerce",
  thesis:
    "Quantavex builds AI-driven products for how people learn, create, discover, and transact.",
  proof:
    "Three platforms specified in original monographs — Quantrion, Vdoc, and ExoraX. Product websites appear here when each site is uploaded.",
  geography:
    "Ambitious future plan — not live market data. India first, then expand across 30 high-economy markets beginning with the USA and UK. Scores are predicted GTM priority for the roadmap ahead.",
  targetDisclaimer: "Target — not yet achieved. Figures on this site are goals, not current results.",
  founder: {
    name: "Udit Gour",
    role: "Founder & CEO",
    email: "quantavexcorporation@gmail.com",
    path: FOUNDER_PORTFOLIO_PATH,
  },
  team: {
    posture: "Founder-led",
    note: "Quantavex is built by Udit Gour. The six seats below are the people this round is meant to hire — not a team already in place.",
    hiring: "Each field is a required hire after funding.",
    seats: [
      {
        field: "Human Psychology & Resources",
        role: "To hire",
        detail: "How people learn, decide, and stay engaged — and how people and resources are allocated.",
      },
      {
        field: "Finance & Economics",
        role: "To hire",
        detail: "Markets, capital, and how value moves.",
      },
      {
        field: "AI & Data Science",
        role: "To hire",
        detail: "Models, evidence, and correct information.",
      },
      {
        field: "Media & Content",
        role: "To hire",
        detail: "Narrative, format, and how attention is held.",
      },
      {
        field: "Sales & Digital Marketing",
        role: "To hire",
        detail: "Demand, distribution, and conversion.",
      },
      {
        field: "Product & Business Strategy",
        role: "To hire",
        detail: "What to build, why it matters, and how it becomes a company.",
      },
    ],
  },
  companyEmail: "quantavexcorporation@gmail.com",
  facts: [
    { label: "Round", value: "Seed / Pre-Series A", note: "India" },
    { label: "Raise", value: "$1.5–3M", note: "₹12–25 Cr" },
    { label: "Equity", value: "To be discussed", note: "Equity / convertible" },
    { label: "Valuation", value: "To be discussed", note: "Conversation, not a public mark" },
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
    { label: "Learning", value: "Architecture specified", note: "Quantrion monograph — exam intelligence" },
    { label: "Entertainment", value: "Architecture specified", note: "Vdoc monograph — interactive OS" },
    { label: "Commerce", value: "Architecture specified", note: "ExoraX monograph — decision commerce" },
  ],
  markets: [
    { name: "Learning", size: "Quantrion", note: "Competitive exams and high-stakes study" },
    { name: "Entertainment", size: "Vdoc", note: "Worlds people enter, shape, and own in" },
    { name: "Commerce", size: "ExoraX", note: "A correct decision before value moves" },
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
