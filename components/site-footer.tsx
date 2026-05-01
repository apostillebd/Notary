import Link from "next/link"
import { Scale, Mail, Phone, MapPin } from "lucide-react"
import { navigation, isCategory } from "@/lib/navigation"

export function SiteFooter() {
  const categories = navigation.filter(isCategory)

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold">Notary.bd</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Bangladesh&apos;s trusted online platform for notary public, affidavit drafting, MOFA apostille, and
              certified translation services. Legally recognized worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" /> +880 1700-000000
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" /> hello@notary.bd
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5" /> Gulshan, Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-serif text-base font-semibold">{cat.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {cat.items.slice(0, 6).map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-primary-foreground/75 transition hover:text-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Notary.bd — All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
            <Link href="/" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
