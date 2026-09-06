"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Cpu, Zap } from "lucide-react"
import { NeuralNetwork } from "@/components/visuals/neural-network"
import { DataGraph } from "@/components/visuals/data-graph"
import { trackAction } from "@/lib/track-action"

export function Hero() {
  const handleClick = async (target: "platform" | "systems") => {
    await trackAction("hero_cta_click", "hero", { target })
    window.location.href = target === "platform" ? "/#platform" : "/#products"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[oklch(0.1_0.03_260)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.7 0.2 250 / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.7 0.2 250 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <NeuralNetwork />
      </div>

      {/* Floating Data Graphs */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-40 glass rounded-xl p-4 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-neon-cyan" />
          <span className="text-xs font-mono text-muted-foreground">SYSTEM EFFICIENCY</span>
        </div>
        <DataGraph color="cyan" />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-10 w-56 h-36 glass rounded-xl p-4 hidden lg:block"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-4 h-4 text-neon-purple" />
          <span className="text-xs font-mono text-muted-foreground">AI PROCESSING</span>
        </div>
        <DataGraph color="purple" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
          </span>
          <span className="text-sm font-mono text-muted-foreground">SYSTEM ONLINE</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">Building Intelligence</span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-gradient">
            Infrastructure
          </span>
          <br />
          <span className="text-foreground">for an </span>
          <span className="text-glow-cyan text-neon-cyan">$8T</span>
          <span className="text-foreground"> World</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          Adaptive AI across Learning, Entertainment, and Commerce. 
          Three industries. One unified intelligence platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold px-8 py-6 text-lg neon-glow-cyan hover:scale-105 transition-transform"
            onClick={() => void handleClick("platform")}
          >
            Enter Platform
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border/50 bg-glass backdrop-blur-sm px-8 py-6 text-lg hover:bg-secondary/50 transition-colors"
            onClick={() => void handleClick("systems")}
          >
            <Zap className="mr-2 w-5 h-5" />
            View Systems
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { label: "Industries", value: "3" },
            { label: "Market Size", value: "$8T+" },
            { label: "AI Models", value: "12" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-neon-cyan">{stat.value}</div>
              <div className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-neon-cyan rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
