import { company } from "@/lib/company"
import { domainFields } from "@/lib/domain-markets"
import { getPriorityRegions } from "@/lib/priority-markets"
import { productArchitecture } from "@/lib/product-architecture"
import { productList } from "@/lib/products"
import { researchPapers } from "@/lib/research"
import { engines, phases, roadmap } from "@/lib/roadmap"

export interface SiteSearchHit {
  id: string
  title: string
  kind: string
  href: string
  detail: string
  text: string
}

function clip(value: string, max = 120) {
  const clean = value.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).trimEnd()}…`
}

function hit(entry: SiteSearchHit): SiteSearchHit {
  return { ...entry, detail: clip(entry.detail), text: entry.text.replace(/\s+/g, " ").trim() }
}

const portfolioJourney = [
  "My journey has been shaped by hands-on experiences across education, entertainment, and commerce.",
  "Preparing for competitive examinations gave me firsthand exposure to the challenges students face in learning, preparation, and navigating educational opportunities.",
  "Exploring content creation through YouTube channels introduced me to the creative possibilities of digital entertainment and storytelling.",
  "Running a kirana shop gave me practical insight into retail operations, customer needs, purchasing behaviour, and the everyday realities of commerce.",
  "These experiences helped me understand three distinct markets not just as an observer, but through my own efforts and challenges.",
  "Today, I am bringing these perspectives together through Quantavex Corporation, building three AI-driven ventures: Quantrion in education, Vdoc in entertainment, and ExoraX in intelligent commerce.",
].join(" ")

function buildSiteSearchIndex(): SiteSearchHit[] {
  const entries: SiteSearchHit[] = [
    hit({
      id: "overview",
      title: "Overview",
      kind: "Company",
      href: "/",
      detail: company.thesis,
      text: `${company.name} ${company.sector} ${company.thesis} ${company.proof} ${company.geography} parent company infrastructure`,
    }),
    hit({
      id: "founder",
      title: company.founder.name,
      kind: "Portfolio",
      href: "/portfolio",
      detail: `${company.founder.role} of ${company.name}. Profile, journey, research, and vision.`,
      text: `${company.founder.name} ${company.founder.role} founder ceo profile portfolio ${company.founder.email}`,
    }),
    hit({
      id: "journey",
      title: "My journey",
      kind: "Portfolio",
      href: "/portfolio#journey",
      detail: "Education, entertainment, and commerce — exams, YouTube, and a kirana shop.",
      text: portfolioJourney,
    }),
    hit({
      id: "about",
      title: "About the founder",
      kind: "Portfolio",
      href: "/portfolio#about",
      detail: "Udit Gour writes the architecture as a monograph, then builds the software machine.",
      text: "Udit Gour business researcher visionary leader monograph software machine AI engine data Quantrion competitive learning Vdoc entertainment ExoraX decision commerce founder-led",
    }),
    hit({
      id: "vision",
      title: "Vision",
      kind: "Portfolio",
      href: "/portfolio#vision",
      detail: "Space economy, virtual economy, and trade economy.",
      text: "space economy satellites virtual economy digital goods trade economy stocks crypto commodities forex Quantrion Vdoc ExoraX",
    }),
    hit({
      id: "contact",
      title: "Contact",
      kind: "Company",
      href: "/#contact",
      detail: `Write to ${company.companyEmail}. Replies go by email.`,
      text: `contact email write message ${company.companyEmail} ${company.founder.email}`,
    }),
    hit({
      id: "markets",
      title: "Priority markets",
      kind: "Markets",
      href: "/intelligence",
      detail: "India first, then thirty markets. Education, entertainment, and commerce.",
      text: `priority markets countries ${domainFields.map((field) => `${field.field} ${field.detail}`).join(" ")} ${company.geography}`,
    }),
    hit({
      id: "roadmap",
      title: "Roadmap",
      kind: "Roadmap",
      href: "/forecasting",
      detail: roadmap.usersNote,
      text: `${roadmap.clock} ${roadmap.promise} ${roadmap.users} ${roadmap.perPlatform} growth engineering experiments linkedin youtube whatsapp reddit hire ${company.team.seats.map((seat) => seat.field).join(" ")}`,
    }),
  ]

  for (const phase of phases) {
    entries.push(
      hit({
        id: `phase-${phase.n}`,
        title: phase.title,
        kind: "Roadmap",
        href: "/forecasting",
        detail: phase.gate,
        text: `${phase.window} months ${phase.title} ${phase.points.join(" ")} ${phase.gate}`,
      })
    )
  }

  for (const engine of engines) {
    entries.push(
      hit({
        id: `engine-${engine.id}`,
        title: `${engine.name} growth`,
        kind: "Roadmap",
        href: "/forecasting",
        detail: engine.text,
        text: `${engine.name} ${engine.target} registrations ${engine.text}`,
      })
    )
  }

  for (const milestone of company.milestones) {
    entries.push(
      hit({
        id: `milestone-${milestone.period}-${milestone.title}`,
        title: milestone.title,
        kind: "Roadmap",
        href: "/forecasting",
        detail: milestone.detail,
        text: `${milestone.period} ${milestone.product} ${milestone.title} ${milestone.detail}`,
      })
    )
  }

  for (const product of productList) {
    entries.push(
      hit({
        id: product.id,
        title: product.name,
        kind: "Platform",
        href: `/${product.id}`,
        detail: product.description,
        text: `${product.name} ${product.category} ${product.industry} ${product.tagline} ${product.manifesto} ${product.description} ${product.audience.map((item) => `${item.title} ${item.detail}`).join(" ")} ${product.loop.map((item) => `${item.step} ${item.detail}`).join(" ")}`,
      })
    )

    for (const group of product.groups) {
      for (const item of group.items) {
        entries.push(
          hit({
            id: `${product.id}-${item.name}`,
            title: item.name,
            kind: product.name,
            href: `/${product.id}`,
            detail: item.detail,
            text: `${product.name} ${group.title} ${item.name} ${item.detail}`,
          })
        )
      }
    }

    const paper = researchPapers[product.id]
    entries.push(
      hit({
        id: `${product.id}-research`,
        title: paper.title,
        kind: "Monograph",
        href: `/${product.id}#research`,
        detail: paper.subtitle,
        text: `${paper.title} ${paper.subtitle} ${paper.abstract} ${paper.gap} ${paper.contribution} ${paper.findings.map((item) => `${item.label} ${item.value} ${item.detail}`).join(" ")} ${paper.pillars.map((item) => `${item.title} ${item.detail}`).join(" ")} monograph research`,
      })
    )

    const architecture = productArchitecture[product.id]
    entries.push(
      hit({
        id: `${product.id}-architecture`,
        title: `${product.name} architecture`,
        kind: "Architecture",
        href: `/${product.id}/architecture`,
        detail: architecture.figure,
        text: `${architecture.figure} ${architecture.loop.name} ${architecture.loop.steps.join(" ")} ${architecture.layers.map((layer) => `${layer.name} ${layer.role} ${layer.modules.join(" ")}`).join(" ")} ${architecture.equations.map((equation) => `${equation.form} ${equation.meaning}`).join(" ")}`,
      })
    )
  }

  for (const region of Object.values(getPriorityRegions())) {
    entries.push(
      hit({
        id: `market-${region.name}`,
        title: region.name,
        kind: "Markets",
        href: "/intelligence",
        detail: `Priority market. Education, entertainment, and commerce field sizes.`,
        text: `${region.name} priority market education entertainment commerce`,
      })
    )
  }

  return entries
}

