export function CampaignCard() {
  const percent = 0.79
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - percent)

  return (
    <section className="h-full rounded-xl border border-white/5 bg-[#101018] p-4">
      <h3 className="text-sm font-medium text-white">Campaign</h3>
      <p className="text-xs text-gray-500">Forward operating yield</p>
      <div className="mt-6 flex items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="64" textAnchor="middle" className="fill-white" fontSize="18" fontFamily="monospace">
            79%
          </text>
        </svg>
      </div>
      <p className="mt-2 text-center font-mono text-xl text-white">$48,352</p>
      <p className="mt-1 text-center text-xs text-gray-500">Revenue generated this cycle, including platform overlays.</p>
    </section>
  )
}
