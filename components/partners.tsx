const partners = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Initech" },
  { name: "Hooli" },
  { name: "Stark Industries" },
  { name: "Wayne Enterprises" },
]

export function Partners() {
  return (
    <section id="partners" className="bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Our Partners
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Companies That Believe in Students
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We{"'"}re proud to work alongside organizations that invest in the
            next generation of leaders.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-6 transition-all hover:shadow-sm"
            >
              <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-foreground/70">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want to become a partner?{" "}
          <a
            href="#contact"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-foreground/80"
          >
            Reach out to us
          </a>
        </p>
      </div>
    </section>
  )
}
