import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories, getCategory } from "@/lib/categories"

type Params = { category: string }

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return {}
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: `/services/${cat.slug}` },
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
      type: "website",
      images: [cat.heroImage],
    },
  }
}

export default async function CategoryRoute({ params }: { params: Promise<Params> }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-primary-foreground/70">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary-foreground/90">{cat.title}</span>
            </nav>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              Services
            </span>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              {cat.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {cat.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#services">Browse Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl lg:aspect-[5/4]">
            <Image
              src={cat.heroImage || "/placeholder.svg"}
              alt={cat.title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section id="services" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">All {cat.title}</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
              Choose the service you need
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every service below is delivered by licensed professionals, fully online, with same-day or
              express turnaround available.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cat.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${cat.slug}/${s.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-6">
          <h2 className="font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Talk to a licensed legal expert from Notary.bd. We will review your documents, explain the right path
            and give you a fixed quote in under an hour.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Talk to a Legal Expert</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
