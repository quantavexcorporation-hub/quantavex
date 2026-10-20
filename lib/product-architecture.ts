import type { ProductId } from "@/components/brand/product-logo"
import { researchPapers } from "@/lib/research"

export type ArchitectureLayer = { name: string; role: string; modules: string[] }
export type ArchitectureService = { name: string; owns: string; contract: string }
export type ArchitectureStore = { name: string; holds: string }

export interface ProductArchitecture {
  id: ProductId
  title: string
  pattern: string
  premise: string
  loop: { name: string; steps: string[]; meaning: string }
  layers: ArchitectureLayer[]
  services: ArchitectureService[]
  data: ArchitectureStore[]
  interfaces: string[]
  constraints: string[]
  later: string[]
  suitable: string
}

export const productArchitecture: Record<ProductId, ProductArchitecture> = {
  quantrion: {
    id: "quantrion",
    title: "Quantrion examination intelligence — software architecture",
    pattern: "Closed-loop modular system · Q1 cognitive layer",
    premise:
      "From the Quantrion monograph: exam prep is still content delivery. Q1 is specified as a unified learning–practice–assessment machine. Assessment writes the next lesson; the lesson writes the next assessment. That loop is the architecture.",
    loop: {
      name: "Intelligence loop",
      steps: ["Diagnose", "Adapt", "Validate", "Predict"],
      meaning:
        "Knowledge DNA is updated after every sitting. Sequence, difficulty, and revision intervals move with evidence — not with a static syllabus.",
    },
    layers: [
      {
        name: "Experience",
        role: "What the student and educator touch",
        modules: [
          "Dashboard command center",
          "Global Exam Atlas",
          "Learn / QuickLearn / Smart Library",
          "Practice, mocks, analytics",
          "Instant doubt resolution",
          "LectureCognis (educator studio — learners cannot open it)",
        ],
      },
      {
        name: "AI intelligence",
        role: "The engine inside the loop",
        modules: [
          "Adaptive pathway engine",
          "Knowledge DNA (mastery graph)",
          "Strategy AI",
          "Mock intelligence and rank prediction",
          "Career AI routing",
          "Score model Ŝ = αA + βT + γD + δR",
        ],
      },
      {
        name: "Data",
        role: "Correct information — accurate, complete, current",
        modules: [
          "Concept graph per exam pathway",
          "Item bank and question intelligence",
          "Behavior and performance logs",
          "Spaced-revision calendar",
          "Identity and exam-sitting records",
        ],
      },
      {
        name: "Infrastructure",
        role: "India-first region, then expand",
        modules: [
          "API and session plane",
          "Inference for adaptive and predictive models",
          "Object store for lectures and papers",
          "Job queue for mock scoring and DNA updates",
        ],
      },
    ],
    services: [
      { name: "Identity", owns: "Student and educator accounts, exam cohort membership", contract: "Who may sit which atlas pathway" },
      { name: "Atlas", owns: "150+ named competitive pathways", contract: "Exam → syllabus graph → item pool" },
      { name: "Pathway", owns: "Adaptive sequences", contract: "DNA + goal → next learn / practice unit" },
      { name: "Assessment", owns: "Quizzes, mocks, calibrated scoring", contract: "Sitting → scores, mistakes, time" },
      { name: "DNA", owns: "Mastery, accuracy, speed, retention, temperament", contract: "Event → updated academic identity" },
      { name: "Predict", owns: "Readiness and rank bands", contract: "DNA + calendar → forecast before the sitting" },
    ],
    data: [
      { name: "Knowledge DNA", holds: "Per-student concept mastery graph — not a progress bar" },
      { name: "Item intelligence", holds: "Difficulty, discrimination, and misuse flags on questions" },
      { name: "Sitting log", holds: "Answers, latency, confidence, revision marks" },
      { name: "Pathway state", holds: "Current sequence, exam goal, and next recommended unit" },
    ],
    interfaces: [
      "Student OS — atlas, learn, practice, DNA, mocks, career",
      "Educator studio — LectureCognis and test generation only",
      "Alpha interface — open from the dossier, not live production traffic",
    ],
    constraints: [
      "Architecture latency bound from the paper: responses under 1.5s as a design target, not a measured SLA.",
      "Personalization is infrastructure, not teacher-hours. Atlas scale only holds if the loop is automatic.",
      "Q1 is the software being built now. Q2 (frontier-tech expertise) and Qrion (industrial / space deployment) are later layers in the monograph — not this architecture.",
      "First market is India competitive exams. Other countries are a plan.",
    ],
    later: [
      "Q2 — frontier-tech expertise curricula",
      "Qrion — cognition into industrial and space systems",
      "Certification and talent evaluation as a downstream use of the same DNA",
    ],
    suitable:
      "A modular monolith is the right first form: one deployable Q1 with clear service boundaries (Atlas, Pathway, Assessment, DNA, Predict). Split only when a boundary has its own scale or team. Do not start as a mesh of twenty microservices.",
  },
  vdoc: {
    id: "vdoc",
    title: "Vdoc entertainment OS — software architecture",
    pattern: "Living closed-loop system · V1 content ecosystem",
    premise:
      "From the Vdoc monograph: entertainment is still linear catalogs and siloed tools. Vdoc is specified as one OS in which audience, creation, and a virtual economy share a language. Story is a graph G = (N, E): nodes are states, edges are user decisions. AI is the engine, not a recommend-next-title plugin.",
    loop: {
      name: "Living entertainment loop",
      steps: ["Speak", "Enter", "Shape", "Own"],
      meaning:
        "User → Interaction → AI → Adaptive content → Feedback → Evolution. Data does not sit in analytics — it reshapes the next scene.",
    },
    layers: [
      {
        name: "Experience",
        role: "Audience and creator surfaces",
        modules: [
          "Command surface (welcome, prompt, rails)",
          "Converse (voice, branch, memory)",
          "Universe (film, series, game, comic, music, world)",
          "Vdoc Live control room",
          "Sidebar, 3D world, community",
        ],
      },
      {
        name: "Control",
        role: "Choices as system fuel",
        modules: [
          "Decision edges on the story graph",
          "Voting and collective story moves",
          "Game actions and session ticks",
          "Afterglow, Unfinished, World Thread signals",
        ],
      },
      {
        name: "AI intelligence",
        role: "Generative and decision engine",
        modules: [
          "Story engine (G = (N, E))",
          "Persistent character memory",
          "Mood Match and Evening Intent",
          "AI Director orchestrating specialist agents",
          "Ethical moderation — interrupt harmful loops",
        ],
      },
      {
        name: "Generation",
        role: "Multi-modal synthesis under the Director",
        modules: [
          "Video Genesis / Vdoc Nexus",
          "Idea Lab and Story Engine",
          "Image, audio, music, and world generation",
          "Continuity so formats do not break character",
        ],
      },
    ],
    services: [
      { name: "Session", owns: "Audience identity and world continuity", contract: "Who is in which world, with which memory" },
      { name: "Story graph", owns: "N, E, and legal transitions", contract: "State + choice → next state" },
      { name: "Director", owns: "Agent orchestration", contract: "Intent → specialist jobs → assembled scene" },
      { name: "Genesis", owns: "Media synthesis jobs", contract: "Brief → video / image / audio / world chunk" },
      { name: "Signals", owns: "Mood, afterglow, unfinished threads", contract: "Behavior → next command-surface ranking" },
      { name: "Economy", owns: "Vault, land, limited drops — in-plot ownership", contract: "Asset identity inside the story, not a bolted wallet" },
      { name: "Ethics", owns: "Risk detection and loop interruption", contract: "Hard stop when a content loop is harmful" },
    ],
    data: [
      { name: "Story graph", holds: "Nodes (story states) and edges (user decisions)" },
      { name: "Character memory", holds: "Persistent traits and prior scenes per world" },
      { name: "World state", holds: "What the user has entered, shaped, and left unfinished" },
      { name: "Economy ledger", holds: "Specified ownership records — not a live token market" },
    ],
    interfaces: [
      "Audience OS — speak, enter, shape, own",
      "Creation OS — Nexus, Genesis, AI Director",
      "Virtual Economy — vault, marketplace, founders land",
      "Alpha interface — open from the dossier",
    ],
    constraints: [
      "V1 is the software being built: AI series, games, movies, shorts, comics, community. V2 production layer and Vydo 3D intelligence world are later stages in the paper.",
      "AI is inside the experience. Do not ship a chat widget beside a catalog and call it Vdoc.",
      "Ethics is a core service, not a policy PDF. Harmful loops must be interruptible in the graph.",
      "This is not live audience telemetry or GMV.",
    ],
    later: [
      "V2 — hybrid high-quality production and super-creator depth",
      "Vydo — persistent 3D intelligence world per user",
      "Real-money paths for the virtual economy — only after in-plot ownership is real",
    ],
    suitable:
      "Keep one entertainment runtime: Experience client + Story/Director/Genesis services + signal store. Generation is job-based and queued. Do not split Audience, Creation, and Economy into three products — the paper is one OS.",
  },
  exorax: {
    id: "exorax",
    title: "ExoraX decision commerce — software architecture",
    pattern: "Six-layer decision system · X1",
    premise:
      "From the ExoraX monograph: returns of 20–35% in fashion and electronics are a pre-purchase information failure. ExoraX is specified as six layers so the buyer inspects before value moves. Commerce is a confidence loop, not a listing page.",
    loop: {
      name: "Confidence purchase loop",
      steps: ["Intent", "Filter", "3D / AR", "Presenter", "Decision", "Feedback"],
      meaning:
        "Every completed journey trains ranking and explanation. The buy is the last step, not the first screen.",
    },
    layers: [
      {
        name: "Interface",
        role: "Control Center and shopper surfaces",
        modules: [
          "Natural-language, voice, and visual search",
          "Category rails for X1 (electronics, fashion, food, healthcare, home, gaming)",
          "Member checkout — not a flash tile",
        ],
      },
      {
        name: "AI intelligence",
        role: "Decision support",
        modules: [
          "Intent detection (NLP)",
          "Constraint and taste ranking",
          "Transparent why on every recommendation",
          "Behavior analysis into the next session",
        ],
      },
      {
        name: "Product data",
        role: "Correct catalog — shape, size, stock, risk",
        modules: [
          "Canonical product record",
          "Inventory intelligence (demand, fraud, warehouse signals)",
          "Price and availability",
          "Merchant OS (X Atelier) writes here — listings do not",
        ],
      },
      {
        name: "3D / AR experience",
        role: "Close listing vs reality",
        modules: [
          "True-scale 3D inspect",
          "AR placement in the user’s space",
          "Virtual showroom for high-consideration goods",
        ],
      },
      {
        name: "Interactive content",
        role: "Demonstration, not copy",
        modules: [
          "Flipbooks, Clipbooks, catalogues",
          "ExoraX Presenters — live or recorded explanation",
          "Adcontex for the commerce OS",
        ],
      },
      {
        name: "Transaction and feedback",
        role: "Checkout and the loop that follows",
        modules: [
          "Orders and payments",
          "Asset-light 3PL aggregation — no owned fleet",
          "Return and satisfaction events back into intelligence",
        ],
      },
    ],
    services: [
      { name: "Intent", owns: "Query understanding", contract: "Utterance → structured need and constraints" },
      { name: "Catalog", owns: "Product truth", contract: "ID → specs, media, stock, 3D asset" },
      { name: "Rank", owns: "Decision order", contract: "Intent + taste → ordered set + reasons" },
      { name: "Inspect", owns: "3D / AR session", contract: "Product → inspectable twin" },
      { name: "Presenter", owns: "Live and recorded demonstration", contract: "Product + question → explanation" },
      { name: "Order", owns: "Checkout and 3PL handoff", contract: "Decision → fulfillment instruction" },
      { name: "Feedback", owns: "Returns, fit, satisfaction", contract: "Outcome → rank and catalog updates" },
    ],
    data: [
      { name: "Product graph", holds: "Canonical items, variants, 3D assets, presenter packs" },
      { name: "Taste graph", holds: "Intent history and constraint preferences — not a dark profile" },
      { name: "Inspect sessions", holds: "What was viewed in 3D/AR before checkout" },
      { name: "Outcome log", holds: "Purchase, return, and confidence flags for the loop" },
    ],
    interfaces: [
      "Shopper — search, inspect, presenter, decide",
      "Merchant — X Atelier, inventory, control center",
      "Creator / advertiser — presenters, live shopping, Adcontex",
      "Alpha interface — open from the dossier",
    ],
    constraints: [
      "X1 is six categories only. Luxury (X2), SaaS brand tools at scale, and private-label Exor are later in the paper.",
      "TradeX (capital markets) is named in the product OS as a later corridor — not the X1 core. Decision commerce for goods is the first machine.",
      "3PL is aggregated. Do not design a Quantavex-owned logistics fleet into this architecture.",
      "Targets (returns 30% → 10%, conversion +20–35%) are research goals, not live KPIs.",
    ],
    later: [
      "X2 luxury corridor (Luxelle / Imperial as member checkout)",
      "SaaS tools for brands at scale",
      "Deeper 3PL coordination",
      "Private-label Exor",
      "TradeX as a separate capital-markets workspace when goods commerce stands",
    ],
    suitable:
      "Implement X1 as one commerce runtime with six layers in-process or as a small set of services (Intent/Rank, Catalog, Inspect, Order). 3D assets and presenters are content pipelines. Logistics is an adapter. That matches the paper and a founder-led build.",
  },
}

export function getProductArchitecture(id: ProductId) {
  return productArchitecture[id]
}

export function architectureCitation(id: ProductId) {
  return researchPapers[id].citation
}
