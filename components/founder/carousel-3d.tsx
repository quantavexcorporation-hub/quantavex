"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { AnimatedImage } from "@/components/founder/animated-image"

interface CarouselImage {
  src: string
  alt: string
  label: string
}

interface Carousel3DProps {
  images: CarouselImage[]
}

export function Carousel3D({ images }: Carousel3DProps) {
  const [rotation, setRotation] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const count = images.length
  const angleStep = 360 / count

  const getActiveIndex = useCallback(
    (rot: number) => {
      const normalized = ((rot % 360) + 360) % 360
      const idx = Math.round(normalized / angleStep) % count
      return idx
    },
    [angleStep, count]
  )

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (!isPaused) {
        setRotation((prev) => {
          const next = prev + delta * 0.015
          setActiveIndex(getActiveIndex(next))
          return next
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPaused, getActiveIndex])

  // Responsive radius
  const [radius, setRadius] = useState(220)

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth
      if (w < 480) setRadius(130)
      else if (w < 640) setRadius(160)
      else if (w < 768) setRadius(180)
      else if (w < 1024) setRadius(200)
      else setRadius(220)
    }
    updateRadius()
    window.addEventListener("resize", updateRadius)
    return () => window.removeEventListener("resize", updateRadius)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "1000px", height: "420px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ambient glow behind carousel */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-48 w-48 rounded-full bg-primary/[0.06] blur-[80px] sm:h-64 sm:w-64" />
      </div>

      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${-rotation}deg)`,
          width: "180px",
          height: "240px",
          transition: isPaused ? "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
        }}
      >
        {images.map((image, i) => {
          const angle = i * angleStep
          const isActive = i === activeIndex

          return (
            <div
              key={i}
              className="absolute top-0 left-0"
              style={{
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                transition: "transform 0.4s ease, opacity 0.4s ease",
              }}
            >
              <div
                className={`relative h-full w-full overflow-hidden rounded-xl border transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-primary/40 shadow-[0_0_30px_rgba(0,200,200,0.12)]"
                    : "scale-100 border-border/30 shadow-lg"
                }`}
                style={{
                  background: "rgba(15, 20, 35, 0.6)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <AnimatedImage
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover"
                  loading="lazy"
                  hoverScaleClass="hover:scale-[1.04]"
                />

                {/* Glass overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3">
                  <p className="text-center text-[10px] font-medium tracking-wide text-foreground/80 sm:text-xs">
                    {image.label}
                  </p>
                </div>

                {/* Active indicator ring */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl border border-primary/20" />
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "h-2 w-6 bg-primary"
                : "h-2 w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => {
              setRotation(i * angleStep)
              setActiveIndex(i)
            }}
          />
        ))}
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <div className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-border/30 bg-background/50 px-2.5 py-1 text-[10px] text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          Paused
        </div>
      )}
    </div>
  )
}
