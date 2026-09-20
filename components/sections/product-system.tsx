"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Sparkles, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackAction } from "@/lib/track-action"
import { ProductLogo } from "@/components/brand/product-logo"
import { products as dossiers } from "@/lib/products"
import { ProductWebsiteLink } from "@/components/brand/product-site"
import { productAccents } from "@/lib/product-accents"

const products = (
  [
    { id: "quantrion" as const, visualization: "learning" },
    { id: "vdoc" as const, visualization: "entertainment" },
    { id: "exorax" as const, visualization: "commerce" },
  ] as const
).map((meta) => {
  const product = dossiers[meta.id]
  return {
    ...meta,
    name: product.name,
    category: product.industry,
    tagline: product.tagline,
    description: product.description,
    features: product.groups[1].items.slice(0, 4).map((item) => item.name),
    metrics: Object.fromEntries(product.metrics.slice(0, 3).map((metric) => [metric.label, metric.value])),
  }
})

export function ProductSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeProduct, setActiveProduct] = useState(0)
  const router = useRouter()

  const handleExploreClick = async () => {
    const product = products[activeProduct]
    await trackAction("product_explore_click", "product-system", { productId: product.id })
    router.push(`/${product.id}`)
  }

  const active = products[activeProduct]
  const accent = productAccents[active.id]

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
            <span className="bg-gradient-to-r from-teal-300 via-rose-400 to-zinc-300 bg-clip-text text-transparent">
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
            const colors = productAccents[product.id]
            const isActive = activeProduct === index

            return (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `glass-strong ${colors.border} border`
                    : "glass hover:bg-secondary/30"
                }`}
              >
                <ProductLogo product={product.id} size={22} />
                <span className={isActive ? "text-foreground font-medium" : "text-muted-foreground"}>
                  {product.name}
                </span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${colors.chip}`}>
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
                <div className={`overflow-hidden rounded-xl ${accent.chip} p-1`}>
                  <ProductLogo product={active.id} size={56} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{active.name}</h3>
                  <p className={`text-sm font-mono ${accent.text}`}>{active.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">{active.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {active.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Sparkles className={`w-4 h-4 ${accent.text}`} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(active.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className={`text-2xl font-bold ${accent.text}`}>{value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase">{key}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                className={`${accent.solid} text-[#061016] hover:opacity-90 font-semibold ${accent.shadow}`}
                onClick={() => void handleExploreClick()}
              >
                Explore {active.name}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <ProductWebsiteLink productId={active.id} variant="ghost" />
            </div>
          </div>

          {/* Product Visualization */}
          <ProductVisualization type={active.visualization} colorHex={accent.hex} />
        </motion.div>
      </div>
    </section>
  )
}

function ProductVisualization({ type, colorHex }: { type: string; colorHex: string }) {
  const colorValue = colorHex

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
              <ProductLogo product="exorax" size={48} />
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
