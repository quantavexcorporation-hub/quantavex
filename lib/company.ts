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
  tam: "First market: India competitive-exam cohort via Quantrion — not a combined global TAM",
  thesis:
    "First customer: India’s competitive-exam students. First product: Quantrion. Vdoc and ExoraX follow on the same parent company.",
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
      period: "0–3 mo",
      product: "Quantrion",
      title: "Working product",
      status: "Next",
      detail: "Turn the exam-intelligence architecture into the first working product for India competitive-exam students.",
    },
    {
      period: "3–5 mo",
      product: "Quantrion",
      title: "First testers",
      status: "Later",
      detail: "Put Quantrion in front of a closed tester group. Learn from use — not a public launch claim.",
    },
    {
      period: "5–7 mo",
      product: "Quantrion",
      title: "Iterate",
      status: "Later",
      detail: "Tighten the diagnose → adapt → validate → predict loop from tester feedback.",
    },
    {
      period: "6–8 mo",
      product: "Vdoc",
      title: "Prototype",
      status: "Later",
      detail: "Build the entertainment OS core from the Vdoc monograph — speak, enter, shape, own.",
    },
    {
      period: "7–9 mo",
      product: "ExoraX",
      title: "Working product",
      status: "Later",
      detail: "Stand up decision commerce: inspect before value moves — product, price, and risk.",
    },
    {
      period: "9–12 mo",
      product: "Quantavex",
      title: "One operating loop",
      status: "Later",
      detail: "Harden performance and cost. Keep three platforms on one parent company, not three separate firms.",
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
