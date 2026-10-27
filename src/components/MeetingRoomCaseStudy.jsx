import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from './PageTransition'
import ProjectVisual from './ProjectVisual'

const sections = [
  ['overview', 'Project overview & role'],
  ['problem', 'The coordination problem'],
  ['decisions', 'Goals & design decisions'],
  ['client', 'Client booking flow'],
  ['admin', 'Admin management'],
  ['architecture', 'Technical architecture'],
  ['reliability', 'Security & reliability'],
  ['delivery', 'Deployment & lessons'],
]
const clientSteps = ['Choose a center', 'Check the room calendar', 'Select office, if configured', 'Enter meeting details', 'Verify email with OTP']
const adminSteps = ['Configure centers & offices', 'Set schedules & capacity', 'Manage bookings', 'Manage supervisor access', 'Review reports & settings']

function WorkflowIllustration() {
  const [view, setView] = useState('client')
  return <figure className="booking-workflow mt-10">
    <figcaption className="text-sm leading-6 text-white/65">Workflow illustration based on the supplied product brief. Sample calendar states; not a production screenshot.</figcaption>
    <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose illustrated workflow">
      {['client', 'admin'].map(item => <button key={item} type="button" className={`filter-button ${view === item ? 'active' : ''}`} aria-pressed={view === item} onClick={() => setView(item)}>{item === 'client' ? 'Client booking' : 'Administration'}</button>)}
    </div>
    <div className="booking-workflow-layout mt-8" aria-live="polite">
      <div><h3 className="text-2xl font-bold">{view === 'client' ? 'One center. One calendar.' : 'The operational view.'}</h3>
        <ol className="booking-flow-list mt-6">{(view === 'client' ? clientSteps : adminSteps).map(step => <li key={step}>{step}</li>)}</ol>
      </div>
      {view === 'client' ? <div className="booking-calendar" aria-label="Illustrative center calendar with sample availability">
        <p className="font-semibold">Selected center · Meeting room</p><p className="mt-2 text-sm text-white/65">Office selection attributes the booking to an office.</p>
        <div className="booking-calendar-grid mt-6">{['Day A', 'Day B', 'Day C'].map(day => <div key={day}><p className="mb-3 text-sm font-semibold">{day}</p>{['Available', 'Reserved', 'Available'].map((state, i) => <div key={i} className={`booking-calendar-slot ${state === 'Reserved' ? 'reserved' : ''}`}>{state}</div>)}</div>)}</div>
        <p className="mt-4 text-sm text-white/65">Illustration only. Available days and hours depend on each center’s configuration.</p>
      </div> : <div className="booking-admin-preview">
        <h4 className="font-semibold">Management responsibilities</h4><dl className="mt-5 space-y-5">
          <div><dt>Centers & offices</dt><dd>Room calendar, capacity, schedules and booking attribution.</dd></div>
          <div><dt>Bookings & notifications</dt><dd>Reservations, recipient email addresses and configurable updates.</dd></div>
          <div><dt>Access & reporting</dt><dd>Supervisor access, CSV reports and operational settings.</dd></div>
          <div><dt>Activity log</dt><dd>Restricted to administrators.</dd></div>
        </dl>
      </div>}
    </div>
  </figure>
}

function StudySection({ id, title, children }) {
  return <section id={id} className="booking-study-section"><h2 className="text-2xl font-bold md:text-3xl">{title}</h2><div className="booking-study-copy mt-6">{children}</div></section>
}

