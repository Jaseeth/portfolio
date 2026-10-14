import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, index = 0, heading: Heading = 'h3' }) {
  return <article className="project-card"><Link to={`/projects/${project.slug}`} className="block h-full" aria-label={`View ${project.title} case study`}>
    <ProjectVisual project={project}/>
    <div className="p-6 md:p-8"><div className="flex items-start justify-between gap-5"><div><p className="eyebrow">0{index + 1} / {project.category}</p><Heading className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{project.title}</Heading></div><ArrowUpRight className="mt-1 shrink-0 text-white/65" size={23}/></div><p className="mt-4 leading-7 text-white/65">{project.summary}</p><ul className="mt-6 flex flex-wrap gap-2">{project.tech.slice(0, 4).map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}</ul><span className="mt-7 inline-block text-sm font-semibold text-[var(--accent)]">Explore case study <span aria-hidden="true">↗</span></span></div>
  </Link></article>
}
