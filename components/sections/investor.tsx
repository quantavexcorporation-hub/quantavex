"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, DollarSign, Target, Users, Code, Megaphone, Building, ArrowRight } from "lucide-react"
import { FOUNDER_PORTFOLIO_PATH } from "@/lib/site"
import { company, investorMailto } from "@/lib/company"
import { Button } from "@/components/ui/button"

const fundColors = {
  0: "cyan",
  1: "purple",
  2: "blue",
  3: "cyan",
  4: "purple",
  5: "blue",
  6: "cyan",
} as const

const fundAllocation = company.funds.map((item, index) => ({
  label: item.label,
  percentage: item.percentage,
  icon: [Code, Users, Building, Megaphone, Target, DollarSign, TrendingUp][index] ?? Code,
  color: fundColors[index as keyof typeof fundColors] ?? "cyan",
}))

const metrics = [
  { label: "Target Raise", value: company.raise },
  { label: "Valuation", value: company.valuation },
  { label: "Stage", value: company.round },
]

export function Investor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleInvestorAction = (kind: "deck" | "call") => {
    window.location.href = investorMailto(kind === "deck" ? "deck" : "conversation")
  }

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[oklch(0.08_0.02_260)]" />
      
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(oklch(0.75 0.18 195) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-mono text-muted-foreground">INVESTOR RELATIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Partner With{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              a company operating system
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Quantavex is raising a {company.round} round to take three research-backed
            platforms from architecture into private alpha.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="glass-strong rounded-2xl p-6 text-center neon-glow-cyan"
            >
              <div className="text-sm font-mono text-muted-foreground mb-2 uppercase">
                {metric.label}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan">
                {metric.value}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-cyan/10">
                <DollarSign className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-semibold">Use of Funds</h3>
            </div>

            {/* Pie Chart Visualization */}
            <div className="flex items-center gap-8 mb-6">
              <div className="relative w-40 h-40 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {(() => {
                    let cumulativePercentage = 0
                    return fundAllocation.map((item, index) => {
                      const strokeDasharray = `${item.percentage} ${100 - item.percentage}`
                      const strokeDashoffset = -cumulativePercentage
                      cumulativePercentage += item.percentage
                      
                      const color = item.color === "cyan" ? "oklch(0.75 0.18 195)" :
                                    item.color === "purple" ? "oklch(0.65 0.2 300)" :
                                    "oklch(0.7 0.2 250)"
                      
                      return (
                        <motion.circle
                          key={item.label}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={color}
                          strokeWidth="20"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          pathLength="100"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 100 } : {}}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        />
                      )
                    })
                  })()}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-mono text-muted-foreground">TOTAL</div>
                    <div className="text-lg font-bold text-neon-cyan">100%</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3 flex-1">
                {fundAllocation.map((item, index) => {
                  const colors = {
                    cyan: { bg: "bg-neon-cyan", text: "text-neon-cyan" },
                    purple: { bg: "bg-neon-purple", text: "text-neon-purple" },
                    blue: { bg: "bg-neon-blue", text: "text-neon-blue" },
                  }[item.color]

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-3 h-3 rounded-full ${colors?.bg}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{item.label}</span>
                          <span className={`font-mono font-semibold ${colors?.text}`}>
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-purple/10">
                <Target className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold">Investment Highlights</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: "Position", desc: "Unified AI infrastructure across EdTech, entertainment, and commerce" },
                { title: "Round", desc: `${company.round}: ${company.raise} (${company.raiseInr}) for ${company.equity} at ${company.valuation} pre-money` },
                { title: "Proof of work", desc: "Three original research monographs and three product architectures" },
                {
                  title: "Team",
                  desc: "Led by Udit Gour — Founder & CEO. Headquarters: India.",
                  href: FOUNDER_PORTFOLIO_PATH,
                  linkLabel: "View founder portfolio",
                },
                { title: "TAM", desc: `${company.tam} across EdTech ($400B+), entertainment ($2.8T+), and e-commerce ($6T+)` },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-1 h-full bg-gradient-to-b from-neon-purple to-neon-cyan rounded-full" />
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-neon-cyan hover:underline"
                      >
                        {item.linkLabel}
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-strong rounded-2xl p-8 inline-block">
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Interested in partnering with Quantavex? Let&apos;s discuss how we&apos;re 
              reshaping intelligence infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-purple text-background font-semibold px-8 neon-glow-cyan hover:scale-105 transition-transform"
                onClick={() => void handleInvestorAction("deck")}
              >
                Request Deck
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-border/50 bg-glass backdrop-blur-sm"
                onClick={() => void handleInvestorAction("call")}
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
