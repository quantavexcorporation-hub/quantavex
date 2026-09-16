import Link from "next/link"
import { company } from "@/lib/company"

export function CompanyBrief() {
  return (
    <section className="overflow-hidden rounded-xl border border-cyan-500/15 bg-[#0c0c14]/90 p-5 md:p-6">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          Unified intelligence across three industries.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{company.thesis}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{company.proof}</p>
        <p className="mt-4 text-xs text-gray-500">
          Founder:{" "}
          <Link href={company.founder.path} className="text-cyan-300 hover:text-cyan-200">
            {company.founder.name}
          </Link>
          {" · "}
          {company.founder.role}
        </p>
      </div>
    </section>
  )
}
