/**
 * SampleCTA — full-width call-to-action band.
 * Reusable across Core / Professional / Enterprise sample sites.
 *
 * Props:
 *   eyebrow
 *   title
 *   subtitle
 *   primaryLabel  — primary button text
 *   primaryHref
 *   secondaryLabel — secondary link text (optional)
 *   secondaryHref
 *   bg            — 'blue' | 'navy' | 'teal' (default 'blue')
 */
const bgStyles = {
  blue:  { section: 'bg-blue-600',  primary: 'bg-white text-blue-600 hover:bg-blue-50', secondary: 'text-blue-100 hover:text-white border-blue-400/50 hover:border-white' },
  navy:  { section: 'bg-slate-900', primary: 'bg-blue-600 text-white hover:bg-blue-700', secondary: 'text-slate-300 hover:text-white border-slate-600 hover:border-slate-400' },
  teal:  { section: 'bg-teal-600',  primary: 'bg-white text-teal-700 hover:bg-teal-50', secondary: 'text-teal-100 hover:text-white border-teal-400/50 hover:border-white' },
}

export function SampleCTA({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref = '#contact',
  secondaryLabel,
  secondaryHref = '#contact',
  bg = 'blue',
}) {
  const styles = bgStyles[bg] ?? bgStyles.blue

  return (
    <section className={`${styles.section} py-20`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-200 mb-4">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-blue-100 text-lg leading-relaxed mb-10">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] shadow-sm transition-all duration-200 ${styles.primary}`}
          >
            {primaryLabel}
          </a>
          {secondaryLabel && (
            <a
              href={secondaryHref}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] border transition-all duration-200 ${styles.secondary}`}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
