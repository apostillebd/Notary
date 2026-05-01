import type { ServicePage } from "@/lib/types"

const page: ServicePage = {
  slug: "personal-documents-attestation",
  category: "Apostille & Legalization",
  categorySlug: "apostille-legalization",
  title: "Personal Documents Attestation",
  metaTitle: "Personal Documents Attestation in Bangladesh — Apostille & Embassy",
  metaDescription:
    "Attestation and apostille of personal civil documents in Bangladesh — affidavits, declarations, identification documents and more. Full MOFA and embassy chain.",
  hero: {
    eyebrow: "Apostille & Legalization",
    heading: "Personal Documents Attestation — Civil Records, Declarations & More",
    subheading:
      "From identity declarations and NID copies to affidavits, gift deeds and consent letters, we attest your personal documents for use anywhere in the world.",
    image: "/images/hero-apostille-legalization.jpg",
    imageAlt: "Personal documents being verified and attested",
    primaryCta: { label: "Attest Personal Documents", href: "/contact" },
    secondaryCta: { label: "All Legalization Services", href: "/services/apostille-legalization" },
  },
  overview: {
    heading: "Civil and personal documents, fully legalized",
    intro:
      "&quot;Personal documents&quot; covers a broad category — civil declarations, affidavits, identification documents, consent letters, gift deeds, succession papers and many other private legal documents that individuals and families need legalized for use abroad.",
    paragraphs: [
      "Notary.bd handles attestation for all common personal civil documents: notarized affidavits, NID and passport copies, consent letters (for travel, education, medical procedures), gift declarations, succession affidavits, joint declarations, single status affidavits, NOC letters, parental consent letters, and many more.",
      "Our team manages the entire chain: lawyer drafting (where required), notarization, Home Ministry attestation, MOFA e-Apostille and onward embassy attestation. We tailor the chain to the destination country — Apostille Convention countries get MOFA e-Apostille; non-Hague countries get a notary + MOFA + embassy chain.",
      "We are particularly experienced with attestations destined for Saudi Arabia, UAE, Qatar, Kuwait, Oman, Italy, Germany, the UK, the USA, Canada and Australia. Whatever the receiving authority — embassy, immigration office, court, school, hospital or registry — we structure the chain to be accepted on the first attempt.",
    ],
    highlights: [
      "All civil declarations & affidavits",
      "Consent letters & NOCs",
      "Gift deeds & succession papers",
      "Notary + Home Ministry + MOFA chain",
      "Embassy attestation when needed",
      "International courier delivery",
    ],
  },
  whyChooseUs: {
    heading: "Why personal-document clients choose Notary.bd",
    intro:
      "Civil documents often involve sensitive family matters. We handle them with both legal precision and discretion.",
    features: [
      {
        title: "Drafting + Attestation",
        description:
          "We draft any required affidavit or declaration before notarizing and attesting it for you.",
      },
      {
        title: "Tailored Country Chains",
        description:
          "Apostille for Hague countries; notary + MOFA + embassy for non-Hague — we choose the right chain.",
      },
      {
        title: "Strict Confidentiality",
        description:
          "Personal and family documents handled with restricted access and signed NDAs where requested.",
      },
      {
        title: "Bilingual Documents",
        description:
          "Documents prepared in English, Bangla or bilingual format depending on receiving authority.",
      },
      {
        title: "Translations Add-On",
        description:
          "Add certified translations of your personal documents into 10+ languages in one workflow.",
      },
      {
        title: "Expat-Friendly Service",
        description:
          "Living abroad? We accept authorisations from outside Bangladesh and complete the chain locally.",
      },
    ],
  },
  process: {
    heading: "Our personal documents attestation workflow",
    intro: "Five clear, well-tracked steps from request to delivered, attested document.",
    steps: [
      {
        step: 1,
        title: "Document review",
        description:
          "Tell us your purpose and destination. We confirm exactly which documents and which chain you need.",
      },
      {
        step: 2,
        title: "Drafting (where needed)",
        description:
          "Lawyers draft any required affidavit, declaration or consent letter for your review.",
      },
      {
        step: 3,
        title: "Notarization",
        description:
          "Documents are notarized by a licensed notary public — in person or via secure video session.",
      },
      {
        step: 4,
        title: "Ministry & MOFA",
        description:
          "We coordinate Home Ministry, MOFA e-Apostille, and any onward attestations.",
      },
      {
        step: 5,
        title: "Embassy & delivery",
        description:
          "Embassy attestation where needed; final documents delivered locally or shipped internationally.",
      },
    ],
  },
  testimonials: {
    heading: "Real cases, real results",
    items: [
      {
        name: "Lutfor R.",
        role: "Migrant Worker",
        location: "Riyadh, KSA",
        rating: 5,
        quote:
          "Marriage and children&apos;s consent letters all attested for the Saudi embassy. Smooth, fair priced and on time.",
      },
      {
        name: "Anika P.",
        role: "Mother",
        location: "Dhaka",
        rating: 5,
        quote:
          "Travel consent letter notarized and attested for our minor son to travel abroad with grandparents. Beautifully handled.",
      },
      {
        name: "Anonymous",
        role: "Succession Affidavit",
        location: "London, UK",
        rating: 5,
        quote:
          "Sensitive succession documents attested with absolute confidentiality. Highly recommend.",
      },
    ],
  },
  faq: {
    heading: "Personal documents attestation — FAQ",
    items: [
      {
        question: "What kinds of personal documents do you attest?",
        answer:
          "Civil affidavits, declarations, NID/passport copies, consent letters, gift deeds, succession papers, single status, joint declarations, NOCs and many more.",
      },
      {
        question: "Do all personal documents require apostille?",
        answer:
          "No — only documents that will be presented to a foreign authority. We confirm the right chain during your free review.",
      },
      {
        question: "Can I add a translation?",
        answer:
          "Yes. We provide certified translations into English, Arabic, Spanish, Italian, German, French, Portuguese and more.",
      },
      {
        question: "Can I do this from abroad?",
        answer:
          "Yes. With a notarized authorisation we collect documents from your representative and complete the entire chain locally.",
      },
      {
        question: "How long does it take?",
        answer:
          "Typically 5–12 working days, depending on the chain (apostille only or apostille + embassy).",
      },
    ],
  },
  cta: {
    heading: "Get your personal documents attested for international use",
    subheading:
      "From a single consent letter to a full set of family documents — we&apos;ll handle every step of the legalization chain.",
    primaryCta: { label: "Start Personal Attestation", href: "/contact" },
    secondaryCta: { label: "Free Document Review", href: "/contact" },
  },
}

export default page
