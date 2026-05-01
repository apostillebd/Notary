import { Star, Quote } from "lucide-react"
import type { ServicePage } from "@/lib/types"

export function Testimonials({ data }: { data: ServicePage }) {
  const { testimonials } = data
  return (
    <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Customer Reviews</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
            {testimonials.heading}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-5 top-5 h-7 w-7 text-accent/30" aria-hidden="true" />
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < t.rating ? "fill-accent text-accent" : "text-border"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                {(t.role || t.location) && (
                  <p className="text-xs text-muted-foreground">
                    {[t.role, t.location].filter(Boolean).join(" · ")}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
