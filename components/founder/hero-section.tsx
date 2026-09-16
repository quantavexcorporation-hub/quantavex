import { ArrowDown } from "lucide-react"
import { AnimatedImage } from "@/components/founder/animated-image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Layered ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px] sm:left-[60%] sm:h-[500px] sm:w-[500px] sm:blur-[120px] lg:h-[700px] lg:w-[700px] lg:blur-[150px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[250px] w-[250px] rounded-full bg-primary/[0.04] blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />
        <div className="absolute top-[60%] right-[10%] hidden h-[300px] w-[300px] rounded-full bg-primary/[0.03] blur-[100px] sm:block" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 pt-24 pb-16 sm:px-6 md:flex-row md:gap-12 lg:gap-20 lg:px-12 lg:py-24">
        {/* Left column - Text */}
        <div className="hero-rise order-2 w-full flex-1 text-center md:order-1 md:text-left">
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm sm:mb-8 sm:px-5 sm:py-2">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-primary uppercase sm:text-xs sm:tracking-[0.2em]">
              Business Researcher &amp; Visionary Leader
            </span>
          </div>

          {/* Name */}
          <h1 className="font-mono text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-balance">Udit</span>
            <span className="block text-balance">
              Gour<span className="text-primary">.</span>
            </span>
          </h1>

          {/* Role */}
          <div className="mt-4 flex h-8 items-center justify-center gap-3 sm:mt-6 sm:h-9 md:h-10 lg:justify-start">
            <div className="hidden h-px w-8 bg-primary/40 sm:block" />
            <span className="font-mono text-sm text-primary/90 sm:text-lg md:text-xl lg:text-2xl">
              Founder &amp; CEO &middot; Quantavex
            </span>
          </div>

          {/* Description */}
          <div className="mx-auto mt-6 max-w-xl space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg lg:mx-0">
            <p>
              I build applied systems for learning, entertainment, and commerce.
              At <span className="font-semibold text-foreground">Quantavex</span> I
              lead research and product across three platforms, taking architectures
              from monograph to software machine.
            </p>
            <p>
              In that software machine, AI works as the engine inside all three
              platforms — Quantrion, Vdoc, and ExoraX. Data is essential: the
              engine can only produce correct information when the data is
              accurate, complete, and current. Research specifies the
              architecture. The machine runs on AI as engine, and on data as
              the source of truth.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:gap-4 lg:items-start">
            <a
              href="#about"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,200,200,0.2)] sm:w-auto sm:px-8 sm:py-3.5"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 sm:w-auto sm:px-8 sm:py-3.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Portrait - Visible on all screens, responsive sizing */}
        <div className="hero-rise-delayed order-1 w-full flex-shrink-0 md:order-2 md:w-auto">
          <div className="relative mx-auto w-full max-w-none md:max-w-[360px] lg:mx-0 lg:max-w-[400px] xl:max-w-[440px]">
            {/* Glow behind portrait */}
            <div className="absolute -inset-6 rounded-full bg-primary/[0.08] blur-[40px] sm:-inset-8 sm:blur-[60px]" />

            {/* Portrait container */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm sm:rounded-3xl">
              <AnimatedImage
                src="/images/founder-portrait.jpg"
                alt="Udit Gour - Business Researcher and Visionary Leader of Quantavex"
                width={440}
                height={550}
                className="relative w-full"
                imgClassName="block h-auto max-h-[550px] w-full max-w-full object-cover object-top"
                loading="eager"
                hoverScaleClass="hover:scale-[1.04]"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Bottom glass label */}
              <div className="absolute right-0 bottom-0 left-0 p-3 sm:p-4 md:p-6">
                <div className="rounded-xl border border-border/30 bg-background/40 px-3 py-2.5 backdrop-blur-xl sm:rounded-2xl sm:px-5 sm:py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground sm:text-sm">
                        Founder & CEO
                      </p>
                      <p className="mt-0.5 text-[10px] text-primary sm:text-xs">
                        Quantavex
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                      <span className="hidden text-xs text-muted-foreground sm:inline">
                        Open to connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-3 -right-3 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] backdrop-blur-sm sm:-top-4 sm:-right-4 sm:h-20 sm:w-20 sm:rounded-2xl">
              <span className="font-mono text-[10px] font-bold text-primary sm:text-xs">QG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border/40 p-1.5 sm:h-11 sm:w-7 sm:p-2">
            <div className="h-2 w-0.5 animate-bounce rounded-full bg-primary/50 sm:h-2.5 sm:w-1" />
          </div>
        </a>
      </div>
    </section>
  )
}
