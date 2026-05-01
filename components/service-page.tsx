import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceOverview } from "@/components/sections/service-overview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { WorkProcess } from "@/components/sections/work-process"
import { Testimonials } from "@/components/sections/testimonials"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import type { ServicePage as ServicePageData } from "@/lib/types"

/**
 * Renders a complete service page from a content data object.
 * All 7 required sections are always present in this exact order:
 *  Hero → Overview → Why Choose Us → Process → Testimonials → FAQ → CTA
 */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <ServiceHero data={data} />
      <ServiceOverview data={data} />
      <WhyChooseUs data={data} />
      <WorkProcess data={data} />
      <Testimonials data={data} />
      <FaqSection data={data} />
      <CtaSection data={data} />
    </>
  )
}
