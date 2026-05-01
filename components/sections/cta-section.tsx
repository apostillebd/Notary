import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ServicePage } from "@/lib/types"

export function CtaSection({ data }: { data: ServicePage }) {
  const { cta } = data
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <h2 className="font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg text-pretty">
          {cta.subheading}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={cta.primaryCta.href}>
              {cta.primaryCta.label} <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          {cta.secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href={cta.secondaryCta.href}>{cta.secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
