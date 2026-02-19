import { SectionHeader } from './ui/SectionHeader.jsx'

const REASONS = [
  {
    id: 'healthcare',
    icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    iconColor: '#60A5FA',
    iconBg: 'rgba(59,130,246,0.1)',
    iconBorder: 'rgba(59,130,246,0.2)',
    title: 'Healthcare Expertise',
    body: 'Specialized experience with medical practices, dental offices, medi-spas, and urgent care centers. We speak your industry.',
    delay: 'reveal-d1',
  },
  {
    id: 'bilingual',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    iconColor: '#3ECFB2',
    iconBg: 'rgba(62,207,178,0.1)',
    iconBorder: 'rgba(62,207,178,0.2)',
    title: 'Bilingual Services',
    body: 'Native Korean and English support for LA\'s diverse communities. We communicate clearly with both you and your clients.',
    delay: 'reveal-d2',
  },
  {
    id: 'tech',
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    iconColor: '#A78BFA',
    iconBg: 'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.2)',
    title: 'Modern Technology',
    body: 'WordPress with Elementor delivers beautiful, fast-loading sites that are easy for you to update — no tech skills needed.',
    delay: 'reveal-d3',
  },
  {
    id: 'support',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    iconColor: '#3ECFB2',
    iconBg: 'rgba(62,207,178,0.1)',
    iconBorder: 'rgba(62,207,178,0.2)',
    title: 'Complete Support',
    body: 'From the initial build through ongoing maintenance and growth, we\'re your long-term digital partner — not a one-and-done vendor.',
    delay: 'reveal-d3',
  },
]

export function WhyAlpha() {
  return (
    <section id="why" className="py-28 bg-section">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          eyebrow="Why Alpha Web Studios"
          headline={<>The Agency That<br /><span className="text-gradient-brand">Actually Gets Your Industry</span></>}
          subtitle="We're not a generalist shop. We're specialists in professional service businesses — and it shows in every site we deliver."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((item) => (
            <div key={item.id} className={`glass-card p-8 reveal ${item.delay}`}>
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: item.iconBg, border: `1px solid ${item.iconBorder}` }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke={item.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
