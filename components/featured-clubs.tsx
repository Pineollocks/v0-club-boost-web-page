import Image from "next/image"
import { Trophy, TrendingUp, Users, Leaf } from "lucide-react"

const clubs = [
  {
    name: "Westside Robotics League",
    school: "Westside High School",
    image: "/images/club-robotics.jpg",
    icon: Trophy,
    tagline: "Regional Champions, 2024",
    description:
      "From a 12-person after-school group to a nationally ranked robotics team. ClubBoost helped them secure $18,000 in sponsorships to attend the FIRST Robotics World Championship.",
    achievements: [
      "1st Place, Regional Robotics Championship",
      "Secured 3 corporate sponsors",
      "Grew from 12 to 45 members",
    ],
    highlight: "$18K+ raised",
  },
  {
    name: "Lincoln Debate Society",
    school: "Lincoln Preparatory Academy",
    image: "/images/club-debate.jpg",
    icon: TrendingUp,
    tagline: "State Finalists, 3 Years Running",
    description:
      "Sponsorship funding allowed them to travel to 8 tournaments this year, including nationals. Their membership has tripled since partnering with ClubBoost.",
    achievements: [
      "State finals 3 consecutive years",
      "8 tournaments attended this season",
      "Membership tripled in 2 years",
    ],
    highlight: "8 tournaments funded",
  },
  {
    name: "Green Future Initiative",
    school: "Maplewood Community School",
    image: "/images/club-environmental.jpg",
    icon: Leaf,
    tagline: "500+ Trees Planted This Year",
    description:
      "What started as a small recycling club became a school-wide sustainability movement. ClubBoost connected them with eco-conscious brands for ongoing support.",
    achievements: [
      "500+ trees planted campus-wide",
      "Partnered with 2 eco-brands",
      "School-wide composting program launched",
    ],
    highlight: "2 ongoing partnerships",
  },
  {
    name: "Girls in STEM Collective",
    school: "Riverside Academy",
    image: "/images/club-stem.jpg",
    icon: Users,
    tagline: "Bridging the Gap in STEM",
    description:
      "Dedicated to making STEM accessible and exciting for young women. With sponsor support, they now host monthly workshops, hackathons, and a summer coding camp.",
    achievements: [
      "Monthly workshops with 60+ attendees",
      "Annual hackathon with 120 participants",
      "Summer coding camp for middle schoolers",
    ],
    highlight: "200+ students reached",
  },
]

export function FeaturedClubs() {
  return (
    <section id="clubs" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Featured Clubs
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Clubs Making an Impact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            These are some of the incredible student organizations we{"'"}ve had
            the privilege to support. Their stories speak for themselves.
          </p>
        </div>

        {/* Club cards */}
        <div className="mt-16 flex flex-col gap-12">
          {clubs.map((club, index) => {
            const Icon = club.icon
            const isReversed = index % 2 !== 0
            return (
              <article
                key={club.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] md:aspect-auto md:w-1/2">
                    <Image
                      src={club.image}
                      alt={`${club.name} team photo`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Highlight badge */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-foreground/90 px-4 py-1.5">
                      <span className="text-sm font-semibold text-background">
                        {club.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="size-5 text-foreground" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {club.school}
                      </p>
                    </div>

                    <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-bold tracking-tight text-card-foreground md:text-3xl text-balance">
                      {club.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {club.tagline}
                    </p>

                    <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                      {club.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-6 flex flex-col gap-2.5" role="list">
                      {club.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm text-card-foreground"
                        >
                          <span
                            className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-foreground"
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-secondary/50 p-8 text-center md:p-12">
          <h3 className="font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl text-balance">
            Want Your Club Featured Here?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground text-pretty">
            We{"'"}re always looking for passionate student clubs to support. If
            your club could use a marketing boost, we{"'"}d love to hear from
            you.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
