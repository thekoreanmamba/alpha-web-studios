import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * EnterpriseHeader — two-tier navigation for the Enterprise sample site.
 *
 * Props:
 *   clinicName   — display name
 *   homeHref     — logo link target
 *   navLinks     — array of { label, href }
 *   phone        — main phone number
 *   ctaLabel     — CTA button text
 *   ctaHref      — CTA button route
 *   locationsHref — link for the "X Locations" utility bar item
 */
export function EnterpriseHeader({
  clinicName,
  homeHref = '/enterprise',
  navLinks = [],
  phone,
  ctaLabel = 'Request Appointment',
  ctaHref = '/enterprise/contact',
  locationsHref = '/enterprise/locations',
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (href) =>
    pathname === href || (href !== homeHref && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40">

      {/* ── Utility bar ─────────────────────────────────────── */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-9 flex items-center justify-between gap-4">
          {/* Patient portal */}
          <a
            href="#portal"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            Patient Portal
          </a>

          {/* Right: locations + phone */}
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
            <Link
              to={locationsHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              3 DFW Metroplex Locations
            </Link>
            <span className="text-slate-700">|</span>
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                {phone}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Main navigation ───────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to={homeHref} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-slate-900 text-[14px]">{clinicName}</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">Health System</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[13px] font-medium transition-colors duration-150 whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-purple-600 font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to={ctaHref}
            className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white text-[13px] font-semibold hover:bg-purple-700 transition-colors shadow-sm flex-shrink-0"
          >
            {ctaLabel}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-[13px] font-medium text-slate-500">
                {phone}
              </a>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] font-medium ${
                  isActive(link.href) ? 'text-purple-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={ctaHref}
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-purple-600 text-white text-[14px] font-semibold"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
