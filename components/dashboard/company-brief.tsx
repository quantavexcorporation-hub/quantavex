import Link from "next/link"
import { company } from "@/lib/company"

export function CompanyBrief() {
  return (
    <section className="overflow-hidden rounded-xl border border-cyan-500/15 bg-[#0c0c14]/90 p-5 md:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400/80">
        The company
      </p>
      <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white md:text-3xl md:leading-tight">
        Quantavex builds AI-driven products for how people learn, create, discover, and transact.
      </h2>

      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-300 md:text-[15px] md:leading-7">
        <p>
          Quantavex is a founder-led parent company. It leads, specifies, and
          manages three platforms — Quantrion, Vdoc, and ExoraX — for
          high-stakes learning, interactive entertainment, and decision
          commerce. Not content libraries, catalogs, or storefronts bolted onto
          chat. The work sits where artificial intelligence, data science, human
          behavior, digital media, and commerce meet.
        </p>
        <p>
          The method is research first. Each platform is written as an original
          monograph that specifies the architecture. The software machine is
          built from that specification. Inside the machine, AI is the engine.
          Data is required for correct information — accurate, complete, and
          current. If the data is wrong, the intelligence is wrong. That is the
          constraint we design against.
        </p>
        <p>
          Quantrion is competitive learning: examination intelligence rather than
          static preparation. Vdoc is interactive entertainment: worlds people
          enter, shape, and create in, with a virtual economy inside the
          experience. ExoraX is decision commerce: a correct decision before
          value moves — product, price, and risk — including trade across
          goods, services, and capital. Three platforms. One parent company.
        </p>
        <p>
          Live product websites appear here when each platform is uploaded. Until
          then the company record is already public: three architectures, three
          papers, one venture. The aim is not a demonstration. It is products
          people actually use.
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
