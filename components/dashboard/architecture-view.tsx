"use client"

import { ProductLogo, type ProductId } from "@/components/brand/product-logo"
import { productAccents } from "@/lib/product-accents"
import { getProduct } from "@/lib/products"
import { getProductArchitecture } from "@/lib/product-architecture"

export function ArchitectureView({ productId }: { productId: ProductId }) {
  const product = getProduct(productId)
  const spec = getProductArchitecture(productId)
  const accent = productAccents[productId]

  return (
    <article className="mx-auto max-w-5xl space-y-8 pb-10">
      <header className="flex items-center gap-3">
        <ProductLogo product={productId} size={36} />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Architecture</p>
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{spec.figure}</h1>
        </div>
      </header>

      <figure className={`overflow-x-auto border bg-[#050506] p-3 sm:p-5 ${accent.border}`}>
        {productId === "quantrion" ? <QuantrionFigure accent={accent.hex} steps={spec.loop.steps} /> : null}
        {productId === "vdoc" ? <VdocFigure accent={accent.hex} steps={spec.loop.steps} /> : null}
        {productId === "exorax" ? <ExoraxFigure accent={accent.hex} steps={spec.loop.steps} /> : null}
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
          Fig. 1 · {product.name} · {spec.loop.name}: {spec.loop.steps.join(" → ")}
        </figcaption>
      </figure>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Mathematics</p>
        <ol className="space-y-3 border border-white/10 bg-[#09090b] p-4 sm:p-5">
          {spec.equations.map((eq) => (
            <li key={eq.id} className="grid gap-1 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] sm:items-baseline sm:gap-6">
              <p className="font-mono text-[13px] leading-relaxed text-white sm:text-sm">{eq.form}</p>
              <p className="text-xs leading-relaxed text-zinc-400 sm:text-[13px]">{eq.meaning}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Instruction</p>
        <ol className="space-y-0 border border-white/10 bg-[#09090b]">
          {spec.instruction.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/[0.06] px-4 py-3 last:border-0 sm:grid-cols-[3rem_8rem_1fr] sm:px-5"
            >
              <span className={`font-mono text-sm ${accent.text}`}>{String(step.n).padStart(2, "0")}</span>
              <span className="text-sm font-medium text-white">{step.title}</span>
              <p className="col-span-2 text-xs leading-relaxed text-zinc-400 sm:col-span-1 sm:text-[13px]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}

function QuantrionFigure({ accent, steps }: { accent: string; steps: string[] }) {
  return (
    <svg viewBox="0 0 920 520" className="h-auto w-full min-w-[640px]" role="img" aria-label="Quantrion Q1 architecture">
      <rect width="920" height="520" fill="#050506" />
      <text x="460" y="28" textAnchor="middle" fill="#a1a1aa" fontSize="11" letterSpacing="2">
        STUDENT / EDUCATOR
      </text>
      <LayerBox x={80} y={48} w={520} h={88} n="L1" title="Experience" modules="Atlas · Learn · Practice · Mocks · LectureCognis" accent={accent} />
      <LayerBox x={80} y={156} w={520} h={100} n="L2" title="AI intelligence" modules="Pathway · DNA · Strategy · Ŝ = αA + βT + γD + δR" accent={accent} />
      <LayerBox x={80} y={276} w={520} h={88} n="L3" title="Data" modules="Concept graph · Item bank · Sitting log · DNA store" accent={accent} />
      <LayerBox x={80} y={384} w={520} h={80} n="L4" title="Infrastructure" modules="API · Inference · Object store · Job queue" accent={accent} />
      <Arrow x1={340} y1={136} x2={340} y2={156} accent={accent} />
      <Arrow x1={340} y1={256} x2={340} y2={276} accent={accent} />
      <Arrow x1={340} y1={364} x2={340} y2={384} accent={accent} />
      <path d="M80 424 H48 V92 H80" fill="none" stroke={accent} strokeWidth="1.4" />
      <polygon points="80,88 72,96 88,96" fill={accent} />
      <text x="28" y="260" fill={accent} fontSize="10" transform="rotate(-90 28 260)">
        DNA_{"{t+1}"} = U(DNA, sitting)
      </text>
      <LoopPanel x={640} y={120} steps={steps} accent={accent} caption="closed loop" />
    </svg>
  )
}

function VdocFigure({ accent, steps }: { accent: string; steps: string[] }) {
  return (
    <svg viewBox="0 0 920 560" className="h-auto w-full min-w-[640px]" role="img" aria-label="Vdoc V1 architecture">
      <rect width="920" height="560" fill="#050506" />
      <text x="300" y="28" textAnchor="middle" fill="#a1a1aa" fontSize="11" letterSpacing="2">
        G = (N, E)  ·  s′ = δ(s, a)
      </text>
      <circle cx="160" cy="90" r="28" fill="none" stroke={accent} strokeWidth="1.4" />
      <text x="160" y="94" textAnchor="middle" fill="#fff" fontSize="11">
        s₁
      </text>
      <circle cx="300" cy="90" r="28" fill="none" stroke={accent} strokeWidth="1.4" />
      <text x="300" y="94" textAnchor="middle" fill="#fff" fontSize="11">
        s₂
      </text>
      <circle cx="440" cy="90" r="28" fill="none" stroke={accent} strokeWidth="1.4" />
      <text x="440" y="94" textAnchor="middle" fill="#fff" fontSize="11">
        s₃
      </text>
      <line x1="188" y1="90" x2="272" y2="90" stroke={accent} strokeWidth="1.2" markerEnd="url(#arr)" />
      <line x1="328" y1="90" x2="412" y2="90" stroke={accent} strokeWidth="1.2" />
      <path d="M440 118 C440 160 160 160 160 118" fill="none" stroke="#52525b" strokeWidth="1" strokeDasharray="4 3" />
      <text x="300" y="152" textAnchor="middle" fill="#71717a" fontSize="10">
        edges a ∈ E are user decisions
      </text>
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={accent} />
        </marker>
      </defs>
      <LayerBox x={80} y={184} w={500} h={72} n="L1" title="Experience" modules="Command · Converse · Universe · Live · World" accent={accent} />
      <LayerBox x={80} y={272} w={500} h={72} n="L2" title="Control" modules="Choice · Vote · Game tick · Afterglow / Unfinished" accent={accent} />
      <LayerBox x={80} y={360} w={500} h={80} n="L3" title="AI intelligence" modules="Director · Memory · Mood · Ethics interrupt" accent={accent} />
      <LayerBox x={80} y={456} w={500} h={72} n="L4" title="Generation" modules="Genesis / Nexus · Image · Audio · Continuity" accent={accent} />
      <Arrow x1={330} y1={256} x2={330} y2={272} accent={accent} />
      <Arrow x1={330} y1={344} x2={330} y2={360} accent={accent} />
      <Arrow x1={330} y1={440} x2={330} y2={456} accent={accent} />
      <path d="M80 492 H48 V220 H80" fill="none" stroke={accent} strokeWidth="1.4" />
      <polygon points="80,216 72,224 88,224" fill={accent} />
      <text x="26" y="360" fill={accent} fontSize="10" transform="rotate(-90 26 360)">
        U → I → AI → C → F → Evol
      </text>
      <LoopPanel x={630} y={250} steps={steps} accent={accent} caption="living loop" />
    </svg>
  )
}

function ExoraxFigure({ accent, steps }: { accent: string; steps: string[] }) {
  const layers = [
    ["L1", "Interface", "NL / voice / visual search"],
    ["L2", "AI intelligence", "need = Intent(·)  ·  π* = arg max Score"],
    ["L3", "Product data", "Canonical record · inventory · X Atelier"],
    ["L4", "3D / AR", "inspect = Twin(p)"],
    ["L5", "Interactive content", "Presenter · Flipbook · C = g(inspect, presenter)"],
    ["L6", "Transaction", "buy ⇔ C ≥ τ  ·  3PL adapter"],
  ] as const

  return (
    <svg viewBox="0 0 920 560" className="h-auto w-full min-w-[640px]" role="img" aria-label="ExoraX X1 architecture">
      <rect width="920" height="560" fill="#050506" />
      <text x="360" y="26" textAnchor="middle" fill="#a1a1aa" fontSize="11" letterSpacing="2">
        CONFIDENCE BEFORE VALUE MOVES
      </text>
      {layers.map(([n, title, modules], i) => (
        <g key={n}>
          <LayerBox x={70} y={42 + i * 78} w={540} h={68} n={n} title={title} modules={modules} accent={accent} />
          {i < layers.length - 1 ? (
            <Arrow x1={340} y1={110 + i * 78} x2={340} y2={120 + i * 78} accent={accent} />
          ) : null}
        </g>
      ))}
      <path d="M70 508 H38 V76 H70" fill="none" stroke={accent} strokeWidth="1.4" />
      <polygon points="70,72 62,80 78,80" fill={accent} />
      <text x="18" y="300" fill={accent} fontSize="10" transform="rotate(-90 18 300)">
        Score_{"{t+1}"} ← Outcome
      </text>
      <rect x="650" y="200" width="230" height="88" fill="none" stroke="#3f3f46" strokeWidth="1" />
      <text x="765" y="228" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        3PL ADAPTER
      </text>
      <text x="765" y="250" textAnchor="middle" fill="#71717a" fontSize="10">
        no owned fleet
      </text>
      <text x="765" y="270" textAnchor="middle" fill="#52525b" fontSize="10">
        fulfillment instruction only
      </text>
      <LoopPanel x={640} y={300} r={90} steps={steps} accent={accent} caption="X1 loop" />
    </svg>
  )
}

function LayerBox({
  x,
  y,
  w,
  h,
  n,
  title,
  modules,
  accent,
}: {
  x: number
  y: number
  w: number
  h: number
  n: string
  title: string
  modules: string
  accent: string
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#09090b" stroke={accent} strokeOpacity="0.45" strokeWidth="1.2" />
      <rect x={x} y={y} width="6" height={h} fill={accent} />
      <text x={x + 18} y={y + 22} fill="#71717a" fontSize="10" fontFamily="ui-monospace, monospace">
        {n}
      </text>
      <text x={x + 52} y={y + 22} fill="#fafafa" fontSize="14" fontWeight="600">
        {title}
      </text>
      <text x={x + 18} y={y + 46} fill="#a1a1aa" fontSize="11">
        {modules}
      </text>
    </g>
  )
}

function Arrow({ x1, y1, x2, y2, accent }: { x1: number; y1: number; x2: number; y2: number; accent: string }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeWidth="1.3" />
    </g>
  )
}

function LoopPanel({
  x,
  y,
  r = 78,
  steps,
  accent,
  caption,
}: {
  x: number
  y: number
  r?: number
  steps: string[]
  accent: string
  caption: string
}) {
  const cx = x + 110
  const cy = y + 110
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.2" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#71717a" fontSize="10">
        {caption}
      </text>
      {steps.map((step, i) => {
        const a = (-Math.PI / 2) + (i * 2 * Math.PI) / steps.length
        const px = cx + Math.cos(a) * r
        const py = cy + Math.sin(a) * r
        return (
          <g key={step}>
            <circle cx={px} cy={py} r="28" fill="#09090b" stroke={accent} strokeWidth="1.2" />
            <text x={px} y={py + 4} textAnchor="middle" fill="#fff" fontSize="9">
              {step}
            </text>
          </g>
        )
      })}
    </g>
  )
}
