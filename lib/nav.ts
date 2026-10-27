export const pageMeta: Record<
  string,
  { title: string; subtitle: string }
> = {
  "/": {
    title: "Parent company",
    subtitle: "Parent Company · Central Vision · Shared API Infrastructure",
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
    subtitle: "India first. Thirty markets. Education, entertainment, and commerce.",
  },
  "/forecasting": {
    title: "Roadmap",
    subtitle: "18 months to April 2028 — 12 million registrations, ExoraX 6 million",
  },
  "/quantrion/architecture": {
    title: "Quantrion architecture",
    subtitle: "Examination intelligence — specified software stack",
  },
  "/vdoc/architecture": {
    title: "Vdoc architecture",
    subtitle: "Entertainment OS — specified software stack",
  },
  "/exorax/architecture": {
    title: "ExoraX architecture",
    subtitle: "Decision commerce — specified software stack",
  },
}

export function getPageMeta(pathname: string) {
  return pageMeta[pathname] ?? pageMeta["/"]
}
