"use client"

import { motion } from "framer-motion"
import { Zap, Twitter, Linkedin, Github, Mail } from "lucide-react"

const footerLinks = {
  Products: [
    { label: "Quantrion AI", href: "/#quantrion" },
    { label: "Vdoc AI", href: "/#vdoc" },
    { label: "ExoraX AI", href: "/#exorax" },
    { label: "API Access", href: "/#platform" },
  ],
  Company: [
    { label: "About", href: "/founder" },
    { label: "Founder", href: "/founder" },
    { label: "Careers", href: "/#investors" },
    { label: "Press", href: "/#markets" },
    { label: "Contact", href: "mailto:team@quantavex.ai" },
  ],
  Resources: [
    { label: "Documentation", href: "/#platform" },
    { label: "Blog", href: "/#markets" },
    { label: "Case Studies", href: "/#products" },
    { label: "Status", href: "/api/notifications" },
  ],
  Legal: [
    { label: "Privacy", href: "/#platform" },
    { label: "Terms", href: "/#platform" },
    { label: "Security", href: "/#platform" },
    { label: "Compliance", href: "/#platform" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:team@quantavex.ai", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_260)]" />
      
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Zap className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold">Quantavex</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Building intelligence infrastructure for the next generation of 
              adaptive AI experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 glass rounded-lg hover:bg-secondary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Quantavex. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
