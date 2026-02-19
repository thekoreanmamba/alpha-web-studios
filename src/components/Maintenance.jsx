import { maintenancePlans } from '../data/maintenance.js'
import { Badge } from './ui/Badge.jsx'
import { Button, ArrowIcon } from './ui/Button.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'

const checkIcon = {
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

const ctaVariant = { blue: 'blue-soft', teal: 'teal', purple: 'purple-soft' }
const delayClass = ['reveal-d1', '', 'reveal-d2']

function PlanCard({ plan, delayIdx }) {
  return (
    <div className={`maint-card ${plan.cardClass} reveal ${delayClass[delayIdx]} flex flex-col h-full`}>
      <Badge variant={plan.labelVariant} className="mb-4">
        {plan.label}
      </Badge>

      <div className="flex items-baseline gap-1 mb-1.5 mt-1">
        <span className={`text-[36px] font-black leading-none ${plan.priceClass}`}>
          {plan.price}
        </span>
        <span className="text-slate-500 text-base">{plan.period}</span>
      </div>

      <p className="text-slate-400 text-[13px] mb-7 leading-relaxed">{plan.description}</p>

      <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <ul className="space-y-3 mb-8">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[13.5px] text-slate-300 leading-snug">
            <span className="mt-[1px] flex-shrink-0">{checkIcon[plan.accentColor]}</span>
            {feat}
          </li>
        ))}
      </ul>

      <div className="flex-1" />

      <Button href="#contact" variant={ctaVariant[plan.accentColor]} fullWidth>
        {plan.cta}
        <ArrowIcon />
      </Button>
    </div>
  )
}

export function Maintenance() {
  return (
    <section id="maintenance" className="py-28 bg-section">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          eyebrow="Maintenance Plans"
          headline={<>Keep Your Site Fast,<br /><span className="text-gradient-blue">Secure & Current</span></>}
          subtitle="Your website is a living asset. Our maintenance plans keep it performing — and your mind at ease."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {maintenancePlans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} delayIdx={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
