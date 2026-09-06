"use client"

import { ArrowUpRight, Cpu, Globe, Shield, Zap } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"

const features = [
  {
    icon: Cpu,
    title: "AI-First Platform",
    description: "Intelligent systems built from the ground up with machine learning at their core.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Infrastructure designed to serve enterprise clients across continents with low-latency AI inference.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance frameworks ensuring data sovereignty and trust.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Sub-second insights powering critical business decisions with predictive intelligence.",
  },
]

export function VenturesSection() {
  return (
    <section id="ventures" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Ventures
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">Quantavex</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            The flagship venture redefining how businesses harness artificial
            intelligence — from strategy to deployment.
          </p>
        </Reveal>

        {/* Main feature card */}
        <Reveal
          className="mb-6 overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm sm:mb-8 sm:rounded-2xl"
          delayMs={100}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 sm:mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-medium text-primary sm:text-xs">Founded by Udit Gour</span>
              </div>
              <h3 className="font-mono text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                Intelligence, Delivered.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Quantavex is an AI-powered analytics and research company that
                bridges the gap between cutting-edge research and real-world
                business applications. We build intelligent systems that learn,
                adapt, and scale — empowering organizations to make smarter
                decisions faster.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">AI-First</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Approach</span>
                </span>
                <div className="h-8 w-px bg-border/50 sm:h-10" />
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">Enterprise</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Grade</span>
                </span>
                <div className="h-8 w-px bg-border/50 sm:h-10" />
                <span className="flex flex-col">
                  <span className="font-mono text-lg font-bold text-primary sm:text-2xl">Global</span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Reach</span>
                </span>
              </div>
              <a
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:mt-8"
              >
                Visit Quantavex
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative flex items-center justify-center bg-secondary/20 p-8 sm:p-12">
              {/* Abstract node graphic */}
              <div className="relative h-48 w-48 sm:h-64 sm:w-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm sm:h-24 sm:w-24" />
                </div>
                <div className="absolute top-4 left-4 h-8 w-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm sm:h-12 sm:w-12" />
                <div className="absolute top-6 right-6 h-7 w-7 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm sm:h-10 sm:w-10" />
                <div className="absolute bottom-6 left-8 h-7 w-7 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm sm:h-10 sm:w-10" />
                <div className="absolute right-4 bottom-4 h-10 w-10 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm sm:h-14 sm:w-14" />
                {/* Center Q */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-4xl">Q</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature grid */}
        <Reveal className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4" delayMs={180}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/50 sm:p-6"
            >
              <feature.icon className="mb-3 h-5 w-5 text-primary sm:mb-4" />
              <h4 className="mb-1.5 font-mono text-sm font-semibold text-foreground sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
