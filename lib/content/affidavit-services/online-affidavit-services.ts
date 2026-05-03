import type { ServicePage } from "@/lib/types"

const page: ServicePage = {
  slug: "online-affidavit-services",
  category: "Affidavit Services",
  categorySlug: "affidavit-services",
  title: "Online Affidavit Services",
  metaTitle: "Online Affidavit Services in Bangladesh — Drafted & Notarized",
  metaDescription:
    "Draft, sign and notarize any affidavit in Bangladesh online. Lawyer-prepared, court-accepted affidavits delivered same-day. Apply from anywhere in the world.",
  hero: {
    eyebrow: "Affidavit Services",
    heading: "Online Affidavit Services — Drafted by Lawyers, Notarized in Hours",
    subheading:
      "Need an affidavit fast? Tell us what you need, sign on a video call, and receive a court-ready, notarized affidavit the same day — without leaving your home.",
    image: "/images/Affidavit-services-in-bangladesh.webp",
    imageAlt: "Person signing an affidavit online with notary",
    primaryCta: { label: "Start My Affidavit", href: "/contact" },
    secondaryCta: { label: "All Affidavit Services", href: "/services/affidavit-services" },
  },
  overview: {
    heading: "Every type of affidavit, prepared and notarized online",
    intro:
      "An affidavit is a written sworn statement signed before a notary public or commissioner of oaths. It is one of the most widely used legal documents in Bangladesh — for visa applications, property transactions, name changes, court cases, education, employment and immigration.",
    paragraphs: [
      "Notary.bd&apos;s online affidavit service covers the entire process. Our lawyers draft the affidavit based on your situation, our notary public notarizes it on a video call, and we deliver the digital and physical copies wherever you are. You never need to visit an office.",
      "We prepare all common categories of affidavits — single status, name change, age correction, lost document declaration, no objection certificate, financial sponsorship, tenancy, business, gift declaration, succession, custody and more. Each affidavit is drafted to meet the exact format required by the receiving authority, whether it is a Bangladeshi court, a foreign embassy, a university or a government department.",
      "All affidavits notarized through Notary.bd carry the official seal and signature of a licensed notary public, and they are fully compatible with our MOFA apostille, embassy attestation and certified translation services if you need to use them abroad.",
    ],
    highlights: [
      "100+ affidavit templates ready to customize",
      "Lawyer-drafted, notarized same day",
      "Bangla, English and bilingual formats",
      "Compatible with MOFA & embassy attestation",
      "Original copy couriered nationwide",
      "Available 7 days a week",
    ],
  },
  whyChooseUs: {
    heading: "Why Notary.bd is the smart choice for affidavits",
    intro:
      "We replace queues, paperwork and confusion with a clean, lawyer-led online experience.",
    features: [
      {
        title: "Lawyer-Drafted Wording",
        description: "Each affidavit is drafted by qualified lawyers — not generic templates that risk rejection.",
      },
      {
        title: "Same-Day Notarization",
        description: "Documents submitted before 4 PM are typically notarized and delivered the same day.",
      },
      {
        title: "Fully Online Workflow",
        description: "From drafting to notarization to delivery — handled entirely online with secure tools.",
      },
      {
        title: "Court & Embassy Accepted",
        description: "Affidavits formatted for the exact authority that will receive them — no re-work needed.",
      },
      {
        title: "Affordable Flat Pricing",
        description: "Transparent fees with no hidden costs and no per-page surprise charges.",
      },
      {
        title: "Confidential Handling",
        description: "All affidavits handled under strict privacy protocols and secure document storage.",
      },
    ],
  },
  process: {
    heading: "How online affidavits work at Notary.bd",
    intro:
      "Four steps from a quick request to a court-ready, notarized affidavit.",
    steps: [
      {
        step: 1,
        title: "Describe what you need",
        description:
          "Tell us the purpose of the affidavit and share basic details. Our lawyer reviews and confirms the format.",
      },
      {
        step: 2,
        title: "Lawyer drafts the affidavit",
        description:
          "We draft a tailored affidavit and send it for your review and approval — usually within 1–3 hours.",
      },
      {
        step: 3,
        title: "Online notarization",
        description:
          "Join a short video call with our notary public, verify your ID, and sign the affidavit electronically.",
      },
      {
        step: 4,
        title: "Receive your documents",
        description:
          "Receive the notarized PDF immediately by email; original delivered by courier nationwide.",
      },
    ],
  },
  testimonials: {
    heading: "Real feedback from real clients",
    items: [
      {
        name: "Faisal H.",
        role: "Job Applicant",
        location: "Dhaka",
        rating: 5,
        quote:
          "I needed an experience affidavit at 11 PM for a job interview. Got it notarized online by 9 AM the next morning. Saved my career move.",
      },
      {
        name: "Tamanna R.",
        role: "Property Owner",
        location: "Khulna",
        rating: 5,
        quote:
          "Lost my deed and needed an affidavit fast. The process was incredibly smooth and the lawyer drafted exactly what the registrar wanted.",
      },
      {
        name: "Junaid M.",
        role: "Expatriate",
        location: "Singapore",
        rating: 5,
        quote:
          "Did everything from Singapore via video. Affidavit was accepted by the Bangladesh High Commission without issues.",
      },
    ],
  },
  faq: {
    heading: "Online affidavit services — FAQ",
    items: [
      {
        question: "What types of affidavits can you prepare?",
        answer:
          "Almost any — single status, name change, age correction, financial sponsorship, lost document, NOC, tenancy, gift, succession, custody, business and more.",
      },
      {
        question: "How long does it take?",
        answer:
          "Most online affidavits are drafted, notarized and delivered the same day. Complex affidavits may take 1–2 working days.",
      },
      {
        question: "Is an online affidavit legally valid?",
        answer:
          "Yes. As long as it is signed before a licensed notary public with proper ID verification, the affidavit is legally valid in Bangladesh and abroad.",
      },
      {
        question: "Can I use an online affidavit abroad?",
        answer:
          "Yes. We can also handle MOFA apostille, embassy attestation and certified translation as part of one combined service.",
      },
      {
        question: "Do I need to come to your office?",
        answer:
          "No. The entire process is online, including identity verification, signing and delivery. You can also visit us in Dhaka if you prefer.",
      },
    ],
  },
  cta: {
    heading: "Need an affidavit? Get yours online today.",
    subheading:
      "Skip the office visits and queues. Our lawyers will draft your affidavit and our notary will notarize it — all online, often the same day.",
    primaryCta: { label: "Start My Affidavit Now", href: "/contact" },
    secondaryCta: { label: "Talk to a Lawyer", href: "/contact" },
  },
}

export default page
