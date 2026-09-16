import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quantavex | Company operating system",
  description:
    "Company operating system for Quantrion, Vdoc, and ExoraX.",
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>
}