export default function MeetingRoomCaseStudy({ project }) {
  return <PageTransition><article className="page-intro pb-24"><div className="container-main">
    <Link to="/projects" className="text-link mb-10"><ArrowLeft size={16}/> All projects</Link>
    <p className="eyebrow">Case study / {project.category}</p>
    <h1 className="booking-study-title mt-5">Al Emadi Meeting Room Booking Portal</h1>
    <p className="mt-7 max-w-3xl text-xl leading-8 text-white/70">{project.summary}</p>
    <div className="mt-10 flex flex-wrap gap-2">{project.highlights.map(item => <span className="highlight-tag" key={item}>{item}</span>)}</div>
    <div className="mt-12 overflow-hidden rounded-[28px]"><ProjectVisual project={project} large/></div>
    <div className="case-study-grid mt-16"><aside>
      <p className="eyebrow">In this case study</p><nav aria-label="Case study sections" className="mt-4 flex flex-col gap-4">{sections.map(([id, title]) => <a key={id} href={`#${id}`} className="text-link">{title}</a>)}</nav>
      <p className="eyebrow mt-10">Technology</p><ul className="mt-4 flex flex-wrap gap-2">{project.tech.map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}</ul>
      <p className="mt-8 text-sm leading-6 text-white/65">Deployed internal application. No public application link is provided.</p>
    </aside><div className="space-y-16">
      <StudySection id="overview" title="Project overview & role">
        <p>An internal web application for managing meeting room reservations across multiple business centers and offices. The deployed portal replaces manual coordination with a clear booking experience for clients and a practical management experience for administrators.</p>
        <dl className="booking-project-facts"><div><dt>My role</dt><dd>[Exact role and responsibilities to be confirmed]</dd></div><div><dt>Project dates</dt><dd>[Dates to be confirmed]</dd></div><div><dt>Team</dt><dd>[Team size and collaboration details to be confirmed]</dd></div><div><dt>Results</dt><dd>[Measured results to be added when available]</dd></div></dl>
      </StudySection>
      <StudySection id="problem" title="The coordination problem">
        <p>Manual coordination makes it difficult to establish which room is available, capture complete meeting details and keep everyone informed when plans change. Across several locations, the booking experience also needs to account for different schedules, capacities and office structures.</p>
        <p>The product brings availability, reservations and booking updates into one workflow, while giving administrators control over the information and settings behind it.</p>
      </StudySection>
      <StudySection id="decisions" title="Goals & design decisions">
        <ul className="detail-list"><li><strong>Keep availability center-based.</strong> Each center has one meeting room and its own calendar, capacity, operating hours and available days.</li><li><strong>Separate attribution from availability.</strong> Offices identify which office a booking belongs to. They do not introduce additional rooms or independent calendars.</li><li><strong>Make changes part of the product.</strong> Clients can manage reservations after booking, including rescheduling, participant updates and cancellations with a reason.</li><li><strong>Support day-to-day administration.</strong> Center schedules, recipients and operational settings are configurable rather than fixed in the booking interface.</li></ul>
      </StudySection>
      <StudySection id="client" title="Client booking flow">
        <p>Clients choose a business center, review that center’s meeting room calendar and available times, and select an office when offices are configured for the center. They enter meeting details and verify their email using a one-time code.</p>
        <p>After booking, clients can reschedule to available times, update notes or participants, and cancel with a reason. Participants receive relevant booking updates. Confirmations and configurable notifications are sent to recipient email addresses.</p>
        <WorkflowIllustration/>
        <p className="booking-screenshot-placeholder">[Approved screenshot: client calendar, booking details and email-verification workflow]</p>
      </StudySection>
      <StudySection id="admin" title="Admin management">
        <p>Administrators manage centers and their offices, reservations, supervisor access, reports and operational settings. Each center’s capacity, operating hours and available days shape the booking options shown to clients.</p>
        <p>Role-based access separates administrator and supervisor access. The activity log is restricted to administrators; specific supervisor permissions should be documented before describing them in more detail.</p>
        <p>CSV reports support operational review. Configurable notification recipients let the business direct booking emails to the appropriate email addresses.</p>
        <p className="booking-screenshot-placeholder">[Approved screenshot: admin bookings, center settings and reporting screens]</p>
      </StudySection>
      <StudySection id="architecture" title="Technical architecture">
        <p>The React frontend provides responsive calendar and booking interfaces. An ASP.NET Core API handles booking operations and server-side validation, with SQL Server persisting reservation and configuration data.</p>
        <div className="booking-architecture" aria-label="Architecture: React client connects to ASP.NET Core API, which connects to SQL Server and asynchronous email delivery">
          <div><strong>React interfaces</strong><span>Client booking · Administration</span></div><ArrowRight aria-hidden="true"/><div><strong>ASP.NET Core API</strong><span>Availability · Access · Booking rules</span></div><ArrowRight aria-hidden="true"/><div><strong>SQL Server & email</strong><span>Persistence · Asynchronous delivery</span></div>
        </div>
        <p>Email OTP verification confirms access to the supplied email address. Asynchronous email delivery supports confirmations and relevant booking updates. Audit logging records activity, and CSV reporting supports management tasks.</p>
      </StudySection>
      <StudySection id="reliability" title="Security & reliability">
        <ul className="detail-list"><li><strong>Validate on the server.</strong> The API checks availability and conflicts to prevent overlapping reservations. The calendar interface is not the final authority on availability.</li><li><strong>Account for concurrent requests.</strong> Two clients may select the same time before either completes a booking. Server-side conflict validation is essential; the exact transaction or locking strategy is [to be confirmed].</li><li><strong>Separate access by role.</strong> Administrator and supervisor access is role-based, with the activity log restricted to administrators.</li><li><strong>Verify email and protect transport.</strong> Clients verify email with an OTP, and the deployed application uses HTTPS. OTP expiry, attempt limits and session controls are [to be confirmed].</li><li><strong>Keep delivery operationally visible.</strong> Emails are delivered asynchronously. Retry behavior, failure handling and delivery monitoring are [to be confirmed].</li></ul>
      </StudySection>
      <StudySection id="delivery" title="Deployment & lessons">
        <p>The application is deployed to IIS over HTTPS, serving the React experience and ASP.NET Core API with SQL Server persistence.</p>
        <p>The central design takeaway is the separation of a physical resource from booking metadata: the center owns the room calendar, while an office provides attribution. Another is keeping availability validation in the API, so the booking rules apply beyond what the client interface displays.</p>
        <p>[Personal lessons learned, deployment responsibilities and release process to be confirmed.]</p>
        <p>[Measurable results, usage data and stakeholder feedback to be added when approved.]</p>
      </StudySection>
    </div></div>
    <div className="next-project mt-20"><div><p className="eyebrow">Explore another project</p><Link className="mt-4 inline-flex items-center gap-4 text-2xl font-bold md:text-4xl" to="/projects/al-emadi-property">Al Emadi Property Platform <ArrowRight className="shrink-0"/></Link></div><Link className="btn-secondary" to="/contact">Let’s discuss your project <ArrowRight size={17}/></Link></div>
  </div></article></PageTransition>
}
