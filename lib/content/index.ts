import type { ServicePage } from "@/lib/types"

// Notary Services
import notaryOnline from "./notary-services/online-notary-public-bangladesh"
import notaryAttestation from "./notary-services/document-attestation-notary"
import notarySponsorship from "./notary-services/sponsorship-letter-notary"
import notaryDigital from "./notary-services/digital-notary-international-use"
import notaryMarriage from "./notary-services/marriage-divorce-affidavits"

// Affidavit Services
import affidavitOnline from "./affidavit-services/online-affidavit-services"
import affidavitName from "./affidavit-services/name-age-correction-affidavit"
import affidavitFinancial from "./affidavit-services/sponsorship-letter-financial-support"
import affidavitMarriage from "./affidavit-services/marriage-divorce-affidavits"
import affidavitPoa from "./affidavit-services/power-of-attorney"

// Apostille & Legalization
import apostilleEApostille from "./apostille-legalization/e-apostille-mofa-bangladesh"
import apostilleEducational from "./apostille-legalization/educational-documents-apostille"
import apostillePersonal from "./apostille-legalization/personal-documents-attestation"
import apostilleBirthMarriage from "./apostille-legalization/birth-marriage-certificate-legalization"

// Translation Services
import translationEnglishSpanish from "./translation-services/certified-english-spanish-translation"
import translationArabic from "./translation-services/arabic-middle-east-translation"
import translationItalianPortuguese from "./translation-services/certified-italian-portuguese-translation"
import translationGermanFrench from "./translation-services/german-french-legal-translation"
import translationMedicalPolice from "./translation-services/medical-police-clearance-translation"
import translationNotarized from "./translation-services/official-document-notarized-translation"

/**
 * Registry of every service page in the site, keyed by `${categorySlug}/${serviceSlug}`.
 * To add a new service:
 *   1. Create a new content file under lib/content/<category>/<slug>.ts
 *   2. Import it here and add it to the registry
 *   3. Add a matching navigation entry in lib/navigation.ts
 * The dynamic route at /services/[category]/[service] will pick it up automatically.
 */
export const servicePages: Record<string, ServicePage> = {
  // Notary Services
  "notary-services/online-notary-public-bangladesh": notaryOnline,
  "notary-services/document-attestation-notary": notaryAttestation,
  "notary-services/sponsorship-letter-notary": notarySponsorship,
  "notary-services/digital-notary-international-use": notaryDigital,
  "notary-services/marriage-divorce-affidavits": notaryMarriage,

  // Affidavit Services
  "affidavit-services/online-affidavit-services": affidavitOnline,
  "affidavit-services/name-age-correction-affidavit": affidavitName,
  "affidavit-services/sponsorship-letter-financial-support": affidavitFinancial,
  "affidavit-services/marriage-divorce-affidavits": affidavitMarriage,
  "affidavit-services/power-of-attorney": affidavitPoa,

  // Apostille & Legalization
  "apostille-legalization/e-apostille-mofa-bangladesh": apostilleEApostille,
  "apostille-legalization/educational-documents-apostille": apostilleEducational,
  "apostille-legalization/personal-documents-attestation": apostillePersonal,
  "apostille-legalization/birth-marriage-certificate-legalization": apostilleBirthMarriage,

  // Translation Services
  "translation-services/certified-english-spanish-translation": translationEnglishSpanish,
  "translation-services/arabic-middle-east-translation": translationArabic,
  "translation-services/certified-italian-portuguese-translation": translationItalianPortuguese,
  "translation-services/german-french-legal-translation": translationGermanFrench,
  "translation-services/medical-police-clearance-translation": translationMedicalPolice,
  "translation-services/official-document-notarized-translation": translationNotarized,
}

export function getServicePage(categorySlug: string, serviceSlug: string): ServicePage | undefined {
  return servicePages[`${categorySlug}/${serviceSlug}`]
}

export function getAllServicePages(): ServicePage[] {
  return Object.values(servicePages)
}

export function getServicesByCategory(categorySlug: string): ServicePage[] {
  return Object.entries(servicePages)
    .filter(([key]) => key.startsWith(`${categorySlug}/`))
    .map(([, page]) => page)
}
