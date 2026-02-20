import { Button, ArrowIcon } from './ui/Button.jsx'

const TRUST_POINTS = [
  'Free consultation — no commitment',
  'Serving Los Angeles & Orange County',
  'English & Korean support',
]

export function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'rgba(37,99,235,0.05)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-400 mb-6">
          Ready to Get Started?
        </p>

        <h2 className="text-5xl md:text-[64px] font-black text-white tracking-tight leading-[1.02] mb-6">
          Let's Build Your<br />
          <span className="text-gradient-brand">Website.</span>
        </h2>

        <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Ready to establish or upgrade your online presence? Schedule a free consultation and
          we'll find the right package for your goals and budget.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href="https://calendly.com/alphawebstudios-info/30min" variant="teal" size="lg" target="_blank" rel="noopener noreferrer">
            Get a Free Quote
            <ArrowIcon />
          </Button>
          <Button href="https://calendly.com/alphawebstudios-info/30min" variant="ghost" size="lg" target="_blank" rel="noopener noreferrer">
            Schedule a Consultation
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-[13px]">
          {TRUST_POINTS.map((point) => (
            <span key={point} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="rgba(62,207,178,0.15)" />
                <path d="M5 8l2 2 4-4" stroke="#3ECFB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
