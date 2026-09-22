import { Clock, ExternalLink, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { getProduct } from "@/lib/products"
import type { ProductId } from "@/components/brand/product-logo"

function displayHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "")
  } catch {
    return url.replace(/^https?:\/\//, "")
  }
}

export function ProductWebsiteLink({
  productId,
  variant = "ghost",
  className,
}: {
  productId: ProductId
  variant?: "header" | "chip" | "ghost" | "row"
  className?: string
}) {
  const product = getProduct(productId)
  const live = Boolean(product.liveUrl)

  if (live) {
    const styles = {
      header:
        "inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#061016] shadow-[0_8px_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300",
      chip: "inline-flex items-center gap-1.5 rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/12",
      ghost: "inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition hover:text-cyan-200",
      row: "inline-flex min-w-0 items-center gap-2 rounded-lg border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/15",
    }

    return (
      <a
        href={product.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(styles[variant], className)}
      >
        <ExternalLink className={variant === "header" || variant === "row" ? "h-4 w-4 shrink-0" : "h-3.5 w-3.5 shrink-0"} />
        <span className="truncate">{variant === "row" ? displayHost(product.liveUrl) : "View software machine"}</span>
      </a>
    )
  }

  const pending = {
    header:
      "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-400",
    chip: "inline-flex items-center gap-1.5 px-2 text-[11px] text-gray-500",
    ghost: "inline-flex items-center gap-1.5 text-xs text-gray-500",
    row: "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-400",
  }

  return (
    <span className={cn(pending[variant], className)}>
      {variant === "chip" ? <Clock className="h-3.5 w-3.5" /> : <Globe className={variant === "header" || variant === "row" ? "h-4 w-4" : "h-3.5 w-3.5"} />}
      Website launching soon
    </span>
  )
}
