import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/siteData'

const filters = ['All work', 'Web & CMS', 'Interactive', 'Mobile']
export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const visible = projects.filter(project => filter === 'All work' || project.type === filter)
  return <PageTransition><section className="section-pad page-intro"><div className="container-main">
    <SectionTitle as="h1" eyebrow="Projects / Selected contributions" title={<>Built for people.<br/><span className="text-gradient">Connected by code.</span></>} description={`${projects.length} projects across enterprise web, hospitality, CMS platforms, interactive navigation and mobile. Each case study explains the problem, my contribution and the result.`}/>
    <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} className={`filter-button ${filter === item ? 'active' : ''}`}>{item}</button>)}</div>
    <p className="mb-7 text-sm text-white/55" role="status">Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
    <div className="grid gap-6 lg:grid-cols-2">{visible.map(project => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} heading="h2"/>)}</div>
    <p className="mt-8 max-w-2xl text-sm leading-6 text-white/55">Project visuals are illustrative system views. Use “Visit website” to explore the published sites in a new tab.</p>
  </div></section></PageTransition>
}
