import { cn } from "@/lib/utils"

export function Panel({
  children,
  className,
  padded = true,
}: {
  children: React.ReactNode
  className?: string
  padded?: boolean
}) {
  return (
    <section
      className={cn(
        "rounded-xl border border-cyan-500/10 bg-[#0c0c14]/90 shadow-[0_0_0_1px_rgba(34,211,238,0.03)] backdrop-blur-sm",
        padded && "p-4",
        className
      )}
    >
      {children}
    </section>
  )
}

export function PanelHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div>
        <h3 className="text-sm font-medium text-white">{title}</h3>
        {subtitle ? <p className="text-xs text-gray-500">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}
