export const pageMeta: Record<
  string,
  { title: string; subtitle: string }
> = {
  "/": {
    title: "Parent company",
    subtitle: "Quantavex — the company behind Quantrion, Vdoc, and ExoraX",
  },
  "/portfolio": {
    title: "Udit Gour",
    subtitle: "Founder & CEO",
  },
  "/quantrion": {
    title: "Quantrion",
    subtitle: "Exam intelligence engine — Diagnose, Adapt, Validate, Predict",
  },
  "/vdoc": {
    title: "Vdoc",
    subtitle: "Entertainment operating system — Speak. Enter. Shape worlds",
  },
  "/exorax": {
    title: "ExoraX",
    subtitle: "Decision commerce — built like an OS, felt like a film",
  },
  "/intelligence": {
    title: "Priority markets",
    subtitle: "Geographic focus for learning, entertainment, and commerce — not live telemetry",
  },
  "/forecasting": {
    title: "Fundraising",
    subtitle: "Pre-seed · Seed / Pre-Series A terms, use of funds, and 12-month roadmap",
  },
}

export function getPageMeta(pathname: string) {
  return pageMeta[pathname] ?? pageMeta["/"]
}
