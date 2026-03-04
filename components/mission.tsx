import { Megaphone, Handshake, GraduationCap } from "lucide-react"

const values = [
  {
    icon: Megaphone,
    title: "Free Marketing",
    description:
      "We provide full-service marketing support to school clubs at no cost, helping amplify their reach and impact.",
  },
  {
    icon: Handshake,
    title: "Sponsor Connections",
    description:
      "We bridge the gap between clubs and potential sponsors, building lasting partnerships that fuel student initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Student First",
    description:
      "Everything we do is centered on empowering students, removing the burden of fundraising so clubs can thrive.",
  },
]

export function Mission() {
  return (
    <section id="mission" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Our Mission
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Empowering Clubs to Do What They Do Best
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            School clubs are full of passion but often lack the resources to
            market themselves and secure funding. We change that -- for free.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/10 hover:shadow-sm"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                <value.icon className="size-6" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
