"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { GraduationCap, Film, ShoppingBag, ArrowRight, Sparkles, Brain, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackAction } from "@/lib/track-action"

const products = [
  {
    id: "quantrion",
    name: "Quantrion AI",
    category: "EdTech",
    icon: GraduationCap,
    color: "cyan",
    tagline: "Adaptive Learning Intelligence",
    description: "AI-powered curriculum that adapts in real-time to student performance, predicting learning outcomes before they happen.",
    features: [
      "Adaptive Learning Graphs",
      "Performance Prediction",
      "Knowledge Gap Detection",
      "Personalized Pathways",
    ],
    metrics: { efficiency: "+88%", retention: "3.2x", satisfaction: "96%" },
    visualization: "learning",
  },
  {
    id: "vdoc",
    name: "Vdoc AI",
    category: "Entertainment",
    icon: Film,
    color: "purple",
    tagline: "Generative Storytelling Engine",
    description: "Transform concepts into immersive narratives with AI-generated scenes, interactive storytelling, and dynamic content creation.",
    features: [
      "AI Scene Generation",
      "Interactive Narratives",
      "Real-time Adaptation",
      "Emotional Intelligence",
    ],
    metrics: { engagement: "5x", creation: "-80%", reach: "10M+" },
    visualization: "entertainment",
  },
  {
    id: "exorax",
    name: "ExoraX AI",
    category: "Commerce",
    icon: ShoppingBag,
    color: "blue",
    tagline: "Decision Commerce Platform",
    description: "From browsing to buying, AI that understands intent, visualizes products in 3D, and guides purchase decisions intelligently.",
    features: [
      "3D Product Visualization",
      "Intent Prediction",
      "Smart Recommendations",
      "Conversion Optimization",
    ],
    metrics: { conversion: "+35%", aov: "+42%", returns: "-28%" },
    visualization: "commerce",
  },
]

