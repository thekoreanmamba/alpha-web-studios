import { SectionHeader } from './ui/SectionHeader.jsx'

const INDUSTRIES = [
  {
    id: 'medical',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    iconColor: '#60A5FA',
    iconBg: 'rgba(59,130,246,0.12)',
    iconBorder: 'rgba(59,130,246,0.2)',
    title: 'Medical Clinics',
    body: 'Urgent Care, Medi-Spas, Dental Offices. Patient-first UX that builds trust before the first appointment.',
    delayClass: 'reveal-d1',
  },
  {
    id: 'professional',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
    iconColor: '#3ECFB2',
    iconBg: 'rgba(62,207,178,0.1)',
    iconBorder: 'rgba(62,207,178,0.18)',
    title: 'Professional Services',
    body: 'Law Firms, Consulting, Financial Services. Credibility-focused design that attracts high-value clients.',
    delayClass: 'reveal-d2',
  },
  {
    id: 'small-biz',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    iconColor: '#A78BFA',
    iconBg: 'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.18)',
    title: 'Small Businesses',
    body: 'Retail, Restaurants, Local Services. Get found on Google and convert visitors into loyal, paying customers.',
    delayClass: 'reveal-d3',
  },
  {
    id: 'growth',
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
    iconColor: '#3ECFB2',
    iconBg: 'rgba(62,207,178,0.1)',
    iconBorder: 'rgba(62,207,178,0.18)',
    title: 'Growth-Focused',
    body: 'Every site is built to attract clients and drive measurable conversions — not just look good in a screenshot.',
    delayClass: 'reveal-d3',
  },
]

export function Industries() {
  return (
    <section id="services" className="py-28 bg-section">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          eyebrow="Industries We Serve"
          headline={
            <>Built for Businesses That<br /><span className="text-gradient-brand">Demand Results</span></>
          }
          subtitle="We specialize in professional service industries where your website is your first impression — and your hardest-working salesperson."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((item) => (
            <div key={item.id} className={`glass-card p-8 reveal ${item.delayClass}`}>
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: item.iconBg, border: `1px solid ${item.iconBorder}` }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke={item.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-white font-bold text-[16px] mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
