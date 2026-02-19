import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * SampleHeader — clinic navigation bar.
 * Reusable across Core / Professional / Enterprise sample sites.
 *
 * Props:
 *   clinicName   — display name for the logo text
 *   homeHref     — href for the logo link (default '/')
 *   navLinks     — array of { label, href }
 *   phone        — clinic phone string
 *   ctaLabel     — CTA button text
 *   ctaHref      — CTA button href (route or anchor)
 */
export function SampleHeader({
  clinicName,
  homeHref = '/',
  navLinks = [],
  phone,
  ctaLabel = 'Book Appointment',
  ctaHref = '/contact',
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (href) =>
    pathname === href || (href !== homeHref && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to={homeHref} className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <span className="font-bold text-slate-900 text-[15px] leading-tight">{clinicName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[14px] font-medium transition-colors duration-150 ${
                isActive(link.href)
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="text-[14px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {phone}
            </a>
          )}
          <Link
            to={ctaHref}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-[14px] font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] font-medium ${
                isActive(link.href) ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {phone && (
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-[15px] font-medium text-slate-600">
              {phone}
            </a>
          )}
          <Link
            to={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-blue-600 text-white text-[14px] font-semibold"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  )
}
