import Image from "next/image"

const founders = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    image: "/images/founder-1.jpg",
    bio: "A former club president who experienced firsthand the challenge of securing sponsorships. Alex started ClubLaunch to ensure no student club goes without the resources they need to succeed.",
  },
  {
    name: "Jordan Chen",
    role: "Co-Founder & COO",
    image: "/images/founder-2.jpg",
    bio: "With a background in marketing and a passion for education, Jordan brings strategic partnerships to life. Their goal is to make every club feel like they have a Fortune 500 marketing team behind them.",
  },
]

export function Founders() {
  return (
    <section id="founders" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Meet the Team
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            The People Behind ClubLaunch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Two friends united by a shared belief that every school club
            deserves the chance to thrive.
          </p>
        </div>

        {/* Founder cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-card-foreground">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {founder.role}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
