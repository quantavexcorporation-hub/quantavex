"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeatMap() {
  const [data, setData] = useState<number[][]>([])
  const rows = 7
  const cols = 24

  useEffect(() => {
    // Generate initial data
    const generateData = () => {
      return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => Math.random())
      )
    }
    setData(generateData())

    // Update periodically
    const interval = setInterval(() => {
      setData(prev => {
        return prev.map(row =>
          row.map(cell => {
            const change = (Math.random() - 0.5) * 0.2
            return Math.max(0, Math.min(1, cell + change))
          })
        )
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getColor = (value: number) => {
    if (value < 0.25) return "bg-neon-cyan/10"
    if (value < 0.5) return "bg-neon-cyan/30"
    if (value < 0.75) return "bg-neon-cyan/60"
    return "bg-neon-cyan"
  }

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="space-y-2">
      {/* Time Labels */}
      <div className="flex gap-1 pl-10 text-xs font-mono text-muted-foreground">
        {[0, 6, 12, 18, 23].map(hour => (
          <div 
            key={hour} 
            className="flex-1"
            style={{ marginLeft: hour === 0 ? 0 : undefined }}
          >
            {hour}:00
          </div>
        ))}
      </div>

      {/* Heatmap Grid */}
      <div className="flex flex-col gap-1">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-1">
            <span className="w-8 text-xs font-mono text-muted-foreground">
              {days[rowIndex]}
            </span>
            <div className="flex-1 flex gap-0.5">
              {row.map((cell, colIndex) => (
                <motion.div
                  key={colIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (rowIndex * cols + colIndex) * 0.005 }}
                  className={`flex-1 h-4 rounded-sm ${getColor(cell)} transition-colors duration-500`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 pt-2">
        <span className="text-xs font-mono text-muted-foreground">Low</span>
        <div className="flex gap-0.5">
          {["bg-neon-cyan/10", "bg-neon-cyan/30", "bg-neon-cyan/60", "bg-neon-cyan"].map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
        </div>
        <span className="text-xs font-mono text-muted-foreground">High</span>
      </div>
    </div>
  )
}
