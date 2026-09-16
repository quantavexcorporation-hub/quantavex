"use client"

import { Clock, Download, ExternalLink } from "lucide-react"

const ctaClass =
  "inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#061016] shadow-[0_8px_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"

export function PageHeader({
  title,
  subtitle,
  actionLabel,
  onAction,
  actionHref,
  actionDisabled,
  mark,
  brand,
  extra,
}: {
  title: string
  subtitle: string
  actionLabel?: string
  onAction?: () => void
  actionHref?: string
  actionDisabled?: boolean
  mark?: React.ReactNode
  brand?: string
  extra?: React.ReactNode
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {brand && mark ? (
          <>
            <div className="flex items-center gap-3">
              {mark}
              <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">{brand}</p>
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-[2rem]">{title}</h1>
          </>
        ) : (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">Quantavex</p>
            <div className="mt-1 flex items-center gap-3">
              {mark}
              <h1 className="text-2xl font-semibold tracking-tight text-white md:text-[2rem]">{title}</h1>
            </div>
          </>
        )}
        <p className="mt-1 max-w-3xl text-sm text-gray-400">{subtitle}</p>
      </div>
      {(actionLabel || extra) && (
        <div className="flex flex-wrap items-center gap-2">
          {extra}
          {actionLabel && actionDisabled ? (
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-400">
              <Clock className="h-4 w-4" />
              {actionLabel}
            </span>
          ) : actionLabel && actionHref ? (
            <a
              href={actionHref}
              {...(actionHref.startsWith("http") || actionHref.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={ctaClass}
            >
              <ExternalLink className="h-4 w-4" />
              {actionLabel}
            </a>
          ) : actionLabel && onAction ? (
            <button onClick={onAction} className={ctaClass}>
              <Download className="h-4 w-4" />
              {actionLabel}
            </button>
          ) : null}
        </div>
      )}
    </div>
  )
}
