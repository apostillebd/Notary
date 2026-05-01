import { CheckCircle2 } from "lucide-react"
import type { ServicePage } from "@/lib/types"

export function ServiceOverview({ data }: { data: ServicePage }) {
  const { overview } = data
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Service Overview</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
              {overview.heading}
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90 text-pretty">{overview.intro}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {overview.highlights && overview.highlights.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {overview.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
