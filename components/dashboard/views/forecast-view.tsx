"use client"

import Link from "next/link"
import { PageHeader } from "@/components/dashboard/page-header"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { ProductLogo } from "@/components/brand/product-logo"
import { ProductWebsiteLink } from "@/components/brand/product-site"
import { productAccents } from "@/lib/product-accents"
import { company } from "@/lib/company"
import { productList } from "@/lib/products"
import { researchPapers } from "@/lib/research"

const sequence = [
  {
    id: "quantrion" as const,
    order: "01",
    when: "Now → 7 months",
    now: "Monograph complete. Alpha interface open. Architecture specified for examination intelligence.",
    next: "First working product for India competitive-exam students, then a closed tester group.",
    customer: "JEE, NEET, UPSC and the rest of the competitive atlas — from India.",
    problem: "Prep is still static content: overload, delayed feedback, no predictive readiness.",
  },
  {
    id: "vdoc" as const,
    order: "02",
    when: "Months 6–8",
    now: "Monograph complete. Alpha interface open. Entertainment OS specified — speak, enter, shape, own.",
    next: "Prototype the core engine from the paper. Not a streaming catalog.",
    customer: "Audience, creators, and studio partners in one visual language.",
    problem: "Entertainment is still passive, fragmented, and extracted for watch time.",
  },
  {
    id: "exorax" as const,
    order: "03",
    when: "Months 7–9",
    now: "Monograph complete. Alpha interface open. Decision-commerce architecture specified.",
    next: "Working product: inspect in 3D/AR before value moves — product, price, and risk.",
    customer: "High-consideration buyers, brands, and creators who need clarity before checkout.",
    problem: "Commerce still guesses from photos. Returns are an information failure.",
  },
] as const

const method = [
  {
    step: "01",
    title: "Research",
    detail: "Each platform is written as an original monograph that specifies the architecture before the product is built.",
  },
  {
    step: "02",
    title: "Alpha interface",
    detail: "A working interface is linked from each dossier so the specification can be opened — not live production traffic.",
  },
  {
    step: "03",
    title: "Product",
    detail: "The software is built from that specification. Quantrion is first. Vdoc and ExoraX follow on the same parent company.",
  },
]

