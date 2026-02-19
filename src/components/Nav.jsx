import { useEffect, useState } from 'react'
import { Button } from './ui/Button.jsx'

const NAV_LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Maintenance',  href: '#maintenance' },
  { label: 'Add-Ons',      href: '#addons' },
  { label: 'About',        href: '#why' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.08)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-label="Alpha Web Studios logo">
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>
            <path d="M17 3L31 30H3L17 3Z" fill="url(#logo-grad)" />
            <path d="M10 25L17 9L24 25" stroke="#3ECFB2" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 20h9" stroke="#3ECFB2" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div className="leading-tight">
            <div className="font-black text-white text-[17px] tracking-tight leading-none">ALPHA</div>
            <div className="text-[10px] text-slate-400 font-semibold tracking-[0.18em] uppercase leading-none mt-0.5">
              Web Studios
            </div>
          </div>
        </a>

        {/* Links — hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Button href="#contact" variant="primary" size="sm">
          Get a Free Quote
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}
