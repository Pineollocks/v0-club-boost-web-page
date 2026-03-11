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
    <section id="partners" className="bg-secondary/50 px-6 py-24 md:py-32 overflow-hidden">
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

        {/* Partner logos conveyor belt */}
        <div className="mt-16 relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {/* First set of partners */}
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-border bg-card px-8 shrink-0"
                >
                  <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-foreground/70 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner.name}-duplicate`}
                  className="flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-border bg-card px-8 shrink-0"
                >
                  <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-foreground/70 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
