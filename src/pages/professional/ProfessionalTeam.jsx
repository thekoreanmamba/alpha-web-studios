import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, PROVIDERS } from '../../data/professional-site.js'

export function ProfessionalTeam() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Our Team"
        title="The Experts Behind Your Results"
        subtitle="Board-certified dermatologists and fellowship-trained specialists — united by a commitment to natural, lasting outcomes."
        breadcrumb={[
          { label: 'Home', href: '/professional' },
          { label: 'Team' },
        ]}
      />

      {/* Philosophy */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">Our Approach</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-5">Results You Can See. Care You Can Trust.</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Every provider at Luminary was selected not just for their credentials, but for their philosophy. We believe in conservative, anatomy-first treatments — in seeing you as a whole person, not a treatment opportunity. Every plan we build is designed around your goals, your budget, and your timeline.
          </p>
        </div>
      </SampleSection>

      {/* Provider profiles */}
      <SampleSection bg="gray">
        <div className="flex flex-col gap-10">
          {PROVIDERS.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <img
                src={p.image}
                alt={`Photo of ${p.name}`}
                className="w-full md:w-72 h-64 md:h-auto object-cover object-top flex-shrink-0"
              />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-0.5">{p.name}</h2>
                <p className="text-teal-600 font-medium text-[15px] mb-2">{p.title}</p>
                {p.languages && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {p.languages.map((lang) => (
                      <span key={lang} className="text-[11px] font-semibold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{p.fullBio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">Credentials</h3>
                    <ul className="flex flex-col gap-2">
                      {p.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-slate-600 text-[13px]">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" fill="#CCFBF1" />
                            <path d="M5 8l2 2 4-4" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">Specialties</h3>
                    <ul className="flex flex-col gap-2">
                      {p.specialties.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-slate-600 text-[13px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Support staff */}
      <SampleSection bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Full Team</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Behind our providers is an exceptional team of licensed medical aestheticians, registered nurses, certified laser technicians, and patient care coordinators — all of whom share the Luminary standard of excellence. Our staff-to-patient ratio ensures you're never rushed, and always informed.
          </p>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Ready to Get Started?"
        title="Meet Your New Skin Care Team"
        subtitle="Schedule a complimentary consultation and let us show you what personalized, physician-led aesthetic care looks like."
        primaryLabel="Book a Consultation"
        primaryHref="/professional/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
