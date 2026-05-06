import Link from "next/link"
import Image from "next/image" // Image কম্পোনেন্ট ইমপোর্ট করা হলো
import { Mail, Phone, MapPin } from "lucide-react" // Scale আইকনটি সরিয়ে দেওয়া হয়েছে
import { navigation, isCategory } from "@/lib/navigation"

export function SiteFooter() {
  const categories = navigation.filter(isCategory)

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            
            {/* --- লোগোর অংশ (আপডেট করা হয়েছে) --- */}
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image 
                src="/images/logo.png"
                alt="Notary.bd Logo" 
                width={180} // আপনার লোগো অনুযায়ী উইডথ কমান/বাড়ান
                height={50} // আপনার লোগো অনুযায়ী হাইট কমান/বাড়ান
                className="object-contain"
                className="object-contain brightness-0 invert opacity-90"
              />
            </Link>
            {/* --------------------------------- */}

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Bangladesh&apos;s trusted online platform for notary public, affidavit drafting, MOFA apostille, and
              certified translation services. Legally recognized worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" /> +880 1611 903 078
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" /> info @ notary.bd
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5" /> Dhaka, Bangladesh
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