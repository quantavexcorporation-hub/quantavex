"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { getPageMeta } from "@/lib/nav"
import { company, investorMailto } from "@/lib/company"

interface TopNavbarProps {
  onNotificationsClick: () => Promise<void> | void
  onSearch: (query: string) => Promise<void>
  searchResponse: string
  searchStatus: "idle" | "loading" | "success" | "error"
  searchError: string | null
}

export function TopNavbar({
  onSearch,
  searchResponse,
  searchStatus,
  searchError,
}: TopNavbarProps) {
  const pathname = usePathname()
  const page = getPageMeta(pathname)
  const [query, setQuery] = useState("")

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return
    await onSearch(trimmedQuery)
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-cyan-500/10 bg-[#08080c]/90 px-6 backdrop-blur-md">
      <div className="hidden min-w-0 lg:block">
        <p className="truncate text-sm font-medium text-white">{page.title}</p>
        <p className="truncate text-[10px] uppercase tracking-[0.18em] text-gray-500">{page.subtitle}</p>
      </div>

      <div className="mx-8 max-w-md flex-1">
        <form className="relative" onSubmit={handleSearchSubmit}>
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search platforms and research…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded border border-cyan-500/10 bg-white/5 px-10 py-2 text-sm text-white placeholder:text-gray-600 transition-all focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/20 focus:outline-none"
          />
        </form>
        <div className="mt-1 min-h-4">
          {searchStatus === "loading" && <p className="text-[10px] text-cyan-400">Searching…</p>}
          {searchStatus === "error" && searchError && (
            <p className="truncate text-[10px] text-red-400">{searchError}</p>
          )}
          {searchStatus === "success" && searchResponse && (
            <p className="truncate text-[10px] text-emerald-400">{searchResponse}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {pathname === "/forecasting" ? (
          <span className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium tracking-wider text-cyan-300 uppercase sm:inline">
            {company.stage}
          </span>
        ) : null}
        <a
          href={
            pathname === "/forecasting"
              ? investorMailto("conversation")
              : `mailto:${company.founder.email}`
          }
          className="text-xs font-medium text-gray-400 transition hover:text-cyan-300"
        >
          {company.founder.email}
        </a>
      </div>
    </header>
  )
}
