import type { ProductId } from "@/components/brand/product-logo"

export const roadmap = {
  clock: "6 months after investment",
  users: "270,000",
  perPlatform: "90,000",
  usersNote: "90,000 users on each platform. 270,000 company total at month 6 — a target, not live traffic today.",
  posture: "Simultaneous",
  promise:
    "All three platforms are built in parallel, connected on one API plane, stood up on architecture-faithful infrastructure, run with real operating cost, and brought to production with 90,000 users on each platform — 270,000 in total — inside six months of investment. Users are grabbed on six high-return channels, not by hoping the product is found.",
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
    label: "API mesh",
    cells: ["Identity", "Contracts", "Three-way", "Gateway", "Observe", "Load"],
  },
  {
    id: "opex",
    label: "Operating cost",
    cells: ["Cloud", "Inference", "Jobs", "3PL + storage", "Support", "Full burn"],
  },
  {
    id: "grab",
    label: "User grab",
    cells: ["Six channels", "Publish", "Communities", "Convert", "Scale", "90k each"],
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
    title: "Connect on software APIs",
    text: "One identity plane, one gateway, architecture contracts per platform. Three products, one company machine.",
  },
  {
    n: "03",
    title: "Infra from the figures",
    text: "Four-layer exam loop, story graph, six-layer confidence stack. Infrastructure follows the architecture pages — not a generic cloud template.",
  },
  {
    n: "04",
    title: "Pay operating cost",
    text: "Compute, inference, object storage, API mesh, ExoraX 3PL adapter, and ops. Production has a bill. The plan includes it.",
  },
  {
    n: "05",
    title: "Production-ready",
    text: "Linked alpha interfaces are not the destination. Month 6 is three platforms that can take real users.",
  },
  {
    n: "06",
    title: "Grab off the feed",
    text: "Nine moves that are not social channels: direct outreach, a free trial, partnerships, search, a tighter page, email, referral, live demonstrations, and a small search-ad test. The six channels stay a separate surface.",
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
    name: "Direct outreach",
    move: "First 50–100 by hand",
    text: "Write to specific students, creators, and shoppers. Say why they were chosen. Ask for one task and honest feedback before any ad spend.",
  },
  {
    n: "02",
    name: "Free trial",
    move: "A result before a payment",
    text: "A useful feature or a short trial, a short signup, and clear limits. The short path is from the site to a real outcome.",
  },
  {
    n: "03",
    name: "Partnerships",
    move: "Borrow a trusted audience",
    text: "Quantrion with coaching institutes. Vdoc with studios and creator networks. ExoraX with merchants and niche publishers. A concrete benefit and a measured pilot.",
  },
  {
    n: "04",
    name: "Search",
    move: "Pages for problems people already type",
    text: "Useful guides, internal links, fast on a phone. A guide on exam preparation can bring someone who then tries Quantrion. This compounds.",
  },
  {
    n: "05",
    name: "Page conversion",
    move: "More users from the same visits",
    text: "One headline, one try button above the fold, a real demo, fewer signup steps. Count visitor to signup, and signup to first successful use.",
  },
  {
    n: "06",
    name: "Email",
    move: "An audience you can reach again",
    text: "A guide, early access, or a product note in exchange for an address. A welcome, a getting-started note, and a follow-up that asks for feedback. Consent, and a way to leave.",
  },
  {
    n: "07",
    name: "Referral",
    move: "A result worth sending",
    text: "After a user has a real outcome: a simple link, extra use for a successful invite, and a result they are glad to share.",
  },
  {
    n: "08",
    name: "Live demonstrations",
    move: "A room, not a feed",
    text: "Campus sessions for Quantrion. Creator workshops for Vdoc. Merchant walkthroughs for ExoraX. Show the product to people already in the room.",
  },
  {
    n: "09",
    name: "Search ads",
    move: "A small test on intent",
    text: "Google only, one audience, one offer, one landing page. Scale only after people who arrive try the product and come back.",
  },
] as const

export const opex = [
  { name: "Cloud compute & storage", role: "Sessions, DNA, story state, product graph" },
  { name: "Model inference", role: "Pathway, Director, intent and rank" },
  { name: "API mesh & identity", role: "Gateway, accounts, contracts between platforms" },
  { name: "Generation & object jobs", role: "Lectures, media synthesis, 3D twins" },
  { name: "3PL adapter", role: "ExoraX fulfillment instruction — no owned fleet" },
  { name: "Operations", role: "Reliability, support, legal, the people the build needs" },
] as const

export const mesh = [
  { from: "Quantrion", via: "Identity + DNA events", to: "Quantavex API" },
  { from: "Vdoc", via: "Identity + session / world state", to: "Quantavex API" },
  { from: "ExoraX", via: "Identity + catalog / order events", to: "Quantavex API" },
] as const
