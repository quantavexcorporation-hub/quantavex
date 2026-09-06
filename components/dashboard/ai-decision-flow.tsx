"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Node {
  id: string
  label: string
  x: number
  y: number
  type: "input" | "process" | "output"
  active: boolean
}

interface Edge {
  from: string
  to: string
}

const nodes: Node[] = [
  { id: "input", label: "Input", x: 50, y: 80, type: "input", active: false },
  { id: "analyze", label: "Analyze", x: 150, y: 40, type: "process", active: false },
  { id: "learn", label: "Learn", x: 150, y: 120, type: "process", active: false },
  { id: "decide", label: "Decide", x: 250, y: 80, type: "process", active: false },
  { id: "adapt", label: "Adapt", x: 350, y: 40, type: "process", active: false },
  { id: "output", label: "Output", x: 350, y: 120, type: "output", active: false },
]

const edges: Edge[] = [
  { from: "input", to: "analyze" },
  { from: "input", to: "learn" },
  { from: "analyze", to: "decide" },
  { from: "learn", to: "decide" },
  { from: "decide", to: "adapt" },
  { from: "decide", to: "output" },
  { from: "adapt", to: "output" },
]

export function AIDecisionFlow() {
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set())
  const [activeEdges, setActiveEdges] = useState<Set<string>>(new Set())

  useEffect(() => {
    const sequence = ["input", "analyze", "learn", "decide", "adapt", "output"]
    let step = 0

    const interval = setInterval(() => {
      const currentNode = sequence[step % sequence.length]
      setActiveNodes(new Set([currentNode]))

      // Find edges from current node
      const currentEdges = edges
        .filter((e) => e.from === currentNode)
        .map((e) => `${e.from}-${e.to}`)
      setActiveEdges(new Set(currentEdges))

      step++
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0c0c14] border border-cyan-500/10 rounded p-4 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-white">AI Decision Flow</h3>
          <p className="text-xs text-gray-500">Neural pathway visualization</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] font-mono text-cyan-400">PROCESSING</span>
        </div>
      </div>

      <svg viewBox="0 0 400 160" className="w-full h-[180px]">
        {/* Edges */}
        {edges.map((edge) => {
          const from = getNodePosition(edge.from)
          const to = getNodePosition(edge.to)
          const isActive = activeEdges.has(`${edge.from}-${edge.to}`)

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "#22d3ee" : "#1f2937"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "none" : "4,4"}
              />
              {isActive && (
                <motion.circle
                  initial={{ cx: from.x, cy: from.y }}
                  animate={{ cx: to.x, cy: to.y }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  r={3}
                  fill="#22d3ee"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    dur="0.5s"
                    repeatCount="1"
                  />
                </motion.circle>
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNodes.has(node.id)
          const colors = {
            input: { bg: "#0891b2", glow: "rgba(8, 145, 178, 0.5)" },
            process: { bg: "#7c3aed", glow: "rgba(124, 58, 237, 0.5)" },
            output: { bg: "#059669", glow: "rgba(5, 150, 105, 0.5)" },
          }
          const color = colors[node.type]

          return (
            <g key={node.id}>
              {isActive && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={24}
                  fill={color.glow}
                  className="animate-pulse"
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 18 : 16}
                fill={isActive ? color.bg : "#1f2937"}
                stroke={isActive ? color.bg : "#374151"}
                strokeWidth={2}
                className="transition-all duration-300"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={isActive ? "white" : "#9ca3af"}
                fontSize="8"
                fontFamily="monospace"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-cyan-500/10">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-600" />
            <span className="text-[10px] text-gray-400">Input</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-600" />
            <span className="text-[10px] text-gray-400">Process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-600" />
            <span className="text-[10px] text-gray-400">Output</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-gray-500">6 NODES</span>
      </div>
    </motion.div>
  )
}
