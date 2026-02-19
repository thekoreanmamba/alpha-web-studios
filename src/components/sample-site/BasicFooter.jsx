import { PRACTICE, HOURS } from '../../data/basic-site.js'

export function BasicFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <span className="text-white font-bold text-[14px]">{PRACTICE.name}</span>
          </div>
          <p className="text-slate-400 text-[13px] leading-relaxed mb-4">{PRACTICE.tagline}</p>
          <div className="flex flex-col gap-2 text-[13px]">
            <a href={`tel:${PRACTICE.phone.replace(/\D/g, '')}`} className="text-slate-400 hover:text-white transition-colors">
              {PRACTICE.phone}
            </a>
            <a href={`mailto:${PRACTICE.email}`} className="text-slate-400 hover:text-white transition-colors">
              {PRACTICE.email}
            </a>
            <address className="not-italic text-slate-500 leading-snug">
              {PRACTICE.address}<br />{PRACTICE.city}, {PRACTICE.state} {PRACTICE.zip}
            </address>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-[13px]">
            {[
              { label: 'About Dr. Kim', href: '#about' },
              { label: 'Services',       href: '#services' },
              { label: 'Testimonials',   href: '#testimonials' },
              { label: 'Contact & Hours', href: '#contact' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Office Hours</h3>
          <ul className="flex flex-col gap-2 text-[13px]">
            {HOURS.map((h) => (
              <li key={h.days} className="flex justify-between gap-3">
                <span className="text-slate-500">{h.days}</span>
                <span className="text-slate-300 font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-500">
          <p>© {year} {PRACTICE.name}. All rights reserved.</p>
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
