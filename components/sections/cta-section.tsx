import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
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
          
          {/* Primary CTA (Call Now Whatsapp) */}
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link 
              href="https://api.whatsapp.com/send/?phone=8801820196166&text&type=phone_number&app_absent=0"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {cta.primaryCta.label} <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>

          {/* --- হোয়াটসঅ্যাপ লিংক যুক্ত ফোন নাম্বার বাটন (আপডেট করা আউটলাইন ডিজাইন) --- */}
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link 
              href="https://api.whatsapp.com/send/?phone=8801820196166&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium"
            >
              <Phone className="h-4 w-4" />
              +880 1820 196 166
            </Link>
          </Button>
          {/* ------------------- */}

          {/* Secondary CTA (Talk to a Legal Expert) */}
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