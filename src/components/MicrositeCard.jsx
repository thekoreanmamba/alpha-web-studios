/**
 * MicrositeCard — Landing Page / Microsite offering.
 *
 * Placement: directly ABOVE <AddOns />.
 *
 * Why above À La Carte: the Microsite is a complete deliverable
 * (a website), not a granular service. Keeping it adjacent to the
 * main tiers — but separated — positions it as a stepping stone for
 * prospects who aren't ready for a full package. À La Carte items
 * are component services; the Microsite is a product.
 *
 * Design: single clean card, two-column layout (copy | meta+CTA).
 * No floating labels, no cluttered metadata rows.
 */
import { Button, ArrowIcon } from './ui/Button.jsx'

const VALUE_POINTS = [
  'One focused goal — sign-ups, bookings, or purchases',
  'Live in 1–2 weeks to capitalize on time-sensitive opportunities',
  'Conversion-optimized layout built for measurable action',
  'Ideal for new services, promotions, events, or ad campaigns',
]

export function MicrositeCard() {
  return (
    <section className="py-16 bg-section" aria-labelledby="microsite-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Optional section label — subtle, doesn't compete with main tiers */}
        <div className="flex items-center gap-3 mb-6 reveal">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">
            Also Available
          </p>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)' }} />
        </div>

        {/* ── Card ─────────────────────────────────────────────── */}
        <div
          className="reveal rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,50,0.65), rgba(7,16,40,0.78))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(62,207,178,0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col lg:flex-row gap-0">

            {/* ── LEFT: icon + copy + bullets ─────────────────── */}
            <div className="flex-1 p-8 lg:p-10">
              {/* Title row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(62,207,178,0.1)', border: '1px solid rgba(62,207,178,0.22)' }}
                  aria-hidden="true"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                    stroke="#3ECFB2" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>

                <h2
                  id="microsite-heading"
                  className="text-xl font-black text-white tracking-tight"
                >
                  Landing Page / Microsite
                </h2>

                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase bg-teal-400/10 text-teal-300 border border-teal-400/28">
                  Quick Launch
                </span>
              </div>

              {/* One-line description */}
              <p className="text-slate-400 text-[14px] leading-relaxed mb-6">
                Single-page sites built to convert — for promotions, campaigns, and new service launches.
              </p>

              {/* Value bullets */}
              <ul className="space-y-2.5">
                {VALUE_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-slate-300 leading-snug">
                    <svg
                      width="15" height="15" viewBox="0 0 16 16" fill="none"
                      className="mt-[1px] flex-shrink-0" aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="7" fill="rgba(62,207,178,0.12)" />
                      <path d="M5 8l2 2 4-4" stroke="#3ECFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Vertical divider (desktop) ───────────────────── */}
            <div
              className="hidden lg:block w-px my-8 flex-shrink-0"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.07), transparent)' }}
              aria-hidden="true"
            />

            {/* ── Horizontal divider (mobile) ──────────────────── */}
            <div
              className="lg:hidden h-px mx-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }}
              aria-hidden="true"
            />

            {/* ── RIGHT: price + timeline + CTA ────────────────── */}
            <div className="flex-shrink-0 flex flex-col justify-center gap-6 p-8 lg:p-10 lg:min-w-[260px]">

              {/* Price */}
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">
                  Starting at
                </div>
                <div className="text-[28px] font-black text-gradient-teal leading-none">
                  $1,200 – $2,500
                </div>
              </div>

              {/* Timeline */}
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">
                  Launch Timeline
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke="#64748B" strokeWidth="1.2" />
                    <path d="M7 4v3l2 1.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="text-slate-300 font-semibold text-[15px]">1–2 Weeks</span>
                </div>
              </div>

              {/* CTA */}
              <Button href="https://calendly.com/alphawebstudios-info/30min" variant="teal-soft" fullWidth target="_blank" rel="noopener noreferrer">
                Request a Microsite
                <ArrowIcon />
              </Button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
