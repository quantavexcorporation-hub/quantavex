"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Brain,
  Film,
  ShoppingCart,
  Zap,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react"
const menuItems: {
  id: string
  label: string
  icon: React.ElementType
}[] = [
  { id: "portfolio", label: "Udit Gour", icon: User },
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "quantrion", label: "Quantrion AI", icon: Brain },
  { id: "vdoc", label: "Vdoc AI", icon: Film },
  { id: "exorax", label: "ExoraX AI", icon: ShoppingCart },
  { id: "intelligence", label: "Intelligence", icon: Zap },
  { id: "fundraising", label: "Fund Raising", icon: DollarSign },
]

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 64 : 220 }}
      className="fixed left-0 top-0 h-screen bg-[#08080c] border-r border-cyan-500/10 z-50 flex flex-col"
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-cyan-500/10">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-white tracking-tight"
            >
              Quantavex
            </motion.span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${
                  isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"
                }`}
              />
              {!collapsed && (
                <span className="text-sm font-medium truncate">{item.label}</span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-12 flex items-center justify-center border-t border-cyan-500/10 text-gray-500 hover:text-cyan-400 transition-colors"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>
    </motion.aside>
  )
}
