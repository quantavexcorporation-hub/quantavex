import Image from "next/image"
import { cn } from "@/lib/utils"

export type ProductId = "quantrion" | "vdoc" | "exorax"

const logos: Record<ProductId, { src: string; alt: string; shape: string }> = {
  quantrion: {
    src: "/quantrion-logo.jpg",
    alt: "Quantrion",
    shape: "rounded-lg object-cover",
  },
  vdoc: {
    src: "/vdoc-logo.png",
    alt: "Vdoc",
    shape: "rounded-md object-cover",
  },
  exorax: {
    src: "/exorax-logo.webp",
    alt: "ExoraX",
    shape: "rounded-full object-cover",
  },
}

export function ProductLogo({
  product,
  size = 24,
  className,
  decorative = false,
}: {
  product: ProductId
  size?: number
  className?: string
  decorative?: boolean
}) {
  const logo = logos[product]

  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={size}
      height={size}
      className={cn("shrink-0", logo.shape, className)}
      style={{ width: size, height: size }}
    />
  )
}
