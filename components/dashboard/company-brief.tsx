import Link from "next/link"
import { company } from "@/lib/company"

export function CompanyBrief() {
  return (
    <section className="overflow-hidden rounded-xl border border-cyan-500/15 bg-[#0c0c14]/90 p-5 md:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">
        The company
      </p>
      <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white md:text-4xl md:leading-tight">
        Quantavex is one operating system for the industries that will run the next world.
      </h2>

      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-300 md:text-base md:leading-8">
        <p>
          A company is built twice. First as research that can survive the page.
          Then as a software machine that can survive contact with the world.
          Quantavex is that sequence — founder-led, written before it is shipped,
          specified before it is sold.
        </p>
        <p>
          Learning, entertainment, and commerce are still treated as three
          separate markets, three separate stacks, three separate futures. They
          are not. They are how people become capable, how they inhabit
          experience, and how value moves. Quantavex holds them on one
          architecture: Quantrion for competitive learning, Vdoc for interactive
          entertainment, ExoraX for decision commerce.
        </p>
        <p>
          Each platform begins as an original monograph. The paper is the
          specification. The machine is built from that specification. Inside
          the machine, AI is the engine — not a label on the box, the thing that
          runs. Data is the truth. If the data is incomplete, outdated, or
          wrong, the intelligence is theatre. We do not ship theatre.
        </p>
        <p>
          This operating system is the company. Live platforms appear here when
          each site is uploaded. Until then the work is already visible: three
          architectures, three papers, one venture. The destination is not a
          demo. It is products people actually use.
        </p>
      </div>

      <p className="mt-6 text-xs text-gray-500">
        Founder:{" "}
        <Link href={company.founder.path} className="text-cyan-300 hover:text-cyan-200">
          {company.founder.name}
        </Link>
        {" · "}
        {company.founder.role}
      </p>
    </section>
  )
}
