import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/posts/:slug',
      
      
    },
    
    sitemap: 'https://www.romancingjapan.com/sitemap.xml',
  }
}
