import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Notary.bd Blog — Legal Insights for Bangladesh and Beyond",
  description:
    "Practical guides on notary services, affidavits, MOFA apostille and certified translation in Bangladesh. Updated regularly by our legal team.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center md:px-6 md:py-20">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Notary.bd Blog
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
            Legal insights for documents that travel the world
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80 md:text-lg">
            Practical, up-to-date guides on notarization, affidavits, MOFA apostille and certified translation —
            written by our in-house legal experts.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Featured */}
          {featured && (
            <article className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-card-foreground md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
                <Button
                  asChild
                  className="mt-6 w-fit bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={`/blog/${featured.slug}`}>
                    Read article <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          )}

          {/* Rest */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-card-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Need help with a specific document?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Our legal team can review your case and recommend the fastest, most cost-effective path — usually
              within an hour.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">Talk to a Legal Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
