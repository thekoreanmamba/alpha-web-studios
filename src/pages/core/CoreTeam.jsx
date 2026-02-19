import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, PROVIDERS } from '../../data/core-site.js'

export function CoreTeam() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Our Team"
        title="The Physicians Behind Your Care"
        subtitle="Board-certified, experienced, and genuinely invested in your long-term health."
        breadcrumb={[
          { label: 'Home', href: '/core' },
          { label: 'Team' },
        ]}
      />

      {/* Philosophy */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">Our Philosophy</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-5">Medicine Is Personal</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            At Sunrise, we believe the best outcomes come from relationships built on trust, honesty, and consistent communication. Our physicians take the time to know your full picture — your health history, your lifestyle, your goals — so that every recommendation reflects you as an individual, not a diagnosis.
          </p>
        </div>
      </SampleSection>

      {/* Provider profiles */}
      <SampleSection bg="gray">
        <div className="flex flex-col gap-10">
          {PROVIDERS.map((p, i) => (
            <div
              key={p.id}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <img
                src={p.image}
                alt={`Photo of ${p.name}`}
                className="w-full md:w-72 h-64 md:h-auto object-cover object-top flex-shrink-0"
              />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-0.5">{p.name}</h2>
                <p className="text-blue-600 font-medium text-[15px] mb-4">{p.title}</p>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{p.fullBio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">Credentials</h3>
                    <ul className="flex flex-col gap-2">
                      {p.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-slate-600 text-[13px]">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
                            <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">Languages</h3>
                      <div className="flex gap-2 flex-wrap">
                        {p.languages.map((lang) => (
                          <span key={lang} className="text-[12px] font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Staff note */}
      <SampleSection bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Full Team</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Behind every great physician is an even greater support team. Our medical assistants, nurses, front desk coordinators, and billing specialists are all committed to making your visit as smooth and stress-free as possible. We keep our staff-to-patient ratio intentionally low so you're always talking to someone who knows you.
          </p>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Ready to Meet the Team?"
        title="Schedule Your First Visit"
        subtitle="We're accepting new patients. Come in, meet the team, and find out what patient-centered care really feels like."
        primaryLabel="Book an Appointment"
        primaryHref="/core/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="blue"
      />
    </>
  )
}
