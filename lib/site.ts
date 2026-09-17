/** Public paths shared across Quantavex marketing + dashboard. */
export const FOUNDER_PORTFOLIO_PATH = "/founder"

/** Canonical site URL for sitemap, robots, and metadata. Set NEXT_PUBLIC_SITE_URL on Vercel to the custom domain. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://quantavex.vercel.app"
).replace(/\/$/, "")

/**
 * Live product URLs. Leave empty until each platform is deployed.
 * Set NEXT_PUBLIC_QUANTRION_URL, NEXT_PUBLIC_VDOC_URL, NEXT_PUBLIC_EXORAX_URL
 * in .env.local to turn "Launching soon" into Open platform.
 */
export const productLiveUrls = {
  quantrion: process.env.NEXT_PUBLIC_QUANTRION_URL ?? "",
  vdoc: process.env.NEXT_PUBLIC_VDOC_URL ?? "",
  exorax: process.env.NEXT_PUBLIC_EXORAX_URL ?? "",
} as const
