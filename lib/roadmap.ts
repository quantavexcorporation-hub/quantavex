import type { ProductId } from "@/components/brand/product-logo"

export const roadmap = {
  title: "18-Month Global Expansion Roadmap",
  clock: "October 2026 to April 2028",
  targetLabel: "Strategic target",
  targetDate: "April 2028",
  start: "October 2026",
  users: "12 million",
  perPlatform: "6 million ExoraX · 3 million Quantrion · 3 million Vdoc",
  usersNote:
    "6 million registrations on ExoraX. 3 million on Quantrion and 3 million on Vdoc. 12 million company total by April 2028 — a stretch target, not current traction.",
  posture: "Four phases",
  mau: "Build meaningful monthly active usage on every platform, with a provisional target of 20–30% of registered users active monthly, subject to retention evidence.",
  disclaimer:
    "These are proposed targets, not current traction or guaranteed outcomes. The plan assumes execution begins in October 2026.",
  promise:
    "18 months is the execution horizon. Twelve million registrations is the stretch target — 6 million on ExoraX, 3 million on Quantrion, 3 million on Vdoc. Monthly active users are a separate engagement target, not interchangeable with registrations.",
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
      "Pursue 6 million registrations on ExoraX, and 3 million each on Quantrion and Vdoc.",
      "Track MAU, retention, conversion, and cost per retained user separately.",
      "Optimize AI and video-generation costs while strengthening reliability.",
    ],
    gate: "Report actual performance against the 12 million target transparently.",
  },
] as const

export const engines = [
  {
    id: "exorax" as const,
    name: "ExoraX",
    target: "6M",
    featured: true,
    text: "The commerce engine carries half the company target. Product comparison content, search-led discovery, merchant partnerships, and shopping tools that solve a specific decision problem.",
  },
  {
    id: "quantrion" as const,
    name: "Quantrion",
    target: "3M",
    featured: false,
    text: "YouTube education content, exam-specific SEO, student communities, educator partnerships, and useful personalized study tools.",
  },
  {
    id: "vdoc" as const,
    name: "Vdoc",
    target: "3M",
    featured: false,
    text: "Shareable AI stories, short-form video distribution, creator partnerships, interactive experiences, and repeat content formats.",
  },
] as const

export const capital = {
  initial: "₹3 crore",
  initialNote:
    "An initial planning scenario for the 18-month plan, not a sum that guarantees 12 million users.",
  allocation:
    "Production engineering, customer validation, AI infrastructure, growth experiments, and essential operations.",
  release:
    "Release larger marketing budgets only after cohort retention and acquisition economics are demonstrated.",
  cac: "₹25",
  cacNote: "Blended acquisition cost per registration, used as arithmetic — not a measured cost.",
  registrationCost: "₹30 crore",
  registrationNote:
    "At ₹25 per registration, twelve million registrations would mathematically cost ₹30 crore, before product development and operating expenses.",
  organic:
    "Organic distribution, partnerships, referrals, and product-led growth must play a substantial role.",
} as const

