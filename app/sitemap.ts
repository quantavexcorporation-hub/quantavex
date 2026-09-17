import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const pages = [
  "/",
  "/founder",
  "/quantrion",
  "/vdoc",
  "/exorax",
  "/intelligence",
  "/forecasting",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/founder" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/founder" ? 0.9 : 0.7,
  }))
}
