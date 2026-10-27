"use client"

import { useState } from "react"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import {
  distributionChannels,
  experiments,
  growthAdvantages,
  growthMachines,
  launchPlan,
  operatingCadence,
  researchSources,
  reverseMath,
  testSplit,
} from "@/lib/roadmap"

type Constraint = "discover" | "activate" | "return" | "capacity"
type Budget = "micro" | "small" | "mid" | "large"
type Focus = ProductId | "all"

const constraints: { id: Constraint; label: string }[] = [
  { id: "discover", label: "Not enough people discover the products" },
  { id: "activate", label: "Visitors do not become active users" },
  { id: "return", label: "Users try the product but do not return" },
  { id: "capacity", label: "Limited budget and team capacity" },
]

const budgets: { id: Budget; label: string }[] = [
  { id: "micro", label: "₹5,000–₹10,000" },
  { id: "small", label: "₹10,000–₹1 lakh" },
  { id: "mid", label: "₹1 lakh–₹5 lakh" },
  { id: "large", label: "Larger budget, subject to funding" },
]

const focuses: { id: Focus; label: string }[] = [
  { id: "quantrion", label: "Quantrion — education" },
  { id: "vdoc", label: "Vdoc — entertainment" },
  { id: "exorax", label: "ExoraX — commerce" },
  { id: "all", label: "Coordinate all three" },
]

function sprint(constraint: Constraint, budget: Budget, focus: Focus) {
  const wedge =
    focus === "all"
      ? "Quantrion gets the first measurable loop. Vdoc and ExoraX run one small test each, in parallel."
      : focus === "quantrion"
        ? "Wedge: one exam cohort. Publish one resource, offer one diagnostic, and ask for a second study session."
        : focus === "vdoc"
          ? "Wedge: one storytelling format. Publish a series, then clips that invite the viewer to continue the story."
          : "Wedge: one purchase category. Publish one comparison that helps a shopper decide, then one landing page."

  const budgetLine =
    budget === "micro"
      ? "Do not split ₹5,000–₹10,000 across every channel. If the chosen product cannot yet deliver a real session, spend the money on validation, not ads."
      : budget === "small"
        ? "One audience, a few content formats, and one small paid test with a cost limit and a decision date."
        : budget === "mid"
          ? "Add one creator or partner test. The success signal is cost per retained user, not reach."
          : "A larger budget still waits on evidence. More experiments only after each one is instrumented. Funding does not purchase the 12 million."

  const weeks =
    constraint === "discover"
      ? [
          "Publish one specific piece for the wedge: an exam explanation, a story clip, or a buying guide.",
          "Ask one person who already has that audience — an educator, a creator, or a reviewer.",
          "Send the qualified visit to one landing page with one next step.",
          "Read qualified visits and activation. Impressions do not decide the next month.",
        ]
      : constraint === "activate"
        ? [
            "Let a visitor reach a useful result before the registration wall.",
            "Shorten the path to that first value event.",
            "Test two audience-specific messages on the same page.",
            "Keep the variant that raises activation per visitor, and check that those users come back.",
          ]
        : constraint === "return"
          ? [
              "Design the second session before buying more traffic.",
              "Test one relevant reminder against no reminder.",
              "Offer one result the user can choose to share, after they have received value.",
              "Count retained users per 1,000 visitors. Registration count is not the score.",
            ]
          : [
              "Run one platform, one promise, and one weekly review.",
              "Use AI to draft variations and sort feedback. A person checks facts, copyright, and claims.",
              "If the product cannot yet deliver the session, stop the ad and fix the session.",
              "Add a second experiment only when the first one has a hypothesis, a metric, a cost limit, and a date.",
            ]

  return { wedge, budgetLine, weeks }
}