export const growthAdvantages = [
  {
    n: "01",
    title: "Growth engineering, not ordinary marketing",
    priority: "Highest priority",
    points: [
      "Identify the biggest bottleneck in the user journey.",
      "Generate hypotheses to fix it.",
      "Run controlled experiments.",
      "Ship winning changes and measure their lasting effect.",
    ],
    example:
      "Instead of spending more on Quantrion ads, test whether a useful diagnostic before registration improves activation and retention.",
  },
  {
    n: "02",
    title: "A product users want to return to",
    priority: "Retention",
    points: [
      "Quantrion: personalized study plans, diagnostic progress, and useful revision workflows.",
      "Vdoc: continuing stories, saved creations, and new episodes.",
      "ExoraX: saved comparisons, decision histories, and useful price or availability alerts.",
    ],
    example: "Improve retained users per 1,000 visitors, not merely registrations per 1,000 visitors.",
  },
  {
    n: "03",
    title: "A content distribution machine",
    priority: "Distribution",
    points: [
      "Quantrion: exam-specific explanations and learning experiments.",
      "Vdoc: original cinematic stories and interactive creative challenges.",
      "ExoraX: practical comparisons and purchase-decision guides.",
    ],
    example: "One idea becomes a long video, shorts, a search article, and a product demonstration. Tailor the hook. Do not repost the same cut.",
  },
  {
    n: "04",
    title: "Borrow distribution through partnerships",
    priority: "Partners",
    points: [
      "Quantrion: educators, coaching institutes, student communities.",
      "Vdoc: independent filmmakers, animation creators, storytellers.",
      "ExoraX: niche reviewers, publishers, merchants, and shopping communities.",
    ],
    example: "Offer a useful co-created resource. Measure activated and retained users from each partner, not impressions.",
  },
  {
    n: "05",
    title: "Ethical referral loops",
    priority: "Sharing",
    points: [
      "Quantrion: shareable practice challenges or study resources.",
      "Vdoc: a story or creation another person can interact with.",
      "ExoraX: a comparison or shortlist that helps another shopper decide.",
    ],
    example: "The user chooses what is shared. Private learning results and shopping history stay private by default.",
  },
  {
    n: "06",
    title: "High-intent search demand",
    priority: "Search",
    points: [
      "Quantrion: exam-specific practice, explanations, and study resources.",
      "Vdoc: interactive story collections, creator pages, and original story experiences.",
      "ExoraX: product comparisons and category-specific buying guides.",
    ],
    example: "Useful pages for specific problems. Not thousands of near-duplicate pages. Search growth is slow, so it sits beside faster tests.",
  },
  {
    n: "07",
    title: "AI multiplies the growth team's output",
    priority: "Leverage",
    points: [
      "Research audience questions.",
      "Draft content variations.",
      "Categorize feedback and read funnel data.",
      "Personalize onboarding.",
    ],
    example:
      "A 2025 study of 20 startup and scale-up cases is evidence for testing these workflows. It does not prove that AI guarantees faster user growth. A person reviews factual claims, educational quality, copyright, and sensitive decisions.",
  },
] as const

export const growthMachines = [
  {
    id: "quantrion" as const,
    name: "Quantrion",
    wedge: "One well-defined exam cohort",
    steps: [
      "Publish high-value exam resources and demonstrations.",
      "Offer a useful diagnostic or personalized study plan.",
      "Convert users into registered learners.",
      "Encourage a second meaningful study session.",
      "Develop educator partnerships and referrals after proving value.",
    ],
    advantage: "Recurring student needs can create repeat usage if the product genuinely improves the learning workflow.",
  },
  {
    id: "vdoc" as const,
    name: "Vdoc",
    wedge: "One memorable storytelling format",
    steps: [
      "Develop a recognizable original series.",
      "Publish clips optimized for discovery.",
      "Invite viewers to continue or influence a story.",
      "Make creations easy to share.",
      "Turn the most engaging formats into recurring series.",
    ],
    advantage: "Entertainment can distribute through the content itself, if quality and generation cost stay sustainable.",
  },
  {
    id: "exorax" as const,
    name: "ExoraX",
    wedge: "One category with clear purchase intent",
    steps: [
      "Identify a category where shoppers struggle to compare options.",
      "Create useful comparison tools and guides.",
      "Acquire visitors through search, creators, and partners.",
      "Help shoppers save or share shortlists.",
      "Build merchant relationships and monetize where appropriate.",
    ],
    advantage: "A useful purchase decision can connect acquisition to measurable commercial value.",
  },
] as const

export const reverseMath = {
  total: "12,000,000",
  perMonth: "666,667",
  note: "Simple averages across 18 months. ExoraX is half the target. Early months are for validation. Acceleration comes only if distribution works.",
  splits: [
    { name: "ExoraX", month: "333,333" },
    { name: "Quantrion", month: "166,667" },
    { name: "Vdoc", month: "166,667" },
  ],
  scenarios: [
    { rate: "2%", visits: "600 million" },
    { rate: "5%", visits: "240 million" },
    { rate: "10%", visits: "120 million" },
  ],
} as const

