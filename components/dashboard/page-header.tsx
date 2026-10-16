"use client"

import { Clock, Download, ExternalLink } from "lucide-react"

const ctaClass =
  "inline-flex items-center gap-2 border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"

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
    <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
      <div className="min-w-0 flex-1">
        {brand && mark ? (
          <>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="shrink-0">{mark}</span>
              <p className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">{brand}</p>
            </div>
            <h1 className="mt-2 text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl md:text-[2rem]">{title}</h1>
          </>
        ) : (
          <>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">Quantavex</p>
            <div className="mt-1 flex items-center gap-2.5 sm:gap-3">
              {mark ? <span className="shrink-0">{mark}</span> : null}
              <h1 className="text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl md:text-[2rem]">{title}</h1>
            </div>
          </>
        )}
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400">{subtitle}</p>
      </div>
      {(actionLabel || extra) && (
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          {extra}
          {actionLabel && actionDisabled ? (
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-400 sm:w-auto sm:justify-start sm:py-2">
              <Clock className="h-4 w-4 shrink-0" />
              {actionLabel}
            </span>
          ) : actionLabel && actionHref ? (
            <a
              href={actionHref}
              {...(actionHref.startsWith("http") || actionHref.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`${ctaClass} w-full justify-center sm:w-auto sm:justify-start`}
            >
              <ExternalLink className="h-4 w-4 shrink-0" />
              {actionLabel}
            </a>
          ) : actionLabel && onAction ? (
            <button onClick={onAction} className={`${ctaClass} w-full justify-center sm:w-auto sm:justify-start`}>
              <Download className="h-4 w-4 shrink-0" />
              {actionLabel}
            </button>
          ) : null}
        </div>
      )}
    </div>
  )
}
