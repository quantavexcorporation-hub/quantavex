"use client"

import { ArrowUpRight, FileText } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"
import { StatsSection } from "@/components/founder/stats-section"
import { ProductLogo } from "@/components/brand/product-logo"
import { researchPapers } from "@/lib/research"
import { productList } from "@/lib/products"

const researchFields = [
  {
    title: "Human Psychology & Resources",
    description:
      "How people learn, decide, and stay engaged — and how resources are allocated around that.",
  },
  {
    title: "Finance & Economics",
    description: "Markets, capital, and how value moves.",
  },
  {
    title: "AI & Data Science",
    description: "Models, evidence, and correct information.",
  },
  {
    title: "Media & Content",
    description: "Narrative, format, and how attention is held.",
  },
  {
    title: "Sales & Digital Marketing",
    description: "Demand, distribution, and conversion.",
  },
  {
    title: "Product & Business Strategy",
    description: "What to build, why it matters, and how it becomes a company.",
  },
]

const paperVerticals = {
  quantrion: "Competitive learning",
  vdoc: "Interactive entertainment",
  exorax: "Decision commerce",
} as const

export function ResearchSection() {
  return (
    <section id="research" className="relative py-20 sm:py-28 lg:py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-10 sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Research & Innovation
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Three monographs. Six fields.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Original papers specify the architecture for Quantrion, Vdoc, and ExoraX
            before the software machine is built. The research is interdisciplinary.
            In that machine, AI is the engine. Data is required for correct information.
          </p>
        </Reveal>

        <Reveal className="mb-8 grid gap-3 sm:mb-10 sm:grid-cols-3 sm:gap-4" delayMs={80}>
          {productList.map((product) => {
            const paper = researchPapers[product.id]
            return (
              <div
                key={paper.id}
                className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-card/50"
              >
                <a href={`/${product.id}#research`} className="block">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <ProductLogo product={product.id} size={28} />
                      <span className="font-mono text-sm font-semibold text-foreground">{product.name}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary">
                      <FileText className="h-3 w-3" />
                      {paper.pages} pp
                    </span>
                  </div>
                  <p className="text-[10px] font-medium tracking-widest text-primary uppercase">
                    {paperVerticals[product.id]}
                  </p>
                  <h3 className="mt-2 font-mono text-xs font-semibold leading-snug text-foreground sm:text-sm">
                    {paper.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{paper.subtitle}</p>
                </a>
                <div className="mt-3">
                  <a href={`/${product.id}#research`} className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Open monograph
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </Reveal>

        <Reveal delayMs={120}>
          <p className="mb-4 text-[10px] font-medium tracking-widest text-primary uppercase sm:mb-5 sm:text-xs">
            Interdisciplinary knowledge
          </p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {researchFields.map((field) => (
              <div
                key={field.title}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/60 sm:p-6"
              >
                <h3 className="mb-1.5 font-mono text-sm font-semibold text-foreground sm:mb-2 sm:text-base">
                  {field.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {field.description}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <StatsSection embedded />
    </section>
  )
}
