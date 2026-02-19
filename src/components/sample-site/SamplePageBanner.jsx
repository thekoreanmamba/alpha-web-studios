import { Link } from 'react-router-dom'

/**
 * SamplePageBanner — top banner for inner sample site pages.
 *
 * Props:
 *   eyebrow    — small label above title
 *   title      — page title (h1)
 *   subtitle   — optional supporting sentence
 *   breadcrumb — array of { label, href } — last item is current page (no href)
 */
export function SamplePageBanner({ eyebrow, title, subtitle, breadcrumb = [] }) {
  return (
    <div className="bg-gray-50 border-b border-gray-100 pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-[12px] text-slate-400 mb-5 flex-wrap" aria-label="Breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-slate-600 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-600 font-medium">{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M3 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">{eyebrow}</p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
