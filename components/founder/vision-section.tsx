"use client"

import { Reveal } from "@/components/founder/reveal"

const visionPoints = [
  {
    number: "01",
    title: "Democratize AI Access",
    description:
      "Making advanced AI tools and infrastructure accessible to businesses of every size — not just Big Tech. The future is decentralized intelligence.",
  },
  {
    number: "02",
    title: "Human-Centric Intelligence",
    description:
      "Building AI systems that augment human capability rather than replace it. Technology should amplify creativity, judgment, and empathy.",
  },
  {
    number: "03",
    title: "Ethical by Design",
    description:
      "Embedding fairness, transparency, and accountability into every layer of AI development. Responsible innovation is non-negotiable.",
  },
  {
    number: "04",
    title: "Convergence of AI & Business",
    description:
      "Creating a future where AI isn't a separate department — it's the operating system of every enterprise, seamlessly integrated into decision-making.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-3xl sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Vision
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Shaping the Future of Artificial Intelligence</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            {"\"The next decade of AI will be defined not by what machines can do, but by how wisely we choose to deploy them.\""}
          </p>
          <span className="mt-2 block text-xs text-primary sm:text-sm">— Udit Gour</span>
        </Reveal>

        <Reveal className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2" delayMs={120}>
          {visionPoints.map((point) => (
            <div
              key={point.number}
              className="group relative flex gap-4 rounded-xl border border-border/50 bg-card/20 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/40 sm:gap-6 sm:p-8"
            >
              <span className="font-mono text-2xl font-bold text-primary/20 transition-colors duration-500 group-hover:text-primary/40 sm:text-4xl">
                {point.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1.5 font-mono text-base font-semibold text-foreground sm:mb-2 sm:text-lg">
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
