"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Zap, Brain, Target } from "lucide-react"

const comparisons = [
  {
    category: "Experience",
    traditional: "Static",
    quantavex: "Adaptive",
    icon: Zap,
    description: "From fixed content to real-time personalization",
  },
  {
    category: "Interaction",
    traditional: "Passive",
    quantavex: "Interactive",
    icon: Brain,
    description: "From consumption to active engagement",
  },
  {
    category: "Decision",
    traditional: "Browsing",
    quantavex: "Intelligence",
    icon: Target,
    description: "From searching to guided decisions",
  },
]

export function Comparative() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % comparisons.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0.02_260)] via-background to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-mono text-muted-foreground">PARADIGM SHIFT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            From Traditional to{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Intelligent
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how Quantavex transforms every interaction from static experiences
            to adaptive, intelligent systems.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 p-6 border-b border-border/30">
            <div className="text-sm font-mono text-muted-foreground">CATEGORY</div>
            <div className="text-center">
              <span className="text-sm font-mono text-muted-foreground">TRADITIONAL</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-mono text-neon-cyan">QUANTAVEX AI</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`grid grid-cols-3 p-6 border-b border-border/20 transition-colors duration-500 ${
                  isActive ? "bg-neon-cyan/5" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Category */}
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    isActive ? "bg-neon-cyan/20" : "bg-secondary"
                  }`}>
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-neon-cyan" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <div className="font-semibold">{item.category}</div>
                    <div className="text-xs text-muted-foreground hidden md:block">
                      {item.description}
                    </div>
                  </div>
                </div>

                {/* Traditional */}
                <div className="flex items-center justify-center">
                  <motion.div
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground font-mono"
                    animate={isActive ? { opacity: 0.5, scale: 0.95 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.traditional}
                  </motion.div>
                </div>

                {/* Transition Arrow */}
                <div className="flex items-center justify-center relative">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute left-0 transform -translate-x-full px-2"
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 text-neon-cyan" />
                      </motion.div>
                    </motion.div>
                  )}
                  <motion.div
                    className={`px-4 py-2 rounded-lg font-mono font-semibold transition-all duration-300 ${
                      isActive 
                        ? "bg-neon-cyan text-background neon-glow-cyan" 
                        : "bg-neon-cyan/10 text-neon-cyan"
                    }`}
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.quantavex}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Visual Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          {/* Before */}
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 px-3 py-1 bg-secondary rounded-full text-xs font-mono text-muted-foreground">
              BEFORE
            </div>
            <div className="pt-8 space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-secondary/50 rounded" style={{ width: `${60 + Math.random() * 30}%` }} />
              ))}
              <div className="h-8 bg-secondary/30 rounded mt-4" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* After */}
          <div className="glass-strong rounded-2xl p-6 relative overflow-hidden neon-glow-cyan">
            <div className="absolute top-4 left-4 px-3 py-1 bg-neon-cyan/20 rounded-full text-xs font-mono text-neon-cyan">
              AFTER
            </div>
            <div className="pt-8 space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-4 rounded overflow-hidden"
                  style={{ width: `${60 + Math.random() * 30}%` }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-cyan/50 to-neon-purple/50"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  />
                </motion.div>
              ))}
              <motion.div
                className="h-8 rounded bg-gradient-to-r from-neon-cyan to-neon-purple mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
            </div>
            <motion.div
              className="absolute top-4 right-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-green-400">AI Active</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
