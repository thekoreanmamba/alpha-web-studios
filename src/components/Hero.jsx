import { Button, ArrowIcon } from './ui/Button.jsx'

const STATS = [
  { value: '3',    label: 'Website Tiers',    colorClass: 'text-gradient-blue' },
  { value: '2–8',  label: 'Week Delivery',    colorClass: 'text-gradient-teal' },
  { value: 'EN/KR',label: 'Bilingual Support', colorClass: 'text-white' },
  { value: 'LA',   label: '& Orange County',  colorClass: 'text-gradient-purple' },
]

/**
 * Per-cell border classes for the 2-col mobile / 4-col desktop grid.
 *
 * Mobile (grid-cols-2):
 *   [0] [1]   ← index 0 gets border-r → perfect center divider
 *   [2] [3]   ← index 2 gets border-r (same column) + border-t for row separator
 *              ← index 3 gets border-t for row separator
 *
 * Desktop (sm:grid-cols-4):
 *   [0] [1] [2] [3]   ← indices 0,1,2 get border-r; border-t removed
 *
 * border-white/[0.08] sets the color for whichever border-{side} widths are active.
 */
const STAT_BORDER_CLASSES = [
  // index 0 — left col, top row
  'border-r border-white/[0.08]',
  // index 1 — right col, top row: no border on mobile, border-r on sm+
  'sm:border-r sm:border-white/[0.08]',
  // index 2 — left col, bottom row: border-r always + border-t on mobile only
  'border-r border-t border-white/[0.08] sm:border-t-0',
  // index 3 — right col, bottom row: border-t on mobile only, no border on sm
  'border-t border-white/[0.08] sm:border-t-0',
]

export function Hero() {
  return (
    <section className="bg-hero min-h-screen flex flex-col justify-center pt-20 pb-28 relative overflow-hidden">
      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-[480px] h-[480px] rounded-full bg-blue-600 opacity-[0.035] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[360px] h-[360px] rounded-full bg-teal-400 opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-400">
              Serving Los Angeles & Orange County
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[56px] md:text-[76px] font-black leading-[1.03] tracking-[-0.025em] mb-6">
            <span className="text-gradient-hero">Websites That</span>
            <br />
            <span className="text-gradient-brand">Win Clients.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional WordPress websites built for medical clinics, law firms, and service
            businesses across Southern California. From strategy to launch — and everything after.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button href="#pricing" variant="teal" size="lg">
              View Packages & Pricing
              <ArrowIcon />
            </Button>
            <Button href="https://calendly.com/alphawebstudios-info/30min" variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:inline-grid sm:grid-cols-4 w-full sm:w-auto rounded-2xl border border-white/[0.06] bg-white/[0.025] overflow-hidden">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center px-6 sm:px-10 py-5 ${STAT_BORDER_CLASSES[i]}`}
              >
                <div className={`text-3xl md:text-4xl font-black leading-none mb-1 ${stat.colorClass}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25 pointer-events-none" aria-hidden="true">
        <span className="text-[10px] text-slate-500 tracking-widest uppercase">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  )
}
