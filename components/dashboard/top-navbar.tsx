"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { getPageMeta } from "@/lib/nav"
import { company } from "@/lib/company"
import { useSidebarState } from "@/components/dashboard/sidebar"

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
  const { setMobileOpen } = useSidebarState()

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return
    await onSearch(trimmedQuery)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08080a]/92 backdrop-blur-md">
      <div className="flex h-14 items-center gap-2 px-3 sm:h-16 sm:gap-3 sm:px-5 md:px-6">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-white/25 hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1 lg:hidden">
          <p className="truncate text-sm font-medium text-white">{page.title}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.14em] text-gray-500">{page.subtitle}</p>
        </div>

        <div className="hidden min-w-0 lg:block lg:max-w-xl xl:max-w-none">
          <p className="truncate text-sm font-medium text-white">{page.title}</p>
          <p className="truncate text-[10px] uppercase tracking-[0.18em] text-gray-500">{page.subtitle}</p>
        </div>

        <div className="hidden min-w-0 flex-1 sm:mx-4 sm:block md:mx-6 md:max-w-md">
          <form className="relative" onSubmit={handleSearchSubmit}>
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search platforms and research…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full border border-white/10 bg-white/[0.04] px-10 py-2 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white/25"
            />
          </form>
          <div className="mt-1 min-h-4">
            {searchStatus === "loading" && <p className="text-[10px] text-zinc-500">Searching…</p>}
            {searchStatus === "error" && searchError && (
              <p className="truncate text-[10px] text-red-400">{searchError}</p>
            )}
            {searchStatus === "success" && searchResponse && (
              <p className="truncate text-[10px] text-emerald-400">{searchResponse}</p>
            )}
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`mailto:${company.founder.email}`}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-white/10 px-2.5 text-[11px] font-medium text-gray-400 transition hover:border-white/25 hover:text-white sm:border-0 sm:px-0 sm:text-xs"
            title={company.founder.email}
          >
            <span className="sm:hidden">Mail</span>
            <span className="hidden max-w-[14rem] truncate sm:inline">{company.founder.email}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-3 py-1.5 sm:hidden">
        <form className="relative" onSubmit={handleSearchSubmit}>
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full border border-white/10 bg-white/[0.04] px-10 py-2 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/25"
          />
        </form>
      </div>
    </header>
  )
}
