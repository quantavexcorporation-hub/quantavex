"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface DecisionFlowProps {
  isInView: boolean
}

const nodes = [
  { id: "input", label: "User Input", x: 10, y: 50 },
  { id: "analyze", label: "Analyze", x: 35, y: 25 },
  { id: "context", label: "Context", x: 35, y: 75 },
  { id: "process", label: "AI Process", x: 60, y: 50 },
  { id: "output", label: "Decision", x: 85, y: 50 },
]

const connections = [
  { from: "input", to: "analyze" },
  { from: "input", to: "context" },
  { from: "analyze", to: "process" },
  { from: "context", to: "process" },
  { from: "process", to: "output" },
]

export function DecisionFlow({ isInView }: DecisionFlowProps) {
  const [activeNode, setActiveNode] = useState(0)
  const [pulseConnection, setPulseConnection] = useState(-1)

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length)
      setPulseConnection(prev => (prev + 1) % connections.length)
    }, 1200)

    return () => clearInterval(interval)
  }, [isInView])

  const getNodePosition = (id: string) => {
    const node = nodes.find(n => n.id === id)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }

  return (
    <div className="relative h-48 w-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from)
          const to = getNodePosition(conn.to)
          const isActive = pulseConnection === index
          
          return (
            <g key={`${conn.from}-${conn.to}`}>
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "oklch(0.75 0.18 195)" : "oklch(0.3 0.05 260)"}
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              {isActive && (
                <motion.circle
                  r="2"
                  fill="oklch(0.75 0.18 195)"
                  initial={{ cx: from.x, cy: from.y }}
                  animate={{ cx: to.x, cy: to.y }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const isActive = activeNode === index
          
          return (
            <g key={node.id}>
              {/* Glow effect */}
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="none"
                  stroke="oklch(0.65 0.2 300)"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              
              {/* Node circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={isActive ? "oklch(0.65 0.2 300)" : "oklch(0.2 0.03 260)"}
                stroke={isActive ? "oklch(0.75 0.2 300)" : "oklch(0.4 0.05 260)"}
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
              
              {/* Label */}
              <text
                x={node.x}
                y={node.y + 14}
                textAnchor="middle"
                className="text-[4px] fill-muted-foreground font-mono"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Status */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs font-mono text-muted-foreground">
        <span>Processing: {Math.floor(Math.random() * 100 + 200)}ms</span>
        <span>Decisions: {Math.floor(Math.random() * 1000 + 5000)}/s</span>
      </div>
    </div>
  )
}
