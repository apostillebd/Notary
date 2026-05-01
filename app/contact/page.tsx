import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Notary.bd — Get a Free Quote in 1 Hour",
  description:
    "Contact Notary.bd for online notary, affidavit, MOFA apostille and certified translation services in Bangladesh. We respond within 1 business hour.",
  alternates: { canonical: "/contact" },
}

const contactDetails = [
  { icon: Phone, label: "Call / WhatsApp", value: "+880 1700-000000", href: "tel:+8801700000000" },
  { icon: Mail, label: "Email", value: "hello@notary.bd", href: "mailto:hello@notary.bd" },
  { icon: MapPin, label: "Office", value: "Gulshan Avenue, Dhaka 1212, Bangladesh" },
  { icon: Clock, label: "Hours", value: "Sun – Thu: 9:00 AM – 9:00 PM | Fri – Sat: 10:00 AM – 6:00 PM" },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center md:px-6 md:py-20">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Contact Us
          </span>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
            Talk to a licensed legal expert today
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80 md:text-lg">
            Tell us about your document. We will reply within 1 business hour with a fixed quote and timeline —
            no obligations, no hidden charges.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-card-foreground md:text-3xl">
              Send us your request
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form below — our legal team will respond within an hour.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-xl font-semibold text-card-foreground">Contact details</h2>
              <ul className="mt-6 grid gap-5">
                {contactDetails.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-foreground">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground">Why clients trust Notary.bd</h3>
              <ul className="mt-4 grid gap-2 text-sm text-foreground/85">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" /> Government-licensed notaries
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" /> Same-day delivery on most documents
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" /> 50,000+ documents notarized
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" /> Documents accepted in 60+ countries
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" /> Confidential handling, encrypted transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
