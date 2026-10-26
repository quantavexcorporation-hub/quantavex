export const roadmap = {
  title: "18-Month Global Expansion Roadmap",
  clock: "October 2026 to April 2028",
  targetLabel: "Strategic target",
  targetDate: "April 2028",
  start: "October 2026",
  users: "9 million",
  perPlatform: "3 million",
  usersNote:
    "3 million registrations on Quantrion, Vdoc, and ExoraX each. 9 million company total by April 2028 — a stretch target, not current traction.",
  posture: "Four phases",
  mau: "Build meaningful monthly active usage on every platform, with a provisional target of 20–30% of registered users active monthly, subject to retention evidence.",
  disclaimer:
    "These are proposed targets, not current traction or guaranteed outcomes. The plan assumes execution begins in October 2026.",
  promise:
    "18 months is the execution horizon. Nine million registrations is the stretch target. Monthly active users are a separate engagement target, not interchangeable with registrations.",
} as const

export const phases = [
  {
    n: "01",
    window: "0–3",
    months: "Months",
    title: "Foundation and validation",
    points: [
      "Make Quantrion's core experience production-ready.",
      "Test with real target users and measure activation and retention.",
      "Validate Vdoc and ExoraX's first use cases.",
      "Launch analytics, landing pages, and focused YouTube campaigns.",
    ],
    gate: "Demonstrate real product value before increasing acquisition spend.",
  },
  {
    n: "02",
    window: "4–6",
    months: "Months",
    title: "Product-market validation",
    points: [
      "Build Quantrion's exam-specific content and partnership engine.",
      "Launch Vdoc's creator-led distribution experiments.",
      "Validate ExoraX within one high-intent product category.",
      "Test referrals, SEO, and small paid campaigns.",
    ],
    gate: "Identify repeatable acquisition channels and returning-user cohorts.",
  },
  {
    n: "03",
    window: "7–12",
    months: "Months",
    title: "Accelerated distribution",
    points: [
      "Scale channels that deliver retained users at acceptable cost.",
      "Expand educational content, creator collaborations, and merchant partnerships.",
      "Improve onboarding, referrals, localization, and infrastructure.",
      "Add growth capacity where the data supports it.",
    ],
    gate: "Each product must show its own sustainable acquisition and retention evidence.",
  },
  {
    n: "04",
    window: "13–18",
    months: "Months",
    title: "Global scale-up",
    points: [
      "Expand successful acquisition engines into additional markets.",
      "Pursue 3 million registrations per platform.",
      "Track MAU, retention, conversion, and cost per retained user separately.",
      "Optimize AI and video-generation costs while strengthening reliability.",
    ],
    gate: "Report actual performance against the 9 million target transparently.",
  },
] as const

export const engines = [
  {
    id: "quantrion" as const,
    name: "Quantrion",
    target: "3M",
    text: "YouTube education content, exam-specific SEO, student communities, educator partnerships, and useful personalized study tools.",
  },
  {
    id: "vdoc" as const,
    name: "Vdoc",
    target: "3M",
    text: "Shareable AI stories, short-form video distribution, creator partnerships, interactive experiences, and repeat content formats.",
  },
  {
    id: "exorax" as const,
    name: "ExoraX",
    target: "3M",
    text: "Product comparison content, search-led discovery, merchant partnerships, and shopping tools that solve a specific decision problem.",
  },
] as const

export const capital = {
  initial: "₹3 crore",
  initialNote:
    "An initial planning scenario for the 18-month plan, not a sum that guarantees 9 million users.",
  allocation:
    "Production engineering, customer validation, AI infrastructure, growth experiments, and essential operations.",
  release:
    "Release larger marketing budgets only after cohort retention and acquisition economics are demonstrated.",
  cac: "₹25",
  cacNote: "Blended acquisition cost per registration, used as arithmetic — not a measured cost.",
  nineMillionCost: "₹22.5 crore",
  nineMillionNote:
    "At ₹25 per registration, nine million registrations would mathematically cost ₹22.5 crore, before product development and operating expenses.",
  organic:
    "Organic distribution, partnerships, referrals, and product-led growth must play a substantial role.",
} as const

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
