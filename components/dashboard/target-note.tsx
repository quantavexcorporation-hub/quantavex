import { cn } from "@/lib/utils"
import { company } from "@/lib/company"

export function TargetNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "rounded-md border border-amber-400/20 bg-amber-400/10 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-200/90",
        className
      )}
    >
      Target — not yet achieved
    </p>
  )
}

export function TargetBanner({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs leading-relaxed text-amber-100/90",
        className
      )}
    >
      {company.targetDisclaimer}
    </p>
  )
}
