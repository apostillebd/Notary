import type { ServiceCategory } from "@/lib/types"

/**
 * Category-level metadata. Each category renders an overview page at
 * /services/<slug> listing all of its sub-services.
 *
 * To edit category copy, hero image or SEO, change this file directly.
 */
export const categories: ServiceCategory[] = [
  {
    slug: "notary-services",
    title: "Notary Services",
    description:
      "Licensed online notary public services in Bangladesh — notarize affidavits, agreements, sponsorship letters and more, with documents accepted across embassies, courts and government offices worldwide.",
    metaTitle: "Notary Services in Bangladesh — Online Notary Public | Notary.bd",
    metaDescription:
      "Bangladesh's most trusted online notary public service. Notarize documents, agreements, sponsorship letters and affidavits 100% online with same-day delivery.",
    heroImage: "/images/hero-notary-services.jpg",
    services: [
      {
        slug: "online-notary-public-bangladesh",
        title: "Online Notary Public in Bangladesh",
        shortDescription: "Notarize any document online with a licensed Bangladeshi notary public.",
      },
      {
        slug: "document-attestation-notary",
        title: "Document Attestation & Notary",
        shortDescription: "Verified attestation for personal and commercial documents.",
      },
      {
        slug: "sponsorship-letter-notary",
        title: "Sponsorship Letter Notary",
        shortDescription: "Notarized sponsorship letters for visa and immigration applications.",
      },
      {
        slug: "digital-notary-international-use",
        title: "Digital Notary for International Use",
        shortDescription: "Internationally recognized digital notary certificates.",
      },
      {
        slug: "marriage-divorce-affidavits",
        title: "Marriage & Divorce Affidavits",
        shortDescription: "Notarized marriage and divorce affidavits for use in Bangladesh and abroad.",
      },
    ],
  },
  {
    slug: "affidavit-services",
    title: "Affidavit Services",
    description:
      "Professional affidavit drafting and notarization services — including name corrections, financial support, marriage and divorce affidavits, and Power of Attorney — fully online.",
    metaTitle: "Affidavit Services in Bangladesh — Online Affidavit Drafting | Notary.bd",
    metaDescription:
      "Draft, sign and notarize legally valid affidavits online in Bangladesh. Name correction, financial support, POA, marriage and divorce affidavits — all 100% online.",
    heroImage: "/images/hero-affidavit-services.jpg",
    services: [
      {
        slug: "online-affidavit-services",
        title: "Online Affidavit Services",
        shortDescription: "Draft and notarize any affidavit 100% online.",
      },
      {
        slug: "name-age-correction-affidavit",
        title: "Name & Age Correction Affidavit",
        shortDescription: "Legally correct your name or date of birth.",
      },
      {
        slug: "sponsorship-letter-financial-support",
        title: "Sponsorship Letter & Financial Support",
        shortDescription: "Affidavits for financial sponsorship of family members and students.",
      },
      {
        slug: "marriage-divorce-affidavits",
        title: "Marriage & Divorce Affidavits",
        shortDescription: "Court-ready marriage and divorce affidavits.",
      },
      {
        slug: "power-of-attorney",
        title: "Power of Attorney (POA)",
        shortDescription: "General and special Power of Attorney drafting and notarization.",
      },
    ],
  },
  {
    slug: "apostille-legalization",
    title: "Apostille & Legalization",
    description:
      "Complete Apostille and document legalization service in Bangladesh through MOFA, embassy attestation and the Hague Apostille chain — for personal, educational and corporate documents.",
    metaTitle: "Apostille & Legalization Services in Bangladesh | MOFA | Notary.bd",
    metaDescription:
      "Get your documents apostilled and legalized through MOFA Bangladesh. Educational, personal, birth and marriage certificate apostille and embassy attestation.",
    heroImage: "/images/hero-apostille-legalization.jpg",
    services: [
      {
        slug: "e-apostille-mofa-bangladesh",
        title: "e-Apostille (MOFA Bangladesh)",
        shortDescription: "Official MOFA e-Apostille service in Bangladesh.",
      },
      {
        slug: "educational-documents-apostille",
        title: "Educational Documents Apostille",
        shortDescription: "Apostille for degrees, transcripts and certificates.",
      },
      {
        slug: "personal-documents-attestation",
        title: "Personal Documents Attestation",
        shortDescription: "Attestation of personal civil documents.",
      },
      {
        slug: "birth-marriage-certificate-legalization",
        title: "Birth & Marriage Certificate Legalization",
        shortDescription: "Legalization of birth and marriage certificates.",
      },
    ],
  },
  {
    slug: "translation-services",
    title: "Translation Services",
    description:
      "Sworn certified translation in major world languages — English, Spanish, Arabic, Italian, Portuguese, German and French — with notarization and apostille for global acceptance.",
    metaTitle: "Certified Translation Services in Bangladesh | Notary.bd",
    metaDescription:
      "Sworn translation in English, Spanish, Arabic, Italian, Portuguese, German and French. Notarized and apostille-ready translations for embassies, courts and universities.",
    heroImage: "/images/hero-translation-services.jpg",
    services: [
      {
        slug: "certified-english-spanish-translation",
        title: "Certified English & Spanish Translation",
        shortDescription: "Sworn English and Spanish certified translations.",
      },
      {
        slug: "arabic-middle-east-translation",
        title: "Arabic & Middle East Translation",
        shortDescription: "Arabic and Middle Eastern language translations.",
      },
      {
        slug: "certified-italian-portuguese-translation",
        title: "Certified Italian & Portuguese Translation",
        shortDescription: "Italian and Portuguese certified translations.",
      },
      {
        slug: "german-french-legal-translation",
        title: "German & French Legal Translation",
        shortDescription: "Legal-grade German and French translations.",
      },
      {
        slug: "medical-police-clearance-translation",
        title: "Medical & Police Clearance Translation",
        shortDescription: "Medical and police clearance certificate translation.",
      },
      {
        slug: "official-document-notarized-translation",
        title: "Official Document Notarized Translation",
        shortDescription: "Notarized translation of official documents.",
      },
    ],
  },
]

export function getCategory(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug)
}
