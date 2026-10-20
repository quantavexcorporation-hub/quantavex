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
  horizon: "6 months after investment",
  paperPdf: "/research/quantavex.pdf",
  tam: "First market: India competitive-exam cohort via Quantrion — not a combined global TAM",
  thesis:
    "After investment, all three platforms are built in parallel on one API plane. First market remains India. 90,000 users on each platform — 270,000 total — is the six-month production target, not live traffic today.",
  proof:
    "Three platforms specified in original monographs — Quantrion, Vdoc, and ExoraX. Each dossier links an alpha interface you can open — not live production traffic.",
  geography:
    "Ambitious future plan — not live market data. India first, then expand across 30 high-economy markets beginning with the USA and UK. Scores are predicted GTM priority for the roadmap ahead.",
  founder: {
    name: "Udit Gour",
    role: "Founder & CEO",
    email: "quantavexcorporation@gmail.com",
    path: FOUNDER_PORTFOLIO_PATH,
  },
  team: {
    posture: "Founder-led",
    note: "Quantavex is built by Udit Gour. The six seats below are the people the company needs to hire to execute this roadmap — not a team already in place.",
    hiring: "Each field is a required hire as the products are built.",
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
    {
      period: "M1",
      product: "All three",
      title: "Architecture infrastructure",
      status: "Clock starts",
      detail: "Stand exam, entertainment, and commerce infra in parallel from the specified figures — not a generic cloud template.",
    },
    {
      period: "M2",
      product: "All three",
      title: "Core loops live",
      status: "In parallel",
      detail: "Diagnose–adapt–validate–predict. Story graph G = (N, E). Intent → inspect → decide. Same month, three machines.",
    },
    {
      period: "M3",
      product: "Quantavex",
      title: "API mesh",
      status: "In parallel",
      detail: "Connect the three platforms on one identity plane and gateway. Architecture contracts, not three isolated apps.",
    },
    {
      period: "M4",
      product: "All three",
      title: "Production surfaces",
      status: "In parallel",
      detail: "Student OS, entertainment OS, and commerce OS leave alpha. Real product, still founder-led.",
    },
    {
      period: "M5",
      product: "Ops",
      title: "Operating cost on",
      status: "In parallel",
      detail: "Inference, storage, mesh, 3PL adapter, support. Production has a bill. The plan pays it.",
    },
    {
      period: "M4–M6",
      product: "Grab",
      title: "Six-channel user grab",
      status: "In parallel",
      detail: "YouTube, Instagram, X, LinkedIn, WhatsApp, Reddit — the only six channels the company spends hours on. High return, not a spray of every app.",
    },
    {
      period: "M6",
      product: "Quantavex",
      title: "90,000 users each",
      status: "Target",
      detail: "Quantrion, Vdoc, and ExoraX: 90,000 users on each. 270,000 company total at the end of the six-month clock — not a live cohort today.",
    },
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
