"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, ShoppingCart, Activity, BarChart3, Zap } from "lucide-react"
import { AnimatedCounter } from "@/components/visuals/animated-counter"
import { HeatMap } from "@/components/visuals/heat-map"
import { DecisionFlow } from "@/components/visuals/decision-flow"

const metrics = [
  {
    label: "Learning Efficiency",
    from: 48,
    to: 88,
    suffix: "%",
    prefix: "+",
    icon: TrendingUp,
    color: "cyan",
    description: "Adaptive curriculum optimization",
  },
  {
    label: "User Engagement",
    from: 2,
    to: 5,
    suffix: "x",
    icon: Users,
    color: "purple",
    description: "Interactive experience multiplier",
  },
  {
    label: "Conversion Rate",
    from: 20,
    to: 35,
    suffix: "%",
    prefix: "+",
    icon: ShoppingCart,
    color: "blue",
    description: "AI-driven purchase decisions",
  },
]

export function LiveDashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
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
            <Activity className="w-4 h-4 text-neon-cyan animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">LIVE METRICS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Real-Time Intelligence{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Live performance metrics across all AI systems. 
            Visualizing the impact of adaptive intelligence in real-time.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-strong rounded-2xl p-6 ${
                metric.color === "cyan" ? "neon-glow-cyan" :
                metric.color === "purple" ? "neon-glow-purple" :
                "neon-glow-blue"
              } hover:scale-[1.02] transition-transform`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  metric.color === "cyan" ? "bg-neon-cyan/10" :
                  metric.color === "purple" ? "bg-neon-purple/10" :
                  "bg-neon-blue/10"
                }`}>
                  <metric.icon className={`w-6 h-6 ${
                    metric.color === "cyan" ? "text-neon-cyan" :
                    metric.color === "purple" ? "text-neon-purple" :
                    "text-neon-blue"
                  }`} />
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  LIVE
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className={`text-4xl font-bold ${
                  metric.color === "cyan" ? "text-neon-cyan" :
                  metric.color === "purple" ? "text-neon-purple" :
                  "text-neon-blue"
                }`}>
                  {metric.prefix}
                  <AnimatedCounter 
                    from={metric.from} 
                    to={metric.to} 
                    isInView={isInView} 
                  />
                  {metric.suffix}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Panels */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Heat Map Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-cyan/10">
                  <BarChart3 className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold">Engagement Heatmap</h3>
                  <p className="text-xs text-muted-foreground font-mono">24H ACTIVITY</p>
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Updated 2s ago
              </div>
            </div>
            <HeatMap />
          </motion.div>

          {/* Decision Flow Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-purple/10">
                  <Zap className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Decision Flow</h3>
                  <p className="text-xs text-muted-foreground font-mono">REAL-TIME PROCESSING</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                ACTIVE
              </div>
            </div>
            <DecisionFlow isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
