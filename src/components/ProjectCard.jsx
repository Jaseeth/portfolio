import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, index = 0, heading: Heading = 'h3' }) {
  return <article className="project-card"><Link to={`/projects/${project.slug}`} className="project-card-body block" aria-label={`View ${project.title} case study`}>
    <ProjectVisual project={project}/>
    <div className="p-6 pb-0 md:p-8 md:pb-0"><div className="flex items-start justify-between gap-5"><div><p className="eyebrow">0{index + 1} / {project.category}</p><Heading className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{project.title}</Heading></div><ArrowUpRight className="mt-1 shrink-0 text-white/65" size={23}/></div><p className="mt-4 leading-7 text-white/65">{project.summary}</p><ul className="mt-6 flex flex-wrap gap-2">{project.tech.slice(0, 4).map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}</ul></div>
  </Link><div className="project-card-actions"><Link to={`/projects/${project.slug}`} className="text-link">Explore case study <ArrowUpRight size={16}/></Link>{project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Visit ${project.title} website (opens in a new tab)`}>Visit website <ExternalLink size={16}/></a>}</div></article>
}
