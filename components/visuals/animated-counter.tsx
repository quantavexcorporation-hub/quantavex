"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  isInView: boolean
  duration?: number
}

export function AnimatedCounter({ from, to, isInView, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(from + (to - from) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, from, to, duration])

  return <span>{count}</span>
}
