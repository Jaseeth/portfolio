import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check, Download, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/siteData'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  const [draft, setDraft] = useState('')
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email address copied.') }
    catch { setCopyStatus(`Please copy this address: ${profile.email}`) }
  }
  const compose = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name').trim(), email = data.get('email').trim(), subject = data.get('subject').trim(), message = data.get('message').trim()
    if (!name || !email || !subject || !message) { setDraft('Please complete every field with your contact details and message.'); return }
    const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDraft('Your email app has been requested. Review and send the draft there. If it did not open, copy my email address and send your message directly.')
  }
  return <PageTransition><section className="section-pad page-intro"><div className="container-main">
    <SectionTitle as="h1" eyebrow="Contact / Start a conversation" title={<>Good work starts<br/><span className="text-gradient">with a hello.</span></>} description="Have a development opportunity or a project in mind? Tell me what you’re working on and where I can help."/>
    <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
      <div><h2 className="text-2xl font-bold">Let’s connect.</h2><div className="mt-7 space-y-3">
        <a className="contact-method" href={`mailto:${profile.email}`}><Mail size={20}/><span><small>Email</small><strong>{profile.email}</strong></span><ArrowUpRight size={18}/></a>
        <a className="contact-method" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20}/><span><small>LinkedIn</small><strong>linkedin.com/in/jaseeth</strong></span><ArrowUpRight size={18}/></a>
        <a className="contact-method" href={profile.phoneHref}><Phone size={20}/><span><small>Phone</small><strong>{profile.phone}</strong></span><ArrowUpRight size={18}/></a>
        <div className="contact-method"><MapPin size={20}/><span><small>Based in</small><strong>{profile.location}</strong></span></div>
      </div><button type="button" className="text-link mt-6" onClick={copyEmail}>{copyStatus === 'Email address copied.' ? <Check size={16}/> : <Copy size={16}/>}Copy email address</button><p role="status" className="mt-3 text-sm text-[var(--accent)]">{copyStatus}</p><a className="btn-secondary mt-8" download href={profile.resume}>Download CV <Download size={16}/></a></div>
      <form onSubmit={compose} className="glass rounded-[28px] p-6 md:p-9"><h2 className="text-2xl font-bold">Write an introduction</h2><p className="mt-3 text-sm leading-7 text-white/65" id="email-help">This opens a draft in your email app. Review it and press send there, or email me directly using the address alongside.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-2"><label className="form-label" htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="form-input" placeholder="Your name"/></label><label className="form-label" htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} className="form-input" placeholder="you@example.com"/></label></div>
        <label className="form-label mt-5" htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required maxLength={160} className="form-input" placeholder="An opportunity, a project, an idea…"/></label>
        <label className="form-label mt-5" htmlFor="contact-message">Your message<textarea id="contact-message" name="message" required rows={6} maxLength={1800} className="form-input resize-y" placeholder="A little about what you have in mind…"/></label>
        <button className="btn-primary mt-6" aria-describedby="email-help" type="submit">Compose email <ArrowRight size={17}/></button><p className="mt-5 text-sm leading-7 text-[var(--accent)]" role="status">{draft}</p>
      </form>
    </div>
  </div></section></PageTransition>
}
