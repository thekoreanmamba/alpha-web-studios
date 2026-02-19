import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, PROVIDERS, DEPARTMENTS } from '../../data/enterprise-site.js'

export function EnterpriseProviders() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Our Providers"
        title="Fellowship-Trained Specialists. One Unified Team."
        subtitle="40+ board-certified physicians recruited from the nation's leading academic medical centers, all practicing together in Dallas–Fort Worth."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'Providers' }]}
      />

      {/* Philosophy */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Our Standard</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Who We Hire — and Why It Matters</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Every Apex physician completed fellowship training at a top-10 U.S. medical program and holds board certification in their specialty. But credentials alone aren't enough. We hire for collaboration — physicians who believe strongly that the best outcomes come from working across specialties, sharing information, and putting the patient's complete picture above departmental boundaries.
          </p>
        </div>
      </SampleSection>

      {/* Provider list */}
      <SampleSection bg="gray">
        <div className="flex flex-col gap-8">
          {PROVIDERS.map((p) => {
            const dept = DEPARTMENTS.find(d => d.providerId === p.id)
            return (
              <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
                <img
                  src={p.image}
                  alt={`Photo of ${p.name}`}
                  className="w-full md:w-56 h-64 md:h-auto object-cover object-top flex-shrink-0"
                />
                <div className="p-7 flex flex-col justify-center flex-1">
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    <h2 className="text-xl font-bold text-slate-900">{p.name}</h2>
                    {p.languages.length > 1 && p.languages.slice(1).map((lang) => (
                      <span key={lang} className="text-[10px] font-semibold bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{lang}</span>
                    ))}
                  </div>
                  <p className="text-purple-600 font-medium text-[14px] mb-0.5">{p.title}</p>
                  <p className="text-slate-400 text-[12px] mb-4">
                    {p.location} ·{' '}
                    {dept && (
                      <Link to={`/enterprise/specialties/${dept.slug}`} className="hover:text-purple-600 transition-colors">
                        {dept.name}
                      </Link>
                    )}
                  </p>
                  <p className="text-slate-600 text-[14px] leading-relaxed mb-4">{p.fullBio}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">Credentials</p>
                      <ul className="flex flex-col gap-1.5">
                        {p.credentials.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-[12px] text-slate-600">
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                              <circle cx="8" cy="8" r="7" fill="#EDE9FE" />
                              <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">Specialties</p>
                      <ul className="flex flex-col gap-1.5">
                        {p.specialties.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-[12px] text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Find the Right Specialist"
        title="Our Team Is Here to Help"
        subtitle="Not sure which provider is right for your needs? Our care coordinators can guide you to the right specialist and schedule your appointment in minutes."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
