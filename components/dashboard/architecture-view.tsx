"use client"

import Link from "next/link"
import { PageHeader } from "@/components/dashboard/page-header"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { getProduct } from "@/lib/products"
import { getResearch } from "@/lib/research"
import { getProductArchitecture } from "@/lib/product-architecture"

export function ArchitectureView({ productId }: { productId: ProductId }) {
  const product = getProduct(productId)
  const paper = getResearch(productId)
  const spec = getProductArchitecture(productId)
  const accent = productAccents[productId]

  return (
    <div className="space-y-5 sm:space-y-7">
      <PageHeader
        brand={product.name}
        title="Software architecture"
        subtitle={spec.pattern}
        mark={<ProductLogo product={productId} size={40} />}
        actionLabel="Open monograph"
        actionHref={paper.pdf}
      />

      <section className={`border bg-[#09090b] p-5 sm:p-6 ${accent.border}`}>
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Specified system</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">{spec.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">{spec.premise}</p>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">{spec.suitable}</p>
        <p className="mt-4 font-mono text-[10px] leading-relaxed text-zinc-600">{paper.citation}</p>
      </section>

      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Runtime loop</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{spec.loop.name}</h3>
        <ol className="mt-4 flex flex-wrap gap-2">
          {spec.loop.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className={`border px-3 py-1.5 text-sm text-white ${accent.border}`}>{step}</span>
              {index < spec.loop.steps.length - 1 ? (
                <span className="text-zinc-600" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{spec.loop.meaning}</p>
      </section>

      <section>
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Stack</p>
        <div className="space-y-2">
          {spec.layers.map((layer, index) => (
            <div key={layer.name} className={`border bg-[#09090b] p-4 ${accent.border}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-[10px] text-zinc-500">L{index + 1}</p>
                <p className={`text-[10px] uppercase tracking-[0.14em] ${accent.text}`}>{layer.role}</p>
              </div>
              <h3 className="mt-1 text-base font-semibold text-white">{layer.name}</h3>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {layer.modules.map((module) => (
                  <li key={module} className="text-xs leading-relaxed text-zinc-400">
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-white/10 bg-[#09090b] p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Services</p>
        <p className="mt-1 text-sm text-zinc-500">Boundaries inside the first deployable — not twenty teams.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Service</th>
                <th className="pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Owns</th>
                <th className="pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Contract</th>
              </tr>
            </thead>
            <tbody>
              {spec.services.map((service) => (
                <tr key={service.name} className="border-b border-white/[0.06] last:border-0">
                  <td className="py-2.5 text-sm font-medium text-white">{service.name}</td>
                  <td className="py-2.5 text-xs text-zinc-400">{service.owns}</td>
                  <td className="py-2.5 text-xs text-zinc-400">{service.contract}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Data plane</p>
          <ul className="mt-3 space-y-3">
            {spec.data.map((store) => (
              <li key={store.name}>
                <p className="text-sm font-medium text-white">{store.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">{store.holds}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Interfaces</p>
          <ul className="mt-3 space-y-2">
            {spec.interfaces.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Constraints</p>
          <ul className="mt-3 space-y-2">
            {spec.constraints.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-zinc-400">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="border border-white/10 bg-[#09090b] p-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Later — not this stage</p>
          <ul className="mt-3 space-y-2">
            {spec.later.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-zinc-500">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="text-xs text-zinc-600">
        This is the software architecture taken from the monograph. It is a specification, not production telemetry.{" "}
        <Link href={`/${productId}`} className="text-zinc-400 underline decoration-white/20 underline-offset-4">
          Back to {product.name}
        </Link>
      </p>
    </div>
  )
}
