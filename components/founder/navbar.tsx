"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

import { FOUNDER_PORTFOLIO_PATH } from "@/lib/site"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Ventures", href: "#ventures" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  // The portfolio also renders inside the dashboard shell, where the logo should
  // pop the site out on its own. On the standalone route it just scrolls to top.
  const isStandalone = usePathname() === FOUNDER_PORTFOLIO_PATH

  return (
    // Sticky rather than fixed: the portfolio renders inside the dashboard's
    // scroll container, so viewport-fixed positioning would cover the shell.
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={isStandalone ? "#" : FOUNDER_PORTFOLIO_PATH}
          target={isStandalone ? undefined : "_blank"}
          rel={isStandalone ? undefined : "noopener noreferrer"}
          aria-label={isStandalone ? "Back to top" : "Open the Udit Gour portfolio in a new tab"}
          className="font-mono text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          UG<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          variant="ghost"
          size="icon"
          className="founder-button text-muted-foreground hover:text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="border-b border-border/50 bg-background/80 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
