import type { ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"

export type QuantSeries = { name: string; traditional: number; proposed: number; unit?: string }
export type QuantBar = { name: string; value: number; note?: string }
export type QuantSlice = { name: string; value: number }
export type QuantPoint = { stage: string; value: number }
export type QuantDelta = { factor: string; before: string; after: string; delta: string; score: number }
export type QuantModule = { module: string; readiness: number; evidence: string; layer: string }

export interface ProductQuantDeck {
  id: ProductId
  headline: string
  premise: string
  disclaimer: string
  kpis: { label: string; value: string; delta: string; interpretation: string }[]
  efficiency: QuantBar[]
  comparison: QuantSeries[]
  funnel: QuantPoint[]
  composition: QuantSlice[]
  deltas: QuantDelta[]
  modules: QuantModule[]
  interpretation: { title: string; body: string }[]
}

/**
 * Quantitative decks derived from each platform monograph.
 * Values are research targets / goals — not yet achieved, not live production telemetry.
 * Internal division codes stay inside the monograph only.
 */
export const productQuant: Record<ProductId, ProductQuantDeck> = {
  quantrion: {
    id: "quantrion",
    headline: "Examination intelligence — quantitative reading of the Quantrion monograph",
    premise:
      "Static content systems plateau. Adaptive closed-loop systems compound. The charts below translate the Quantrion research into comparable efficiency, lift, and readiness scores.",
    disclaimer: "Architecture scores · not live cohort results",
    kpis: [
      { label: "Monograph", value: "99 pp", delta: "original research", interpretation: "Exam intelligence architecture on record" },
      { label: "Loop", value: "4-phase", delta: "diagnose → predict", interpretation: "Specified closed loop, not live scores" },
      { label: "Exam atlas", value: "150+", delta: "pathways named", interpretation: "Specified competitive coverage" },
      { label: "Status", value: "In build", delta: "software machine linked", interpretation: "Pre-seed product, not a live cohort" },
      { label: "Engine", value: "Adaptive", delta: "vs static content", interpretation: "Architecture claim, not measured lift" },
      { label: "HQ", value: "India", delta: "first market", interpretation: "Build here, then expand" },
    ],
    efficiency: [
      { name: "Traditional", value: 45, note: "Content-heavy, delayed feedback" },
      { name: "Digital", value: 60, note: "Video + quizzes, still linear" },
      { name: "Hybrid", value: 70, note: "Teacher + platform mix" },
      { name: "Quantrion", value: 88, note: "Closed-loop examination intelligence" },
    ],
    comparison: [
      { name: "Path fit", traditional: 28, proposed: 86 },
      { name: "Feedback speed", traditional: 22, proposed: 91 },
      { name: "Analytics depth", traditional: 30, proposed: 88 },
      { name: "Strategy signal", traditional: 18, proposed: 84 },
      { name: "Readiness forecast", traditional: 15, proposed: 82 },
      { name: "Loop quality", traditional: 35, proposed: 90 },
    ],
    funnel: [
      { stage: "Diagnose", value: 72 },
      { stage: "Adapt", value: 81 },
      { stage: "Validate", value: 86 },
      { stage: "Predict", value: 88 },
    ],
    composition: [
      { name: "Competitive exams", value: 48 },
      { name: "Industry skills", value: 32 },
      { name: "Space technology", value: 20 },
    ],
    deltas: [
      { factor: "Learning path", before: "Uniform", after: "Adaptive", delta: "+3.1× fit", score: 86 },
      { factor: "Feedback", before: "Delayed", after: "Real-time", delta: "−latency", score: 91 },
      { factor: "Performance", before: "Scores only", after: "Deep analytics", delta: "+2.9× depth", score: 88 },
      { factor: "Strategy", before: "Minimal", after: "AI guidance", delta: "new layer", score: 84 },
      { factor: "Readiness", before: "Uncertain", after: "Predictive", delta: "pre-exam", score: 82 },
      { factor: "Cycle", before: "Learn→Test", after: "6-phase loop", delta: "closed", score: 90 },
    ],
    modules: [
      { module: "Pathway engine", readiness: 72, evidence: "Adaptive sequences specified", layer: "Learning" },
      { module: "Knowledge DNA", readiness: 78, evidence: "Mastery graph in monograph", layer: "Research" },
      { module: "Quiz synthesis", readiness: 64, evidence: "Closed-loop practice in build", layer: "Content" },
      { module: "Career routing", readiness: 58, evidence: "Pathway suggestions specified", layer: "Product" },
    ],
    interpretation: [
      {
        title: "Efficiency is not content volume",
        body: "The jump from 45 → 88 is structural: assessment informs learning and learning informs assessment. Marginal content adds little once the loop is closed.",
      },
      {
        title: "Prediction moves evaluation left",
        body: "Rank and readiness forecasts before the sitting convert retrospective scoring into proactive optimization — the founder thesis of examination intelligence.",
      },
      {
        title: "Atlas scale needs near-zero marginal cost",
        body: "150+ pathways only hold if personalization is infrastructure, not teacher hours. Quantrion is specified as a self-improving system, not a course warehouse.",
      },
    ],
  },
  vdoc: {
    id: "vdoc",
    headline: "Interactive entertainment — quantitative reading of the Vdoc monograph",
    premise:
      "Attention extraction peaks early. Experience depth compounds. The reading below is the Vdoc architecture — not industry TAM and not live audience numbers.",
    disclaimer: "Architecture scores · not live audience results",
    kpis: [
      { label: "Monograph", value: "108 pp", delta: "original research", interpretation: "Entertainment OS specified on record" },
      { label: "Loop", value: "Speak → Own", delta: "four steps", interpretation: "Entry command through ownership" },
      { label: "Layers", value: "3", delta: "audience · creation · economy", interpretation: "One visual language" },
      { label: "Status", value: "In build", delta: "software machine linked", interpretation: "Pre-seed product, not live GMV" },
      { label: "Form", value: "Interactive", delta: "vs passive catalog", interpretation: "Architecture claim, not measured lift" },
      { label: "HQ", value: "India", delta: "first market", interpretation: "Build here, then expand" },
    ],
    efficiency: [
      { name: "Linear TV / film", value: 32, note: "Passive, scheduled" },
      { name: "Streaming catalog", value: 48, note: "On-demand, still linear" },
      { name: "Short-form + social", value: 55, note: "High attention, low depth" },
      { name: "Vdoc", value: 86, note: "Generative + participatory" },
    ],
    comparison: [
      { name: "Content form", traditional: 30, proposed: 88 },
      { name: "AI role", traditional: 25, proposed: 92 },
      { name: "User agency", traditional: 20, proposed: 85 },
      { name: "Personalization", traditional: 35, proposed: 90 },
      { name: "Ecosystem unity", traditional: 22, proposed: 87 },
      { name: "Value objective", traditional: 40, proposed: 84 },
    ],
    funnel: [
      { stage: "Speak", value: 70 },
      { stage: "Enter", value: 78 },
      { stage: "Shape", value: 85 },
      { stage: "Own", value: 82 },
    ],
    composition: [
      { name: "Content OS", value: 45 },
      { name: "Production", value: 30 },
      { name: "3D worlds", value: 25 },
    ],
    deltas: [
      { factor: "Content", before: "Static linear", after: "Branching generative", delta: "+2.9× form", score: 88 },
      { factor: "AI role", before: "Recommend", after: "Core engine", delta: "architectural", score: 92 },
      { factor: "User", before: "Consumer", after: "Co-creator", delta: "agency", score: 85 },
      { factor: "Personalization", before: "What to watch", after: "How it generates", delta: "depth", score: 90 },
      { factor: "Ecosystem", before: "Siloed apps", after: "Living system", delta: "unified", score: 87 },
      { factor: "Objective", before: "Watch time", after: "Experience value", delta: "reframe", score: 84 },
    ],
    modules: [
      { module: "Scene renderer", readiness: 68, evidence: "World continuity specified", layer: "Studio" },
      { module: "Narrative model", readiness: 74, evidence: "Story graph G=(N,E)", layer: "Research" },
      { module: "Retention scorer", readiness: 62, evidence: "Afterglow signals specified", layer: "Product" },
      { module: "Economy layer", readiness: 55, evidence: "Ownership in-plot", layer: "Platform" },
    ],
    interpretation: [
      {
        title: "Industry size is not the product",
        body: "The research claim is structural: move from maximizing watch time to maximizing experience depth and co-creation. That is a design thesis, not a revenue figure.",
      },
      {
        title: "Story as a graph, not a reel",
        body: "G = (N, E) makes decisions first-class. Edges are user choices; memory keeps characters persistent — quantitative continuity, not playlist length.",
      },
      {
        title: "Creation compression needs an AI Director",
        body: "−80% creation time only holds if specialists are orchestrated. The creation OS is specified as execution infrastructure, not a tool pile.",
      },
    ],
  },
  exorax: {
    id: "exorax",
    headline: "Decision commerce — quantitative reading of the ExoraX monograph",
    premise:
      "Returns are a pre-purchase information failure. Confidence before checkout is the independent variable. Charts below encode return compression, conversion lift, and architecture intensity.",
    disclaimer: "Architecture scores · not live commerce results",
    kpis: [
      { label: "Monograph", value: "58 pp", delta: "original research", interpretation: "Decision commerce specified on record" },
      { label: "Problem", value: "Guessing", delta: "photos and copy", interpretation: "Wrong-item purchases as information failure" },
      { label: "Method", value: "Inspect first", delta: "3D · AR · presenters", interpretation: "Confidence before checkout" },
      { label: "Status", value: "In build", delta: "software machine linked", interpretation: "Pre-seed product, not live GMV" },
      { label: "Architecture", value: "6 layers", delta: "interface → loop", interpretation: "Specified stack, not measured conversion" },
      { label: "HQ", value: "India", delta: "first market", interpretation: "Build here, then expand" },
    ],
    efficiency: [
      { name: "2D listings", value: 34, note: "Images + text only" },
      { name: "Reviews + search", value: 48, note: "Still heuristic buying" },
      { name: "Recs + chatbots", value: 58, note: "Assist, not experience" },
      { name: "ExoraX", value: 84, note: "Intent → 3D/AR → decide" },
    ],
    comparison: [
      { name: "Product view", traditional: 28, proposed: 90 },
      { name: "Discovery", traditional: 35, proposed: 86 },
      { name: "Explanation", traditional: 30, proposed: 88 },
      { name: "Decision support", traditional: 22, proposed: 87 },
      { name: "Return risk", traditional: 40, proposed: 18 },
      { name: "Brand tools", traditional: 25, proposed: 82 },
    ],
    funnel: [
      { stage: "Search", value: 74 },
      { stage: "Understand", value: 80 },
      { stage: "Inspect", value: 88 },
      { stage: "Decide", value: 85 },
    ],
    composition: [
      { name: "Electronics", value: 22 },
      { name: "Fashion", value: 24 },
      { name: "Food", value: 12 },
      { name: "Health", value: 14 },
      { name: "Home", value: 16 },
      { name: "Gaming", value: 12 },
    ],
    deltas: [
      { factor: "Product view", before: "2D crops", after: "3D + AR", delta: "spatial truth", score: 90 },
      { factor: "Discovery", before: "Keywords", after: "Intent NLP", delta: "+2.4× fit", score: 86 },
      { factor: "Explanation", before: "Specs", after: "Presenters", delta: "demo layer", score: 88 },
      { factor: "Decision", before: "Overload", after: "AI support", delta: "clarity", score: 87 },
      { factor: "Returns", before: "20–35%", after: "~10%", delta: "−20pp", score: 82 },
      { factor: "Brand tools", before: "Listings", after: "Story OS", delta: "merchant", score: 82 },
    ],
    modules: [
      { module: "Intent graph", readiness: 70, evidence: "Natural-language search specified", layer: "Commerce" },
      { module: "Catalog ranker", readiness: 66, evidence: "Taste + constraints specified", layer: "Merch" },
      { module: "3D / AR inspect", readiness: 72, evidence: "Know-it-before-it-arrives thesis", layer: "Experience" },
      { module: "Decision loop", readiness: 68, evidence: "Feedback trains ranking", layer: "Product" },
    ],
    interpretation: [
      {
        title: "Returns are the north-star failure mode",
        body: "20–35% returns in fashion and electronics are not a logistics inconvenience — they prove the listing lied. ExoraX optimizes pre-purchase understanding.",
      },
      {
        title: "Conversion follows confidence, not discounts",
        body: "+20–35% conversion and +42% AOV are framed as confidence effects: inspect → understand → decide, then checkout.",
      },
      {
        title: "Six layers close the loop",
        body: "Interface through feedback is one machine. Every completed journey trains the intelligence layer — commerce as a learning system.",
      },
    ],
  },
}

export function getProductQuant(id: ProductId) {
  return productQuant[id]
}

export function quantChartColor(id: ProductId) {
  return productAccents[id].hex
}
