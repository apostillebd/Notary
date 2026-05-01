import type { ServicePage } from "@/lib/types"

export function WorkProcess({ data }: { data: ServicePage }) {
  const { process } = data
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Process</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{process.intro}</p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {process.steps.map((s) => (
            <li
              key={s.step}
              className="relative flex gap-5 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                  {String(s.step).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
