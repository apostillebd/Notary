"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContact, type ContactFormState } from "@/app/contact/actions"
import { categories } from "@/lib/categories"

const initialState: ContactFormState = { status: "idle" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Submitting..." : "Send My Request"}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <form action={formAction} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required placeholder="Your full name" autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" name="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" type="tel" name="phone" placeholder="+880 1700-000000" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">Service Needed</Label>
          <select
            id="service"
            name="service"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {categories.map((cat) => (
              <optgroup key={cat.slug} label={cat.title}>
                {cat.services.map((s) => (
                  <option key={s.slug} value={`${cat.title} — ${s.title}`}>
                    {s.title}
                  </option>
                ))}
              </optgroup>
            ))}
            
            {/* --- নতুন যুক্ত করা Other Services অপশন --- */}
            <optgroup label="Others">
              <option value="Other Services">Other Services</option>
            </optgroup>
            {/* --------------------------------------- */}

          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe the document and what you need (notarize, translate, apostille, etc.)."
        />
      </div>

      {state.status === "success" && (
        <div className="flex items-start gap-3 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm text-foreground">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}
      {state.status === "error" && (
        <div className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We respond within 1 business hour. Your information is treated as strictly confidential.
        </p>
        <SubmitButton />
      </div>
    </form>
  )
}