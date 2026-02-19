import { useEffect } from 'react'

/**
 * SampleLayout — wrapper for all sample clinic sites.
 *
 * - Resets body background from the dark marketing theme to white
 * - Renders a top demo banner linking back to the main site
 * - Props:
 *     tier      — e.g. 'Core' | 'Professional' | 'Enterprise'
 *     children
 */
export function SampleLayout({ tier = 'Core', children }) {
  useEffect(() => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = '#ffffff'
    return () => {
      document.body.style.backgroundColor = prev
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* ── Demo banner ─────────────────────────────────────── */}
      <div className="bg-slate-900 text-slate-300 text-[12px] font-medium flex items-center justify-center gap-3 px-4 py-2.5">
        <span className="hidden sm:inline">
          <span className="text-white font-semibold">Alpha Web Studios</span>
          {' '}— {tier} Tier Sample Site
        </span>
        <span className="sm:hidden">Alpha Web Studios · {tier} Sample</span>
        <span className="text-slate-600 hidden sm:inline">|</span>
        <a
          href="/"
          className="text-teal-400 hover:text-teal-300 font-semibold transition-colors underline-offset-2 hover:underline"
        >
          ← Back to Alpha Web Studios
        </a>
      </div>

      {children}
    </div>
  )
}
