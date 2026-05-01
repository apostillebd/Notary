import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/categories"

export const metadata: Metadata = {
  title: "All Services — Notary, Affidavit, Apostille & Translation | Notary.bd",
  description:
    "Browse all professional legal services from Notary.bd: online notary, affidavit drafting, MOFA apostille, and certified translation services in Bangladesh.",
  alternates: { canonical: "/services" },
}

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 md:py-24">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
            Complete legal documentation services for Bangladesh and beyond
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80 md:text-lg">
            From notarization to apostille and certified translation, every service you need to use your
            Bangladeshi documents anywhere in the world — all under one roof.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cat.heroImage || "/placeholder.svg"}
                    alt={cat.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl font-semibold text-card-foreground group-hover:text-primary md:text-2xl">
                    {cat.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {cat.description}
                  </p>
                  <ul className="mt-5 grid gap-1.5 text-sm text-foreground/80">
                    {cat.services.slice(0, 4).map((s) => (
                      <li key={s.slug} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Explore {cat.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
