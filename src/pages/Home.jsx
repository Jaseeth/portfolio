import { ArrowRight, Award, Code2, Database, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/siteData'

export default function Home() {
  const capabilities = [
    [Code2, 'Interfaces with purpose', 'Responsive websites and mobile UI, from Figma handoff to React, JavaScript and Flutter.'],
    [Database, 'Connected foundations', 'ASP.NET Core, REST APIs, SQL Server and CMS-driven content that support real business workflows.'],
    [Workflow, 'Care beyond launch', 'Cloudinary optimization, IIS delivery and n8n automation to monitor website health.'],
  ]
  return <PageTransition><Hero/>
    <section id="selected-work" className="section-pad border-t border-white/10"><div className="container-main">
      <div className="section-heading-row"><SectionTitle eyebrow="01 / Selected work" title={<>Real projects.<br/><span className="text-gradient">Practical impact.</span></>} description="A selection of enterprise websites, interactive experiences and mobile applications I’ve helped bring to production."/><Link to="/projects" className="text-link">All {projects.length} projects <ArrowRight size={17}/></Link></div>
      <div className="grid gap-6 lg:grid-cols-2">{projects.slice(0, 4).map((p, i) => <ProjectCard key={p.slug} project={p} index={i}/>)}</div>
    </div></section>
    <section className="section-pad border-y border-white/10 bg-white/[.015]"><div className="container-main">
      <SectionTitle eyebrow="02 / How I work" title="The whole picture matters." description="I work across frontend, backend and delivery, so the experience on screen is supported by the systems behind it."/>
      <div className="grid gap-6 md:grid-cols-3">{capabilities.map(([Icon, title, description], i) => <article key={title} className="capability"><div className="flex items-center justify-between"><Icon size={25} className="text-[var(--accent)]"/><span className="text-xs text-white/40">0{i + 1}</span></div><h3 className="mt-9 text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-white/65">{description}</p></article>)}</div>
    </div></section>
    <section className="section-pad"><div className="container-main grid items-start gap-12 lg:grid-cols-2">
      <div><SectionTitle eyebrow="03 / A little background" title="Built through hands-on work." description="Based in Doha, Qatar, I bring 3+ years of experience across enterprise websites, CMS implementations, eCommerce and mobile interfaces."/><Link className="text-link" to="/experience">My experience & education <ArrowRight size={17}/></Link></div>
      <div className="recognition-card"><Award size={30} className="text-[var(--accent)]"/><p className="eyebrow mt-6">Recognition / Al Emadi Enterprises</p><h3 className="mt-4 text-3xl font-bold tracking-tight">Recognized for quality work.</h3><p className="mt-5 leading-8 text-white/65">Awarded a Good Work Certificate by the CEO of Al Emadi Enterprises in recognition of strong performance, technical contributions and commitment to delivering quality work.</p><Link to="/experience" className="text-link mt-7">View my experience <ArrowRight size={17}/></Link></div>
    </div></section>
    <section className="pb-24"><div className="container-main"><div className="contact-banner"><div><p className="eyebrow">Have something in mind?</p><h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Let’s make it work.</h2><p className="mt-5 text-white/65">For development opportunities, collaboration or a conversation about your next project.</p></div><Link className="btn-primary shrink-0" to="/contact">Get in touch <ArrowRight size={18}/></Link></div></div></section>
  </PageTransition>
}
