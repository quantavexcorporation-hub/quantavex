import type { ProductId } from "@/components/brand/product-logo"

export const roadmap = {
  clock: "6 months after investment",
  users: "270,000",
  perPlatform: "90,000",
  usersNote: "90,000 users on each platform. 270,000 company total at month 6 — a target, not live traffic today.",
  posture: "Simultaneous",
  promise:
    "All three platforms are built in parallel on Quantavex company infrastructure — identity, data, compute, and the products themselves — with real operating cost, and brought to production with 90,000 users on each platform — 270,000 in total — inside six months of investment. Users are grabbed the way the fastest products filled: the product carries the invite.",
} as const

export const months = ["M1", "M2", "M3", "M4", "M5", "M6"] as const

export const tracks: {
  id: ProductId | "mesh" | "opex" | "grab"
  label: string
  cells: string[]
}[] = [
  {
    id: "quantrion",
    label: "Quantrion",
    cells: ["Infra", "DNA loop", "API live", "Student OS", "Harden", "Production"],
  },
  {
    id: "vdoc",
    label: "Vdoc",
    cells: ["Infra", "Story graph", "API live", "Experience OS", "Harden", "Production"],
  },
  {
    id: "exorax",
    label: "ExoraX",
    cells: ["Infra", "Confidence loop", "API live", "Commerce OS", "Harden", "Production"],
  },
  {
    id: "mesh",
    label: "Infrastructure",
    cells: ["Identity", "Data", "Compute", "Products", "Observe", "Operate"],
  },
  {
    id: "opex",
    label: "Operating cost",
    cells: ["Cloud", "Inference", "Jobs", "3PL + storage", "Support", "Full burn"],
  },
  {
    id: "grab",
    label: "User grab",
    cells: ["Instant use", "Result travels", "Open day", "Referral", "Group pull", "90k each"],
  },
]

export const program = [
  {
    n: "01",
    title: "Build all three at once",
    text: "Quantrion, Vdoc, and ExoraX leave alpha together. No waiting for one product to finish before the others start.",
  },
  {
    n: "02",
    title: "Run the company infrastructure",
    text: "Quantavex runs identity, data, compute, and the three products as one company. APIs sit inside that infrastructure. They are not the whole of it.",
  },
  {
    n: "03",
    title: "Infra from the figures",
    text: "Four-layer exam loop, story graph, six-layer confidence stack. Infrastructure follows the architecture pages — not a generic cloud template.",
  },
  {
    n: "04",
    title: "Pay operating cost",
    text: "Compute, inference, object storage, company infrastructure, the ExoraX 3PL adapter, and ops. Production has a bill. The plan includes it.",
  },
  {
    n: "05",
    title: "Production-ready",
    text: "Linked alpha interfaces are not the destination. Month 6 is three platforms that can take real users.",
  },
  {
    n: "06",
    title: "Grab at product speed",
    text: "Nine moves taken from how ChatGPT, Dropbox, Slack, and Zoom filled: an instant result, a result that travels, one open day, a two-sided referral, a group pull, an embed, a public library, one repeatable sentence, and a second session the next day.",
  },
  {
    n: "07",
    title: "90,000 × 3",
    text: "90,000 users on Quantrion, Vdoc, and ExoraX each. 270,000 company total at the end of the six-month clock — a goal after investment, not a live cohort today.",
  },
] as const

export const grab = [
  {
    n: "01",
    slug: "youtube",
    name: "YouTube",
    yield: "Compounding proof",
    role: "Long-form that keeps working. Exam intelligence, product film, and how the machine works — searched months later.",
  },
  {
    n: "02",
    slug: "instagram",
    name: "Instagram",
    yield: "Daily reach",
    role: "Reels and stills for Vdoc worlds and ExoraX inspect. Fast surface for people who will not watch a lecture.",
  },
  {
    n: "03",
    slug: "x",
    name: "X",
    yield: "Speed + narrative",
    role: "Founder voice, build in public, tech and product discourse. Cheap to run. High signal if the work is real.",
  },
  {
    n: "04",
    slug: "linkedin",
    name: "LinkedIn",
    yield: "Trust + hiring",
    role: "Investors, merchants, educators, the six seats to hire. Professional demand — not vanity likes.",
  },
  {
    n: "05",
    slug: "whatsapp",
    name: "WhatsApp",
    yield: "India close rate",
    role: "Groups, broadcasts, product links. Highest conversion surface in India. Time invested here returns users, not views.",
  },
  {
    n: "06",
    slug: "reddit",
    name: "Reddit",
    yield: "High intent",
    role: "Exam threads, product communities, people already asking. Slow, honest, compounding. Worth the hours if the answers are useful.",
  },
] as const

