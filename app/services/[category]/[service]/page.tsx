import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { getServicePage, servicePages } from "@/lib/content"

type Params = { category: string; service: string }

export async function generateStaticParams() {
  return Object.keys(servicePages).map((key) => {
    const [category, service] = key.split("/")
    return { category, service }
  })
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, service } = await params
  const page = getServicePage(category, service)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${category}/${service}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
      images: [page.hero.image],
    },
  }
}

export default async function ServiceRoute({ params }: { params: Promise<Params> }) {
  const { category, service } = await params
  const page = getServicePage(category, service)
  if (!page) notFound()

  return <ServicePage data={page} />
}