export const experiments = [
  { n: "01", name: "Demo-first onboarding", test: "Show value before asking for signup", signal: "Higher activation per visitor" },
  { n: "02", name: "Landing-page variants", test: "Different audience-specific messages", signal: "More activated registrations" },
  { n: "03", name: "Creator collaborations", test: "Relevant niche creators versus broad reach", signal: "Lower cost per retained user" },
  { n: "04", name: "YouTube content clusters", test: "A series around one specific user problem", signal: "Repeat qualified traffic" },
  { n: "05", name: "Referral invitation", test: "Invite after the user receives value", signal: "Activated invitees" },
  { n: "06", name: "Shareable output", test: "A useful result the user can choose to share", signal: "Additional activated users" },
  { n: "07", name: "Search landing pages", test: "Specific high-intent pages versus generic pages", signal: "Retained organic registrations" },
  { n: "08", name: "Partner distribution", test: "Educators, creators, or merchants", signal: "Partner-sourced retention" },
  { n: "09", name: "First-session improvements", test: "A shorter path to the core value event", signal: "Higher activation" },
  { n: "10", name: "Retention interventions", test: "A relevant reminder versus no reminder", signal: "Incremental return visits" },
  { n: "11", name: "Pricing experiments", test: "Free access and paid feature boundaries", signal: "Sustainable conversion and retention" },
  { n: "12", name: "AI cost optimization", test: "Model routing, caching, and generation limits", signal: "Lower cost per valuable activity" },
] as const

export const operatingCadence = [
  {
    when: "Every week",
    title: "Growth review",
    text: "Registrations, activation, retention, channel performance, user feedback, and AI cost per meaningful activity.",
  },
  {
    when: "Every week",
    title: "Prioritized experiments",
    text: "A manageable number of instrumented tests. Volume rises only when the team can read the results.",
  },
  {
    when: "Every month",
    title: "Reallocate",
    text: "Move budget and engineering time toward retained users. Vanity metrics do not earn the next rupee.",
  },
  {
    when: "Always",
    title: "Protect trust",
    text: "Platform rules, privacy, consent, copyright, and truthful claims. No fake accounts, spam, purchased engagement, or misleading AI claims.",
  },
] as const

export const testSplit = [
  { share: "70%", name: "Quantrion", text: "One audience, one core promise, a few educational formats." },
  { share: "20%", name: "Vdoc", text: "A small set of original short-form stories. Measure qualified interest." },
  { share: "10%", name: "ExoraX", text: "One category-specific message and one landing page." },
] as const

export const distributionChannels = [
  {
    name: "LinkedIn",
    priority: "Priority 1",
    role: "Company progress, architecture, research, genuine milestones, hiring, and partnerships. Founder profile beside the company page.",
    identity: "Quantavex",
  },
  {
    name: "YouTube",
    priority: "Priority 1",
    role: "Company channel first. Product channels when each has a plan it can sustain: tutorials, original stories, decision guides.",
    identity: "Quantavex · Quantrion · Vdoc · ExoraX",
  },
  {
    name: "Instagram",
    priority: "Priority 1 for Vdoc",
    role: "Cinematic Vdoc clips, Quantrion demonstrations, visual ExoraX comparisons. Separate accounts only when original content can keep them alive.",
    identity: "Product accounts when the work can sustain them",
  },
  {
    name: "X",
    priority: "Build in public",
    role: "Research notes, short demos, product decisions, and engineering lessons. The founder's voice carries original perspective.",
    identity: "Founder and company",
  },
  {
    name: "Facebook",
    priority: "Communities",
    role: "Student groups and educational communities, inside their rules. Official pages. No mass-posted links.",
    identity: "Official pages only",
  },
  {
    name: "GitHub",
    priority: "Technical credibility",
    role: "Public documentation, example integrations, or utilities that are safe to publish. Private product code stays private.",
    identity: "Public docs, not the product core",
  },
  {
    name: "Discord",
    priority: "When there is a reason to return",
    role: "Testing, story creation, learning challenges, or early access. Open it when people have something to come back for.",
    identity: "A community, not an empty server",
  },
] as const

