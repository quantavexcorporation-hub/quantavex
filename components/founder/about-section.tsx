"use client"

import { Brain, BarChart3, Lightbulb, Target } from "lucide-react"
import { Carousel3D } from "@/components/founder/carousel-3d"
import { Reveal } from "@/components/founder/reveal"

const highlights = [
  {
    icon: Brain,
    title: "AI Research",
    description:
      "Deep expertise in machine learning, neural networks, and large language models.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Data-driven strategies turning complex insights into actionable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Bridging cutting-edge research with practical, scalable technology solutions.",
  },
  {
    icon: Target,
    title: "Leadership",
    description:
      "Building and leading high-performance teams at the forefront of AI development.",
  },
]

const carouselImages = [
  {
    src: "/images/carousel-1.jpg",
    alt: "Udit Gour speaking at AI conference",
    label: "Keynote Speaker",
  },
  {
    src: "/images/carousel-2.jpg",
    alt: "AI development and coding",
    label: "Deep Research",
  },
  {
    src: "/images/carousel-3.jpg",
    alt: "Quantavex startup office",
    label: "Quantavex HQ",
  },
  {
    src: "/images/carousel-4.jpg",
    alt: "Neural network visualization",
    label: "Neural Systems",
  },
  {
    src: "/images/carousel-5.jpg",
    alt: "Team strategy meeting",
    label: "Team Leadership",
  },
  {
    src: "/images/carousel-6.jpg",
    alt: "AI infrastructure and servers",
    label: "AI Infrastructure",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <Reveal className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 sm:mb-16">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            About
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">The Mind Behind the Mission</span>
          </h2>
        </div>

        {/* Main layout: Text left, Carousel right on desktop */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Left: About text and highlights */}
          <div className="w-full flex-1 lg:max-w-[50%]">
            <div className="flex flex-col gap-5 sm:gap-6">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                Udit Gour is an AI researcher and business strategist operating
                at the intersection of artificial intelligence, data science,
                and scalable enterprise systems. He focuses on turning complex
                theoretical concepts into practical, high-impact technologies
                that address real-world industry challenges.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                As the Founder & CEO of Quantavex, Udit is building a
                next-generation AI company focused on intelligent infrastructure,
                predictive analytics, and autonomous decision systems. Quantavex
                aims to empower businesses across sectors by delivering
                data-driven solutions that improve efficiency, unlock new revenue
                streams, and create long-term competitive advantage.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                His vision is to position Quantavex as a global leader in applied
                AI—bridging cutting-edge research with commercial execution to
                drive meaningful, large-scale innovation.
              </p>

              {/* Stats row */}
              <div className="mt-2 flex items-center gap-4 sm:mt-4 sm:gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                    3+
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    Research Papers
                  </span>
                </div>
                <div className="h-10 w-px bg-border/50 sm:h-12" />
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                    3
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    AI Products
                  </span>
                </div>
                <div className="h-10 w-px bg-border/50 sm:h-12" />
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                    3+
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    Years Leading
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/80 sm:p-6"
                >
                  <item.icon className="mb-3 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-6 sm:w-6" />
                  <h3 className="mb-1.5 font-mono text-sm font-semibold text-foreground sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Carousel */}
          <div className="flex w-full items-center justify-center lg:w-[45%] lg:flex-shrink-0">
            <div className="w-full max-w-[500px] lg:max-w-none">
              <Carousel3D images={carouselImages} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
