export type ProcessStep = {
  step: number
  title: string
  description: string
}

export type Testimonial = {
  name: string
  role?: string
  location?: string
  rating: number
  quote: string
}

export type FAQ = {
  question: string
  answer: string
}

export type ServiceFeature = {
  title: string
  description: string
}

export type ServicePage = {
  slug: string
  category: string
  categorySlug: string
  title: string
  metaTitle: string
  metaDescription: string
  hero: {
    eyebrow: string
    heading: string
    subheading: string
    image: string
    imageAlt: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  overview: {
    heading: string
    intro: string
    paragraphs: string[]
    highlights?: string[]
  }
  whyChooseUs: {
    heading: string
    intro: string
    features: ServiceFeature[]
  }
  process: {
    heading: string
    intro: string
    steps: ProcessStep[]
  }
  testimonials: {
    heading: string
    items: Testimonial[]
  }
  faq: {
    heading: string
    items: FAQ[]
  }
  cta: {
    heading: string
    subheading: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
}

export type ServiceCategory = {
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  services: { slug: string; title: string; shortDescription: string }[]
}
