export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
}

/**
 * Sample blog posts. To add a new blog post, append a new entry here
 * (and later, when blog post pages are built, add a content file in
 * lib/content/blog/<slug>.ts).
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "online-notary-public-bangladesh-guide",
    title: "The Complete Guide to Online Notary Public in Bangladesh",
    excerpt:
      "Everything you need to know about getting documents notarized online in Bangladesh — including legality, process, fees, and embassy acceptance.",
    category: "Notary Services",
    readTime: "8 min read",
    date: "April 15, 2026",
    image: "/images/Notary Public Services in Bangladesh Hero Images.webp",
  },
  {
    slug: "mofa-apostille-bangladesh-step-by-step",
    title: "MOFA Apostille in Bangladesh — A Step-by-Step Walkthrough",
    excerpt:
      "Learn the exact steps to apostille your Bangladeshi documents through MOFA, including timelines, fees, and required attestations.",
    category: "Apostille & Legalization",
    readTime: "10 min read",
    date: "March 28, 2026",
    image: "/images/Apostille-Services-In-Bangladesh.webp",
  },
  {
    slug: "affidavit-vs-notarized-document",
    title: "Affidavit vs Notarized Document — What's the Difference?",
    excerpt:
      "Many Bangladeshis confuse affidavits and notarized documents. Here's a clear breakdown with real-world use cases.",
    category: "Affidavit Services",
    readTime: "6 min read",
    date: "March 12, 2026",
    image: "/images/Affidavit-services-in-bangladesh.webp",
  },
  {
    slug: "certified-translation-for-spain-visa",
    title: "Certified Translation for a Spain Student Visa from Bangladesh",
    excerpt:
      "What documents you need to translate, what counts as a 'sworn' translation, and how to avoid the most common rejections.",
    category: "Translation Services",
    readTime: "7 min read",
    date: "February 25, 2026",
    image: "/images/Translation-Services.webp",
  },
  {
    slug: "power-of-attorney-from-abroad",
    title: "How to Make a Power of Attorney from Abroad to Bangladesh",
    excerpt:
      "If you live overseas and need someone in Bangladesh to act on your behalf, here's how to draft a legally valid POA.",
    category: "Affidavit Services",
    readTime: "9 min read",
    date: "February 10, 2026",
    image: "/images/Affidavit-services-in-bangladesh.webp",
  },
  {
    slug: "marriage-certificate-legalization-italy",
    title: "Legalizing a Bangladeshi Marriage Certificate for Italy",
    excerpt:
      "Step-by-step guide to translating, notarizing and apostilling your Bangladeshi marriage certificate for use in Italy.",
    category: "Apostille & Legalization",
    readTime: "8 min read",
    date: "January 22, 2026",
    image: "/images/Marriage-Certificate-Notary.webp",
  },
]
