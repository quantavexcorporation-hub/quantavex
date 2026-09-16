"use client"

import { Reveal } from "@/components/founder/reveal"

const visionPoints = [
  {
    number: "01",
    label: "Quantrion",
    title: "Space economy",
    description:
      "The space economy is value created by exploring, building, and using space — satellites, launch, ground systems, and Earth-side services: communications, navigation, and observation. Growth is reach into logistics, climate, and finance. By 2035 this is projected near $1.8 trillion. Quantrion is aimed at that intelligence.",
  },
  {
    number: "02",
    label: "Vdoc",
    title: "Virtual economy",
    description:
      "A virtual economy is a market that lives inside a world — people produce, price, trade, and own digital goods: identities, land, assets, and creator work. Value follows supply and demand, with paths into real money. Virtual goods already pass $100 billion. Vdoc is aimed at worlds where ownership is part of the experience.",
  },
  {
    number: "03",
    label: "ExoraX",
    title: "Trade economy",
    description:
      "A trade economy is how goods, services, and capital move — across borders, platforms, and books. Digital trade is commerce and trading on networks: stocks, crypto, commodities, forex, and portfolios. Global trade is about $35 trillion. ExoraX is aimed at a correct decision before value moves — product, price, and risk.",
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
            <span className="text-balance">The next layer of the world</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            The present market is not the destination. Value will be created
            beyond Earth, inside worlds people inhabit, and in how goods,
            services, and capital move on networks. That is the horizon
            Quantavex is aimed at — a company built for the economy that is
            still forming.
          </p>
        </Reveal>

        <Reveal className="grid gap-4 sm:gap-6 md:grid-cols-3" delayMs={120}>
          {visionPoints.map((point) => (
            <div
              key={point.number}
              className="group relative flex flex-col rounded-xl border border-border/50 bg-card/20 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/40 sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-2xl font-bold text-primary/20 transition-colors duration-500 group-hover:text-primary/40 sm:text-3xl">
                  {point.number}
                </span>
                <span className="text-[10px] font-medium tracking-widest text-primary uppercase sm:text-xs">
                  {point.label}
                </span>
              </div>
              <h3 className="mt-4 font-mono text-base font-semibold text-foreground sm:text-lg">
                {point.title}
              </h3>
              <p className="mt-2 min-h-[8.5rem] text-xs leading-relaxed text-muted-foreground sm:min-h-[7.5rem] sm:text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
