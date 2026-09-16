"use client"

import { Mail } from "lucide-react"
import { QuantavexLogo } from "@/components/brand/quantavex-logo"
import { FOUNDER_PORTFOLIO_PATH } from "@/lib/site"
import { company } from "@/lib/company"

const footerLinks = {
  Platforms: [
    { label: "Quantrion", href: "/quantrion" },
    { label: "Vdoc", href: "/vdoc" },
    { label: "ExoraX", href: "/exorax" },
  ],
  Company: [
    { label: "Overview", href: "/" },
    { label: "Founder", href: FOUNDER_PORTFOLIO_PATH },
    { label: "Fundraising", href: "/forecasting" },
    { label: "Company paper", href: company.paperPdf },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_260)]" />
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <QuantavexLogo size={40} />
              <span className="text-xl font-bold">Quantavex</span>
            </div>
            <p className="mb-6 max-w-xs text-sm text-muted-foreground">
              Founder-led company behind Quantrion, Vdoc, and ExoraX.
            </p>
            <a
              href={`mailto:${company.founder.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              {company.founder.email}
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.endsWith(".pdf")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Quantavex. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">{company.headquarters}</p>
        </div>
      </div>
    </footer>
  )
}
