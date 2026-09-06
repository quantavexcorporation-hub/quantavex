"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, TrendingUp, GraduationCap, Film, ShoppingBag } from "lucide-react"

const markets = [
  {
    name: "EdTech",
    value: "$400B",
    numericValue: 400,
    growth: "+18%",
    icon: GraduationCap,
    color: "cyan",
    description: "Global education technology market",
  },
  {
    name: "Entertainment",
    value: "$2.8T",
    numericValue: 2800,
    growth: "+12%",
    icon: Film,
    color: "purple",
    description: "Media & entertainment industry",
  },
  {
    name: "E-commerce",
    value: "$6T",
    numericValue: 6000,
    growth: "+24%",
    icon: ShoppingBag,
    color: "blue",
    description: "Global digital commerce",
  },
]

const totalMarket = 8000 // $8T total

export function MarketScale() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.09_0.02_260)] to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Globe className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-mono text-muted-foreground">MARKET OPPORTUNITY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-glow-cyan text-neon-cyan">$8 Trillion</span>{" "}
            Total Addressable Market
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three massive industries converging on AI-driven transformation.
            Quantavex is positioned at the intersection.
          </p>
        </motion.div>

        {/* Market Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Globe/Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            {/* Circular Market Visualization */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Background circles */}
              {[150, 120, 90, 60].map((r, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="oklch(0.25 0.03 260)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Market segments */}
              {markets.map((market, index) => {
                const percentage = market.numericValue / totalMarket
                const angle = percentage * 360
                const startAngle = markets.slice(0, index).reduce((acc, m) => acc + (m.numericValue / totalMarket) * 360, -90)
                const endAngle = startAngle + angle
                
                const startRad = (startAngle * Math.PI) / 180
                const endRad = (endAngle * Math.PI) / 180
                const radius = 140
                
                const x1 = 200 + radius * Math.cos(startRad)
                const y1 = 200 + radius * Math.sin(startRad)
                const x2 = 200 + radius * Math.cos(endRad)
                const y2 = 200 + radius * Math.sin(endRad)
                
                const largeArc = angle > 180 ? 1 : 0
                
                const color = market.color === "cyan" ? "oklch(0.75 0.18 195)" :
                              market.color === "purple" ? "oklch(0.65 0.2 300)" :
                              "oklch(0.7 0.2 250)"

                return (
                  <g key={market.name}>
                    <motion.path
                      d={`M 200 200 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={color}
                      fillOpacity="0.2"
                      stroke={color}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                      style={{ transformOrigin: "200px 200px" }}
                    />
                    
                    {/* Label line */}
                    {(() => {
                      const midAngle = (startAngle + endAngle) / 2
                      const midRad = (midAngle * Math.PI) / 180
                      const labelRadius = 170
                      const lx = 200 + labelRadius * Math.cos(midRad)
                      const ly = 200 + labelRadius * Math.sin(midRad)
                      
                      return (
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        >
                          <circle cx={lx} cy={ly} r="4" fill={color} />
                          <text
                            x={lx}
                            y={ly - 10}
                            textAnchor="middle"
                            className="text-xs font-mono fill-foreground"
                          >
                            {market.name}
                          </text>
                          <text
                            x={lx}
                            y={ly + 20}
                            textAnchor="middle"
                            className="text-sm font-bold"
                            fill={color}
                          >
                            {market.value}
                          </text>
                        </motion.g>
                      )
                    })()}
                  </g>
                )
              })}

              {/* Center */}
              <motion.g
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <circle cx="200" cy="200" r="50" fill="oklch(0.1 0.02 260)" stroke="oklch(0.3 0.05 260)" strokeWidth="2" />
                <text x="200" y="195" textAnchor="middle" className="text-lg font-bold fill-foreground">$8T+</text>
                <text x="200" y="215" textAnchor="middle" className="text-xs font-mono fill-muted-foreground">TOTAL</text>
              </motion.g>
            </svg>

            {/* Animated particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-neon-cyan"
                style={{
                  top: `${50 + (Math.random() - 0.5) * 80}%`,
                  left: `${50 + (Math.random() - 0.5) * 80}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          {/* Market Details */}
          <div className="space-y-6">
            {markets.map((market, index) => {
              const colors = {
                cyan: { bg: "bg-neon-cyan/10", text: "text-neon-cyan", bar: "bg-neon-cyan" },
                purple: { bg: "bg-neon-purple/10", text: "text-neon-purple", bar: "bg-neon-purple" },
                blue: { bg: "bg-neon-blue/10", text: "text-neon-blue", bar: "bg-neon-blue" },
              }[market.color]

              return (
                <motion.div
                  key={market.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="glass-strong rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors?.bg}`}>
                        <market.icon className={`w-6 h-6 ${colors?.text}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{market.name}</h3>
                        <p className="text-sm text-muted-foreground">{market.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${colors?.text}`}>{market.value}</div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-3 h-3" />
                        {market.growth} YoY
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${colors?.bar} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(market.numericValue / totalMarket) * 100}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs font-mono text-muted-foreground">
                    <span>Market Share</span>
                    <span>{((market.numericValue / totalMarket) * 100).toFixed(0)}% of TAM</span>
                  </div>
                </motion.div>
              )
            })}

            {/* Total Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="glass rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20">
                  <Globe className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-mono text-muted-foreground">Combined TAM</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                $8+ Trillion
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
