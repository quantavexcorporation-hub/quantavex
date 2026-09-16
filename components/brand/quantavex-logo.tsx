import Image from "next/image"
import { cn } from "@/lib/utils"

export function QuantavexLogo({
  size = 40,
  className,
  priority = false,
}: {
  size?: number
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/quantavex-logo.jpg"
      alt="Quantavex"
      width={size}
      height={size}
      priority={priority}
      className={cn(
        "rounded-full object-cover ring-1 ring-[#d4af37]/40 shadow-[0_0_22px_rgba(212,175,55,0.22)]",
        className
      )}
    />
  )
}
