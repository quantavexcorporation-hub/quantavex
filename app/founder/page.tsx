import type { Metadata } from "next"
import { FounderPortfolio } from "@/components/founder/founder-portfolio"

export const metadata: Metadata = {
  title: "Udit Gour | Founder & CEO of Quantavex",
  description:
    "Udit Gour is founder and CEO of Quantavex, specifying intelligence systems for learning, entertainment, and commerce.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen">
      <FounderPortfolio />
    </main>
  )
}
