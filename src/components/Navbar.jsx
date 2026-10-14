import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
const links = [['/', 'Home'], ['/about', 'About'], ['/experience', 'Experience'], ['/projects', 'Projects'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const button = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const escape = event => { if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus() } }
    window.addEventListener('keydown', escape)
    return () => window.removeEventListener('keydown', escape)
  }, [open])
  return <header className="site-header"><div className="nav-shell">
    <Link to="/" className="wordmark" aria-label="Jaseeth Mohamed home">JASEETH<span>.</span></Link>
    <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}</nav>
    <Link to="/contact" className="btn-secondary hidden !px-4 !py-2 md:inline-flex">Let’s talk <ArrowUpRight size={15}/></Link>
    <button ref={button} type="button" className="menu-button md:hidden" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X/> : <Menu/>}</button>
  </div><nav id="mobile-navigation" className="mobile-navigation" hidden={!open} aria-label="Mobile navigation">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}</nav></header>
}
