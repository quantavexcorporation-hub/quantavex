"use client"

import { createContext, useContext, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { QuantavexLogo } from "@/components/brand/quantavex-logo"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import {
  LayoutDashboard,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  User,
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
    items: [{ href: "/", label: "Overview", icon: LayoutDashboard }],
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
})

export function useSidebarState() {
  return useContext(SidebarState)
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <SidebarState.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarState.Provider>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const { collapsed, setCollapsed } = useSidebarState()

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 76 : 248 }}
      className="relative z-40 flex h-screen shrink-0 flex-col border-r border-cyan-500/10 bg-[#07070c]"
    >
      <div className="flex h-16 items-center gap-3 border-b border-cyan-500/10 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" title="Quantavex">
          <QuantavexLogo size={collapsed ? 40 : 44} priority className="shrink-0" />
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-white">Quantavex</p>
              <p className="truncate text-[10px] uppercase tracking-[0.18em] text-cyan-400/70">Company OS</p>
            </div>
          )}
        </Link>
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                {group.label}
              </p>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    className={`group flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all duration-200 ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[inset_0_0_18px_rgba(34,211,238,0.08)]"
                        : "border-transparent text-gray-400 hover:border-white/5 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.product ? (
                      <ProductLogo product={item.product} size={28} />
                    ) : Icon ? (
                      <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-cyan-300" : "text-gray-500 group-hover:text-cyan-400"}`} />
                    ) : null}
                    {!collapsed && (
                      <span className="text-sm font-medium leading-tight">{item.label}</span>
                    )}
                    {isActive && !collapsed && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-12 items-center justify-center border-t border-cyan-500/10 text-gray-500 transition-colors hover:text-cyan-400"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </button>
    </motion.aside>
  )
}
