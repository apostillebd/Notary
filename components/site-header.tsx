"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Scale } from "lucide-react"
import { navigation, isCategory } from "@/lib/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:h-20">
        <Link href="/" className="flex items-center gap-2 font-serif">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Scale className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-foreground">Notary</span>
            <span className="hidden text-[11px] font-sans uppercase tracking-widest text-muted-foreground sm:inline">
              Trusted Legal Services
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            if (isCategory(item)) {
              return (
                <div key={item.title} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.title}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-80 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-lg border border-border bg-popover p-2 shadow-lg">
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary"
                      >
                        View all {item.title} →
                      </Link>
                      <div className="my-1 h-px bg-border" />
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block rounded-md px-3 py-2 hover:bg-secondary"
                        >
                          <span className="block text-sm font-medium text-foreground">{sub.title}</span>
                          {sub.description && (
                            <span className="mt-0.5 block text-xs text-muted-foreground leading-relaxed">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden border-t border-border bg-background overflow-hidden transition-[max-height] duration-300",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {navigation.map((item) => {
            if (isCategory(item)) {
              const open = openMobileSection === item.title
              return (
                <div key={item.title} className="rounded-md border border-border">
                  <button
                    type="button"
                    onClick={() => setOpenMobileSection(open ? null : item.title)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium"
                    aria-expanded={open}
                  >
                    {item.title}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
                  </button>
                  {open && (
                    <div className="border-t border-border p-2">
                      <Link
                        href={item.href}
                        className="block rounded px-3 py-2 text-sm font-semibold text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        View all {item.title}
                      </Link>
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block rounded px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            )
          })}
          <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
