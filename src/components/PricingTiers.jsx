/**
 * PricingTiers — renders ONLY the 3 primary website packages.
 *
 * The Landing Page / Microsite is intentionally excluded here.
 * It lives in <MicrositeCard /> and is rendered in a separate section
 * directly above <AddOns />.
 */
import { tiers } from '../data/tiers.js'
import { Badge } from './ui/Badge.jsx'
import { Button, ArrowIcon } from './ui/Button.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'

/* ── colour maps keyed by tier.accentColor ────────────────────── */
const checkIcon = {
  green: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(34,197,94,0.15)" />
      <path d="M5 8l2 2 4-4" stroke="#4ADE80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  blue: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(59,130,246,0.15)" />
      <path d="M5 8l2 2 4-4" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  teal: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(62,207,178,0.15)" />
      <path d="M5 8l2 2 4-4" stroke="#3ECFB2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  purple: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(139,92,246,0.15)" />
      <path d="M5 8l2 2 4-4" stroke="#A78BFA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const priceClass = {
  green:  'text-gradient-green',
  blue:   'text-gradient-blue',
  teal:   'text-gradient-teal',
  purple: 'text-gradient-purple',
}

const pillClass = {
  green:  'bg-green-500/10  text-green-300',
  blue:   'bg-blue-500/10   text-blue-300',
  teal:   'bg-teal-400/10   text-teal-300',
  purple: 'bg-purple-500/10 text-purple-300',
}

const ctaVariant = {
  green:  'green-soft',
  blue:   'blue-soft',
  teal:   'teal',
  purple: 'purple-soft',
}

/* accent color used inside the inherits badge checkmark circle */
const inheritsFill = {
  blue:   'rgba(59,130,246,0.55)',
  teal:   'rgba(62,207,178,0.55)',
  purple: 'rgba(139,92,246,0.55)',
}

const inheritsAccent = {
  blue:   'text-blue-400',
  teal:   'text-teal-400',
  purple: 'text-purple-400',
}

/* ── TimeChip ─────────────────────────────────────────────────── */
function TimeChip({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-slate-500 bg-white/[0.04] border border-white/[0.08]">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5" stroke="#64748B" strokeWidth="1.2" />
        <path d="M6 3.5v2.5l1.5 1" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {label}
    </span>
  )
}

/* ── TierCard ─────────────────────────────────────────────────── */
function TierCard({ tier }) {
  const check     = checkIcon[tier.accentColor]
  const pClass    = priceClass[tier.accentColor]
  const pillCls   = pillClass[tier.accentColor]
  const btnVariant = ctaVariant[tier.accentColor]
  const iFill     = inheritsFill[tier.accentColor]
  const iAccent   = inheritsAccent[tier.accentColor]

  return (
    <div className={`tier-card ${tier.cardClass} flex flex-col h-full`}>
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <Badge variant={tier.labelVariant}>{tier.label}</Badge>
        <TimeChip label={tier.timeline} />
      </div>

      {/* Name + description */}
      <h3 className="text-[22px] font-black text-white mb-1.5">{tier.name}</h3>
      <p className="text-slate-400 text-[13px] leading-relaxed mb-4">{tier.description}</p>

      {/* Price */}
      <div className="mb-4">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">
          Investment
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={`text-[30px] font-black leading-none ${pClass}`}>
            {tier.priceFrom}
          </span>
          <span className="text-slate-500 text-base">– {tier.priceTo}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mb-3" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* Best For */}
      <div className="mb-4">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-semibold">
          Best For
        </p>
        <div className="flex flex-wrap gap-2">
          {tier.bestFor.map((item) => (
            <span key={item} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${pillCls}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* "Everything in X +" inheritance badge */}
      {tier.inherits && (
        <div className="mb-3 flex items-center gap-2.5 px-3.5 py-2 rounded-[10px] bg-white/[0.05] border border-white/[0.09]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" flex-shrink="0" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill={iFill} />
            <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] font-semibold text-slate-300 leading-tight">
            Everything in <span className={iAccent}>{tier.inherits}</span>, plus:
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="mb-4 space-y-1">
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[13px] text-slate-300 leading-snug">
            <span className="mt-[1px] flex-shrink-0">{check}</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* Spacer — fills remaining height so CTA always sits at the bottom */}
      <div className="flex-1" />

      {/* Primary CTA */}
      <Button href="https://calendly.com/alphawebstudios-info/30min" variant={btnVariant} fullWidth target="_blank" rel="noopener noreferrer">
        {tier.cta}
        <ArrowIcon />
      </Button>

      {/* Sample site preview link — only rendered when samplePath exists */}
      {tier.samplePath && (
        <a
          href={tier.samplePath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-[10px] text-[13px] font-medium text-slate-400 border border-white/[0.08] hover:border-teal-400/30 hover:text-teal-300 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Sample Website
        </a>
      )}
    </div>
  )
}

/* ── PricingTiers (exported) ──────────────────────────────────── */
export function PricingTiers() {
  return (
    <section id="pricing" className="py-14 bg-section">
      <div className="max-w-screen-2xl mx-auto px-6">

        <SectionHeader
          eyebrow="Website Packages"
          headline={
            <>Choose Your<br /><span className="text-gradient-teal">Level of Impact</span></>
          }
          subtitle="Four packages for every stage of growth — from a polished single-page launch to a full enterprise health system. Every website is custom, conversion-focused, and delivered on WordPress."
          className="mb-8"
        />

        {/* ── 4-column grid — Starter | Core | Professional | Enterprise ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-slate-500 text-sm mt-6 reveal">
          All packages include WordPress + Elementor builds with mobile-responsive design.{' '}
          <a href="https://calendly.com/alphawebstudios-info/30min" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">
            Schedule a free consultation
          </a>{' '}
          to find the right fit.
        </p>

      </div>
    </section>
  )
}
