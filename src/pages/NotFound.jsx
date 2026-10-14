import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'
export default function NotFound({ project = false }) {
  return <PageTransition><div className="container-main flex min-h-[75vh] flex-col items-start justify-center page-intro pb-20"><p className="eyebrow">404 / {project ? 'Project' : 'Page'} not found</p><h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">A little off course.</h1><p className="mt-6 max-w-lg text-lg leading-8 text-white/65">{project ? 'This project isn’t in the current collection. Explore my selected work to find another case study.' : 'The page you’re looking for doesn’t exist. Let’s get you back to the work.'}</p><Link className="btn-primary mt-8" to={project ? '/projects' : '/'}><ArrowLeft size={17}/>{project ? 'Explore projects' : 'Back home'}</Link></div></PageTransition>
}
