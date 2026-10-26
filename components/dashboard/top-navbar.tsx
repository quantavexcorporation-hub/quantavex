"use client"

import { useEffect, useId, useMemo, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { getPageMeta } from "@/lib/nav"
import { company } from "@/lib/company"
import { searchSite } from "@/lib/site-search"
import { useSidebarState } from "@/components/dashboard/sidebar"

interface TopNavbarProps {
  onNotificationsClick: () => Promise<void> | void
}

function SiteSearch({ placeholder }: { placeholder: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const results = useMemo(() => searchSite(query), [query])
  const showPanel = open && query.trim().length > 0

  useEffect(() => {
    setQuery("")
    setOpen(false)
    setActiveIndex(0)
  }, [pathname])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!showPanel) return
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [showPanel])

  const goTo = (href: string) => {
    setOpen(false)
    setQuery("")
    router.push(href)
  }

  return (
    <div ref={rootRef} className="relative w-full">
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault()
          const hit = results[activeIndex] ?? results[0]
          if (hit) goTo(hit.href)
        }}
      >
        <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          aria-label="Search platforms and research"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false)
              return
            }
            if (!showPanel || results.length === 0) return
            if (event.key === "ArrowDown") {
              event.preventDefault()
              setActiveIndex((index) => (index + 1) % results.length)
            } else if (event.key === "ArrowUp") {
              event.preventDefault()
              setActiveIndex((index) => (index - 1 + results.length) % results.length)
            }
          }}
          className="w-full border border-white/10 bg-white/[0.04] px-10 py-2 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white/25"
        />
      </form>

      {showPanel && (
        <div
          id={listId}
          role="listbox"
          className="absolute top-[calc(100%+8px)] right-0 z-50 max-h-[min(24rem,70vh)] w-[min(28rem,calc(100vw-1.5rem))] overflow-y-auto rounded-lg border border-white/10 bg-[#0c0c0e] shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
        >
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-zinc-500">Nothing on this site matches “{query.trim()}”.</p>
          ) : (
            <ul>
              {results.map((hit, index) => {
                const active = index === activeIndex
                return (
                  <li key={hit.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => goTo(hit.href)}
                      className={`block w-full px-3 py-2.5 text-left transition ${active ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"}`}
                    >
                      <span className="text-[10px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                        {hit.kind}
                      </span>
                      <span className="mt-0.5 block text-sm text-white">{hit.title}</span>
                      <span className="mt-0.5 block truncate text-xs text-zinc-500">{hit.detail}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export function TopNavbar({}: TopNavbarProps) {
  const pathname = usePathname()
  const page = getPageMeta(pathname)
  const { setMobileOpen } = useSidebarState()

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

        <div className="hidden min-w-[14rem] flex-1 sm:mx-4 sm:block md:mx-6 md:max-w-md">
          <SiteSearch placeholder="Search platforms and research…" />
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
        <SiteSearch placeholder="Search…" />
      </div>
    </header>
  )
}
