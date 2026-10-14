import { ArrowDownRight, ArrowRight, Download, MapPin, Layers3, Braces, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/siteData'

export default function Hero() {
  return <section className="hero-section">
    <div className="grid-bg absolute inset-0" aria-hidden="true"/><div className="hero-orb" aria-hidden="true"/>
    <div className="container-main relative z-10">
      <div className="hero-meta"><span className="inline-flex items-center gap-2"><MapPin size={14}/>{profile.location}</span><span>DEVELOPMENT / DESIGN / DELIVERY</span></div>
      <div className="hero-layout">
        <div>
          <p className="eyebrow mb-6">Hello, I’m Jaseeth Mohamed</p>
          <h1 className="hero-heading">Thoughtful<br/>interfaces.<br/><span className="text-gradient">Solid systems.</span></h1>
          <p className="hero-description">Full-Stack Software Developer turning business needs into responsive websites, CMS platforms and connected mobile experiences.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/projects" className="btn-primary">Explore my work <ArrowRight size={18}/></Link><a href={profile.resume} download className="btn-secondary">Download CV <Download size={17}/></a></div>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium tracking-wider text-white/60"><span>ASP.NET Core</span><span>React</span><span>SQL Server</span><span>Flutter</span><span>n8n</span></div>
        </div>
        <div className="system-card">
          <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="eyebrow">My approach</span><span className="text-xs text-white/50">01 — 03</span></div>
          <div className="system-node"><div className="system-icon"><Layers3 size={23}/></div><div><span className="system-kicker">01 / EXPERIENCE</span><h2>Make it intuitive.</h2><p>Responsive web & mobile interfaces</p></div></div>
          <div className="system-connector" aria-hidden="true"/>
          <div className="system-node"><div className="system-icon"><Braces size={23}/></div><div><span className="system-kicker">02 / FOUNDATION</span><h2>Build it to work.</h2><p>APIs, databases & CMS architecture</p></div></div>
          <div className="system-connector" aria-hidden="true"/>
          <div className="system-node"><div className="system-icon"><Workflow size={23}/></div><div><span className="system-kicker">03 / RELIABILITY</span><h2>Keep it healthy.</h2><p>Deployment, monitoring & automation</p></div></div>
          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/60"><span>From interface to infrastructure</span><span className="status-dot" aria-hidden="true"/></div>
        </div>
      </div>
      <div className="hero-bottom"><span>3+ YEARS OF DEVELOPMENT EXPERIENCE</span><a href="#selected-work" className="inline-flex items-center gap-2">Selected work <ArrowDownRight size={16}/></a></div>
    </div>
  </section>
}
