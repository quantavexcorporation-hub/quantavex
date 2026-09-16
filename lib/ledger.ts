export interface LedgerEntry {
  id: string
  platform: "Quantrion" | "Vdoc" | "ExoraX"
  actor: string
  date: string
  amount: number
  status: "Cleared" | "Pending" | "Routed"
}

export const recentLedger: LedgerEntry[] = [
  { id: "QNT-8821", platform: "Quantrion", actor: "Cohort 12", date: "2026-09-14", amount: 1240, status: "Cleared" },
  { id: "VDC-4410", platform: "Vdoc", actor: "Scene 4 render", date: "2026-09-14", amount: 860, status: "Cleared" },
  { id: "EXX-3301", platform: "ExoraX", actor: "Checkout path", date: "2026-09-14", amount: 2140, status: "Cleared" },
  { id: "QNT-8804", platform: "Quantrion", actor: "Mastery graph", date: "2026-09-13", amount: 640, status: "Routed" },
  { id: "EXX-3294", platform: "ExoraX", actor: "Catalog rank", date: "2026-09-13", amount: 1780, status: "Cleared" },
  { id: "VDC-4388", platform: "Vdoc", actor: "Retention score", date: "2026-09-13", amount: 920, status: "Pending" },
  { id: "QNT-8791", platform: "Quantrion", actor: "Quiz synthesis", date: "2026-09-12", amount: 510, status: "Cleared" },
  { id: "EXX-3270", platform: "ExoraX", actor: "Fraud shield", date: "2026-09-12", amount: 430, status: "Cleared" },
]

export function downloadCsv(filename: string, headers: string[], rows: Array<Array<string | number>>) {
  const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
