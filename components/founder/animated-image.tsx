"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TRANSITION =
  "transition-[transform,opacity] duration-[400ms] ease-in-out motion-reduce:duration-200"

type AnimatedImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  /** Wrapper — should include overflow clipping for zoom/hover (e.g. rounded corners) */
  className?: string
  /** Applied to the img element (sizing, object-fit) */
  imgClassName?: string
  loading?: "eager" | "lazy"
  /** Hover scale; kept within a subtle 1.03–1.05 range */
  hoverScaleClass?: "hover:scale-[1.03]" | "hover:scale-[1.04]" | "hover:scale-[1.05]"
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  loading = "lazy",
  hoverScaleClass = "hover:scale-[1.04]",
}: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true)
          ob.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 8% 0px" }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={cn(
          TRANSITION,
          "h-full w-full max-w-full object-center",
          "motion-reduce:transform-none",
          active
            ? "opacity-100 scale-100"
            : "opacity-0 scale-[0.98]",
          "motion-reduce:opacity-100 motion-reduce:scale-100",
          "motion-reduce:hover:scale-100",
          hoverScaleClass,
          "focus-visible:outline-none",
          imgClassName
        )}
      />
    </div>
  )
}
