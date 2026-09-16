"use client"

import {
  Brain,
  BarChart3,
  Lightbulb,
  Target,
  GraduationCap,
  Compass,
} from "lucide-react"
import { Carousel3D } from "@/components/founder/carousel-3d"
import { Reveal } from "@/components/founder/reveal"

const highlights = [
  {
    icon: Brain,
    title: "Research",
    description:
      "Original monographs that specify the architecture before the software machine is built.",
  },
  {
    icon: BarChart3,
    title: "Product",
    description:
      "Three platforms: competitive learning, interactive entertainment, and decision commerce.",
  },
  {
    icon: Lightbulb,
    title: "Systems",
    description:
      "AI is the engine across the platforms. Data is required for correct information.",
  },
  {
    icon: Target,
    title: "Company",
    description:
      "Founder-led. One operating system, three industries.",
  },
  {
    icon: GraduationCap,
    title: "Knowledge",
    description:
      "Interdisciplinary fields: psychology and resources, finance, AI and data, media, growth, and product strategy.",
  },
  {
    icon: Compass,
    title: "Vision",
    description:
      "The next layer of the world — value beyond Earth, markets inside worlds, and the movement of capital. That is the horizon Quantavex is aimed at.",
  },
]

const carouselImages = [
  {
    src: "/images/carousel-1.jpg",
    alt: "Udit Gour presenting Quantavex work",
    label: "Presentation",
  },
  {
    src: "/images/carousel-2.jpg",
    alt: "Research and product development",
    label: "Research",
  },
  {
    src: "/images/carousel-3.jpg",
    alt: "Quantavex workspace",
    label: "Studio",
  },
  {
    src: "/images/carousel-4.jpg",
    alt: "Systems and models",
    label: "Systems",
  },
  {
    src: "/images/carousel-5.jpg",
    alt: "Working session",
    label: "Build",
  },
  {
    src: "/images/carousel-6.jpg",
    alt: "Infrastructure planning",
    label: "Infrastructure",
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
            <span className="text-balance">Founder of Quantavex</span>
          </h2>
        </div>

        {/* Main layout: Text left, Carousel right on desktop */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Left: About text and highlights */}
          <div className="w-full flex-1 lg:max-w-[50%]">
            <div className="flex flex-col gap-5 sm:gap-6">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                Udit Gour is a business researcher and visionary leader. He writes the
                architecture first — as a monograph — then builds the software
                machine the paper specifies. In that machine, AI works as the
                engine across every platform, and data is what keeps the
                information correct.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                At Quantavex he is specifying three platforms on one operating
                system: Quantrion for competitive learning, Vdoc for interactive
                entertainment, and ExoraX for decision commerce. The company is
                founder-led.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                The work is to take those systems from paper into private alpha,
                with design partners, and then into products people actually use.
              </p>

              {/* Stats row */}
              <div className="mt-2 flex items-center gap-4 sm:mt-4 sm:gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                    3
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
                    Platforms
                  </span>
                </div>
                <div className="h-10 w-px bg-border/50 sm:h-12" />
                <div className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-primary sm:text-3xl">
                    1
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    Venture · Quantavex
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
                {[
                  "Human Psychology & Resources",
                  "Finance & Economics",
                  "AI & Data Science",
                  "Media & Content",
                  "Sales & Digital Marketing",
                  "Product & Business Strategy",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/50 bg-secondary/40 px-2 py-0.5 text-[10px] text-muted-foreground sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
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
