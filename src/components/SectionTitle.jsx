export default function SectionTitle({ eyebrow, title, description, as: Heading = 'h2' }) {
  return <div className="mb-12 max-w-3xl"><p className="eyebrow">{eyebrow}</p><Heading className="section-title mt-4">{title}</Heading>{description && <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">{description}</p>}</div>
}
