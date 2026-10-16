import Link from "next/link"
import { company } from "@/lib/company"

export function CompanyBrief() {
  return (
    <section className="overflow-hidden border border-white/10 bg-[#09090b] p-5 sm:p-7 md:p-9">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        The company
      </p>
      <h2 className="mt-4 max-w-4xl text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl md:text-[1.85rem] md:leading-snug">
        First customer: India&apos;s competitive-exam students. First product: Quantrion.
      </h2>

      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
        <div className="border border-white/10 bg-black/30 p-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">Customer</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200">
            Students sitting high-stakes exams from India — JEE, NEET, UPSC, and the rest of the competitive atlas.
          </p>
        </div>
        <div className="border border-white/10 bg-black/30 p-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">Problem</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200">
            Prep is still static content: overload, delayed feedback, no predictive readiness before the sitting.
          </p>
        </div>
        <div className="border border-white/10 bg-black/30 p-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">Reachable market</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200">
            India&apos;s annual competitive-exam cohort — the group we can reach from HQ. Not a global TAM, not $8T.
          </p>
        </div>
      </div>

      <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed text-pretty text-gray-300 sm:mt-6 md:text-[15px] md:leading-7">
        <p>
          Quantavex is a founder-led parent company. The investment story starts with
          Quantrion: examination intelligence rather than another content library.
          That is the first product an investor can open as an{" "}
          <span className="text-white">alpha interface</span> — a working demo, not
          live production traffic, revenue, or a company valuation.
        </p>
        <p>
          The method is research first. Each platform is written as an original
          monograph that specifies the architecture. The product is built from that
          specification. Inside it, AI is the engine. Data is required for correct
          information — accurate, complete, and current. If the data is wrong, the
          intelligence is wrong.
        </p>
        <p>
          Vdoc (interactive entertainment) and ExoraX (decision commerce) are the
          next platforms on the same parent company. The longer horizon — space,
          virtual, and trade economies — is the aim of the company, not the first
          market we are selling into.
        </p>
        <p>
          Each dossier links a product demo you can test. Entry starts in India.
          Expansion to other high-economy countries is a plan, not current operations.
        </p>
      </div>

      <p className="mt-6 text-xs text-gray-500">
        Founder:{" "}
        <Link href={company.founder.path} className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60">
          {company.founder.name}
        </Link>
        {" · "}
        {company.founder.role}
        {" · HQ "}
        {company.headquarters}
      </p>
    </section>
  )
}
