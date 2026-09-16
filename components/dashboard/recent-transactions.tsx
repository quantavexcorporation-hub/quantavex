import { recentLedger } from "@/lib/ledger"

export function RecentTransactions() {
  return (
    <section className="flex h-full flex-col rounded-xl border border-white/5 bg-[#101018]">
      <div className="border-b border-white/5 px-4 py-3">
        <h3 className="text-sm font-medium text-white">Recent Transactions</h3>
        <p className="text-xs text-gray-500">Cleared platform yield across the last 72 hours</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {recentLedger.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 border-b border-white/[0.04] px-4 py-3 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="font-mono text-xs text-cyan-300">{item.id}</p>
              <p className="truncate text-sm text-gray-200">{item.actor}</p>
              <p className="text-[11px] text-gray-500">
                {item.platform} · {item.date}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-semibold text-emerald-400">+${item.amount.toLocaleString("en-US")}</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