export const grabStrategies = [
  {
    n: "01",
    name: "Instant first result",
    move: "ChatGPT speed",
    text: "ChatGPT’s public opening reached about a million people in five days because anyone could get a result immediately. Quantrion shows a readiness read, Vdoc a scene, ExoraX an inspect — before a long account wall.",
  },
  {
    n: "02",
    name: "The result travels",
    move: "Zoom link · Figma file",
    text: "ChatGPT answers, Zoom links, and Figma files recruited the next user. A score card, a scene, or an inspect is the invite. It moves without a post from the company.",
  },
  {
    n: "03",
    name: "One open day",
    move: "A burst, not a drip",
    text: "ChatGPT did not trickle out. One public opening, all three products usable the same day. Attention compounds when it arrives together.",
  },
  {
    n: "04",
    name: "Two-sided referral",
    move: "Dropbox case",
    text: "Dropbox gave the benefit to the person who invited and the person who joined, and the program became the growth engine. Extra practice, generation, or inspects on both sides.",
  },
  {
    n: "05",
    name: "Pull the group",
    move: "Slack inside a team",
    text: "Slack spread because one person brought the team. A student brings a batch. A creator brings a room. A merchant brings buyers. The invite lives inside the product.",
  },
  {
    n: "06",
    name: "Embed outward",
    move: "ChatGPT API pattern",
    text: "ChatGPT’s API put the product inside other companies. Coaching institutes, studios, and merchants embed one Quantavex surface. Their audience arrives already in context.",
  },
  {
    n: "07",
    name: "Public artifact library",
    move: "Notion templates",
    text: "Notion templates and shared prompts were doors, not posts. Exam plans, worlds, and inspects anyone can open and run. Each artifact is a landing page with a use button.",
  },
  {
    n: "08",
    name: "One repeatable sentence",
    move: "The demo is the story",
    text: "ChatGPT’s press line was the demo. One sentence a teacher, journalist, or founder can repeat. That sentence moves faster than a campaign.",
  },
  {
    n: "09",
    name: "Second session, next day",
    move: "Product-led growth",
    text: "The research record on product-led growth: the second session is the engine. First successful use, then a return within a day, then scale. Traffic without a second day does not become 90,000.",
  },
] as const

export type DisplayCard = {
  eyebrow: string
  headline: string
  body: string
  cta: string
  accent: string
}

