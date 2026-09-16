"use client"

import { useEffect, useState, useRef } from "react"
import {
  Rocket,
  FileText,
  Cpu,
  Star,
  Lightbulb,
  Users,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])
  return inView
}

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [end, duration, start])

  return count
}

interface StatCardProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  sublabel: string
  delay: number
  inView: boolean
  accentGlow: string
  onClick?: () => void
  isClickable?: boolean
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  sublabel,
  delay,
  inView,
  accentGlow,
  onClick,
  isClickable,
}: StatCardProps) {
  const [visible, setVisible] = useState(false)
  const count = useCountUp(value, 2000, visible)

  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [inView, delay])

  return (
    <div
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? `${label}: view platform stack` : undefined}
      onKeyDown={
        isClickable
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                onClick?.()
              }
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 p-5 text-left backdrop-blur-md transition-all duration-700 hover:border-primary/30 hover:bg-card/60 sm:rounded-2xl sm:p-6 lg:p-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${isClickable ? "cursor-pointer" : ""}`}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 ${accentGlow}`}
      />

      {/* Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.08] sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl">
        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
      </div>

      {/* Animated number */}
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {count}
        </span>
        <span className="font-mono text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
          {suffix}
        </span>
      </div>

      {/* Labels */}
      <p className="mt-1.5 text-xs font-semibold text-foreground sm:mt-2 sm:text-sm">{label}</p>
      <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground sm:mt-1 sm:text-xs">
        {sublabel}
      </p>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-primary/60 transition-all duration-1000 ease-out ${
          visible ? "w-full" : "w-0"
        }`}
        style={{ transitionDelay: `${delay + 600}ms` }}
      />
    </div>
  )
}

interface StatHighlightCardProps {
  icon: React.ElementType
  title: string
  sublabel: string
  delay: number
  inView: boolean
  accentGlow: string
  onClick?: () => void
  isClickable?: boolean
  tags?: string[]
}

function StatHighlightCard({
  icon: Icon,
  title,
  sublabel,
  delay,
  inView,
  accentGlow,
  onClick,
  isClickable,
  tags,
}: StatHighlightCardProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [inView, delay])

  return (
    <div
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? `Open ${title}` : undefined}
      onKeyDown={
        isClickable
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                onClick?.()
              }
            }
          : undefined
      }
      className={`group relative flex min-h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-card/40 p-5 text-left backdrop-blur-md transition-all duration-700 hover:border-primary/30 hover:bg-card/60 sm:rounded-2xl sm:p-6 lg:p-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${isClickable ? "cursor-pointer" : ""}`}
    >
      <div
        className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 ${accentGlow}`}
      />

      <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.08] sm:mb-5 sm:h-12 sm:w-12 sm:rounded-xl">
        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
      </div>

      <h3 className="text-balance font-mono text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl lg:text-2xl">
        {title}
      </h3>

      <p className="mt-2.5 flex-1 text-[10px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-xs">
        {sublabel}
      </p>

      {tags && tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/50 bg-secondary/40 px-2 py-0.5 text-[10px] text-foreground sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-primary/60 transition-all duration-1000 ease-out ${
          visible ? "w-full" : "w-0"
        }`}
        style={{ transitionDelay: `${delay + 600}ms` }}
      />
    </div>
  )
}

type StatEntry =
  | {
      kind: "metric"
      icon: React.ElementType
      value: number
      suffix: string
      label: string
      sublabel: string
      accentGlow: string
    }
  | {
      kind: "highlight"
      icon: React.ElementType
      title: string
      sublabel: string
      accentGlow: string
      tags?: string[]
    }

const learningDomains = [
  {
    name: "Human Psychology & Resources",
    detail: "How people learn, decide, and stay engaged — and how resources are allocated around that.",
  },
  {
    name: "Finance & Economics",
    detail: "Markets, capital, and how value moves.",
  },
  {
    name: "AI & Data Science",
    detail: "Models, evidence, and correct information.",
  },
  {
    name: "Media & Content",
    detail: "Narrative, format, and how attention is held.",
  },
  {
    name: "Sales & Digital Marketing",
    detail: "Demand, distribution, and conversion.",
  },
  {
    name: "Product & Business Strategy",
    detail: "What to build, why it matters, and how it becomes a company.",
  },
] as const

const inspirationalLeaders = [
  {
    name: "Elon Musk",
    detail: "Building across space, energy, and vehicles at planetary scale.",
  },
  {
    name: "Steve Jobs",
    detail: "Product as craft — technology made human.",
  },
  {
    name: "Bill Gates",
    detail: "Software as infrastructure for every desk and every institution.",
  },
  {
    name: "Jeff Bezos",
    detail: "Customer obsession and compounding over decades.",
  },
  {
    name: "Jensen Huang",
    detail: "Accelerated computing as the next industrial layer.",
  },
  {
    name: "Sam Altman",
    detail: "Scaling frontier models into a platform the world can use.",
  },
  {
    name: "Dario Amodei",
    detail: "Building capable systems with safety as a first constraint.",
  },
  {
    name: "Mark Zuckerberg",
    detail: "Connecting people at global scale — social systems as infrastructure.",
  },
  {
    name: "Warren Buffett",
    detail: "Capital allocation and compounding over decades.",
  },
] as const

const stats: StatEntry[] = [
  {
    kind: "metric",
    icon: Rocket,
    value: 1,
    suffix: "",
    label: "Venture Founded",
    sublabel: "Quantavex — applied AI across learning, entertainment, and commerce",
    accentGlow: "bg-sky-500/20",
  },
  {
    kind: "metric",
    icon: FileText,
    value: 3,
    suffix: "",
    label: "Research Papers",
    sublabel: "Original monographs for Quantrion, Vdoc, and ExoraX",
    accentGlow: "bg-emerald-500/20",
  },
  {
    kind: "metric",
    icon: Cpu,
    value: 3,
    suffix: "",
    label: "Platforms in development",
    sublabel: "Quantrion, Vdoc, and ExoraX — architectures specified, sites launching",
    accentGlow: "bg-amber-500/20",
  },
  {
    kind: "highlight",
    icon: Users,
    title: "Team",
    sublabel: "The team works these fields. Click to open.",
    tags: [...learningDomains.map((domain) => domain.name)],
    accentGlow: "bg-primary/30",
  },
  {
    kind: "highlight",
    icon: Star,
    title: "Inspirational leaders",
    sublabel: "Builders whose work sets the bar. Click to open.",
    tags: [
      "Elon Musk",
      "Steve Jobs",
      "Bill Gates",
      "Jeff Bezos",
      "Jensen Huang",
      "Sam Altman",
      "Dario Amodei",
      "Mark Zuckerberg",
      "Warren Buffett",
    ],
    accentGlow: "bg-rose-500/20",
  },
  {
    kind: "highlight",
    icon: Lightbulb,
    title: "Vision-Driven Innovation",
    sublabel:
      "A company is built twice: first as research, then as a software machine. AI is the engine. Data is the truth. That is the path from monograph to products people use.",
    tags: ["Research first", "AI as engine", "Data as truth"],
    accentGlow: "bg-violet-500/20",
  },
]

export function StatsSection({ embedded = false }: { embedded?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.1)
  const [modalKind, setModalKind] = useState<"team" | "leaders" | null>(null)

  const marqueeItems = learningDomains.map((domain) => domain.name)

  return (
    <section
      ref={sectionRef}
      id="record"
      className={
        embedded
          ? "relative mt-12 overflow-hidden sm:mt-16 lg:mt-20"
          : "relative overflow-hidden py-20 sm:py-28 lg:py-36"
      }
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[100px] sm:h-[600px] sm:w-[800px] sm:blur-[150px]" />
      </div>

      {/* Top divider with scrolling marquee */}
      <div className="relative mb-12 overflow-hidden border-y border-border/30 bg-card/20 py-2.5 backdrop-blur-sm sm:mb-20 sm:py-3">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-6 sm:gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 text-[10px] tracking-widest text-muted-foreground/60 uppercase sm:gap-3 sm:text-xs"
            >
              <span className="h-1 w-1 rounded-full bg-primary/40" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Section header */}
        <div
          className={`mb-10 flex flex-col gap-3 transition-all duration-700 sm:mb-16 sm:gap-4 md:flex-row md:items-end md:justify-between ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              Record
            </span>
            <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-balance">Research, products, company</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
            A founder-led path: original research, specified product architectures,
            and a company operating system.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {stats.map((stat, i) => {
            const key =
              stat.kind === "metric" ? stat.label : stat.title
            const delay = i * 150
            if (stat.kind === "metric") {
              return (
                <StatCard
                  key={key}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  delay={delay}
                  inView={inView}
                  accentGlow={stat.accentGlow}
                />
              )
            }
            const opensTeam = stat.title === "Team"
            const opensLeaders = stat.title === "Inspirational leaders"
            return (
              <StatHighlightCard
                key={key}
                icon={stat.icon}
                title={stat.title}
                sublabel={stat.sublabel}
                delay={delay}
                inView={inView}
                accentGlow={stat.accentGlow}
                tags={stat.tags}
                isClickable={opensTeam || opensLeaders}
                onClick={
                  opensTeam
                    ? () => setModalKind("team")
                    : opensLeaders
                      ? () => setModalKind("leaders")
                      : undefined
                }
              />
            )
          })}
        </div>

        {/* Bottom signature line */}
        <div
          className={`mt-10 flex items-center justify-center gap-4 transition-all duration-700 delay-700 sm:mt-16 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <span className="text-[10px] tracking-widest text-muted-foreground/50 uppercase sm:text-xs">
            Quantavex Founder
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>
      </div>

      <Dialog
        open={modalKind !== null}
        onOpenChange={(open) => {
          if (!open) setModalKind(null)
        }}
      >
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto border-border/40 bg-background">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {modalKind === "leaders" ? "Inspirational leaders" : "Team"}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              {modalKind === "leaders"
                ? "Builders whose work sets the bar for product, scale, and long-term thinking. They are inspirational figures — not advisors, investors, or affiliates of Quantavex."
                : "The Quantavex team works these fields."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            {(modalKind === "leaders" ? inspirationalLeaders : learningDomains).map(
              (item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-border/40 bg-background/40 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-background/60"
                >
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
