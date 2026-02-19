/**
 * Reusable section header with eyebrow, headline (JSX), and subtitle.
 */
export function SectionHeader({ eyebrow, headline, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-16 reveal ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-[50px] font-black text-white tracking-tight leading-tight mb-4">
        {headline}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
