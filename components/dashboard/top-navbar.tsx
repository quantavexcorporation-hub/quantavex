"use client"

import { useState, useEffect } from "react"
import { Search, Bell, Activity } from "lucide-react"
import { motion } from "framer-motion"

interface TopNavbarProps {
  onNotificationsClick: () => Promise<void> | void
  onSearch: (query: string) => Promise<void>
  searchResponse: string
  searchStatus: "idle" | "loading" | "success" | "error"
  searchError: string | null
}

export function TopNavbar({
  onNotificationsClick,
  onSearch,
  searchResponse,
  searchStatus,
  searchError,
}: TopNavbarProps) {
  const [status, setStatus] = useState<"active" | "processing">("active")
  const [time, setTime] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Toggle status for demo
    const statusInterval = setInterval(() => {
      setStatus((prev) => (prev === "active" ? "processing" : "active"))
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(statusInterval)
    }
  }, [])

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return
    await onSearch(trimmedQuery)
  }

  return (
    <header className="h-14 bg-[#08080c]/90 backdrop-blur-sm border-b border-cyan-500/10 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Left - System Status */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              backgroundColor: status === "active" ? "#22d3ee" : "#a855f7",
              boxShadow:
                status === "active"
                  ? "0 0 12px rgba(34, 211, 238, 0.5)"
                  : "0 0 12px rgba(168, 85, 247, 0.5)",
            }}
            className="w-2 h-2 rounded-full"
          />
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
            System:{" "}
            <span className={status === "active" ? "text-cyan-400" : "text-purple-400"}>
              {status}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Activity className="w-4 h-4" />
          <span className="text-xs font-mono">{time} UTC</span>
        </div>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <form className="relative" onSubmit={handleSearchSubmit}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search modules, data, analytics..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-white/5 border border-cyan-500/10 rounded px-10 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/20 transition-all"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">
            Enter
          </kbd>
        </form>
        <div className="mt-1 min-h-4">
          {searchStatus === "loading" && (
            <p className="text-[10px] text-cyan-400">Running AI query...</p>
          )}
          {searchStatus === "error" && searchError && (
            <p className="text-[10px] text-red-400 truncate">{searchError}</p>
          )}
          {searchStatus === "success" && searchResponse && (
            <p className="text-[10px] text-emerald-400 truncate">{searchResponse}</p>
          )}
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => void onNotificationsClick()}
          className="relative p-2 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full" />
        </button>
      </div>
    </header>
  )
}
