import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, DEPARTMENTS, PROVIDERS } from '../../data/enterprise-site.js'

const DEPT_ICONS = {
  'cardiology':    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  'orthopedics':   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
  'neurology':     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  'womens-health': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  'primary-care':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  'oncology':      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 12.5l4 4 11-11" /><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" /></svg>,
}

export function EnterpriseSpecialties() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Specialties"
        title="Six Departments. Fully Integrated."
        subtitle="From preventive primary care to complex cancer treatment — all coordinated under one health system."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'Specialties' }]}
      />

      {/* Department cards */}
      <SampleSection bg="white">
        <div className="flex flex-col gap-10">
          {DEPARTMENTS.map((dept, i) => {
            const lead = PROVIDERS.find(p => p.id === dept.providerId)
            return (
              <div
                key={dept.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-80">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-52 object-cover rounded-xl shadow-sm"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${dept.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 ${dept.iconColor}`}>
                      {DEPT_ICONS[dept.id]}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{dept.name}</h2>
                      <p className="text-slate-500 text-[14px]">{dept.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[14px] leading-relaxed mb-4">{dept.shortDesc}</p>

                  {/* Sample conditions */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {dept.conditions.slice(0, 4).map((c) => (
                      <span key={c} className="text-[11px] font-medium bg-gray-100 text-slate-600 px-2.5 py-1 rounded-full">{c}</span>
                    ))}
                    {dept.conditions.length > 4 && (
                      <span className="text-[11px] font-medium bg-gray-100 text-slate-400 px-2.5 py-1 rounded-full">+{dept.conditions.length - 4} more</span>
                    )}
                  </div>

                  {/* Lead provider */}
                  {lead && (
                    <div className="flex items-center gap-3 mb-5">
                      <img src={lead.image} alt={lead.name} className="w-9 h-9 rounded-full object-cover object-top border border-gray-200" />
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">{lead.name}</p>
                        <p className="text-[11px] text-slate-400">Department Lead</p>
                      </div>
                    </div>
                  )}

                  <Link
                    to={`/enterprise/specialties/${dept.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-[13px] hover:bg-purple-700 transition-colors"
                  >
                    Learn About {dept.name.split(' ')[0]}
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Not Sure Which Specialty You Need?"
        title="Start With Primary Care"
        subtitle="Our internal medicine physicians can evaluate your symptoms, order the right tests, and refer you directly — often same-week — to the appropriate Apex specialist."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel="Call Us"
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
