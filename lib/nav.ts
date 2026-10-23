export const pageMeta: Record<
  string,
  { title: string; subtitle: string }
> = {
  "/": {
    title: "Parent company",
    subtitle: "India competitive exams first — then Vdoc and ExoraX",
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
    subtitle: "Six months after investment — 90,000 users on each platform, 270,000 total",
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
