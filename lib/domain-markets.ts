import type { ProductId } from "@/components/brand/product-logo"

/** Published domain revenue, USD millions. Statista Market Insights, 2026 forecast.
 * Not Quantavex sales, users, or live telemetry.
 * education = Online Education. media = Media. commerce = eCommerce (physical goods, B2C).
 */
export const domainSizeYear = 2026

export const domainSizeSource = "Statista Market Insights"

export const domainFields = [
  {
    id: "quantrion" as ProductId,
    key: "education" as const,
    product: "Quantrion",
    field: "Online education",
    detail: "Learning platforms, online university, certificates, and study preparation.",
  },
  {
    id: "vdoc" as ProductId,
    key: "media" as const,
    product: "Vdoc",
    field: "Media",
    detail: "Video, games, music, cinema, books, and press.",
  },
  {
    id: "exorax" as ProductId,
    key: "commerce" as const,
    product: "ExoraX",
    field: "eCommerce",
    detail: "Physical goods sold online to a private consumer.",
  },
]

export const domainSizeUsdMillions: Record<
  string,
  { education: number; media: number; commerce: number }
> = {
  IND: { education: 12170, media: 39600, commerce: 77660 },
  USA: { education: 82150, media: 648240, commerce: 1219250 },
  GBR: { education: 11180, media: 77290, commerce: 137620 },
  SGP: { education: 2180, media: 3600, commerce: 5900 },
  DEU: { education: 9080, media: 69150, commerce: 110090 },
  JPN: { education: 4200, media: 112930, commerce: 198190 },
  AUS: { education: 6620, media: 26740, commerce: 39680 },
  CAN: { education: 6080, media: 34850, commerce: 71430 },
  FRA: { education: 4790, media: 39260, commerce: 76100 },
  KOR: { education: 6820, media: 29830, commerce: 82650 },
  CHE: { education: 2710, media: 11430, commerce: 15870 },
  NLD: { education: 2950, media: 12400, commerce: 37650 },
  ARE: { education: 2870, media: 2550, commerce: 7330 },
  SWE: { education: 1840, media: 8800, commerce: 16450 },
  NOR: { education: 1800, media: 6280, commerce: 9650 },
  ITA: { education: 5080, media: 30160, commerce: 66900 },
  ESP: { education: 5760, media: 18620, commerce: 39390 },
  IRL: { education: 3140, media: 3980, commerce: 6660 },
  ISR: { education: 1550, media: 4070, commerce: 7250 },
  NZL: { education: 829.78, media: 3230, commerce: 6080 },
  BEL: { education: 1670, media: 7790, commerce: 10230 },
  AUT: { education: 1090, media: 7820, commerce: 12850 },
  DNK: { education: 1040, media: 5810, commerce: 9340 },
  FIN: { education: 842.76, media: 3960, commerce: 7780 },
  SAU: { education: 5510, media: 5870, commerce: 15970 },
  MYS: { education: 1280, media: 3960, commerce: 9530 },
  POL: { education: 2040, media: 9900, commerce: 24090 },
  MEX: { education: 4420, media: 18550, commerce: 38640 },
  IDN: { education: 3210, media: 10750, commerce: 45770 },
  BRA: { education: 13780, media: 28720, commerce: 36870 },
}

export function formatDomainUsd(usdMillions: number) {
  if (usdMillions >= 1_000_000) {
    return `$${(usdMillions / 1_000_000).toFixed(2)}T`
  }
  if (usdMillions >= 1000) {
    return `$${(usdMillions / 1000).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}B`
  }
  return `$${usdMillions.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}M`
}

export function countryDomainSizes(code: string) {
  const row = domainSizeUsdMillions[code]
  if (!row) return null
  return domainFields.map((field) => ({
    ...field,
    usdMillions: row[field.key],
    label: formatDomainUsd(row[field.key]),
  }))
}
