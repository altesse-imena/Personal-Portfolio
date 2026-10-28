import { MetadataRoute } from 'next'

// Single-page site: Google ignores #section links, so only the page itself is listed
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://altesseimena.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
