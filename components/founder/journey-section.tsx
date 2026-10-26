import { Reveal } from "@/components/founder/reveal"

export function JourneySection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">
            Journey
          </span>
          <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-balance">My journey</span>
          </h2>
        </div>

        <div className="max-w-3xl space-y-5 text-sm leading-relaxed text-muted-foreground sm:space-y-6 sm:text-base md:text-lg">
          <p className="text-base text-foreground sm:text-lg md:text-xl md:leading-relaxed">
            My journey has been shaped by hands-on experiences across education, entertainment, and commerce.
          </p>
          <p>
            Preparing for competitive examinations gave me firsthand exposure to the challenges students face in learning, preparation, and navigating educational opportunities. Exploring content creation through YouTube channels introduced me to the creative possibilities of digital entertainment and storytelling. Running a kirana shop gave me practical insight into retail operations, customer needs, purchasing behaviour, and the everyday realities of commerce.
          </p>
          <p>
            These experiences helped me understand three distinct markets not just as an observer, but through my own efforts and challenges.
          </p>
          <p>
            Today, I am bringing these perspectives together through Quantavex Corporation, building three AI-driven ventures: Quantrion in education, Vdoc in entertainment, and ExoraX in intelligent commerce. My journey continues with a clear ambition: to transform real-world problems into meaningful technology products that create value for people at scale.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
