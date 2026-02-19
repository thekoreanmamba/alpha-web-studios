import { SectionHeader } from './ui/SectionHeader.jsx'

const STEPS = [
  {
    num: '1',
    color: { bg: 'rgba(62,207,178,0.1)', border: 'rgba(62,207,178,0.22)', text: 'text-teal-300' },
    title: 'Discovery Call',
    body: 'We learn your business, goals, and audience to recommend the right package.',
  },
  {
    num: '2',
    color: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.22)', text: 'text-blue-300' },
    title: 'Design & Build',
    body: 'We design and develop your site with ongoing feedback loops — no surprises.',
  },
  {
    num: '3',
    color: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.22)', text: 'text-purple-300' },
    title: 'Review & Refine',
    body: 'You review, we refine. Your approval gates every major step of the build.',
  },
  {
    num: '4',
    color: { bg: 'rgba(62,207,178,0.1)', border: 'rgba(62,207,178,0.22)', text: 'text-teal-300' },
    title: 'Launch & Grow',
    body: 'We go live, then stay with you through ongoing maintenance and support.',
  },
]

export function Process() {
  return (
    <section className="py-24 bg-section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Process"
          headline={<>From Strategy to Launch —<br /><span className="text-gradient-brand">We Handle Everything</span></>}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <div
                className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center text-lg font-black ${step.color.text}`}
                style={{ background: step.color.bg, border: `1px solid ${step.color.border}` }}
              >
                {step.num}
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2">{step.title}</h4>
              <p className="text-slate-400 text-[13px] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
