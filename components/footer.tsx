export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <a
          href="#"
          className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-foreground"
        >
          ClubBoost
        </a>
        <p className="text-sm text-muted-foreground">
          {"ClubBoost"} &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#mission"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Mission
          </a>
          <a
            href="#clubs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Clubs
          </a>
          <a
            href="#partners"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Partners
          </a>
          <a
            href="#founders"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Founders
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
