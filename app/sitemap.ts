import { MetadataRoute } from 'next'

const SITE_URL = 'https://urganize.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDate = new Date()
  
  return [
    // Core marketing pages
    {
      url: SITE_URL,
      lastModified: baseDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/#early-access`,
      lastModified: baseDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // {
    //   url: `${SITE_URL}/features`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${SITE_URL}/solutions`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/solutions/artists`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/solutions/managers`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/solutions/labels`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/pricing`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    
    // // Feature detail pages
    // {
    //   url: `${SITE_URL}/features/release-planning`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/features/task-management`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/features/file-sharing`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/features/team-collaboration`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/features/calendar-scheduling`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    
    // // Content & Resources
    // {
    //   url: `${SITE_URL}/blog`,
    //   lastModified: baseDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_URL}/resources`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${SITE_URL}/templates`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${SITE_URL}/case-studies`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    
    // // Company
    // {
    //   url: `${SITE_URL}/about`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    // {
    //   url: `${SITE_URL}/careers`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.4,
    // },
    // {
    //   url: `${SITE_URL}/press`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.4,
    // },
    
    // // Support
    // {
    //   url: `${SITE_URL}/help`,
    //   lastModified: baseDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
    // {
    //   url: `${SITE_URL}/contact`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.4,
    // },
    // {
    //   url: `${SITE_URL}/demo`,
    //   lastModified: baseDate,
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    
    // // Authentication
    // {
    //   url: `${SITE_URL}/login`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${SITE_URL}/signup`,
    //   lastModified: baseDate,
    //   changeFrequency: 'daily',
    //   priority: 0.9,
    // },
    
    // // Legal
    // {
    //   url: `${SITE_URL}/privacy`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.2,
    // },
    // {
    //   url: `${SITE_URL}/terms`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.2,
    // },
    // {
    //   url: `${SITE_URL}/cookies`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.2,
    // },
    // {
    //   url: `${SITE_URL}/acceptable-use`,
    //   lastModified: baseDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.2,
    // },
  ]
}