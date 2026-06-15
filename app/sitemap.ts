import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.digiprint.mx',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: ['https://www.digiprint.mx/opengraph-image.png'],
    },
  ]
}
