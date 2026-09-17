import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quantavex | Parent company",
  description:
    "Quantavex is the parent company behind Quantrion, Vdoc, and ExoraX.",
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>
}