export function ProductSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeProduct, setActiveProduct] = useState(0)

  const colorClasses = {
    cyan: {
      bg: "bg-neon-cyan/10",
      text: "text-neon-cyan",
      border: "border-neon-cyan/30",
      glow: "neon-glow-cyan",
    },
    purple: {
      bg: "bg-neon-purple/10",
      text: "text-neon-purple",
      border: "border-neon-purple/30",
      glow: "neon-glow-purple",
    },
    blue: {
      bg: "bg-neon-blue/10",
      text: "text-neon-blue",
      border: "border-neon-blue/30",
      glow: "neon-glow-blue",
    },
  }

  const handleExploreClick = async () => {
    const product = products[activeProduct]
    await trackAction("product_explore_click", "product-system", { productId: product.id })
    window.location.href = `/#${product.id}`
  }

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[oklch(0.09_0.02_260)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Layers className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-mono text-muted-foreground">PRODUCT ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Three Industries.{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
              One Intelligence.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Unified AI infrastructure powering transformation across education, 
            entertainment, and commerce.
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {products.map((product, index) => {
            const colors = colorClasses[product.color as keyof typeof colorClasses]
            const isActive = activeProduct === index

            return (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `glass-strong ${colors.border} border ${colors.glow}`
                    : "glass hover:bg-secondary/30"
                }`}
              >
                <product.icon className={`w-5 h-5 ${isActive ? colors.text : "text-muted-foreground"}`} />
                <span className={isActive ? "text-foreground font-medium" : "text-muted-foreground"}>
                  {product.name}
                </span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                  {product.category}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Active Product Display */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {(() => {
                  const product = products[activeProduct]
                  const colors = colorClasses[product.color as keyof typeof colorClasses]
                  return (
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <product.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{products[activeProduct].name}</h3>
                  <p className={`text-sm font-mono ${colorClasses[products[activeProduct].color as keyof typeof colorClasses].text}`}>
                    {products[activeProduct].tagline}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                {products[activeProduct].description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {products[activeProduct].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Sparkles className={`w-4 h-4 ${colorClasses[products[activeProduct].color as keyof typeof colorClasses].text}`} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(products[activeProduct].metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className={`text-2xl font-bold ${colorClasses[products[activeProduct].color as keyof typeof colorClasses].text}`}>
                    {value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase">
                    {key}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              className={`${
                products[activeProduct].color === "cyan" ? "bg-neon-cyan text-background hover:bg-neon-cyan/90" :
                products[activeProduct].color === "purple" ? "bg-neon-purple text-background hover:bg-neon-purple/90" :
                "bg-neon-blue text-background hover:bg-neon-blue/90"
              } font-semibold`}
              onClick={() => void handleExploreClick()}
            >
              Explore {products[activeProduct].name}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Product Visualization */}
          <ProductVisualization 
            type={products[activeProduct].visualization}
            color={products[activeProduct].color}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ProductVisualization({ type, color }: { type: string; color: string }) {
  const colorValue = color === "cyan" ? "oklch(0.75 0.18 195)" : 
                     color === "purple" ? "oklch(0.65 0.2 300)" : 
                     "oklch(0.7 0.2 250)"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-strong rounded-2xl p-6 h-80 md:h-96 relative overflow-hidden"
    >
      {type === "learning" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Learning Path Nodes */}
            {[
              { x: 50, y: 150, label: "Start", size: 20 },
              { x: 120, y: 80, label: "Basics", size: 25 },
              { x: 120, y: 220, label: "Alt", size: 15 },
              { x: 200, y: 100, label: "Core", size: 30 },
              { x: 200, y: 200, label: "Apply", size: 22 },
              { x: 280, y: 150, label: "Advanced", size: 28 },
              { x: 350, y: 150, label: "Master", size: 35 },
            ].map((node, i) => (
              <g key={i}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill="none"
                  stroke={colorValue}
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size - 5}
                  fill={colorValue}
                  fillOpacity="0.2"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  className="text-[10px] fill-foreground font-mono"
                >
                  {node.label}
                </text>
              </g>
            ))}
            
            {/* Connections */}
            {[
              [50, 150, 120, 80],
              [50, 150, 120, 220],
              [120, 80, 200, 100],
              [120, 220, 200, 200],
              [200, 100, 280, 150],
              [200, 200, 280, 150],
              [280, 150, 350, 150],
            ].map(([x1, y1, x2, y2], i) => (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={colorValue}
                strokeWidth="1.5"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-6 left-6 right-6 glass rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-muted-foreground">LEARNING PROGRESS</span>
              <span className="text-sm font-bold text-neon-cyan">73%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "73%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
          </div>
        </div>
      )}

      {type === "entertainment" && (
        <div className="absolute inset-0 flex flex-col">
          {/* Scene Preview Grid */}
          <div className="flex-1 grid grid-cols-3 gap-2 p-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="glass rounded-lg flex items-center justify-center relative overflow-hidden"
              >
                <Brain className="w-6 h-6 text-neon-purple/50" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="p-4 glass-strong rounded-t-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">GENERATING SCENE 4/6</span>
            </div>
            <div className="h-8 bg-secondary/50 rounded-lg overflow-hidden flex">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 ${i < 4 ? "bg-neon-purple" : "bg-secondary"} border-r border-background/20`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 }}
                  style={{ originY: 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {type === "commerce" && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* 3D Product Placeholder */}
          <div className="relative w-48 h-48">
            <motion.div
              className="absolute inset-0 border-2 border-neon-blue/30 rounded-2xl"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-neon-blue/50 rounded-xl"
              animate={{ rotateY: [360, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div
              className="absolute inset-8 bg-neon-blue/20 rounded-lg flex items-center justify-center"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingBag className="w-12 h-12 text-neon-blue" />
            </motion.div>
          </div>

          {/* AI Assistant Panel */}
          <div className="absolute right-4 top-4 bottom-4 w-40 glass rounded-xl p-3 space-y-3">
            <div className="text-xs font-mono text-muted-foreground">AI ASSISTANT</div>
            {[
              { label: "Match Score", value: "94%" },
              { label: "Price Index", value: "$$" },
              { label: "Availability", value: "In Stock" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                className="bg-secondary/50 rounded-lg p-2"
              >
                <div className="text-[10px] font-mono text-muted-foreground">{item.label}</div>
                <div className="text-sm font-semibold text-neon-blue">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
