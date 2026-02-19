import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, TECHNOLOGY } from '../../data/professional-site.js'

const BADGE_COLORS = {
  Laser:       'bg-amber-100 text-amber-700',
  Photofacial: 'bg-teal-100 text-teal-700',
  Body:        'bg-purple-100 text-purple-700',
  Diagnostics: 'bg-blue-100 text-blue-700',
}

export function ProfessionalTechnology() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Technology & Equipment"
        title="The Most Advanced Tools in Aesthetic Dermatology"
        subtitle="FDA-cleared, evidence-backed, and physician-selected — every device at Luminary was chosen for its clinical results, not its marketing."
        breadcrumb={[
          { label: 'Home', href: '/professional' },
          { label: 'Technology' },
        ]}
      />

      {/* Why we care about technology */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-4">Our Philosophy</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Technology Should Serve the Patient, Not the Practice</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            The aesthetic medicine industry is crowded with devices that promise dramatic results and underdeliver. At Luminary, we evaluate every technology against a strict standard: FDA clearance, published peer-reviewed data, real-world clinical outcomes, and direct patient feedback from our own practice. The four systems you'll find here passed every test.
          </p>
        </div>
      </SampleSection>

      {/* Technology deep-dives */}
      <SampleSection bg="gray">
        <div className="flex flex-col gap-16">
          {TECHNOLOGY.map((tech, i) => (
            <div
              key={tech.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Label panel */}
              <div className="flex-shrink-0 w-full lg:w-56">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className={`inline-block text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full mb-3 ${BADGE_COLORS[tech.badge]}`}>
                  {tech.badge}
                </span>
                <h2 className="text-xl font-bold text-slate-900 leading-snug">{tech.name}</h2>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{tech.detail}</p>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="text-[12px] font-bold tracking-wider uppercase text-slate-400 mb-4">Clinical Specifications</h3>
                  <ul className="flex flex-col gap-3">
                    {tech.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3 text-slate-700 text-[14px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                          <circle cx="8" cy="8" r="7" fill="#CCFBF1" />
                          <path d="M5 8l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Sciton training center callout */}
      <SampleSection bg="white">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <p className="text-teal-400 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">National Designation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Certified Sciton Training Center</h2>
          <p className="text-slate-400 text-[15px] leading-relaxed max-w-xl mx-auto">
            Luminary is one of fewer than 200 practices in the United States to hold Sciton's Training Center designation — meaning we train other physicians on the Halo and BBL platforms. When you're treated here, you're receiving care from the people who wrote the protocols.
          </p>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Experience the Technology"
        title="See What the Right Device Can Do for Your Skin"
        subtitle="Start with a complimentary VISIA analysis and consultation. We'll show you exactly which treatments address your specific concerns."
        primaryLabel="Book a Consultation"
        primaryHref="/professional/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