export const platformDisplays = [
  {
    id: "quantrion" as const,
    labels: ["Intelligence", "Spotlight", "Ad"] as const,
    intelligence: [
      { eyebrow: "Intelligence Book", headline: "AI Interactive Books", body: "Books that explain themselves with AI, 3D visuals, and contextual tutoring.", cta: "Explore", accent: "#60a5fa" },
      { eyebrow: "Adaptive Profile", headline: "Knowledge DNA", body: "An evolving intelligence profile powered by adaptive learning signals.", cta: "Open Feature", accent: "#a78bfa" },
      { eyebrow: "Exam Readiness", headline: "Performance IQ", body: "Strengths, weaknesses, and exam readiness with AI clarity.", cta: "Try Now", accent: "#34d399" },
      { eyebrow: "Living Knowledge", headline: "Smart Library", body: "Interactive books with concept visualization and AI explanations.", cta: "Learn More", accent: "#38bdf8" },
      { eyebrow: "Always On", headline: "AI Tutor", body: "Ask inside videos, books, notes, and practice sessions.", cta: "Ask Now", accent: "#60a5fa" },
      { eyebrow: "Frontier Lab", headline: "Future Technology", body: "Frontier learning experiences built for the next generation.", cta: "Read More", accent: "#fbbf24" },
    ] satisfies DisplayCard[],
    spotlight: {
      eyebrow: "Limited drop",
      headline: "Neural Exam Arena",
      body: "A living simulation where AI opponents adapt to Progress IQ in real time.",
      cta: "Enter Arena",
      accent: "#fbbf24",
    } satisfies DisplayCard,
    ads: [
      { eyebrow: "Quantrion Plus · Sponsored", headline: "Unlock Full AI Tutor", body: "Unlimited explanations, voice mode, and adaptive mocks.", cta: "Upgrade", accent: "#60a5fa" },
      { eyebrow: "Mock Intelligence · Featured", headline: "Rank Predictor Live", body: "Calibrated mocks with live cohort ranking signals.", cta: "Try Mock", accent: "#34d399" },
      { eyebrow: "Smart Library · New", headline: "Intelligence Books", body: "3D concepts and page-native AI tutoring inside every chapter.", cta: "Open Library", accent: "#a78bfa" },
      { eyebrow: "Future Lab · Partner", headline: "Frontier Learning Drop", body: "Early access to next-gen simulation classrooms.", cta: "Explore", accent: "#fbbf24" },
    ] satisfies DisplayCard[],
  },
  {
    id: "vdoc" as const,
    labels: ["Intelligence", "Spotlight", "Offers"] as const,
    intelligence: [
      { eyebrow: "AI Creator", headline: "Speak. Enter. Shape.", body: "Turn one prompt into movies, games, stories, and living worlds.", cta: "Create now", accent: "#67e8f9" },
      { eyebrow: "Virtual Cities", headline: "Cities that rewrite", body: "Adaptive urban worlds that listen to every choice.", cta: "Enter city", accent: "#a78bfa" },
      { eyebrow: "Vyra", headline: "Signal, live now", body: "Premieres, interactive events, and creators broadcasting in real time.", cta: "Go live", accent: "#34d399" },
      { eyebrow: "Virtual Universe", headline: "Ownership is the plot", body: "Collectibles, land, and living assets inside the digital vault.", cta: "Open vault", accent: "#fbbf24" },
      { eyebrow: "Quick Entertain", headline: "Under a minute", body: "AI shorts generated for the moment — hover to preview, enter to go deeper.", cta: "Watch shorts", accent: "#fb7185" },
    ] satisfies DisplayCard[],
    spotlight: {
      eyebrow: "Limited drop",
      headline: "Neon Harbor Premiere",
      body: "A live world rewrite tonight — streets rearrange around every presence.",
      cta: "Enter premiere",
      accent: "#fbbf24",
    } satisfies DisplayCard,
    ads: [
      { eyebrow: "VDOC Plus · Sponsored", headline: "Unlock infinite creation", body: "Priority generation, voice mode, and private world branches.", cta: "Upgrade", accent: "#67e8f9" },
      { eyebrow: "Vyra · Featured", headline: "Creator Stage Pass", body: "Front-row access to interactive premieres and signal events.", cta: "Get pass", accent: "#34d399" },
      { eyebrow: "Virtual Universe · New", headline: "Founders land drop", body: "Early parcels in Neo Harbor — own the block before it rewrites.", cta: "Explore", accent: "#fbbf24" },
      { eyebrow: "Studio Partners · Partner", headline: "Co-author a series", body: "Branch endings with featured creators and mint your cut.", cta: "Join thread", accent: "#a78bfa" },
      { eyebrow: "Intelligence · Need", headline: "Tired of endless scroll?", body: "Mood Match and Top Rated Only — pains catalogs never solved.", cta: "Open Intelligence", accent: "#67e8f9" },
    ] satisfies DisplayCard[],
  },
  {
    id: "exorax" as const,
    labels: ["Intelligence", "Spotlight", "Sponsored"] as const,
    intelligence: [
      { eyebrow: "AI Shopper", headline: "Describe. Discover. Decide.", body: "Natural-language shopping with match scores and a transparent why.", cta: "Ask AI Product Assistant", accent: "#5b8cff" },
      { eyebrow: "Inventory Intelligence", headline: "Stock that predicts", body: "Demand, fraud risk, and warehouse intelligence in one mesh.", cta: "Open Inventory", accent: "#5b8cff" },
      { eyebrow: "Trade Exchange", headline: "Commerce meets markets", body: "Countries, products, supply chains, and an opportunity radar.", cta: "Enter Trade", accent: "#fbbf24" },
      { eyebrow: "X Atelier", headline: "The Future of Brand Creation", body: "Build a maison. Content, engagement, and experience layers.", cta: "X Atelier", accent: "#a78bfa" },
    ] satisfies DisplayCard[],
    spotlight: {
      eyebrow: "Limited drop",
      headline: "Heavy Discount Mesh",
      body: "AI-ranked flash deals with price integrity — live inventory windows.",
      cta: "See deals",
      accent: "#d4d4d8",
    } satisfies DisplayCard,
    ads: [
      { eyebrow: "ExoraX Plus · Sponsored", headline: "Unlock Personal Shopper", body: "Priority AI ranking, visual search, and private preference memory.", cta: "Upgrade", accent: "#5b8cff" },
      { eyebrow: "X Atelier · Featured", headline: "Sell & brand on ExoraX", body: "Merchant OS plus Content, Live, and AR layers.", cta: "Open X Atelier", accent: "#5b8cff" },
      { eyebrow: "ExoraX Imperial · New", headline: "Luxury corridor access", body: "Authenticated high-value inventory and private salon drops.", cta: "Enter Imperial", accent: "#fbbf24" },
      { eyebrow: "Commerce Partners · Partner", headline: "Sponsor Discover", body: "Appear in AI results, category rails, and sponsored search slots.", cta: "Advertise", accent: "#a78bfa" },
    ] satisfies DisplayCard[],
  },
] as const

export const opex = [
  { name: "Cloud compute & storage", role: "Sessions, DNA, story state, product graph" },
  { name: "Model inference", role: "Pathway, Director, intent and rank" },
  { name: "Company infrastructure", role: "Identity, data, compute, and the three products on one company stack" },
  { name: "Generation & object jobs", role: "Lectures, media synthesis, 3D twins" },
  { name: "3PL adapter", role: "ExoraX fulfillment instruction — no owned fleet" },
  { name: "Operations", role: "Reliability, support, legal, the people the build needs" },
] as const

export const mesh = [
  { from: "Quantrion", via: "Learning system · DNA · sessions", to: "Quantavex infrastructure" },
  { from: "Vdoc", via: "Experience system · worlds · memory", to: "Quantavex infrastructure" },
  { from: "ExoraX", via: "Commerce system · catalog · orders", to: "Quantavex infrastructure" },
] as const
