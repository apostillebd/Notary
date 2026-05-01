import { Shield, Clock, Award, Globe2, Users, FileCheck, HeartHandshake, Lock } from "lucide-react"
import type { ServicePage } from "@/lib/types"

const ICONS = [Shield, Clock, Award, Globe2, Users, FileCheck, HeartHandshake, Lock]

export function WhyChooseUs({ data }: { data: ServicePage }) {
  const { whyChooseUs } = data
  return (
    <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Choose Us</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
            {whyChooseUs.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{whyChooseUs.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.features.map((f, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
