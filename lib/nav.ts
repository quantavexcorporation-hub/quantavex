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
    subtitle: "India first. Thirty markets. One order of operations.",
  },
  "/forecasting": {
    title: "Roadmap",
    subtitle: "Product development — Quantrion first, then Vdoc and ExoraX",
  },
}

export function getPageMeta(pathname: string) {
  return pageMeta[pathname] ?? pageMeta["/"]
}
