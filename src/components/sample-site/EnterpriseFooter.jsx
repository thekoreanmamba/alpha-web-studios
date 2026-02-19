import { Link } from 'react-router-dom'

/**
 * EnterpriseFooter — multi-location footer for the Enterprise sample site.
 *
 * Props:
 *   clinicName
 *   tagline
 *   phone
 *   email
 *   navLinks
 *   departments   — array of { name, slug }
 *   locations     — array of { name, street, city, state, zip, phone }
 *   homeHref
 */
export function EnterpriseFooter({
  clinicName,
  tagline,
  phone,
  email,
  navLinks = [],
  departments = [],
  locations = [],
  homeHref = '/enterprise',
}) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to={homeHref} className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-[14px]">{clinicName}</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">Health System</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{tagline}</p>
          <div className="flex flex-col gap-2">
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                {email}
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Navigation</h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Specialties</h3>
          <ul className="flex flex-col gap-2.5">
            {departments.map((dept) => (
              <li key={dept.slug}>
                <Link
                  to={`/enterprise/specialties/${dept.slug}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {dept.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Our Locations</h3>
          <div className="flex flex-col gap-5">
            {locations.map((loc) => (
              <div key={loc.id}>
                <p className="text-white text-[13px] font-semibold mb-0.5">{loc.name}</p>
                <p className="text-slate-500 text-[12px] leading-snug">
                  {loc.city}, {loc.state} · {loc.phone}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/enterprise/locations"
            className="inline-flex items-center gap-1.5 mt-5 text-[12px] text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            View All Locations →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-500">
          <p>© {year} {clinicName}. All rights reserved.</p>
          <p>
            Website by{' '}
            <a href="/" className="text-slate-400 hover:text-white transition-colors font-medium">
              Alpha Web Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
