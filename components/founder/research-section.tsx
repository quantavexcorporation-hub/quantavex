"use client"

import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"

const researchAreas = [
  {
    tag: "NLP",
    title: "Natural Language Processing",
    description:
      "Advancing the frontiers of language understanding through novel transformer architectures and multi-modal reasoning systems.",
    technologies: ["Transformers", "LLMs", "Semantic Search", "RAG"],
  },
  {
    tag: "Computer Vision",
    title: "Visual Intelligence Systems",
    description:
      "Developing state-of-the-art computer vision models for real-time object recognition, scene understanding, and generative imaging.",
    technologies: ["CNNs", "Diffusion Models", "GANs", "3D Vision"],
  },
  {
    tag: "Predictive AI",
    title: "Predictive Analytics & Forecasting",
    description:
      "Building predictive models that power decision-making across finance, healthcare, and supply chain domains with unmatched accuracy.",
    technologies: ["Time Series", "Bayesian Models", "AutoML", "XAI"],
  },
  {
    tag: "AI Ethics",
    title: "Responsible AI & Governance",
    description:
      "Championing ethical AI development with frameworks for bias detection, fairness auditing, and transparent model governance.",
    technologies: ["Fairness", "Interpretability", "Compliance", "Safety"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Research & Innovation
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Pushing Boundaries in AI</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            From foundational research to applied innovation, every initiative is driven
            by the pursuit of making AI more intelligent, accessible, and responsible.
          </p>
        </Reveal>

        <Reveal className="grid gap-4 sm:gap-6 md:grid-cols-2" delayMs={120}>
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/60 sm:p-8"
            >
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-medium text-primary sm:text-xs">
                  {area.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="mb-2 font-mono text-base font-semibold text-foreground sm:mb-3 sm:text-lg">
                {area.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
