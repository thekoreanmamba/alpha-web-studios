/**
 * SampleSection — generic section wrapper for sample clinic sites.
 *
 * Props:
 *   id        — anchor id for nav links
 *   bg        — 'white' | 'gray' | 'navy' | 'blue'
 *   className — extra classes
 *   children
 */
export function SampleSection({ id, bg = 'white', className = '', children }) {
  const bgMap = {
    white: 'bg-white',
    gray:  'bg-gray-50',
    navy:  'bg-slate-900 text-white',
    blue:  'bg-blue-600 text-white',
  }

  return (
    <section id={id} className={`py-20 ${bgMap[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

/**
 * SampleSectionHeader — consistent heading block inside a section.
 */
export function SampleSectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-500 text-lg leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
