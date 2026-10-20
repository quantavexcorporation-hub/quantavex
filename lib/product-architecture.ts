import type { ProductId } from "@/components/brand/product-logo"

export type ArchitectureLayer = { name: string; role: string; modules: string[] }
export type ArchitectureEquation = { id: string; form: string; meaning: string }
export type ArchitectureStep = { n: number; title: string; text: string }

export interface ProductArchitecture {
  id: ProductId
  figure: string
  loop: { name: string; steps: string[] }
  layers: ArchitectureLayer[]
  equations: ArchitectureEquation[]
  instruction: ArchitectureStep[]
}

export const productArchitecture: Record<ProductId, ProductArchitecture> = {
  quantrion: {
    id: "quantrion",
    figure: "Q1 — examination intelligence closed loop",
    loop: {
      name: "Intelligence loop",
      steps: ["Diagnose", "Adapt", "Validate", "Predict"],
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
    equations: [
      { id: "Q1", form: "Ŝ = αA + βT + γD + δR", meaning: "Predicted score from accuracy, time efficiency, difficulty solved, and revision consistency." },
      { id: "Q2", form: "L(t) = L₀ (1 − e^{−kt})", meaning: "Learning curve: mastery approaches L₀ at rate k." },
      { id: "Q3", form: "DNA_{t+1} = U(DNA_t, sitting_t)", meaning: "Knowledge DNA is rewritten after every sitting — not a progress bar." },
      { id: "Q4", form: "u* = Pathway(DNA, goal)", meaning: "Next learn / practice unit is a function of mastery and exam goal." },
      { id: "Q5", form: "t_response < 1.5 s", meaning: "Design latency bound from the monograph — not a measured SLA." },
    ],
    instruction: [
      { n: 1, title: "Sit", text: "Student enters Experience: Atlas pathway, learn, practice, mock. LectureCognis is educator-only." },
      { n: 2, title: "Observe", text: "Assessment writes (A, T, D, R) into the sitting log. This is the evidence vector." },
      { n: 3, title: "Update", text: "DNA layer applies U(·). Sequence, difficulty, and revision intervals move with evidence." },
      { n: 4, title: "Adapt", text: "Pathway returns u*. Assessment writes the next lesson; the lesson writes the next assessment." },
      { n: 5, title: "Predict", text: "Score model Ŝ and rank band fire before the real sitting. Learn → Practice → Analyze → Adapt → Improve → Simulate." },
    ],
  },
  vdoc: {
    id: "vdoc",
    figure: "V1 — living entertainment OS",
    loop: {
      name: "Living loop",
      steps: ["Speak", "Enter", "Shape", "Own"],
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
    equations: [
      { id: "V1", form: "G = (N, E)", meaning: "Story is a graph: N are states, E are user decisions — not a linear reel." },
      { id: "V2", form: "s' = δ(s, a),  a ∈ E", meaning: "A choice is an edge. The next scene is a legal transition on G." },
      { id: "V3", form: "scene = Director(intent, memory, agents)", meaning: "AI Director assembles specialist generation jobs into one experience." },
      { id: "V4", form: "U → I → AI → C → F → Evol", meaning: "User, interaction, AI, adaptive content, feedback, evolution. Data reshapes the next scene." },
      { id: "V5", form: "if risk(s') then interrupt", meaning: "Ethics is a hard stop on the graph, not a policy PDF." },
    ],
    instruction: [
      { n: 1, title: "Speak", text: "User emits intent on the command surface (voice, prompt, rail). That is the start of U." },
      { n: 2, title: "Enter", text: "Control records the action a. Story graph applies δ(s, a) and moves to s'." },
      { n: 3, title: "Direct", text: "Director reads character memory and mood. Specialist agents generate the next chunk." },
      { n: 4, title: "Shape", text: "Generation writes video, image, audio, or world under continuity. The user is inside the scene, not beside a catalog." },
      { n: 5, title: "Own / evolve", text: "Signals (afterglow, unfinished, vote) feed Evolution. Harmful loops are interrupted before the next edge." },
    ],
  },
  exorax: {
    id: "exorax",
    figure: "X1 — six-layer confidence commerce",
    loop: {
      name: "Confidence loop",
      steps: ["Intent", "Filter", "3D / AR", "Presenter", "Decision", "Feedback"],
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
    equations: [
      { id: "X1", form: "need = Intent(utterance)", meaning: "Natural language, voice, or visual query becomes structured constraints." },
      { id: "X2", form: "π* = arg max_p  Score(p | need, taste)", meaning: "Ranked set with a transparent why — not a keyword listing." },
      { id: "X3", form: "inspect = Twin(p)", meaning: "True-scale 3D / AR closes listing versus reality before value moves." },
      { id: "X4", form: "C = g(inspect, presenter)", meaning: "Decision confidence is produced by inspection and demonstration, not by copy." },
      { id: "X5", form: "buy  ⇔  C ≥ τ", meaning: "Checkout is the last step. 3PL is an adapter — no owned fleet." },
      { id: "X6", form: "Score_{t+1} ← Outcome(return, fit)", meaning: "Returns of 20–35% are a pre-purchase information gap. Feedback trains rank." },
    ],
    instruction: [
      { n: 1, title: "Intent", text: "Shopper states a need. Interface layer writes utterance → need." },
      { n: 2, title: "Filter", text: "AI intelligence ranks π* from the product graph and taste. Every recommendation carries a why." },
      { n: 3, title: "Inspect", text: "3D / AR twin is the product in the user’s space. This is the experiential layer." },
      { n: 4, title: "Presenter", text: "Flipbook, clipbook, catalogue, or live presenter explains. Interactive content, not static specs." },
      { n: 5, title: "Decide / train", text: "If C ≥ τ, Order hands to 3PL. Outcome (purchase, return, fit) writes Score_{t+1}." },
    ],
  },
}

export function getProductArchitecture(id: ProductId) {
  return productArchitecture[id]
}
