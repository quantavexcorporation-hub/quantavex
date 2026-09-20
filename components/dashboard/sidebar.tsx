"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { QuantavexLogo } from "@/components/brand/quantavex-logo"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import {
  LayoutDashboard,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  User,
  X,
} from "lucide-react"

type NavItem = {
  href: string
  label: string
  icon?: React.ElementType
  product?: ProductId
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Founder",
    items: [{ href: "/portfolio", label: "Udit Gour", icon: User }],
  },
  {
    label: "Company",
    items: [
      { href: "/", label: "Overview", icon: LayoutDashboard },
    ],
  },
  {
    label: "Platforms",
    items: [
      { href: "/quantrion", label: "Quantrion", product: "quantrion" },
      { href: "/vdoc", label: "Vdoc", product: "vdoc" },
      { href: "/exorax", label: "ExoraX", product: "exorax" },
    ],
  },
  {
    label: "Insights",
    items: [
      { href: "/intelligence", label: "Priority markets", icon: Zap },
      { href: "/forecasting", label: "Fundraising", icon: TrendingUp },
    ],
  },
]

const SidebarState = createContext({
  collapsed: false,
  setCollapsed: (_value: boolean) => {},
  mobileOpen: false,
  setMobileOpen: (_value: boolean) => {},
})

export function useSidebarState() {
  return useContext(SidebarState)
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <SidebarState.Provider value={{ collapsed, setCollapsed, mobileOpen, setMobileOpen }}>
      {children}
    </SidebarState.Provider>
  )
}

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const { collapsed } = useSidebarState()
  const compact = collapsed && !onNavigate

  return (
    <>
      <div className="flex h-16 items-center gap-3 border-b border-cyan-500/10 px-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          title="Quantavex"
          onClick={onNavigate}
        >
          <QuantavexLogo size={compact ? 40 : 44} priority className="shrink-0" />
          {!compact && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-white">Quantavex</p>
              <p className="truncate text-[10px] uppercase tracking-[0.18em] text-cyan-400/70">
                Parent company
              </p>
            </div>
          )}
        </Link>
        {onNavigate ? (
          <button
            type="button"
            onClick={onNavigate}
            className="ml-auto rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!compact && (
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                {group.label}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                const accent = item.product ? productAccents[item.product] : null
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href.startsWith("/#")
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    onClick={() => {
                      if (item.href.includes("#contact")) {
                        requestAnimationFrame(() =>
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        )
                      }
                      onNavigate?.()
                    }}
                    className={`group relative flex items-center gap-3 overflow-hidden rounded-lg border px-3 py-2.5 transition-all duration-200 ${
                      isActive
                        ? accent?.active ??
                          "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[inset_0_0_18px_rgba(34,211,238,0.08)]"
                        : "border-transparent text-gray-400 hover:border-white/5 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {accent ? (
                      <span
                        aria-hidden
                        className={`absolute inset-y-1.5 left-0 w-[3px] rounded-full ${accent.side} ${
                          isActive ? "opacity-100" : "opacity-75"
                        }`}
                      />
                    ) : null}
                    {item.product ? (
                      <ProductLogo product={item.product} size={28} />
                    ) : Icon ? (
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          isActive ? "text-cyan-300" : "text-gray-500 group-hover:text-cyan-400"
                        }`}
                      />
                    ) : null}
                    {!compact && <span className="text-sm font-medium leading-tight">{item.label}</span>}
                    {isActive && !compact && (
                      <span
                        className={`ml-auto h-1.5 w-1.5 rounded-full ${accent?.activeDot ?? "bg-cyan-300"}`}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </>
  )
}

export function Sidebar() {
  const { collapsed, setCollapsed, mobileOpen, setMobileOpen } = useSidebarState()

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 76 : 248 }}
        className="relative z-40 hidden h-[100dvh] shrink-0 flex-col border-r border-cyan-500/10 bg-[#07070c] lg:flex"
      >
        <NavContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-12 items-center justify-center border-t border-cyan-500/10 text-gray-500 transition-colors hover:text-cyan-400"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </motion.aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[min(280px,86vw)] flex-col border-r border-cyan-500/10 bg-[#07070c] shadow-2xl lg:hidden"
            >
              <NavContent onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
