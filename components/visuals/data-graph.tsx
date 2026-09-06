"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface DataGraphProps {
  color?: "cyan" | "purple" | "blue"
}

export function DataGraph({ color = "cyan" }: DataGraphProps) {
  const [data, setData] = useState<number[]>([])

  const colorMap = {
    cyan: "oklch(0.75 0.18 195)",
    purple: "oklch(0.65 0.2 300)",
    blue: "oklch(0.7 0.2 250)",
  }

  useEffect(() => {
    // Generate initial data
    setData(Array.from({ length: 20 }, () => Math.random() * 100))

    // Update data periodically
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.random() * 100]
        return newData
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data, 1)
  const height = 60

  return (
    <div className="relative w-full h-full">
      <svg 
        viewBox={`0 0 200 ${height}`} 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colorMap[color]} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colorMap[color]} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area Fill */}
        <motion.path
          d={`
            M 0 ${height}
            ${data.map((value, i) => {
              const x = (i / (data.length - 1)) * 200
              const y = height - (value / maxValue) * (height - 10)
              return `L ${x} ${y}`
            }).join(" ")}
            L 200 ${height}
            Z
          `}
          fill={`url(#gradient-${color})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={`
            M 0 ${height - (data[0] / maxValue) * (height - 10)}
            ${data.map((value, i) => {
              const x = (i / (data.length - 1)) * 200
              const y = height - (value / maxValue) * (height - 10)
              return `L ${x} ${y}`
            }).join(" ")}
          `}
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Current Value Dot */}
        {data.length > 0 && (
          <motion.circle
            cx="200"
            cy={height - (data[data.length - 1] / maxValue) * (height - 10)}
            r="4"
            fill={colorMap[color]}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </svg>
    </div>
  )
}
