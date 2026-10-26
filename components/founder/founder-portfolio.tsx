import { Navbar } from "@/components/founder/navbar"
import { HeroSection } from "@/components/founder/hero-section"
import { JourneySection } from "@/components/founder/journey-section"
import { AboutSection } from "@/components/founder/about-section"
import { ResearchSection } from "@/components/founder/research-section"
import { VenturesSection } from "@/components/founder/ventures-section"
import { VisionSection } from "@/components/founder/vision-section"
import { Footer } from "@/components/founder/footer"

export function FounderPortfolio() {
  return (
    <div className="founder-theme relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <AboutSection />
      <ResearchSection />
      <VenturesSection />
      <VisionSection />
      <Footer />
    </div>
  )
}