export function ForecastView() {
  return (
    <div className="space-y-5 sm:space-y-7">
      <PageHeader
        title="Product development roadmap"
        subtitle="Quantrion first. Then Vdoc. Then ExoraX. Twelve months of build order — not live traffic, revenue, or a company valuation."
      />

      <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {[
          { k: "Horizon", v: company.horizon, n: "Build sequence" },
          { k: "First product", v: "Quantrion", n: "India competitive exams" },
          { k: "Then", v: "Vdoc", n: "Interactive entertainment" },
          { k: "Then", v: "ExoraX", n: "Decision commerce" },
        ].map((item) => (
          <div key={`${item.k}-${item.v}`} className="px-4 py-4 sm:px-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">{item.k}</p>
            <p className="mt-2 font-mono text-xl font-semibold tracking-tight text-white">{item.v}</p>
            <p className="mt-1 text-[11px] text-zinc-500">{item.n}</p>
          </div>
        ))}
      </div>

      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">How we build</p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">Research first. Then the product.</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Quantavex is founder-led from {company.headquarters}. Three platforms, one parent company.
          The order of development is the investment-relevant fact on this page. Terms stay in conversation,
          via{" "}
          <Link href="/#contact" className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60">
            Contact
          </Link>
          .
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {method.map((item) => (
            <div key={item.step} className="border border-white/10 bg-black/30 p-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-zinc-500">{item.step}</p>
              <p className="mt-2 text-sm font-medium text-white">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-3 lg:grid-cols-3">
        {sequence.map((item) => {
          const product = productList.find((row) => row.id === item.id)
          const paper = researchPapers[item.id]
          const accent = productAccents[item.id]
          if (!product) return null
          return (
            <article key={item.id} className={`flex flex-col border bg-[#09090b] p-4 sm:p-5 ${accent.border}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ProductLogo product={item.id} size={36} />
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-zinc-500">{item.order}</p>
                    <h3 className="text-base font-semibold text-white">{product.name}</h3>
                  </div>
                </div>
                <p className={`text-[10px] uppercase tracking-[0.14em] ${accent.text}`}>{item.when}</p>
              </div>
              <p className="mt-3 text-sm text-white">{product.tagline}</p>
              <p className="mt-1 text-xs italic text-zinc-500">{product.manifesto}</p>
              <dl className="mt-4 space-y-3 text-xs leading-relaxed">
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-zinc-500">Now</dt>
                  <dd className="mt-1 text-zinc-300">{item.now}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-zinc-500">Next</dt>
                  <dd className="mt-1 text-zinc-300">{item.next}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-zinc-500">Customer</dt>
                  <dd className="mt-1 text-zinc-300">{item.customer}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-zinc-500">Problem</dt>
                  <dd className="mt-1 text-zinc-300">{item.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-zinc-500">On record</dt>
                  <dd className="mt-1 text-zinc-300">
                    {paper.pages} pages · {paper.caseStudy}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                <Link
                  href={`/${item.id}`}
                  className="inline-flex items-center border border-white/15 px-3 py-1.5 text-xs text-white hover:border-white/30"
                >
                  Open dossier
                </Link>
                <ProductWebsiteLink productId={item.id} variant="chip" />
              </div>
            </article>
          )
        })}
      </div>

      <Panel>
        <PanelHeader
          title="Twelve-month sequence"
          subtitle="Planned build order. Overlaps are real — Vdoc and ExoraX start after Quantrion is in motion, not after it is finished forever."
        />
        <ol className="space-y-0">
          {company.milestones.map((item, index) => (
            <li
              key={`${item.period}-${item.title}`}
              className="grid gap-2 border-b border-white/10 py-4 last:border-0 last:pb-0 sm:grid-cols-[6.5rem_7rem_1fr] sm:items-baseline sm:gap-4"
            >
              <p className="font-mono text-xs text-zinc-500">{item.period}</p>
              <p className="text-sm font-medium text-white">{item.product}</p>
              <div>
                <p className="text-sm text-white">
                  {item.title}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                    {item.status}
                  </span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
                {index === 0 ? (
                  <p className="mt-1 text-[11px] text-zinc-600">Current focus of the company.</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="What is already specified" subtitle="On the public record — not live cohorts." />
          <ul className="space-y-3">
            {company.results.map((item) => (
              <li key={item.label} className="border border-white/8 bg-black/25 p-3">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1 font-mono text-xs text-zinc-300">{item.value}</p>
                <p className="mt-1 text-[11px] text-zinc-500">{item.note}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader
            title="Constraints"
            subtitle="The roadmap is written against these. They are not excuses after the fact."
          />
          <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
            <li>
              <span className="text-white">India first.</span> Expansion to other high-economy markets is a plan, not current operations.
            </li>
            <li>
              <span className="text-white">Founder-led.</span> {company.founder.name} builds Quantavex. The six fields below are hires the company needs — not a team already in place.
            </li>
            <li>
              <span className="text-white">Three platforms, one company.</span> Quantrion, Vdoc, and ExoraX are not three startups. They share one parent.
            </li>
            <li>
              <span className="text-white">Alpha is not production.</span> Linked interfaces can be opened. Nothing here is live traffic or revenue.
            </li>
          </ul>
        </Panel>
      </div>

      <Panel>
        <PanelHeader title="What the build needs" subtitle={`${company.team.posture} · six fields`} />
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-400">{company.team.note}</p>
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {company.team.seats.map((seat) => (
            <li key={seat.field} className="border border-white/8 bg-black/25 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{seat.role}</p>
              <p className="mt-1.5 text-sm font-medium text-white">{seat.field}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">{seat.detail}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="Why this order" subtitle="Execution advantage and the load it creates" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Advantage</p>
          <ul className="mt-2 space-y-2">
            {company.advantages.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Risks</p>
          <ul className="mt-2 space-y-2">
            {company.risks.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-zinc-400">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Talk to the company" subtitle="Investors and partners — write once." />
          <p className="text-sm leading-relaxed text-zinc-400">
            Product questions belong on each dossier. Company and investment conversation belongs in Contact —
            not as public terms on this page.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/#contact"
              className="inline-flex border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Contact
            </Link>
            <Link
              href={company.founder.path}
              className="inline-flex border border-white/15 px-4 py-2 text-sm text-white hover:border-white/30"
            >
              Founder
            </Link>
          </div>
        </Panel>
      </div>
    </div>
  )
}
