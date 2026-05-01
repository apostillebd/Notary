export type NavItem = {
  title: string
  href: string
  description?: string
}

export type NavCategory = {
  title: string
  href: string
  items: NavItem[]
}

export const navigation: (NavCategory | NavItem)[] = [
  {
    title: "Notary Services",
    href: "/services/notary-services",
    items: [
      {
        title: "Online Notary Public in Bangladesh",
        href: "/services/notary-services/online-notary-public-bangladesh",
        description: "Notarize documents online from anywhere in Bangladesh.",
      },
      {
        title: "Document Attestation & Notary",
        href: "/services/notary-services/document-attestation-notary",
        description: "Verified attestation for personal and commercial documents.",
      },
      {
        title: "Sponsorship Letter Notary",
        href: "/services/notary-services/sponsorship-letter-notary",
        description: "Notarized sponsorship letters for visa and immigration.",
      },
      {
        title: "Digital Notary for International Use",
        href: "/services/notary-services/digital-notary-international-use",
        description: "Internationally recognized digital notary certificates.",
      },
      {
        title: "Marriage & Divorce Affidavits",
        href: "/services/notary-services/marriage-divorce-affidavits",
        description: "Notarized marriage and divorce affidavits in Bangladesh.",
      },
    ],
  },
  {
    title: "Affidavit Services",
    href: "/services/affidavit-services",
    items: [
      {
        title: "Online Affidavit Services",
        href: "/services/affidavit-services/online-affidavit-services",
        description: "Draft and notarize affidavits 100% online.",
      },
      {
        title: "Name & Age Correction Affidavit",
        href: "/services/affidavit-services/name-age-correction-affidavit",
        description: "Legally correct your name or date of birth.",
      },
      {
        title: "Sponsorship Letter & Financial Support",
        href: "/services/affidavit-services/sponsorship-letter-financial-support",
        description: "Affidavits for financial sponsorship and support.",
      },
      {
        title: "Marriage & Divorce Affidavits",
        href: "/services/affidavit-services/marriage-divorce-affidavits",
        description: "Court-ready marriage and divorce affidavits.",
      },
      {
        title: "Power of Attorney (POA)",
        href: "/services/affidavit-services/power-of-attorney",
        description: "General and special power of attorney drafting.",
      },
    ],
  },
  {
    title: "Apostille & Legalization",
    href: "/services/apostille-legalization",
    items: [
      {
        title: "e-Apostille (MOFA Bangladesh)",
        href: "/services/apostille-legalization/e-apostille-mofa-bangladesh",
        description: "Official MOFA e-Apostille service in Bangladesh.",
      },
      {
        title: "Educational Documents Apostille",
        href: "/services/apostille-legalization/educational-documents-apostille",
        description: "Apostille for degrees, transcripts, and certificates.",
      },
      {
        title: "Personal Documents Attestation",
        href: "/services/apostille-legalization/personal-documents-attestation",
        description: "Attestation of personal civil documents.",
      },
      {
        title: "Birth & Marriage Certificate Legalization",
        href: "/services/apostille-legalization/birth-marriage-certificate-legalization",
        description: "Legalization of birth and marriage certificates.",
      },
    ],
  },
  {
    title: "Translation Services",
    href: "/services/translation-services",
    items: [
      {
        title: "Certified English & Spanish Translation",
        href: "/services/translation-services/certified-english-spanish-translation",
        description: "Sworn English and Spanish certified translations.",
      },
      {
        title: "Arabic & Middle East Translation",
        href: "/services/translation-services/arabic-middle-east-translation",
        description: "Arabic and Middle Eastern language translations.",
      },
      {
        title: "Certified Italian & Portuguese Translation",
        href: "/services/translation-services/certified-italian-portuguese-translation",
        description: "Italian and Portuguese certified translations.",
      },
      {
        title: "German & French Legal Translation",
        href: "/services/translation-services/german-french-legal-translation",
        description: "Legal-grade German and French translations.",
      },
      {
        title: "Medical & Police Clearance Translation",
        href: "/services/translation-services/medical-police-clearance-translation",
        description: "Medical and police clearance certificate translation.",
      },
      {
        title: "Official Document Notarized Translation",
        href: "/services/translation-services/official-document-notarized-translation",
        description: "Notarized translation of official documents.",
      },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
]

export function isCategory(item: NavCategory | NavItem): item is NavCategory {
  return "items" in item
}
