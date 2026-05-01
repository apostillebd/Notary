import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://notary.bd/sitemap.xml",
    host: "https://notary.bd",
  }
}
