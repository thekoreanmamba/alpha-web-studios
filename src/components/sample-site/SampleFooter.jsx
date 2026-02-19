/**
 * SampleFooter — clinic site footer.
 * Reusable across Core / Professional / Enterprise sample sites.
 *
 * Props:
 *   clinicName
 *   tagline
 *   address      — { street, city, state, zip }
 *   phone
 *   email
 *   hours        — array of { days, time }
 *   navLinks     — array of { label, href }
 *   socialLinks  — array of { platform, href } (optional)
 */
export function SampleFooter({
  clinicName,
  tagline,
  address,
  phone,
  email,
  hours = [],
  navLinks = [],
}) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span className="font-bold text-white text-[15px]">{clinicName}</span>
          </div>
          {tagline && (
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{tagline}</p>
          )}
          {/* Contact quick links */}
          <div className="flex flex-col gap-2">
            {phone && (
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {email}
              </a>
            )}
          </div>
        </div>

        {/* Quick links */}
        {navLinks.length > 0 && (
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hours */}
        {hours.length > 0 && (
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Office Hours</h3>
            <ul className="flex flex-col gap-2.5">
              {hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-400">{h.days}</span>
                  <span className="text-slate-300 font-medium text-right">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Address */}
        {address && (
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Location</h3>
            <address className="not-italic text-sm text-slate-400 leading-relaxed">
              {address.street}<br />
              {address.city}, {address.state} {address.zip}
            </address>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${address.street}, ${address.city}, ${address.state} ${address.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Get Directions
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
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
