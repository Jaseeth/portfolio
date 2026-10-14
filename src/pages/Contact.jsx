import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check, Download, Send, LoaderCircle, CircleCheck, CircleAlert } from 'lucide-react'
import { useRef, useState } from 'react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/siteData'
import { submitContact } from '../services/contact'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  const [submission, setSubmission] = useState({ state: 'idle', message: '' })
  const sending = useRef(false)
  const feedback = useRef(null)
  const busy = submission.state === 'sending'
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email address copied.') }
    catch { setCopyStatus(`Please copy this address: ${profile.email}`) }
  }
  const submit = async event => {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    sending.current = true
    setSubmission({ state: 'sending', message: 'Sending your message…' })
    try {
      await submitContact(fields, { recipient: profile.email, pageUrl: window.location.origin + window.location.pathname })
      form.reset()
      setSubmission({ state: 'success', message: 'Thanks — your message has been submitted. I’ll get back to you by email.' })
    } catch (error) {
      setSubmission({ state: 'error', message: error.message })
    } finally {
      sending.current = false
      requestAnimationFrame(() => feedback.current?.focus({ preventScroll: true }))
    }
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
      <form onSubmit={submit} aria-busy={busy} aria-describedby="email-help" className="glass rounded-[28px] p-6 md:p-9"><h2 className="text-2xl font-bold">Send me a message</h2><p className="mt-3 text-sm leading-7 text-white/65" id="email-help">Send your message here and I’ll reply to the email address you provide.</p>
        <fieldset disabled={busy} className="min-w-0 border-0 p-0"><legend className="sr-only">Your contact details and message</legend>
        <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty<input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"/></label></div>
        <div className="mt-7 grid gap-5 md:grid-cols-2"><label className="form-label" htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="form-input" placeholder="Your name"/></label><label className="form-label" htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} className="form-input" placeholder="you@example.com"/></label></div>
        <label className="form-label mt-5" htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required maxLength={160} className="form-input" placeholder="An opportunity, a project, an idea…"/></label>
        <label className="form-label mt-5" htmlFor="contact-message">Your message<textarea id="contact-message" name="message" required rows={6} maxLength={1800} className="form-input resize-y" placeholder="A little about what you have in mind…"/></label>
        <button className="btn-primary mt-6" type="submit" disabled={busy}>{busy ? <>Sending… <LoaderCircle size={17} className="contact-spinner"/></> : <>Send message <Send size={17}/></>}</button>
        </fieldset>
        <p className="mt-5 text-xs leading-6 text-white/55">Your name, email and message are processed by <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3">FormSubmit</a> to forward your enquiry to my inbox.</p>
        <div ref={feedback} tabIndex={-1} role={submission.state === 'error' ? 'alert' : 'status'} aria-live={submission.state === 'error' ? 'assertive' : 'polite'} className={`contact-feedback ${submission.state === 'error' ? 'contact-feedback-error' : ''}`}>
          {submission.message && <>{submission.state === 'success' ? <CircleCheck size={20}/> : submission.state === 'error' ? <CircleAlert size={20}/> : <LoaderCircle size={20} className="contact-spinner"/>}<p>{submission.message}</p></>}
        </div>
      </form>
    </div>
  </div></section></PageTransition>
}
