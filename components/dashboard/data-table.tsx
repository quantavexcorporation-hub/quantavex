"use client"

import { useMemo, useState } from "react"
import { ArrowUpDown, ChevronLeft, ChevronRight, Search } from "lucide-react"

export function DataTable<T extends Record<string, string | number>>({
  columns,
  rows,
  searchKeys,
  pageSize = 8,
}: {
  columns: { key: keyof T; label: string; align?: "left" | "right" }[]
  rows: T[]
  searchKeys?: (keyof T)[]
  pageSize?: number
}) {
  const [query, setQuery] = useState("")
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const searched = q
      ? rows.filter((row) =>
          (searchKeys ?? columns.map((column) => column.key)).some((key) =>
            String(row[key]).toLowerCase().includes(q)
          )
        )
      : rows

    if (!sortKey) return searched

    return [...searched].sort((a, b) => {
      const left = a[sortKey]
      const right = b[sortKey]
      if (typeof left === "number" && typeof right === "number") {
        return sortDir === "asc" ? left - right : right - left
      }
      return sortDir === "asc"
        ? String(left).localeCompare(String(right))
        : String(right).localeCompare(String(left))
    })
  }, [columns, query, rows, searchKeys, sortDir, sortKey])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount - 1)
  const paged = filtered.slice(currentPage * pageSize, currentPage * pageSize + pageSize)

  return (
    <div>
      <div className="mb-3 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setPage(0)
          }}
          placeholder="Search records..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
        />
        <span className="text-[10px] font-mono text-gray-600">{filtered.length} rows</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-cyan-500/10">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-2 pb-2 text-[10px] font-mono uppercase tracking-wider text-gray-500 ${
                    column.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  <button
                    className="inline-flex items-center gap-1 hover:text-cyan-400"
                    onClick={() => {
                      if (sortKey === column.key) {
                        setSortDir((dir) => (dir === "asc" ? "desc" : "asc"))
                      } else {
                        setSortKey(column.key)
                        setSortDir("asc")
                      }
                    }}
                  >
                    {column.label}
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-2 py-8 text-center text-sm text-gray-500">
                  No records yet.
                </td>
              </tr>
            ) : (
              paged.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/[0.04] text-sm text-gray-300 transition-colors hover:bg-white/[0.03]"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className={`px-2 py-3 ${column.align === "right" ? "text-right font-mono text-white" : "text-left"}`}
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <p>
          {filtered.length === 0
            ? "0–0 of 0"
            : `${currentPage * pageSize + 1}–${Math.min((currentPage + 1) * pageSize, filtered.length)} of ${filtered.length}`}
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage === 0}
            onClick={() => setPage((value) => Math.max(0, value - 1))}
            className="rounded-md border border-white/10 p-1.5 text-gray-300 transition hover:border-cyan-400/40 hover:text-white disabled:opacity-30"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[4.5rem] text-center font-mono text-[11px] text-gray-400">
            {currentPage + 1} / {pageCount}
          </span>
          <button
            type="button"
            disabled={currentPage >= pageCount - 1}
            onClick={() => setPage((value) => Math.min(pageCount - 1, value + 1))}
            className="rounded-md border border-white/10 p-1.5 text-gray-300 transition hover:border-cyan-400/40 hover:text-white disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
