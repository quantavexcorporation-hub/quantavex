export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-sm text-muted-foreground">
          Udit Gour{" "}
          <a
            href="/"
            className="text-primary transition-opacity hover:opacity-80"
          >
            / Quantavex
          </a>
        </span>
        <span className="text-xs text-muted-foreground/60">
          Designed with precision. Built for the future.
        </span>
      </div>
    </footer>
  )
}
