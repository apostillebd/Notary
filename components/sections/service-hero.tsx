import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ServicePage } from "@/lib/types"

export function ServiceHero({ data }: { data: ServicePage }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-primary-foreground/70">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/services/${data.categorySlug}`} className="hover:text-accent">
              {data.category}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary-foreground/90">{data.title}</span>
          </nav>

          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            {data.hero.eyebrow}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
            {data.hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {data.hero.subheading}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {data.hero.primaryCta && (
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={data.hero.primaryCta.href}>{data.hero.primaryCta.label}</Link>
              </Button>
            )}
            {data.hero.secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl lg:aspect-[5/4]">
          <Image
            src={data.hero.image || "/placeholder.svg"}
            alt={data.hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
