import type { ServicePage } from "@/lib/types"

const page: ServicePage = {
  slug: "digital-notary-international-use",
  category: "Notary Services",
  categorySlug: "notary-services",
  title: "Digital Notary for International Use",
  metaTitle: "Digital Notary for International Use — Bangladesh",
  metaDescription:
    "Internationally recognized digital notary service from Bangladesh. Tamper-evident e-seals, verifiable digital signatures, accepted in 100+ countries.",
  hero: {
    eyebrow: "Notary Services",
    heading: "Digital Notary for International Use — From Bangladesh to the World",
    subheading:
      "Cryptographically secure, tamper-evident digital notarization with verifiable e-signatures and QR-coded authenticity. Accepted by foreign embassies, courts, banks and corporations.",
    image: "/images/hero-notary-services.jpg",
    imageAlt: "Digital notarized document with QR code and e-signature",
    primaryCta: { label: "Get a Digital Notary", href: "/contact" },
    secondaryCta: { label: "All Notary Services", href: "/services/notary-services" },
  },
  overview: {
    heading: "Digital notarization built for global acceptance",
    intro:
      "Digital notary is the modern, fully online equivalent of a traditional notary public. Instead of an ink stamp, the notary applies a tamper-evident cryptographic seal and a verifiable digital signature to your document.",
    paragraphs: [
      "Each digitally notarized document includes a unique QR code and a verification link that lets any third party — embassy officer, bank manager, university registrar — confirm the authenticity of the seal in seconds. This is especially valuable for Bangladeshi expatriates, multinational employers and cross-border transactions where physical documents are slow, expensive or unreliable.",
      "Notary.bd's digital notarization service uses ID verification, live video sessions and audit-logged signing flows to ensure that every document we notarize meets international standards. We follow best practices aligned with eIDAS, UETA and the UNCITRAL Model Law on Electronic Signatures, making our digital notarizations broadly recognised across Europe, North America, the GCC and beyond.",
      "Whether you need a notarized contract for a US client, a board resolution for a Singapore subsidiary, or a power of attorney for a UK property purchase, our digital notary service delivers a legally sound document in hours — not weeks. We can also issue a parallel paper original with a wet ink seal where the destination authority specifically requires one.",
    ],
    highlights: [
      "Tamper-evident cryptographic seals",
      "QR code & online verification",
      "Audit-logged video signing sessions",
      "eIDAS / UETA aligned workflow",
      "Optional paper original with wet ink seal",
      "Accepted in 100+ countries",
    ],
  },
  whyChooseUs: {
    heading: "Why our digital notary is trusted internationally",
    intro:
      "Going digital does not mean cutting corners. We engineered our service for the highest legal and security standards.",
    features: [
      {
        title: "Cryptographically Secure",
        description:
          "Each document is sealed with a tamper-evident certificate so any change after signing is immediately detectable.",
      },
      {
        title: "Verifiable by Anyone, Anywhere",
        description:
          "QR codes and verification URLs allow embassies, banks and businesses to confirm authenticity instantly.",
      },
      {
        title: "Full Audit Trail",
        description:
          "Every signing session is logged with timestamps, IP addresses, and ID verification snapshots.",
      },
      {
        title: "Cross-Border Recognition",
        description:
          "Our digital notarizations are aligned with eIDAS, UETA and UNCITRAL standards.",
      },
      {
        title: "Hybrid Paper + Digital",
        description:
          "Need a wet ink original too? We can issue both formats from a single signing session.",
      },
      {
        title: "24/7 Online Booking",
        description:
          "Schedule a digital notary session anytime — including late evenings and weekends.",
      },
    ],
  },
  process: {
    heading: "How digital notarization works",
    intro:
      "From upload to verifiable digital seal, the entire process is online and audit-logged.",
    steps: [
      {
        step: 1,
        title: "Upload & verify",
        description:
          "Upload your document and verify your identity using NID, passport or driver's license.",
      },
      {
        step: 2,
        title: "Live video session",
        description:
          "Join a short video session where the notary confirms your identity and reviews the document with you.",
      },
      {
        step: 3,
        title: "Digital signing & sealing",
        description:
          "You sign electronically and the notary applies a cryptographic seal, QR code and unique verification link.",
      },
      {
        step: 4,
        title: "Instant delivery",
        description:
          "Receive the digitally notarized PDF immediately by email, with optional paper original by courier.",
      },
    ],
  },
  testimonials: {
    heading: "What our international clients say",
    items: [
      {
        name: "Aritra D.",
        role: "Founder",
        location: "Singapore",
        rating: 5,
        quote:
          "We notarized board resolutions for our BD subsidiary entirely online. The QR-verified PDFs were accepted by ACRA without question.",
      },
      {
        name: "Naila T.",
        role: "Property Buyer",
        location: "Manchester, UK",
        rating: 5,
        quote:
          "I needed a notarized POA for a property in London. Done in 2 hours from Dhaka — solicitor confirmed it was perfect.",
      },
      {
        name: "Pacific Logistics",
        role: "Freight Forwarder",
        location: "Dhaka",
        rating: 5,
        quote:
          "Digital notarization saves us days on every international contract. The verification system is brilliant.",
      },
    ],
  },
  faq: {
    heading: "Digital notary — frequently asked questions",
    items: [
      {
        question: "Is a digital notarization legally valid abroad?",
        answer:
          "Yes. Our digital notarizations are aligned with international standards like eIDAS and UETA, and are accepted across Europe, North America, the GCC and Asia.",
      },
      {
        question: "How can the recipient verify the document?",
        answer:
          "Each document includes a QR code and a unique URL that opens our public verification page showing the document hash, signer, and notary details.",
      },
      {
        question: "Can I get a paper original as well?",
        answer:
          "Yes. We can issue a paper original with a wet ink seal alongside the digital version for an additional fee.",
      },
      {
        question: "What if the destination country does not accept digital notarization?",
        answer:
          "We will advise you in advance and switch to traditional notary plus MOFA/embassy attestation where needed.",
      },
      {
        question: "Is the video session recorded?",
        answer:
          "Yes, the session is securely recorded and logged as part of the audit trail, with strict privacy controls.",
      },
    ],
  },
  cta: {
    heading: "Take your notarization global — go digital today",
    subheading:
      "Skip couriers, queues and time zones. Get a verifiable digital notary from Bangladesh that works anywhere in the world.",
    primaryCta: { label: "Book Digital Notary", href: "/contact" },
    secondaryCta: { label: "See How It Works", href: "/contact" },
  },
}

export default page
