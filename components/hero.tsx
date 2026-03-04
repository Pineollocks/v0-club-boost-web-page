import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* Subtle badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <span className="inline-block size-2 rounded-full bg-emerald-500" />
        Non-profit marketing for school clubs
      </div>

      <h1 className="mx-auto max-w-4xl font-[var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
        Helping School Clubs
        <br />
        Find Their Sponsors
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
        We act as your club{"'"}s dedicated marketing team, connecting you with
        sponsors and funding so you can focus on what matters most -- your
        mission.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild size="lg" className="rounded-full px-8 text-base">
          <a href="#contact">Work With Us</a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-8 text-base"
        >
          <a href="#mission">Learn More</a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <a
        href="#mission"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to mission section"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
