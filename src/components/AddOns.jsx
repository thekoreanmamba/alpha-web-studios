import { alaCarteItems } from '../data/addons.js'
import { Badge } from './ui/Badge.jsx'
import { SectionHeader } from './ui/SectionHeader.jsx'

/* ── À La Carte grid item ─────────────────────────────────────── */
function AlaCarteCard({ item }) {
  return (
    <div
      className="rounded-[13px] p-6 transition-all duration-200 cursor-default"
      style={{
        background: 'rgba(10,22,50,0.4)',
        border: '1px solid rgba(255,255,255,0.055)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(62,207,178,0.22)'
        e.currentTarget.style.background   = 'rgba(10,22,50,0.75)'
        e.currentTarget.style.transform    = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'
        e.currentTarget.style.background   = 'rgba(10,22,50,0.4)'
        e.currentTarget.style.transform    = ''
      }}
    >
      <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-semibold">
        {item.name}
      </div>
      <div className="text-xl font-black text-gradient-teal mb-2">{item.price}</div>
      <p className="text-slate-400 text-[12px] leading-relaxed">{item.description}</p>
    </div>
  )
}

/* ── AddOns (Multilingual + Content Dev + À La Carte) ──────────── */
export function AddOns() {
  return (
    <section id="addons" className="py-28 bg-section">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          eyebrow="Add-On Services"
          headline={<>Expand Your Reach &<br /><span className="text-gradient-teal">Strengthen Your Content</span></>}
          subtitle="Reach more clients with multilingual support, or let us handle your website copy from scratch."
        />

        {/* ── Multilingual + Content Dev ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          {/* Multilingual */}
          <div
            className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 reveal reveal-d1"
            style={{ background: 'rgba(10,22,50,0.5)', border: '1px solid rgba(255,255,255,0.065)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(62,207,178,0.2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.065)' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(62,207,178,0.1)', border: '1px solid rgba(62,207,178,0.22)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="#3ECFB2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-1">Multilingual Support</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">
                  Reach Spanish and Korean-speaking clients in their native language. Ideal for LA's diverse communities.
                </p>
              </div>
            </div>

            <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">
                  Client Provides Translation
                </div>
                <div className="text-xl font-black text-gradient-teal">$500 – $1,000+</div>
                <div className="text-[11px] text-slate-500 mt-0.5">per language</div>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">
                  We Source Translation
                </div>
                <div className="text-xl font-black text-gradient-teal">$1,200 – $2,500+</div>
                <div className="text-[11px] text-slate-500 mt-0.5">per language</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 mt-4">* Professional translation at industry standard $0.15–$0.30 / word.</p>
          </div>

          {/* Content Development */}
          <div
            className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 reveal reveal-d2"
            style={{ background: 'rgba(10,22,50,0.5)', border: '1px solid rgba(255,255,255,0.065)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(62,207,178,0.2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.065)' }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.22)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-1">Content Development</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">
                  Professional copywriting for practices that need help crafting SEO-optimized, compelling website copy.
                </p>
              </div>
            </div>

            <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

            <div className="mb-5">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-semibold">Pricing</div>
              <div className="text-2xl font-black text-gradient-blue">
                $200 – $500 <span className="text-slate-500 text-base font-normal">/ page</span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {['Initial draft based on your input', 'SEO-optimized, readable content', 'You approve medical accuracy', 'We polish the final copy'].map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="mt-[1px] flex-shrink-0" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="rgba(59,130,246,0.12)" />
                    <path d="M5 8l2 2 4-4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── À La Carte ── */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-black text-white">À La Carte Services</h3>
            <Badge variant="teal">One-Time</Badge>
          </div>
          <p className="text-slate-400 text-[14px] mb-8">
            Need just one thing? Pick exactly what you need — no package required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alaCarteItems.map((item) => (
              <AlaCarteCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