export const launchPlan = [
  { window: "Days 1–5", text: "Finalize names, handles, bios, profile graphics, and the official website link." },
  { window: "Days 6–10", text: "Open priority accounts, secure ownership and recovery, and turn analytics on." },
  { window: "Days 11–15", text: "Prepare the first demonstrations, educational pieces, and founder posts." },
  { window: "Days 16–20", text: "Publish the coordinated profiles and the first product-specific work." },
  { window: "Days 21–25", text: "Test one collaboration, one community, and the landing-page step." },
  { window: "Days 26–30", text: "Keep time on the channels that produce qualified, returning users." },
] as const

export const researchSources = [
  {
    title: "Growth hacking: A scientific approach for data-driven decision making",
    detail: "Journal of Business Research, 2025. Cristofaro, Giardino, and Barboni.",
    href: "https://doi.org/10.1016/j.jbusres.2024.115030",
  },
  {
    title: "Structuring experimentation: Implementing Growth Hacking in new ventures",
    detail: "Journal of Business Research, 2025.",
    href: "https://www.sciencedirect.com/science/article/pii/S0148296324005885",
  },
  {
    title: "Generative AI for growth hacking: How startups use generative AI in their growth strategies",
    detail: "Journal of Business Research, 2025. Twenty startup and scale-up cases.",
    href: "https://www.sciencedirect.com/science/article/pii/S0148296325001432",
  },
  {
    title: "A Scientific Method for Startups",
    detail: "Felin, Gambardella, Novelli, and Zenger, 2024.",
    href: "https://doi.org/10.1177/01492063231226136",
  },
] as const

export const months = ["M1", "M2", "M3", "M4", "M5", "M6"] as const

export const quantavexClock = [
  { order: "Stand the stack", work: "Identity, data, compute" },
  { order: "Open the APIs", work: "Inside the company stack" },
  { order: "Turn cost on", work: "Inference, storage, 3PL" },
  { order: "Start the grab", work: "Instant result" },
  { order: "Spread the result", work: "Referral and groups" },
  { order: "Hold the gate", work: "Users who return" },
] as const

export const platformClock: { id: ProductId; cells: string[] }[] = [
  {
    id: "quantrion",
    cells: ["DNA on the stack", "Pathway on the API", "Student OS", "Score card travels", "Batch follows", "Production"],
  },
  {
    id: "vdoc",
    cells: ["Story on the stack", "Director on the API", "Experience OS", "Scene travels", "Room follows", "Production"],
  },
  {
    id: "exorax",
    cells: ["Loop on the stack", "Intent on the API", "Commerce OS", "Inspect travels", "Buyers follow", "Production"],
  },
]

export const program = [
  {
    n: "01",
    title: "Build all three at once",
    text: "Quantrion, Vdoc, and ExoraX are built as platforms together. No waiting for one product to finish before the others start.",
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
    text: "A platform is the present release. Month 6 is the first gate, when those platforms can take real users.",
  },
  {
    n: "06",
    title: "Grab at product speed",
    text: "Nine moves taken from how ChatGPT, Dropbox, Slack, and Zoom filled: an instant result, a result that travels, one open day, a two-sided referral, a group pull, an embed, a public library, one repeatable sentence, and a second session the next day.",
  },
  {
    n: "07",
    title: "Then the 18-month horizon",
    text: "The six-month clock is the first window. The company target remains 12 million registrations by April 2028 — 6 million on ExoraX, 3 million on Quantrion, 3 million on Vdoc. A stretch goal, not a live cohort.",
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
    text: "ChatGPT's public opening reached about a million people in five days because anyone could get a result immediately. Quantrion shows a readiness read, Vdoc a scene, ExoraX an inspect — before a long account wall.",
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
    text: "ChatGPT's API put the product inside other companies. Coaching institutes, studios, and merchants embed one Quantavex surface. Their audience arrives already in context.",
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
    text: "ChatGPT's press line was the demo. One sentence a teacher, journalist, or founder can repeat. That sentence moves faster than a campaign.",
  },
  {
    n: "09",
    name: "Second session, next day",
    move: "Product-led growth",
    text: "The research record on product-led growth: the second session is the engine. First successful use, then a return within a day, then scale. Traffic without a second day does not become retained users.",
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
