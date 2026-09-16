"use client"

import { ArrowUpRight, BookOpen, Cpu, Layers } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"
import { QuantavexLogo } from "@/components/brand/quantavex-logo"
import { ProductLogo } from "@/components/brand/product-logo"
import { productList } from "@/lib/products"
import { ProductWebsiteLink } from "@/components/brand/product-site"

const features = [
  {
    icon: BookOpen,
    title: "From monograph to machine",
    description:
      "Each platform is written first as original research. The paper specifies the architecture. The software machine is built from that specification.",
  },
  {
    icon: Cpu,
    title: "AI as the engine",
    description:
      "Inside that machine, AI is the engine across Quantrion, Vdoc, and ExoraX. Data is required for correct information — accurate, complete, and current.",
  },
  {
    icon: Layers,
    title: "One company, three industries",
    description:
      "Quantavex is the venture. The products are competitive learning, interactive entertainment, and decision commerce — three industries, one operating system.",
  },
]

export function VenturesSection() {
  return (
    <section id="ventures" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Ventures
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Quantavex</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            The company operating system behind Quantrion, Vdoc, and ExoraX.
          </p>
        </Reveal>

        {/* Main feature card */}
        <Reveal
          className="mb-6 overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm sm:mb-8 sm:rounded-2xl"
          delayMs={100}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 sm:mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-medium text-primary sm:text-xs">Founded by Udit Gour</span>
              </div>
              <h3 className="font-mono text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                Company operating system.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Quantavex is a founder-led company. Three product
                architectures are specified. Three original monographs are
                public. Live platforms appear here as each site is uploaded.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">1</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Venture</span>
                </span>
                <div className="h-8 w-px bg-border/50 sm:h-10" />
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">3</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Platforms</span>
                </span>
                <div className="h-8 w-px bg-border/50 sm:h-10" />
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">3</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Monographs</span>
                </span>
              </div>
              <a
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:mt-8"
              >
                Visit Quantavex
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex items-center justify-center bg-black p-8 sm:p-12">
              <QuantavexLogo size={224} />
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-6 grid gap-3 sm:mb-8 sm:grid-cols-3 sm:gap-4" delayMs={140}>
          {productList.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
            >
              <a href={`/${product.id}`} className="block">
                <div className="mb-3 flex items-center gap-3">
                  <ProductLogo product={product.id} size={36} />
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-foreground">{product.name}</h4>
                    <p className="text-[10px] tracking-wider text-primary uppercase">{product.industry}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{product.tagline}</p>
                <p className="mt-2 text-[11px] italic text-muted-foreground/80">{product.manifesto}</p>
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href={`/${product.id}`} className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Open dossier
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <ProductWebsiteLink productId={product.id} variant="ghost" />
              </div>
            </div>
          ))}
        </Reveal>

        {/* Feature grid */}
        <Reveal className="grid gap-3 sm:grid-cols-3 sm:gap-4" delayMs={180}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/50 sm:p-6"
            >
              <feature.icon className="mb-3 h-5 w-5 text-primary sm:mb-4" />
              <h4 className="mb-1.5 font-mono text-sm font-semibold text-foreground sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
