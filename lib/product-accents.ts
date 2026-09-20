import type { ProductId } from "@/components/brand/product-logo"

/**
 * Logo-matched accents:
 * - Quantrion: teal from the Q mark (#0296AE family)
 * - Vdoc: oxblood/rose from the mark (#48000C / #B51841)
 * - ExoraX: silver/zinc from the metallic disc (#909090 / #D4D4D8)
 */
export const productAccents: Record<
  ProductId,
  {
    text: string
    textSoft: string
    border: string
    borderHover: string
    chip: string
    glow: string
    solid: string
    solidFg: string
    side: string
    active: string
    activeDot: string
    shadow: string
    hex: string
  }
> = {
  quantrion: {
    text: "text-teal-300",
    textSoft: "text-teal-400",
    border: "border-teal-500/25",
    borderHover: "border-teal-500/25 hover:border-teal-400/45",
    chip: "bg-teal-400/10 text-teal-200",
    glow: "from-teal-500/15",
    solid: "bg-teal-400",
    solidFg: "bg-teal-400 text-[#041016]",
    side: "bg-teal-400",
    active:
      "border-teal-400/35 bg-teal-400/10 text-teal-200 shadow-[inset_0_0_18px_rgba(45,212,191,0.1)]",
    activeDot: "bg-teal-300",
    shadow: "shadow-[0_8px_24px_rgba(45,212,191,0.22)]",
    hex: "#2dd4bf",
  },
  vdoc: {
    text: "text-rose-300",
    textSoft: "text-rose-400",
    border: "border-rose-500/25",
    borderHover: "border-rose-500/25 hover:border-rose-400/45",
    chip: "bg-rose-400/10 text-rose-200",
    glow: "from-rose-500/15",
    solid: "bg-rose-500",
    solidFg: "bg-rose-500 text-white",
    side: "bg-rose-500",
    active:
      "border-rose-500/35 bg-rose-500/10 text-rose-200 shadow-[inset_0_0_18px_rgba(244,63,94,0.1)]",
    activeDot: "bg-rose-400",
    shadow: "shadow-[0_8px_24px_rgba(244,63,94,0.22)]",
    hex: "#f43f5e",
  },
  exorax: {
    text: "text-zinc-300",
    textSoft: "text-zinc-400",
    border: "border-zinc-400/30",
    borderHover: "border-zinc-400/25 hover:border-zinc-300/50",
    chip: "bg-zinc-400/10 text-zinc-200",
    glow: "from-zinc-400/15",
    solid: "bg-zinc-300",
    solidFg: "bg-zinc-300 text-[#0a0a0c]",
    side: "bg-zinc-300",
    active:
      "border-zinc-400/40 bg-zinc-400/10 text-zinc-100 shadow-[inset_0_0_18px_rgba(212,212,216,0.1)]",
    activeDot: "bg-zinc-300",
    shadow: "shadow-[0_8px_24px_rgba(212,212,216,0.16)]",
    hex: "#d4d4d8",
  },
}

export function getProductAccent(id: ProductId) {
  return productAccents[id]
}