function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-white">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option.id
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={`border px-3 py-2 text-left text-xs leading-snug transition ${
                selected ? "border-white bg-white text-black" : "border-white/15 text-zinc-300 hover:border-white/35"
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function GrowthSystem() {
  const [constraint, setConstraint] = useState<Constraint>("discover")
  const [budget, setBudget] = useState<Budget>("micro")
  const [focus, setFocus] = useState<Focus>("all")
  const [built, setBuilt] = useState(false)
  const plan = sprint(constraint, budget, focus)

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="border border-white/15 bg-[#050506] p-5 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
          Research-informed growth engineering
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-tight">
          Three engines that turn attention into people who come back.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          The work is not to advertise three websites. It is to combine product engineering, distribution, creator networks, partnerships, and experiments. Twelve million registrations in 18 months remains a stretch goal. This system is how the company finds out which moves actually work.
        </p>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Seven advantages</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Build these before buying reach.</h2>
        <ol className="mt-5 grid gap-3 lg:grid-cols-2">
          {growthAdvantages.map((item) => (
            <li key={item.n} className={`border border-white/10 bg-[#09090b] p-5 ${item.n === "01" ? "lg:col-span-2" : ""}`}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-xs text-zinc-500">{item.n}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.priority}</p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-zinc-400">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">{item.example}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Platform machines</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-white">Shared infrastructure. Separate first wedges.</h2>
        <ul className="mt-5 grid gap-3 lg:grid-cols-3">
          {growthMachines.map((machine) => (
            <li key={machine.id} className="flex flex-col border border-white/10 bg-[#050506] p-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <ProductLogo product={machine.id} size={24} />
                {machine.name}
              </span>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{machine.wedge}</p>
              <ol className="mt-4 flex-1 space-y-2">
                {machine.steps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[1.25rem_1fr] gap-2 text-sm leading-relaxed text-zinc-300">
                    <span className="font-mono text-xs text-zinc-500">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-zinc-400">{machine.advantage}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-white/15 bg-[#050506]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-5 sm:p-8 lg:border-r lg:border-b-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">18-month arithmetic</p>
            <p className="mt-3 font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">{reverseMath.total}</p>
            <p className="mt-2 text-sm text-zinc-400">registrations, worked backward</p>
            <dl className="mt-6 grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Combined / month</dt>
                <dd className="mt-1 font-mono text-2xl text-white">{reverseMath.perMonth}</dd>
              </div>
              {reverseMath.splits.map((split) => (
                <div key={split.name}>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">{split.name} / month</dt>
                  <dd className="mt-1 font-mono text-2xl text-white">{split.month}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">{reverseMath.note}</p>
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-sm leading-relaxed text-zinc-300">
              Qualified visits required for 12 million registrations. Illustrative scenarios, not industry benchmarks. A repeat visit is not a new person. A person on all three platforms is not three company-wide people.
            </p>
            <table className="mt-5 w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                  <th className="py-2 font-medium">Visit to registration</th>
                  <th className="py-2 font-medium">Qualified visits</th>
                </tr>
              </thead>
              <tbody>
                {reverseMath.scenarios.map((row) => (
                  <tr key={row.rate} className="border-b border-white/10">
                    <td className="py-3 font-mono text-lg text-white">{row.rate}</td>
                    <td className="py-3 text-sm text-zinc-300">{row.visits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              Occasional social posts will not carry this. The company needs distribution, product-led sharing, partnerships, or paid acquisition — and retention measured apart from registrations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Twelve experiments</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">One hypothesis. One metric. A cost limit. A date.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
          More clicks do not crown a winner. The change has to last, and the users have to be comparable.
        </p>
        <div className="mt-5 overflow-x-auto border border-white/10">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-white/10 bg-[#09090b] text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                <th className="px-4 py-3 font-medium">Test</th>
                <th className="px-4 py-3 font-medium">What changes</th>
                <th className="px-4 py-3 font-medium">Success signal</th>
              </tr>
            </thead>
            <tbody>
              {experiments.map((item) => (
                <tr key={item.n} className="border-b border-white/10 bg-[#050506]">
                  <td className="px-4 py-3 text-sm text-white">
                    <span className="mr-2 font-mono text-xs text-zinc-500">{item.n}</span>
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-400">{item.test}</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">{item.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-4">
        {operatingCadence.map((item) => (
          <article key={item.title} className="border border-white/10 bg-[#09090b] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.when}</p>
            <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border border-white/10 bg-[#050506] p-5 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">First test budget</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">₹5,000–₹10,000 is not split evenly.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
          A proposed allocation for the first advertising tests, not a proven split. If a platform cannot yet deliver a real experience, its share goes to product validation.
        </p>
        <ul className="mt-6 space-y-3">
          {testSplit.map((item) => (
            <li key={item.name} className="grid gap-2 border border-white/10 p-4 sm:grid-cols-[5rem_8rem_1fr] sm:items-baseline">
              <p className="font-mono text-2xl text-white">{item.share}</p>
              <p className="text-sm font-medium text-white">{item.name}</p>
              <p className="text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-white/15 bg-[#09090b] p-5 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">30-day sprint</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Choose the constraint. Build the next month.</h2>
        <div className="mt-6 space-y-6">
          <Choice label="Biggest current constraint" options={constraints} value={constraint} onChange={(id) => { setConstraint(id as Constraint); setBuilt(false) }} />
          <Choice label="Available initial test budget" options={budgets} value={budget} onChange={(id) => { setBudget(id as Budget); setBuilt(false) }} />
          <Choice label="Where to work first" options={focuses} value={focus} onChange={(id) => { setFocus(id as Focus); setBuilt(false) }} />
        </div>
        <button
          type="button"
          onClick={() => setBuilt(true)}
          className="mt-6 border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
        >
          Build my 30-day growth sprint
        </button>
        {built && (
          <div className="mt-6 border border-white/10 bg-black/40 p-5">
            <p className="text-sm leading-relaxed text-zinc-200">{plan.wedge}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{plan.budgetLine}</p>
            <ol className="mt-4 space-y-2">
              {plan.weeks.map((week, index) => (
                <li key={week} className="grid grid-cols-[4.5rem_1fr] gap-3 text-sm leading-relaxed text-zinc-300">
                  <span className="font-mono text-xs text-zinc-500">Week {index + 1}</span>
                  {week}
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Distribution system</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-white">One parent brand. Three audiences. No shared announcement feed.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
          Quantavex speaks to investors, partners, and the company record. Each product earns attention from its own audience. These channels are the system to open. Names are ideas. None of these accounts is claimed as live.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {distributionChannels.map((channel) => (
            <li key={channel.name} className="border border-white/10 bg-[#09090b] p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{channel.name}</h3>
                <p className="text-right font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{channel.priority}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{channel.role}</p>
              <p className="mt-3 text-xs text-zinc-500">{channel.identity}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          Also reserve Threads, Pinterest, and useful Reddit participation, and use Product Hunt only for a real launch. TikTok is not a core India channel while the service is unavailable there.
        </p>
      </section>

      <section>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">First 30 days of the channel system</p>
        <ol className="mt-4 border border-white/10">
          {launchPlan.map((item) => (
            <li key={item.window} className="grid gap-1 border-b border-white/10 px-4 py-4 last:border-0 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-4">
              <p className="font-mono text-sm text-white">{item.window}</p>
              <p className="text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Research behind the method</p>
        <ul className="mt-4 space-y-3">
          {researchSources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer" className="text-sm text-white underline decoration-white/20 underline-offset-4 hover:decoration-white">
                {source.title}
              </a>
              <p className="mt-1 text-xs text-zinc-500">{source.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-300">
          Build Quantrion&apos;s first measurable loop, and validate Vdoc and ExoraX beside it with small tests. Scale an engine only when the people it acquires come back.
        </p>
      </section>
    </div>
  )
}
