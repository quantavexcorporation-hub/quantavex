import { ProductId } from "@/components/brand/product-logo"
import { productLiveUrls } from "@/lib/site"

export interface ProductModuleGroup {
  title: string
  items: { name: string; detail: string }[]
}

export interface ProductDossier {
  id: ProductId
  name: string
  category: string
  industry: string
  tagline: string
  manifesto: string
  description: string
  audience: { title: string; detail: string }[]
  metrics: { label: string; value: string; note: string }[]
  loop: { step: string; detail: string }[]
  groups: ProductModuleGroup[]
  differentiators: { traditional: string; quantavex: string }[]
  surfaces: string[]
  ops: { module: string; owner: string; status: string; latency: string; load: string }[]
  liveUrl: string
}

export const products: Record<ProductId, ProductDossier> = {
  quantrion: {
    id: "quantrion",
    name: "Quantrion",
    category: "EdTech · Q1",
    industry: "Learning",
    tagline: "AI Global Exam Intelligence Engine",
    manifesto: "Intelligence at Scale.",
    description:
      "Hyper-personalized learning for competitive exams — adaptive assessments, intelligent study systems, and predictive performance analytics. Built for annual high-stakes cohorts across JEE, NEET, UPSC, SAT, GRE, IELTS, CFA, USMLE, Gaokao, olympiads, and 150+ more pathways.",
    audience: [
      { title: "Competitive exam students", detail: "JEE, NEET, UPSC, CAT, GATE, GRE, GMAT, IELTS, TOEFL, SAT, boards, and olympiads." },
      { title: "Educators", detail: "LectureCognis and test generation are platform tools — learners cannot open the studio." },
      { title: "Career explorers", detail: "Career AI routes signals across exams, future of industries, and skill curricula." },
    ],
    metrics: [
      { label: "Learning lift", value: "+48–88%", note: "Research target · monograph" },
      { label: "Retention", value: "3.2x", note: "Research target · closed-loop practice" },
      { label: "Satisfaction", value: "96%", note: "Cited cohort signal" },
      { label: "Exam atlas", value: "150+", note: "Specified global pathways" },
    ],
    loop: [
      { step: "Diagnose", detail: "Map strengths, gaps, and confidence into Knowledge DNA." },
      { step: "Adapt", detail: "Rebuild sequences from pace, retention, and exam goals." },
      { step: "Validate", detail: "Calibrated mocks with weakness mapping." },
      { step: "Predict", detail: "Forecast score bands and focus windows before the sitting." },
    ],
    groups: [
      {
        title: "Divisions",
        items: [
          { name: "Q1 Competitive Exams", detail: "Global Exam Atlas and the four-phase intelligence loop." },
          { name: "Q2 Explore Industries", detail: "Every industry. Every skill. One curriculum — 19 domains, 150+ courses." },
          { name: "Qrion Space Technology", detail: "Engineering humanity’s future beyond Earth." },
        ],
      },
      {
        title: "Learning intelligence",
        items: [
          { name: "Knowledge DNA", detail: "Evolving academic genome — strengths, gaps, and growth vectors." },
          { name: "Performance IQ", detail: "Readiness across accuracy, speed, and consistency." },
          { name: "Weak Topics", detail: "Confidence bars, mistake counts, spaced-revision scheduling." },
          { name: "Mock Intelligence", detail: "Rank prediction and calibrated weakness maps." },
          { name: "Strategy AI", detail: "Personalized study strategy from live signals." },
          { name: "Career AI", detail: "Pathway suggestions from learning evidence." },
        ],
      },
      {
        title: "Practice and content",
        items: [
          { name: "Learn / QuickLearn", detail: "Exam Sprint, Deep Explanation, Real-Life Example." },
          { name: "Smart Library", detail: "Explain, quiz, and visualize inside every chapter." },
          { name: "Practice and mocks", detail: "Closed-loop sessions that update after every sitting." },
          { name: "LectureCognis", detail: "Cinematic education lectures — Hollywood clarity, deep teaching." },
        ],
      },
    ],
    differentiators: [
      { traditional: "Static curriculum", quantavex: "Personalized sequences that adapt to pace and exam goals" },
      { traditional: "Generic progress bars", quantavex: "Knowledge DNA — an evolving academic genome" },
      { traditional: "Uncalibrated mocks", quantavex: "Mock intelligence with rank prediction" },
      { traditional: "Segment-based personalization", quantavex: "Individual AI, updated in real time" },
    ],
    surfaces: [
      "Dashboard command center",
      "Global Exam Atlas",
      "Knowledge DNA / Progress IQ",
      "Learn, QuickLearn, Smart Library",
      "Practice, mocks, analytics",
      "Career AI and Strategy AI",
      "LectureCognis studio",
      "Upgrade and plans",
    ],
    ops: [
      { module: "Pathway engine", owner: "Learning", status: "In specification", latency: "Adaptive sequences", load: "Q1" },
      { module: "Knowledge DNA", owner: "Research", status: "In specification", latency: "Mastery graph", load: "Q1" },
      { module: "Quiz synthesis", owner: "Content", status: "In build", latency: "Closed-loop practice", load: "Q1" },
      { module: "Career routing", owner: "Product", status: "Specified", latency: "Pathway suggestions", load: "Q2" },
    ],
    liveUrl: productLiveUrls.quantrion,
  },
  vdoc: {
    id: "vdoc",
    name: "Vdoc",
    category: "Entertainment OS",
    industry: "Entertainment",
    tagline: "AI Native Entertainment Operating System",
    manifesto: "Speak. Enter. Shape worlds that respond to you.",
    description:
      "An entertainment operating system that listens, then builds the world around you. Audience consumption, creator execution, and a virtual economy share one visual language — not a streaming catalog, not a chat app, not a marketplace bolted on after the fact.",
    audience: [
      { title: "Audience", detail: "Mood-driven discovery, resume, afterglow, unfinished threads, and world continuity." },
      { title: "Creators", detail: "Video Genesis / Vdoc Nexus — Idea Lab, Story Engine, characters, worlds, live production." },
      { title: "Studio partners", detail: "Co-author series, branch endings, and Creator Stage Pass on Live Universe." },
    ],
    metrics: [
      { label: "Engagement", value: "5x", note: "Research target · interactive vs passive" },
      { label: "Creation time", value: "−80%", note: "Research target · director + engine" },
      { label: "Retention", value: "90%", note: "Research target · emotional continuity" },
      { label: "Quality", value: "94%", note: "Research target · generation score" },
    ],
    loop: [
      { step: "Speak", detail: "Natural language, voice, or mood as the entry command." },
      { step: "Enter", detail: "Universe of movies, series, games, stories, comics, music, and worlds." },
      { step: "Shape", detail: "Branch, generate, and keep emotional continuity across formats." },
      { step: "Own", detail: "Virtual Economy — ownership is part of the plot." },
    ],
    groups: [
      {
        title: "Audience OS",
        items: [
          { name: "Command surface", detail: "Personalized welcome, prompt, trending rails, promo carousel." },
          { name: "Converse", detail: "Streaming conversation, branching, voice, media generation, memory." },
          { name: "Universe", detail: "Movies, series, games, stories, comics, music, virtual worlds." },
          { name: "Vdoc Live", detail: "Live entertainment control room — not Twitch, YouTube, or Facebook Live." },
          { name: "Intelligence", detail: "Mood Match, Afterglow, Unfinished, World Thread, Evening Intent." },
        ],
      },
      {
        title: "Creation OS",
        items: [
          { name: "Vdoc Nexus", detail: "AI is the execution engine. Data is memory. The creator is the director." },
          { name: "Video Genesis", detail: "Idea Lab, Story Engine, characters, worlds, video, image, audio, music." },
          { name: "AI Agents", detail: "Specialists orchestrated by the AI Director — not a tool pile." },
          { name: "Distribution and analytics", detail: "Ship worlds, measure afterglow, iterate with studio partners." },
        ],
      },
      {
        title: "Virtual Economy",
        items: [
          { name: "Digital vault", detail: "Collectibles, characters, land, limited drops." },
          { name: "Marketplace", detail: "A digital civilization — not a crypto exchange bolted onto entertainment." },
          { name: "Founders land", detail: "Ownership as narrative, not a sidebar wallet." },
        ],
      },
    ],
    differentiators: [
      { traditional: "Shelves and catalogs", quantavex: "Mood mapped to experience" },
      { traditional: "Format silos", quantavex: "Emotional continuity across film, series, game, and world" },
      { traditional: "Passive viewing", quantavex: "Worlds that respond to you" },
      { traditional: "Tool piles for creators", quantavex: "AI Director orchestrating specialist agents" },
    ],
    surfaces: [
      "Home command surface",
      "Converse",
      "Universe",
      "Vdoc Live",
      "Audience Intelligence",
      "Virtual Economy",
      "Video Genesis / Nexus",
      "Design system",
    ],
    ops: [
      { module: "Scene renderer", owner: "Studio", status: "In specification", latency: "World continuity", load: "V1" },
      { module: "Narrative model", owner: "Research", status: "In specification", latency: "Story graph", load: "V1" },
      { module: "Retention scorer", owner: "Product", status: "Specified", latency: "Afterglow signals", load: "V1" },
      { module: "Economy layer", owner: "Platform", status: "Specified", latency: "Ownership in-plot", load: "Vydo" },
    ],
    liveUrl: productLiveUrls.vdoc,
  },
  exorax: {
    id: "exorax",
    name: "ExoraX",
    category: "Decision Commerce",
    industry: "Commerce",
    tagline: "The Future of Commerce — Powered by Intelligence",
    manifesto: "Built like an OS, felt like a film.",
    description:
      "From browsing to buying, intelligence that understands intent, visualizes products in 3D and AR, and choreographs the decision. Interactive commerce for users, brands, creators, advertisers, and developers — clarity instead of comparison fatigue.",
    audience: [
      { title: "Shoppers", detail: "High-consideration buyers who need to know it before it arrives." },
      { title: "Brands and merchants", detail: "X Atelier, Inventory Intelligence, Control Center." },
      { title: "Creators and advertisers", detail: "Presenters, live shopping, Adcontex, Luxelle." },
    ],
    metrics: [
      { label: "Conversion", value: "+35%", note: "Research target · confidence to purchase" },
      { label: "AOV", value: "+42%", note: "Research target · guided decisions" },
      { label: "Returns", value: "30% → 10%", note: "Research target · fewer wrong-item buys" },
      { label: "Decision time", value: "10×", note: "Research target · path to purchase" },
    ],
    loop: [
      { step: "Search", detail: "Natural language intent, voice, or visual query." },
      { step: "Understand", detail: "Context, constraints, and taste — instantly." },
      { step: "Inspect", detail: "3D, AR, presenters, and interactive catalogues." },
      { step: "Decide", detail: "Clarity replaces comparison fatigue. Seamless checkout." },
    ],
    groups: [
      {
        title: "Markets",
        items: [
          { name: "Trade Economy (TradeX)", detail: "Capital markets workspace — global IB desk, crypto, portfolio, alerts." },
          { name: "X Atelier", detail: "Brand creation and merchant OS. Engagement lives here." },
          { name: "Inventory Intelligence", detail: "Demand forecasting, fraud detection, warehouse security, procurement." },
        ],
      },
      {
        title: "Commerce core",
        items: [
          { name: "AI Product Assistant", detail: "Describe. Discover. Decide. — with transparent why." },
          { name: "Personalization", detail: "Taste graphs and intent ranking." },
          { name: "Price and discount", detail: "Optimization and heavy-discount corridors." },
          { name: "Orders, dine, real estate", detail: "Reservations, property twins, member checkout." },
        ],
      },
      {
        title: "Experience layers",
        items: [
          { name: "3D + AR", detail: "True shape and scale — close the gap between listing and reality." },
          { name: "Virtual Showroom", detail: "Vehicle and cabin studio, not a listing page." },
          { name: "Luxelle / Imperial", detail: "Luxury corridor — member checkout, not a flash tile." },
          { name: "Adcontex", detail: "Video and ad studio for the commerce OS." },
        ],
      },
    ],
    differentiators: [
      { traditional: "Manual browsing", quantavex: "Purchase intelligence — intent, not shelves" },
      { traditional: "Flattering studio crops", quantavex: "3D and AR inspection before the buy" },
      { traditional: "Comparison fatigue", quantavex: "A decision, choreographed" },
      { traditional: "High wrong-item returns", quantavex: "Know it before it arrives" },
    ],
    surfaces: [
      "Control Center dashboard",
      "TradeX / Trade Economy",
      "X Atelier",
      "Inventory Intelligence",
      "AI Product Assistant",
      "Virtual Showroom",
      "Luxelle / Imperial",
      "Live shopping and catalogues",
    ],
    ops: [
      { module: "Intent graph", owner: "Commerce", status: "In specification", latency: "Natural-language search", load: "X1" },
      { module: "Catalog ranker", owner: "Merch", status: "Specified", latency: "Taste and constraints", load: "X1" },
      { module: "3D / AR inspect", owner: "Experience", status: "Specified", latency: "Know it before it arrives", load: "X1" },
      { module: "Decision loop", owner: "Product", status: "In specification", latency: "Feedback trains ranking", load: "X1" },
    ],
    liveUrl: productLiveUrls.exorax,
  },
}

export const productList = [products.quantrion, products.vdoc, products.exorax]

export function getProduct(id: ProductId) {
  return products[id]
}
