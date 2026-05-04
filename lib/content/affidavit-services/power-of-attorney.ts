import type { ServicePage } from "@/lib/types"

const page: ServicePage = {
  slug: "power-of-attorney",
  category: "Affidavit Services",
  categorySlug: "affidavit-services",
  title: "Power of Attorney (POA)",
  metaTitle: "Power of Attorney (POA) Drafting & Notarization in Bangladesh",
  metaDescription:
    "General and special Power of Attorney drafted by lawyers and notarized in Bangladesh. Property, banking, business and litigation POAs accepted nationwide and abroad.",
  hero: {
    eyebrow: "Affidavit Services",
    heading: "Power of Attorney — Drafted, Notarized & Registered Right",
    subheading:
      "From handling a property sale while you&apos;re abroad to authorising a bank, a lawyer or a relative to act on your behalf — our POAs are drafted by lawyers and notarized for full legal effect.",
    image: "/images/Affidavit-services-in-bangladesh.webp",
    imageAlt: "Power of Attorney document being signed and notarized",
    primaryCta: { label: "Draft My POA", href: "/contact" },
    secondaryCta: { label: "All Affidavit Services", href: "/services/affidavit-services" },
  },
  overview: {
    heading: "General, special and registered Power of Attorney",
    intro:
      "A Power of Attorney (POA) is a legal document that lets you authorise another person — your &quot;attorney&quot; or &quot;agent&quot; — to act on your behalf for specific or general matters.",
    paragraphs: [
      "Bangladeshi expatriates use POAs to manage property, sign sale deeds, operate bank accounts, pursue court cases and represent businesses while they are abroad. Inside Bangladesh, POAs are routinely used in commercial transactions, banking, regulatory filings and litigation. The right POA must be drafted carefully — too narrow and the agent cannot do the job; too broad and you may be exposed to risk.",
      "Notary.bd offers two main categories: General Power of Attorney (broad authority over a class of matters) and Special Power of Attorney (specific authority for a single transaction such as one sale deed, one bank operation or one court case). Where the POA relates to immovable property, we also handle registration at the Sub-Registry Office under the Registration Act, including stamp duty calculation and submission.",
      "For POAs executed by Bangladeshis living abroad, we coordinate with the relevant Bangladesh embassy or High Commission for execution and counter-attestation by MOFA. We then file the POA at the Sub-Registry, deliver the originals to the agent, and provide certified copies for the client&apos;s records.",
    ],
    highlights: [
      "General & Special Power of Attorney",
      "Property, banking, business and court POAs",
      "Drafted by experienced lawyers",
      "Sub-Registry registration support",
      "Embassy execution for expatriates",
      "MOFA & destination attestation",
    ],
  },
  whyChooseUs: {
    heading: "Why our POAs work flawlessly",
    intro:
      "A wrongly drafted POA is dangerous. Ours are precise, lawful and tested in every typical use case.",
    features: [
      {
        title: "Lawyer-Drafted Scope",
        description:
          "We draft scope and limitations carefully — granting only what&apos;s necessary, nothing more.",
      },
      {
        title: "Sub-Registry Registration",
        description:
          "For property POAs, we calculate stamp duty and handle registration at the appropriate Sub-Registry.",
      },
      {
        title: "Embassy Execution",
        description:
          "Living abroad? We coordinate execution at your nearest Bangladesh embassy and onward MOFA attestation.",
      },
      {
        title: "Bilingual Drafting",
        description: "POAs in Bangla, English, or bilingual format — based on where they will be used.",
      },
      {
        title: "Bank & Court Compatible",
        description:
          "POAs structured to satisfy bank manuals and the standards of Bangladeshi courts.",
      },
      {
        title: "Revocation Service",
        description: "Need to revoke an existing POA? We draft and publish revocations correctly.",
      },
    ],
  },
  process: {
    heading: "How we prepare your Power of Attorney",
    intro: "Five clear steps from your first instruction to a registered, enforceable POA.",
    steps: [
      {
        step: 1,
        title: "Define the scope",
        description:
          "Tell us exactly what the agent should do, for how long, and the limits you want to set.",
      },
      {
        step: 2,
        title: "Drafting & review",
        description:
          "Our lawyer drafts the POA, walks you through each clause, and refines until you&apos;re fully comfortable.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "Sign before our notary public in Bangladesh, or at the Bangladesh embassy if you&apos;re abroad.",
      },
      {
        step: 4,
        title: "Registration (if required)",
        description:
          "For property POAs, we handle stamp duty and registration at the Sub-Registry Office.",
      },
      {
        step: 5,
        title: "Delivery to agent",
        description:
          "Original POA delivered to your agent; certified copies retained for your records.",
      },
    ],
  },
  testimonials: {
    heading: "POAs that got the job done",
    items: [
      {
        name: "Saiful M.",
        role: "Property Owner",
        location: "Houston, USA",
        rating: 5,
        quote:
          "I sold my Dhaka flat from Texas. Notary.bd drafted, embassy-executed, and registered the POA — my agent completed the sale without a hitch.",
      },
      {
        name: "Tahmina A.",
        role: "Bank POA",
        location: "Dhaka",
        rating: 5,
        quote:
          "Authorised my brother to operate my account while I was hospitalised. The POA was accepted at the bank instantly.",
      },
      {
        name: "Rahman & Co.",
        role: "Litigation POA",
        location: "Chattogram",
        rating: 5,
        quote: "Drafted a court-specific POA for our matter. Tightly worded, accepted by the court, and very affordable.",
      },
    ],
  },
  faq: {
    heading: "Power of Attorney — FAQ",
    items: [
      {
        question: "What is the difference between General and Special POA?",
        answer:
          "A General POA grants broad authority over a class of matters; a Special POA grants authority for a specific, defined transaction. Special POAs are usually safer.",
      },
      {
        question: "Does a POA need to be registered?",
        answer:
          "POAs related to immovable property generally need registration at the Sub-Registry Office. Many other POAs only require notarization.",
      },
      {
        question: "Can I execute a POA from abroad?",
        answer:
          "Yes. We coordinate execution at the nearest Bangladesh embassy, MOFA attestation, and Sub-Registry registration in Bangladesh.",
      },
      {
        question: "Can I revoke a POA later?",
        answer:
          "Yes. We can draft a revocation deed, notarize and (where needed) register it to formally cancel an existing POA.",
      },
      {
        question: "How long does drafting and notarization take?",
        answer:
          "Most POAs are drafted within 24 hours and notarized the same day after your approval.",
      },
    ],
  },
  cta: {
    heading: "Authorise the right person, the right way",
    subheading:
      "Get a precisely drafted, properly notarized and (where needed) registered Power of Attorney that gets the job done.",
    primaryCta: { label: "Start My POA", href: "/contact" },
    secondaryCta: { label: "Speak to a POA Lawyer", href: "/contact" },
  },
}

export default page
