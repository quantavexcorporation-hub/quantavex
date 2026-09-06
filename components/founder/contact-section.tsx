"use client"

import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import { Reveal } from "@/components/founder/reveal"
import { Button } from "@/components/ui/button"

const socials = [
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <Reveal className="" delayMs={0}>
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              Contact
            </span>
            <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-balance">{"Let's Build the Future"}</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Whether you have a groundbreaking idea, a research collaboration
              proposal, or want to explore what AI can do for your business — reach out.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
              <a
                href="mailto:hello@uditgour.com"
                className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 transition-colors group-hover:border-primary/30 sm:h-10 sm:w-10">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">hello@uditgour.com</span>
              </a>

              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary sm:h-10 sm:w-10"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal delayMs={120}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 rounded-xl border border-border/50 bg-card/30 p-5 backdrop-blur-sm sm:gap-5 sm:p-8"
            >
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border/50 bg-secondary/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/20 sm:px-4 sm:py-3"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border/50 bg-secondary/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/20 sm:px-4 sm:py-3"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-lg border border-border/50 bg-secondary/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/30 focus:outline-none focus:ring-1 focus:ring-primary/20 sm:px-4 sm:py-3"
                />
              </div>

              <Button type="submit" className="founder-button mt-1 w-full rounded-lg sm:mt-2 sm:py-3">
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
