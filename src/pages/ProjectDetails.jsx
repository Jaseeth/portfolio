import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import ProjectVisual from '../components/ProjectVisual'
import NotFound from './NotFound'
import MeetingRoomCaseStudy from '../components/MeetingRoomCaseStudy'
import { projects } from '../data/siteData'

export default function ProjectDetails() {
  const { slug } = useParams()
  const index = projects.findIndex(project => project.slug === slug)
  const project = projects[index]
  if (!project) return <NotFound project/>
  const next = projects[(index + 1) % projects.length]
  if (project.caseStudy === 'meeting-room') return <MeetingRoomCaseStudy project={project}/>
  return <PageTransition><section className="page-intro pb-24"><div className="container-main">
    <Link to="/projects" className="text-link mb-10"><ArrowLeft size={16}/> All projects</Link>
    <p className="eyebrow">Case study / {project.category}</p><h1 className="project-title mt-5">{project.title}</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-white/70">{project.summary}</p>
    {project.website && <div className="mt-8"><a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label={`Visit ${project.title} website (opens in a new tab)`}>Visit live website <ExternalLink size={18}/></a></div>}
    <div className="mt-10 flex flex-wrap gap-2">{project.highlights.map(item => <span className="highlight-tag" key={item}>{item}</span>)}</div>
    <div className="mt-12 overflow-hidden rounded-[28px]"><ProjectVisual project={project} large/></div>
    <div className="case-study-grid mt-16"><aside><p className="eyebrow">{project.roleLabel || 'My contribution'}</p><p className="mt-4 leading-7 text-white/75">{project.role}</p><p className="eyebrow mt-10">Technology</p><ul className="mt-4 flex flex-wrap gap-2">{project.tech.map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}</ul></aside>
      <div className="space-y-12">{[['01', 'The challenge', project.challenge], ['02', 'The approach', project.solution], ['03', 'The outcome', project.outcome]].map(([number, title, body]) => <section key={title}><p className="eyebrow">{number} / {title}</p><h2 className="sr-only">{title}</h2>{body.split("\n\n").map(paragraph => <p key={paragraph} className="mt-4 text-xl leading-9 text-white/75">{paragraph}</p>)}</section>)}<section className="border-t border-white/10 pt-9"><h2 className="text-2xl font-bold">{project.contributionsLabel || 'What I worked on'}</h2><ul className="detail-list mt-5">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></section></div>
    </div>
    <div className="next-project mt-20"><div><p className="eyebrow">Next project</p><Link className="mt-4 inline-flex items-center gap-4 text-2xl font-bold md:text-4xl" to={`/projects/${next.slug}`}>{next.title}<ArrowRight className="shrink-0"/></Link></div><Link className="btn-secondary" to="/contact">Let’s discuss your project <ArrowRight size={17}/></Link></div>
  </div></section></PageTransition>
}
