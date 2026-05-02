import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Globe2, Clock, Award, BadgeCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories"

export const metadata: Metadata = {
  title: "Notary.bd — Online Notary Public, Affidavit, Apostille & Translation in Bangladesh",
  description:
    "Bangladesh's most trusted online platform for notary public, affidavit drafting, MOFA apostille, and certified translation services. Fast, secure, accepted worldwide.",
  alternates: { canonical: "/" },
}

const stats = [
  { value: "50,000+", label: "Documents notarized" },
  { value: "60+", label: "Countries served" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "24/7", label: "Online support" },
]

const features = [
  {
    icon: ShieldCheck,
    title: "Government Licensed",
    description: "Every notary on our panel is registered under the Notaries Ordinance of Bangladesh.",
  },
  {
    icon: Clock,
    title: "Same-Day Turnaround",
    description: "Most documents are notarized, attested or translated within the same business day.",
  },
  {
    icon: Globe2,
    title: "Globally Accepted",
    description: "Documents accepted by embassies, courts, banks and universities in 60+ countries.",
  },
  {
    icon: Award,
    title: "MOFA Apostille",
    description: "Full Hague Apostille and embassy legalization handled end-to-end.",
  },
  {
    icon: BadgeCheck,
    title: "Sworn Translators",
    description: "Certified translators for English, Spanish, Arabic, Italian, Portuguese, German and French.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Individuals, law firms, recruitment agencies and corporates rely on us every day.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          <div>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              Bangladesh&apos;s #1 Online Notary
            </span>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl lg:text-6xl">
              Fast, Secure & Certified Notary Public Services in Bangladesh — without leaving home.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Notary.bd is the trusted online legal platform for licensed notary public, affidavit drafting,
              MOFA apostille and certified translation services across Bangladesh. Same-day delivery, accepted
              worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/10 pt-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-2xl font-semibold text-accent md:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-primary-foreground/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary-foreground/10 shadow-2xl lg:aspect-[5/4]">
            <Image
              src="/images/hero-home.jpg"
              alt="Sophisticated notary law office in Bangladesh with bookshelves and warm sunlight"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">What we do</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
              Expert Notarization, Apostille & Translation Services
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every service you need to use your Bangladeshi documents anywhere in the world.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-serif text-xl font-semibold text-primary-foreground md:text-2xl">
                      {cat.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Explore {cat.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Notary.bd</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
              The trusted choice for individuals, lawyers and corporates
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">How it works</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-balance md:text-3xl lg:text-4xl">
              From upload to delivery in 4 easy steps
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "Send your document", desc: "Upload your scan and tell us what you need." },
              { step: 2, title: "Get a fixed quote", desc: "Receive a flat fee and timeline within 1 hour." },
              { step: 3, title: "Approve & verify", desc: "Approve the draft and complete identity verification." },
              { step: 4, title: "Receive your document", desc: "Get your notarized document by email and courier." },
            ].map((s) => (
              <li
                key={s.step}
                className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-serif text-base font-semibold text-accent-foreground shadow">
                  {s.step}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Ready to get your document notarized?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
            Skip the queues. Notarize, attest and translate your documents online today — accepted worldwide.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Start Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
