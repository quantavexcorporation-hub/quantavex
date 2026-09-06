import type { Metadata } from "next"
import { FounderPortfolio } from "@/components/founder/founder-portfolio"

export const metadata: Metadata = {
  title: "Udit Gour | Founder & CEO of Quantavex",
  description:
    "Udit Gour is an AI researcher and founder building applied AI systems for learning, entertainment, and commerce at Quantavex.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen">
      <FounderPortfolio />
    </main>
  )
}
