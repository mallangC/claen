import type { MetadataRoute } from 'next'

const BASE_URL = 'https://thefirstclean.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/quote', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/home-care', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/home-care/move-in', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/home-care/move-out', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/home-care/residential', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/office-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/office-cleaning/office', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/office-cleaning/store', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/office-cleaning/medical', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/building-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/building-cleaning/government', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/building-cleaning/completion', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
