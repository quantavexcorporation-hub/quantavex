"use client"

import { motion } from "framer-motion"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"

const economies: {
  id: ProductId
  platform: string
  title: string
  market: string
  horizon: string
  secondary: { label: string; value: string }[]
  definition: string
  layers: string[]
  thesis: string
}[] = [
  {
    id: "quantrion",
    platform: "Quantrion",
    title: "Space economy",
    market: "$1.8T",
    horizon: "Projected scale by 2035",
    secondary: [
      { label: "Scope", value: "Orbit → Earth services" },
      { label: "Growth vector", value: "Logistics · climate · finance" },
      { label: "Intelligence need", value: "High-stakes learning" },
    ],
    definition:
      "Value created by exploring, building, and using space — satellites, launch, ground systems, and Earth-side services: communications, navigation, and observation. Reach extends into logistics, climate, and finance as space systems become infrastructure for the terrestrial economy.",
    layers: [
      "Launch and orbital infrastructure",
      "Satellite communications and navigation",
      "Earth observation and sensing",
      "Ground systems and data services",
      "Downstream applications in industry and finance",
    ],
    thesis:
      "Quantrion is aimed at the intelligence layer — people and systems that can learn, decide, and operate at the difficulty this economy demands.",
  },
  {
    id: "vdoc",
    platform: "Vdoc",
    title: "Virtual economy",
    market: "$100B+",
    horizon: "Virtual goods market today",
    secondary: [
      { label: "Unit of value", value: "Digital goods & ownership" },
      { label: "Market logic", value: "Supply · demand · scarcity" },
      { label: "Bridge", value: "In-world → real money paths" },
    ],
    definition:
      "A market that lives inside a world. People produce, price, trade, and own digital goods — identities, land, assets, and creator work. Value follows supply and demand, with paths into real money. It is not a catalog of skins bolted onto entertainment; it is an economy with property, labor, and exchange inside persistent experience.",
    layers: [
      "Identity, characters, and reputation",
      "Land, venues, and world assets",
      "Creator production and licensing",
      "In-world markets and limited drops",
      "Ownership as narrative, not a sidebar wallet",
    ],
    thesis:
      "Vdoc is aimed at worlds where ownership is part of the experience — audience, creator, and economy in one visual language.",
  },
  {
    id: "exorax",
    platform: "ExoraX",
    title: "Trade economy",
    market: "$35T",
    horizon: "Global trade & capital markets",
    secondary: [
      { label: "Physical trade", value: "Goods · services · borders" },
      { label: "Digital trading", value: "Stocks · crypto · forex · commodities" },
      { label: "Decision risk", value: "Product · price · portfolio" },
    ],
    definition:
      "A trade economy is how goods, services, and capital move — across borders, platforms, and books. On the trading side it is continuous market activity: equities, crypto, commodities, forex, and portfolios on networks. Physical commerce and digital trading share the same problem — a correct decision before value commits.",
    layers: [
      "Cross-border goods and services trade",
      "Equities, indices, and portfolio desks",
      "Crypto, commodities, and forex corridors",
      "Merchant and brand commerce systems",
      "Decision intelligence before capital or checkout moves",
    ],
    thesis:
      "ExoraX is aimed at trading-grade clarity — product, price, and risk — so value moves with intent, not fatigue.",
  },
]

export function EconomyHorizons() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-xl border border-cyan-500/10 bg-[#0c0c14]/90 p-4 sm:p-5 md:p-6"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0 max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">
            Future economies
          </p>
          <h3 className="mt-1 text-base font-semibold tracking-tight text-white sm:text-lg">
            Space, virtual, and trade
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
            Three economic layers still forming — beyond Earth, inside inhabited worlds, and across global
            trade with a strong trading-markets lens. Each card states market scale, structure, and which
            Quantavex platform is aimed at that layer.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xl font-bold text-white sm:text-2xl">$36T+</p>
          <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500">Combined horizon scale</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {economies.map((economy, index) => {
          const accent = productAccents[economy.id]
          return (
            <motion.article
              key={economy.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className={`relative flex flex-col overflow-hidden rounded-xl border bg-black/25 p-4 sm:p-5 ${accent.border}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent`} />
              <div className="relative flex min-h-0 flex-1 flex-col">
                <div className="flex items-center gap-2.5">
                  <ProductLogo product={economy.id} size={32} />
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${accent.text}`}>
                      {economy.platform}
                    </p>
                    <h4 className="text-base font-semibold text-white">{economy.title}</h4>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-white/5 bg-black/40 px-3 py-3">
                  <p className={`font-mono text-3xl font-bold tracking-tight ${accent.text}`}>{economy.market}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gray-500">{economy.horizon}</p>
                </div>

                <dl className="mt-3 grid grid-cols-1 gap-2">
                  {economy.secondary.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0"
                    >
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-gray-500">{item.label}</dt>
                      <dd className={`text-right text-[11px] font-medium ${accent.text}`}>{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-4 text-xs leading-relaxed text-gray-300">{economy.definition}</p>

                <div className="mt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Structure
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {economy.layers.map((layer) => (
                      <li key={layer} className="flex gap-2 text-[11px] leading-snug text-gray-400">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.side}`} />
                        <span>{layer}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={`mt-4 border-t border-white/5 pt-3 text-xs leading-relaxed ${accent.text}`}>
                  {economy.thesis}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}
