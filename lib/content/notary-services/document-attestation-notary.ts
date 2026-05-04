import type { ServicePage } from "@/lib/types"

const page: ServicePage = {
  slug: "document-attestation-notary",
  category: "Notary Services",
  categorySlug: "notary-services",
  title: "Document Attestation & Notary",
  metaTitle: "Document Attestation & Notary Services in Bangladesh",
  metaDescription:
    "Professional document attestation and notary services in Bangladesh for personal, educational and commercial papers. MOFA, embassy and notary all in one place.",
  hero: {
    eyebrow: "Notary Services",
    heading: "Document Attestation & Notary Services in Bangladesh",
    subheading:
      "From educational certificates to commercial invoices, we handle the complete attestation and notarization chain — Notary, Foreign Ministry, Home Ministry and Embassy — under a single, transparent service.",
    image: "/images/hero-notary-services.jpg",
    imageAlt: "Stack of attested legal documents with embossed seals",
    primaryCta: { label: "Get Free Consultation", href: "/contact" },
    secondaryCta: { label: "See All Notary Services", href: "/services/notary-services" },
  },
  overview: {
    heading: "Complete document attestation, end-to-end",
    intro:
      "Document attestation in Bangladesh is the multi-step process of having your documents verified and stamped by competent authorities so they can be legally used in another country or with a regulated institution.",
    paragraphs: [
      "Every document you submit — whether it is a university transcript, birth certificate, marriage record, commercial invoice, board resolution or power of attorney — typically passes through several layers: notarization by a licensed notary public, verification by the relevant ministry (Education Board, Home Ministry, MOFA), and finally, where required, attestation at the destination country's embassy in Dhaka.",
      "At Notary.bd, we manage every layer of this chain for you. Our team picks up the documents, prepares the supporting paperwork, drafts any required affidavits, and physically attends each office on your behalf. You receive timely status updates and the final attested document is delivered to you securely, ready for use abroad or before the relevant Bangladeshi authority.",
      "We work with educational, personal and commercial documents for over 50 destination countries including Saudi Arabia, the United Arab Emirates, Qatar, Oman, Italy, the United Kingdom, the United States, Canada, Australia and the European Union. Whatever your purpose — work visa, family migration, higher education, foreign investment or business expansion — we tailor the chain to match the exact requirements of the receiving authority.",
    ],
    highlights: [
      "Education, personal and commercial document attestation",
      "Notary, MOFA, Home Ministry and embassy under one service",
      "Free pickup and delivery within Dhaka",
      "Dedicated case manager for each client",
      "Status updates by SMS and WhatsApp",
      "Service for 50+ destination countries",
    ],
  },
  whyChooseUs: {
    heading: "Why Notary.bd for your attestation needs",
    intro:
      "Attestation can be slow, opaque and frustrating when handled alone. We make it predictable, transparent and fast.",
    features: [
      {
        title: "End-to-End Handling",
        description:
          "We take care of notary, ministry and embassy steps so you only deal with one team from start to finish.",
      },
      {
        title: "Country-Specific Expertise",
        description:
          "Our specialists know exactly what each embassy requires, avoiding rejections and costly resubmissions.",
      },
      {
        title: "Document Pickup & Delivery",
        description:
          "Free pickup and secure courier delivery anywhere in Dhaka — and across Bangladesh on request.",
      },
      {
        title: "Real-Time Tracking",
        description:
          "Track each step of the attestation chain through WhatsApp updates and a dedicated case manager.",
      },
      {
        title: "No Hidden Costs",
        description:
          "Government fees, our service fees and courier charges are clearly listed in your written quote.",
      },
      {
        title: "Verified Authenticity",
        description:
          "All attestations are performed in person at official offices — no shortcuts, no third-party risk.",
      },
    ],
  },
  process: {
    heading: "Our 5-step attestation process",
    intro:
      "We standardize a complex multi-ministry process into a clean, trackable workflow.",
    steps: [
      {
        step: 1,
        title: "Free document review",
        description:
          "Share scans of your documents. We confirm exactly which attestations you need based on your destination country and purpose.",
      },
      {
        step: 2,
        title: "Notarization",
        description:
          "We notarize all required affidavits, translations and copies through our licensed notary public team.",
      },
      {
        step: 3,
        title: "Ministry verification",
        description:
          "Documents are submitted to the relevant authority — Education Board, Home Ministry or MOFA — for verification.",
      },
      {
        step: 4,
        title: "Embassy attestation",
        description:
          "Where required, we walk the documents through the destination country's embassy in Dhaka.",
      },
      {
        step: 5,
        title: "Secure delivery",
        description:
          "Final attested documents are returned to you by hand, courier, or international shipping.",
      },
            {
        step: 6,
        title: "Need Custom Attestation?",
        description:
          "Final attested documents are returned to you by hand, courier, or international shipping.",
      },
    ],
  },
  testimonials: {
    heading: "What our attestation clients say",
    items: [
      {
        name: "Rashid A.",
        role: "Migrant Worker",
        location: "Riyadh, KSA",
        rating: 5,
        quote:
          "They got my marriage certificate notarized, MOFA-attested and Saudi-embassy-stamped in one week. I was abroad the entire time.",
      },
      {
        name: "Nusrat J.",
        role: "PhD Candidate",
        location: "Milan, Italy",
        rating: 5,
        quote:
          "My academic documents were attested perfectly for the Italian embassy. The case manager kept me updated daily.",
      },
      {
        name: "Hossain Trading Ltd.",
        role: "Export Company",
        location: "Chattogram",
        rating: 5,
        quote:
          "We rely on Notary.bd for all our commercial document attestations. They are fast, professional and never miss a deadline.",
      },
    ],
  },
  faq: {
    heading: "Document attestation — frequently asked questions",
    items: [
      {
        question: "What is the difference between notarization and attestation?",
        answer:
          "Notarization is performed by a licensed notary public, while attestation is verification by a government authority such as MOFA or an embassy. Most international use cases need both.",
      },
      {
        question: "How long does the full attestation process take?",
        answer:
          "Typical processing time is 5–15 working days depending on the document type, destination country and embassy workload.",
      },
      {
        question: "Do I need to be present in Bangladesh for attestation?",
        answer:
          "No. With a notarized power of attorney we can complete the entire chain on your behalf while you are abroad.",
      },
      {
        question: "Which documents can you attest?",
        answer:
          "Educational certificates, transcripts, birth and marriage certificates, police clearance, medical reports, commercial invoices, MOA, board resolutions and many more.",
      },
      {
        question: "Will my attested documents be accepted abroad?",
        answer:
          "Yes. We follow the exact chain required by your destination country, ensuring full acceptance by foreign authorities.",
      },
    ],
  },
  cta: {
    heading: "Need your documents attested for use abroad?",
    subheading:
      "Let our specialists handle the entire notary–ministry–embassy chain while you focus on your move, your studies or your business.",
    primaryCta: { label: "Request Attestation Quote", href: "/contact" },
    secondaryCta: { label: "Talk to a Specialist", href: "/contact" },
  },
}

export default page
