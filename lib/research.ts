import { ProductId } from "@/components/brand/product-logo"

export interface ResearchPaper {
  id: ProductId
  journal: string
  date: string
  pages: number
  caseStudy: string
  title: string
  subtitle: string
  author: string
  organization: string
  citation: string
  pdf: string
  abstract: string
  gap: string
  contribution: string
  findings: { label: string; value: string; detail: string }[]
  comparison: { factor: string; traditional: string; proposed: string }[]
  pillars: { title: string; detail: string }[]
  architecture: { layer: string; role: string }[]
  model?: { name: string; formula: string; meaning: string }
  close: string
}

export const researchPapers: Record<ProductId, ResearchPaper> = {
  quantrion: {
    id: "quantrion",
    journal: "Foundational research monograph",
    date: "March 2026",
    pages: 99,
    caseStudy: "Q1 — AI Exam Intelligence Platform",
    title: "AI-Driven Exam Intelligence Systems: A New Approach to Personalized Competitive Learning",
    subtitle: "From content delivery to examination intelligence infrastructure.",
    author: "Udit Gour",
    organization: "Quantrion · Quantavex",
    citation:
      "Gour, U. (2026). AI-Driven Exam Intelligence Systems: A New Approach to Personalized Competitive Learning. Quantrion / Quantavex. Case study: Q1.",
    pdf: "/research/quantrion.pdf",
    abstract:
      "Traditional exam preparation is content-heavy, non-personalized, and inefficient. Students still face information overload, delayed doubt resolution, and weak performance analytics despite large investments of time and money. This monograph proposes Q1, Quantrion’s exam intelligence system, as a unified learning–practice–assessment framework. Adaptive paths, real-time analysis, instant concept clarification, and a Knowledge DNA dashboard map each student’s learning behavior. The shift is from content delivery to intelligence infrastructure: personalization at global scale with near-zero marginal cost, positioning Q1 as a foundation for future assessment, certification, and talent evaluation.",
    gap: "There is no unified AI-driven platform that integrates personalized learning, adaptive testing, predictive analytics, and global benchmarking into a single ecosystem for competitive examinations. Learning, testing, and prediction still operate independently, with no real-time outcome forecasting across exams such as JEE, NEET, GRE, and GMAT.",
    contribution:
      "Quantrion is proposed as a comprehensive Examination Intelligence Engine: AI-powered pathways, adaptive testing, predictive performance analytics, and cross-exam standardization — a closed loop where assessment informs learning and learning informs assessment.",
    findings: [
      { label: "Q1 efficiency", value: "88%", detail: "Traditional 45 · Digital 60 · Hybrid 70 · Q1 88" },
      { label: "Adaptive lift", value: "+48–88%", detail: "Versus static content systems" },
      { label: "Time reduction", value: "up to 55%", detail: "AI adaptive learning research insight" },
      { label: "Test performance", value: "+54%", detail: "AI-powered environments vs traditional" },
      { label: "Concept clarity", value: "65%", detail: "Students reporting improved understanding with AI tutoring" },
      { label: "Latency target", value: "< 1.5s", detail: "Response time with 92%+ accuracy target" },
    ],
    comparison: [
      { factor: "Learning path", traditional: "Uniform for all students", proposed: "Personalized and adaptive" },
      { factor: "Feedback", traditional: "Delayed", proposed: "Real-time" },
      { factor: "Performance analysis", traditional: "Basic scores", proposed: "Deep analytics and insights" },
      { factor: "Strategy", traditional: "Minimal guidance", proposed: "AI-driven recommendations" },
      { factor: "Exam readiness", traditional: "Uncertain", proposed: "Predictive modeling" },
      { factor: "Learning cycle", traditional: "Learn → Practice → Test (static)", proposed: "Learn → Practice → Analyze → Adapt → Improve → Simulate" },
    ],
    pillars: [
      { title: "Knowledge DNA", detail: "Dynamic student profile: concept mastery, accuracy, speed, retention, and exam temperament — an academic identity, not a progress bar." },
      { title: "Adaptive engine", detail: "Sequence, difficulty, revision intervals, and learning speed adjust from live performance. High scores raise difficulty; weakness triggers foundation reinforcement." },
      { title: "Predictive intelligence", detail: "Pre-exam forecasting of readiness and rank, shifting evaluation from retrospective scoring to proactive optimization." },
      { title: "Q1 · Q2 · Qrion", detail: "Q1 is the cognitive layer. Q2 cultivates frontier-tech expertise. Qrion deploys intelligence into industrial and space systems — cognition to computation to creation." },
    ],
    architecture: [
      { layer: "Experience", role: "Video learning, Smart Library, test engine, instant doubt resolution" },
      { layer: "AI intelligence", role: "Adaptive engine, Knowledge DNA, strategy engine, prediction models" },
      { layer: "Data processing", role: "Behavior, performance logs, learning patterns, question intelligence" },
      { layer: "Infrastructure", role: "Cloud storage, ML pipelines, model training, multi-region scale" },
    ],
    model: {
      name: "Student score prediction",
      formula: "Ŝ = αA + βT + γD + δR",
      meaning: "Accuracy, time efficiency, difficulty solved, and revision consistency. Learning curve: L(t) = L₀(1 − e^(−kt)).",
    },
    close:
      "Q1 is not an edtech platform. It is a self-improving intelligence system for human learning optimization at global scale — transforming competitive examinations into adaptive, predictive systems.",
  },
  vdoc: {
    id: "vdoc",
    journal: "Foundational research monograph",
    date: "March 2026",
    pages: 108,
    caseStudy: "V1 — Where AI Creates, and You Experience Beyond Reality",
    title: "Vdoc: A Futuristic AI-Driven Interactive Entertainment Ecosystem",
    subtitle: "From content delivery systems to living, self-evolving experience architecture.",
    author: "Udit Gour",
    organization: "Vdoc · Quantavex",
    citation:
      "Gour, U. (2026). Vdoc: A Futuristic AI-Driven Interactive Entertainment Ecosystem. Vdoc / Quantavex. Case study: V1.",
    pdf: "/research/vdoc.pdf",
    abstract:
      "The global entertainment industry, valued at over $2.8 trillion (2024), remains constrained by passive consumption and fragmented ecosystems. Vdoc reconceptualizes entertainment as a dynamic, intelligent, participatory system. AI is not a supplementary tool; it is the architectural intelligence layer — enabling real-time generation, adaptive storytelling, and hyper-personalized experience. Movies, games, comics, and community share one closed-loop: user behavior continuously informs content evolution. Economically, Vdoc introduces multi-layer revenue across advertising, adaptive subscription, creator tools, and future virtual economies.",
    gap: "The absence of a unified, AI-native, interactive entertainment architecture that integrates content generation, user interaction, and real-time adaptation in a single system. Streaming is linear, short-form is shallow, gaming is pre-scripted, and AI tools remain fragmented. High engagement is not high value — platforms extract attention rather than deepen experience.",
    contribution:
      "Vdoc embeds AI as the generative and decision engine. Users move from viewers to participants. Content becomes experience. The platform becomes an ecosystem. Story is modeled as a dynamic graph, not a linear sequence, with persistent memory-based characters and an ethical moderation layer that interrupts harmful content loops.",
    findings: [
      { label: "Entertainment TAM", value: "$2.8T+", detail: "2024 global industry; Vdoc overlap estimated $3–4T" },
      { label: "Generative AI", value: "$4.4T", detail: "McKinsey 2023 annual economic potential" },
      { label: "Gaming overlay", value: "$250B+", detail: "Interactive layer inside the entertainment stack" },
      { label: "Paradigm", value: "3 eras", detail: "Traditional media → digital platforms → AI interactive ecosystems" },
      { label: "User role", value: "Co-creator", detail: "Viewer → participant · consume → experience" },
      { label: "Story model", value: "G = (N, E)", detail: "Nodes are story states; edges are user decisions" },
    ],
    comparison: [
      { factor: "Content", traditional: "Static, stored, linear", proposed: "Generated, dynamic, branching" },
      { factor: "AI role", traditional: "Recommendation / editing tool", proposed: "Core generative engine" },
      { factor: "User", traditional: "Passive consumer", proposed: "Active co-creator" },
      { factor: "Personalization", traditional: "What you watch", proposed: "How the experience is generated" },
      { factor: "Ecosystem", traditional: "Streaming, shorts, games, social — siloed", proposed: "Unified living system" },
      { factor: "Objective", traditional: "Maximize watch time", proposed: "Maximize experience depth and value" },
    ],
    pillars: [
      { title: "V1 — AI content ecosystem", detail: "Foundation: AI series, games, movies, shorts, comics, community. Build scale, engagement, and the data flywheel." },
      { title: "V2 — Production layer", detail: "Hybrid high-quality production, super-creator ecosystem, premium interactive depth, and stronger retention." },
      { title: "Vydo — 3D intelligence world", detail: "Persistent virtual environment, AI agents with memory, unique worlds per user, and collective voting on story evolution." },
      { title: "Ethical core", detail: "Moderation, risk detection, and balanced personalization. Technology should enhance human experience — not exploit attention." },
    ],
    architecture: [
      { layer: "Experience", role: "UI, 3D world, sidebar, interaction, community" },
      { layer: "Control", role: "Choices, voting, game actions, feedback as system fuel" },
      { layer: "AI intelligence", role: "Recommendation, story engine, characters, emotion and context" },
      { layer: "Generation", role: "AI movies, games, comics, shorts — multi-modal synthesis" },
    ],
    model: {
      name: "Living entertainment loop",
      formula: "User → Interaction → AI → Adaptive content → Feedback → Evolution",
      meaning: "Closed-loop system. Data does not sit in analytics — it reshapes the user’s reality in real time.",
    },
    close:
      "The future of entertainment is not more content. It is a living, evolving experience in which users, AI, and narratives coexist in dynamically generated worlds.",
  },
  exorax: {
    id: "exorax",
    journal: "Foundational research monograph",
    date: "March 2026",
    pages: 58,
    caseStudy: "X1 — Where AI Meets Shopping",
    title: "ExoraX: A Futuristic AI-Powered Interactive Commerce Platform",
    subtitle: "From static listings to an intelligent, immersive decision ecosystem.",
    author: "Udit Gour",
    organization: "ExoraX · Quantavex",
    citation:
      "Gour, U. (2026). ExoraX: A Futuristic AI-Powered Interactive Commerce Platform. ExoraX / Quantavex. Case study: X1.",
    pdf: "/research/exorax.pdf",
    abstract:
      "Traditional marketplaces still sell through static images and text. Consumers cannot fully understand products, returns stay high, and brands lack tools for real storytelling. ExoraX integrates AI assistance, 3D visualization, AR previews, interactive product books (Flipbooks, Clipbooks, Catalogues), and live or recorded demonstrations through ExoraX Presenters. X1 opens on six categories: electronics, fashion, food, healthcare, home, and gaming. The platform is not only a marketplace — it is an experience, content, and commerce system that raises decision confidence before the buy.",
    gap: "Two structural failures define current commerce. The Decision Intelligence Gap: information overload, paradox of choice, and heuristic buying. The Experiential Gap: no spatial, sensory, or guided understanding of the product. Industry return rates of 20–35% in fashion and electronics are a supply-chain and sustainability failure, not a UX inconvenience. No major platform unifies AI decision support, AR/3D, and interactive product communication as core architecture.",
    contribution:
      "ExoraX is a six-layer intelligent commerce architecture: interface, AI intelligence, product data, 3D/AR experience, interactive content and presenters, then transaction and feedback. Intent is detected, products are ranked, the user inspects in 3D/AR, presenters explain, and the purchase is made with high confidence. Asset-light 3PL aggregation coordinates logistics without owning fleets.",
    findings: [
      { label: "Return rates today", value: "20–35%", detail: "Fashion and electronics — systemic pre-purchase failure" },
      { label: "Projected returns", value: "30% → 10%", detail: "After 3D, AR, and decision intelligence" },
      { label: "Conversion", value: "+20–35%", detail: "Confidence-driven purchase lift" },
      { label: "Engagement", value: "2×–3×", detail: "Time on product understanding, not scrolling" },
      { label: "X1 categories", value: "6", detail: "Electronics, fashion, food, health, home, gaming" },
      { label: "Architecture", value: "6 layers", detail: "From interface through feedback into the AI loop" },
    ],
    comparison: [
      { factor: "Product view", traditional: "2D images and text", proposed: "3D + AR real-world placement" },
      { factor: "Discovery", traditional: "Keyword search", proposed: "Intent detection and NLP" },
      { factor: "Explanation", traditional: "Static specs and reviews", proposed: "Presenters, flipbooks, catalogues" },
      { factor: "Decision", traditional: "Cognitive overload", proposed: "AI decision-support layer" },
      { factor: "Returns", traditional: "Expectation vs reality gap", proposed: "Experience before purchase" },
      { factor: "Brand tools", traditional: "Listing pages", proposed: "Storytelling OS for merchants" },
    ],
    pillars: [
      { title: "Decision intelligence", detail: "NLP, recommendation, behavior analysis, and explanation — transforming raw catalogs into actionable insight." },
      { title: "Experiential visualization", detail: "3D rendering and AR so users evaluate size, fit, and use before the item ships." },
      { title: "Interactive communication", detail: "Flipbooks, Clipbooks, catalogues, and ExoraX Presenters replace passive descriptions with structured demonstration." },
      { title: "X1 through Exor", detail: "Start with six categories, then luxury (X2), SaaS brand tools, 3PL coordination, and future private-label Exor." },
    ],
    architecture: [
      { layer: "Intelligence", role: "NLP, recommendation, behavior, decision support" },
      { layer: "Experience", role: "3D visualization, AR, real-world simulation" },
      { layer: "Content", role: "Flipbooks, clipbooks, catalogues, structured storytelling" },
      { layer: "Engagement", role: "ExoraX Presenters — live and recorded human-like demonstration" },
    ],
    model: {
      name: "Confidence purchase loop",
      formula: "Intent → Filter → 3D/AR → Presenter → Decision → Feedback",
      meaning: "Every completed journey trains the intelligence layer. Commerce becomes an experience-driven decision ecosystem.",
    },
    close:
      "ExoraX is a conceptual evolution of digital commerce: from transaction facilitator to intelligent experience provider — establishing the foundation for immersive, decision-grade shopping.",
  },
}

export function getResearch(id: ProductId) {
  return researchPapers[id]
}
