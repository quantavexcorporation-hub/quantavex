"use client"

import { PageHeader } from "@/components/dashboard/page-header"
import { DataTable } from "@/components/dashboard/data-table"
import { Panel, PanelHeader } from "@/components/dashboard/panel"
import { ProductDossier } from "@/components/dashboard/product-dossier"
import { downloadCsv } from "@/lib/ledger"
import { getProduct } from "@/lib/products"
import { ProductLogo, type ProductId } from "@/components/brand/product-logo"

export function ProductView({ productId }: { productId: ProductId }) {
  const product = getProduct(productId)
  const live = Boolean(product.liveUrl)

  return (
    <div className="space-y-5">
      <PageHeader
        brand={product.name}
        title={product.tagline}
        subtitle={product.manifesto}
        mark={<ProductLogo product={productId} size={44} />}
        actionLabel={live ? "Visit website" : "Website launching soon"}
        actionHref={live ? product.liveUrl : undefined}
        actionDisabled={!live}
      />

      <ProductDossier product={product} />

      <Panel>
        <PanelHeader
          title="Architecture grid"
          subtitle="Specified modules for this platform — not live production telemetry"
          action={
            <button
              onClick={() =>
                downloadCsv(
                  `quantavex-${productId}.csv`,
                  ["module", "owner", "status", "focus", "layer"],
                  product.ops.map((row) => [row.module, row.owner, row.status, row.latency, row.load])
                )
              }
              className="text-xs font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Download architecture
            </button>
          }
        />
        <DataTable
          rows={product.ops}
          columns={[
            { key: "module", label: "Module" },
            { key: "owner", label: "Owner" },
            { key: "status", label: "Status" },
            { key: "latency", label: "Focus" },
            { key: "load", label: "Layer" },
          ]}
        />
      </Panel>
    </div>
  )
}
