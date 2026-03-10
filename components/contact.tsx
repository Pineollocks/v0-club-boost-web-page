"use client"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact Us
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Let's"} Work Together
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether {"you're"} a club looking for support or a company
            interested in sponsoring, {"we'd"} love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-8 md:col-span-2">
            <div>
              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-foreground">
                Get in touch
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Send us a message and {"we'll"} get back to you within 24
                hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-5 shrink-0" />
                <span>ClubLaunch123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 shrink-0" />
                <span>Remote - Nationwide</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
                <div className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-secondary text-foreground">
                  <Mail className="size-6" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. {"We'll"} be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your club or partnership idea..."
                    required
                    className="min-h-32 rounded-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
