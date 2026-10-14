import { Award, ArrowUpRight, Download, GraduationCap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { experience, education, achievements, certificationsInProgress, profile } from '../data/siteData'

export default function Experience() {
  return <PageTransition><section className="section-pad page-intro"><div className="container-main">
    <SectionTitle as="h1" eyebrow="Experience / Since 2022" title={<>Learning by building.<br/><span className="text-gradient">Growing through delivery.</span></>} description="3+ years of hands-on development, from client websites to enterprise platforms, interactive navigation and mobile interfaces."/>
    <a className="btn-secondary mb-14" href={profile.resume} download>Download full CV <Download size={17}/></a>
    <div className="experience-list">{experience.map((item, i) => <article className="experience-item" key={item.company}><div><p className="eyebrow">0{i + 1} / {item.period}</p><p className="mt-4 text-white/65">{item.company}</p></div><div><h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>{item.subtitle && <p className="mt-2 text-[var(--accent)]">{item.subtitle}</p>}<p className="mt-5 text-lg leading-8 text-white/70">{item.description}</p><ul className="detail-list mt-6">{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
    <div className="mt-24"><SectionTitle eyebrow="Education" title="A foundation in engineering."/><div className="grid gap-5 md:grid-cols-2">{education.map(item => <article className="glass rounded-3xl p-7" key={item.title}><GraduationCap className="text-[var(--accent)]" size={26}/><p className="eyebrow mt-7">{item.period}</p><h3 className="mt-3 text-2xl font-bold">{item.title}</h3><p className="mt-3 text-white/75">{item.institution}</p><p className="mt-4 leading-7 text-white/60">{item.detail}</p></article>)}</div></div>
    <div className="mt-24"><SectionTitle eyebrow="Recognition & development" title="Milestones along the way."/><div className="grid gap-5 md:grid-cols-3">{achievements.map(item => <article className="border-t border-white/15 pt-6" key={item.title}><Award className="text-[var(--accent)]" size={23}/><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-white/65">{item.detail}</p></article>)}</div></div>
    <div className="learning-panel mt-12"><div><p className="eyebrow">Certifications in progress</p><p className="mt-3 text-white/65">Continuing my frontend and cloud learning.</p></div><ul className="space-y-3 text-sm text-white/80">{certificationsInProgress.map(item => <li key={item}>{item}</li>)}</ul></div>
    <a className="text-link mt-10" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a>
  </div></section></PageTransition>
}
