const SERVICE_LINKS = [
  { label: 'Core Website',          href: '#pricing' },
  { label: 'Professional Website',  href: '#pricing' },
  { label: 'Enterprise Website',    href: '#pricing' },
  { label: 'Maintenance Plans',     href: '#maintenance' },
  { label: 'À La Carte Services',   href: '#addons' },
]

const COMPANY_LINKS = [
  { label: 'About Us',             href: '#why' },
  { label: 'Industries Served',    href: '#services' },
  { label: 'Contact',              href: '#contact' },
  { label: 'Free Consultation',    href: '#contact' },
]

export function Footer() {
  return (
    <footer style={{ background: 'rgba(2,7,18,0.98)', borderTop: '1px solid rgba(255,255,255,0.055)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-label="Alpha Web Studios">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                </defs>
                <path d="M17 3L31 30H3L17 3Z" fill="url(#footer-logo-grad)" />
                <path d="M10 25L17 9L24 25" stroke="#3ECFB2" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 20h9" stroke="#3ECFB2" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="font-black text-white text-[16px] tracking-tight">ALPHA WEB STUDIOS</span>
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed max-w-xs">
              WordPress websites built for professional service businesses across Los Angeles and Orange County. English & Korean support.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11px] text-slate-600 uppercase tracking-widest font-semibold mb-4">Services</div>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate-500 no-underline transition-colors duration-200 hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] text-slate-600 uppercase tracking-widest font-semibold mb-4">Company</div>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate-500 no-underline transition-colors duration-200 hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[12px]">
            &copy; {new Date().getFullYear()} Alpha Web Studios. All rights reserved.
          </p>
          <p className="text-slate-600 text-[12px]">
            Serving Los Angeles & Orange County &nbsp;&bull;&nbsp; English & Korean Support
          </p>
        </div>

      </div>
    </footer>
  )
}
