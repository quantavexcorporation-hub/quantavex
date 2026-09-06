"use client"

import * as React from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shown])

  return (
    <div
      ref={ref}
      className={[
        className,
        "motion-reduce:transform-none motion-reduce:opacity-100",
        shown
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 motion-safe:will-change-[transform,opacity]",
        "transition-[transform,opacity] duration-500 ease-in-out",
      ]
        .filter(Boolean)
        .join(" ")}
      style={delayMs ? ({ transitionDelay: `${delayMs}ms` } as const) : undefined}
    >
      {children}
    </div>
  )
}

