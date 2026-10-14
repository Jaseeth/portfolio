import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects, profile } from '../data/siteData'
const descriptions = {
  '/': ['Full-Stack Software Developer', 'Jaseeth Mohamed, a full-stack software developer in Doha, Qatar. Explore enterprise web, CMS, interactive wayfinding and mobile projects.'],
  '/about': ['About', 'Meet Jaseeth Mohamed: 3+ years building responsive websites, ASP.NET Core applications, CMS platforms and mobile interfaces.'],
  '/experience': ['Experience & Education', 'Explore Jaseeth’s development experience at Al Emadi Enterprises and Marazin, education, achievements and ongoing learning.'],
  '/projects': ['Selected Projects', `${projects.length} projects across enterprise web, hospitality, bilingual property discovery, SVG wayfinding, CMS platforms and Flutter mobile interfaces.`],
  '/contact': ['Contact', 'Contact Jaseeth Mohamed in Doha, Qatar for development opportunities, collaboration and project enquiries.'],
}
export default function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/'
    const project = projects.find(item => normalizedPath === `/projects/${item.slug}`)
    const [title, description] = project ? [project.title, project.summary] : descriptions[normalizedPath] || ['Page not found', 'Explore Jaseeth Mohamed’s portfolio and selected development projects.']
    document.title = `${title} | ${profile.name}`
    for (const [selector, content] of [['meta[name="description"]', description], ['meta[property="og:title"]', document.title], ['meta[property="og:description"]', description]]) document.querySelector(selector)?.setAttribute('content', content)
  }, [pathname])
  return null
}
