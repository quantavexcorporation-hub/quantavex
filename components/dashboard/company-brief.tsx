import Link from "next/link"
import { company } from "@/lib/company"

export function CompanyBrief() {
  return (
    <section className="overflow-hidden border border-white/10 bg-[#09090b] p-5 sm:p-7 md:p-9">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
        The company
      </p>
      <h2 className="mt-4 max-w-4xl text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl md:text-[1.85rem] md:leading-snug">
        Quantavex is the parent company and the infrastructure for Quantrion, Vdoc, and ExoraX.
      </h2>

      <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed text-pretty text-gray-300 sm:mt-6 md:text-[15px] md:leading-7">
        <p>
          Quantavex is founder-led. It specifies and operates the company
          infrastructure — identity, data, and compute — on which the three
          platforms are built together. Quantrion is high-stakes learning. Vdoc
          is interactive entertainment. ExoraX is decision commerce. The work
          sits where artificial intelligence, data science, human behavior,
          digital media, and commerce meet.
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
          goods, services, and capital. Three platforms, built together on one infrastructure.
        </p>
        <p>
          Each dossier links a platform you can open. The
          company record is public: three architectures, three papers, one
          venture. The aim is not a demonstration. It is products people
          actually use.
        </p>
        <p>
          Entry starts in India. Expansion to other high-economy countries is a
          plan, not current operations. Nothing on this site is live traffic,
          revenue, or a company valuation.
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