export const siteSearchIndex = buildSiteSearchIndex()

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

export function searchSite(query: string, limit = 8): SiteSearchHit[] {
  const normalized = normalize(query)
  if (!normalized) return []

  const tokens = normalized.split(/\s+/).filter(Boolean)

  const ranked = siteSearchIndex
    .map((item) => {
      const title = normalize(item.title)
      const kind = normalize(item.kind)
      const detail = normalize(item.detail)
      const body = normalize(item.text)
      const haystack = `${title} ${kind} ${detail} ${body}`

      if (!tokens.every((token) => haystack.includes(token))) return null

      let score = 0
      if (title === normalized) score += 140
      else if (title.startsWith(normalized)) score += 90
      else if (title.includes(normalized)) score += 60

      for (const token of tokens) {
        if (title.startsWith(token)) score += 28
        else if (title.includes(token)) score += 18
        if (kind.includes(token)) score += 8
        if (detail.includes(token)) score += 4
        if (body.includes(token)) score += 2
      }

      if (item.kind === "Platform" || item.kind === "Monograph" || item.kind === "Company") score += 4

      return { item, score }
    })
    .filter((entry): entry is { item: SiteSearchHit; score: number } => entry !== null)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))

  return ranked.slice(0, limit).map((entry) => entry.item)
}
