/**
 * SampleHero — split-layout hero for clinic sample sites.
 * Reusable across tiers via props.
 *
 * Props:
 *   eyebrow
 *   headline      — string or JSX
 *   subheadline
 *   primaryCta    — { label, href }
 *   secondaryCta  — { label, href } (optional)
 *   image         — { src, alt }
 *   trustBadges   — array of strings (optional)
 */
export function SampleHero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
  trustBadges = [],
}) {
  return (
    <section className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ──────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" aria-hidden="true" />
                {eyebrow}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              {headline}
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl lg:max-w-none">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-[15px] hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
                >
                  {primaryCta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-gray-200 text-slate-600 font-semibold text-[15px] hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>

            {/* Trust badges */}
            {trustBadges.length > 0 && (
              <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
                {trustBadges.map((badge) => (
                  <li key={badge} className="flex items-center gap-2 text-[13px] text-slate-500">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
                      <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ── Right: image ─────────────────────────────────────── */}
          {image && (
            <div className="flex-1 w-full lg:max-w-[520px] relative">
              {/* Decorative background blob */}
              <div
                className="absolute -top-8 -right-8 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #EFF6FF 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <img
                src={image.src}
                alt={image.alt}
                className="relative w-full h-[380px] lg:h-[460px] object-cover rounded-2xl shadow-xl"
              />
              {/* Floating trust chip */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-[13px]">Accepting New Patients</p>
                  <p className="text-slate-400 text-[11px]">Same-day appointments available</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave / transition */}
      <div className="mt-16 bg-gray-50 h-6" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} aria-hidden="true" />
    </section>
  )
}
