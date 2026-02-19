import { Link } from 'react-router-dom'
import { SampleSection }    from '../../../components/sample-site/SampleSection.jsx'
import { SamplePageBanner } from '../../../components/sample-site/SamplePageBanner.jsx'
import { SampleCTA }        from '../../../components/sample-site/SampleCTA.jsx'
import { CLINIC }           from '../../../data/enterprise-site.js'

/**
 * SpecialtyPageTemplate — shared layout for all 6 enterprise specialty sub-pages.
 *
 * Props:
 *   department  — one DEPARTMENTS entry from enterprise-site.js
 *   provider    — the lead PROVIDERS entry for this dept
 *   deptIcon    — JSX icon element (24×24)
 */
export function SpecialtyPageTemplate({ department: dept, provider, deptIcon }) {
  return (
    <>
      <SamplePageBanner
        eyebrow={dept.name}
        title={dept.tagline}
        subtitle={dept.shortDesc}
        breadcrumb={[
          { label: 'Home',        href: '/enterprise' },
          { label: 'Specialties', href: '/enterprise/specialties' },
          { label: dept.name },
        ]}
      />

      {/* Overview */}
      <SampleSection bg="white">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <div className={`w-14 h-14 ${dept.iconBg} rounded-2xl flex items-center justify-center mb-5 ${dept.iconColor}`}>
              {deptIcon}
            </div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-2">Department Overview</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">{dept.name}</h2>
            <p className="text-slate-600 text-[15px] leading-relaxed">{dept.overview}</p>

            {/* Stat callout */}
            <div className="mt-6 inline-flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-xl px-5 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <p className="text-purple-700 font-bold text-lg leading-none">{dept.stat.value}</p>
                <p className="text-purple-500 text-[12px]">{dept.stat.label}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-[460px]">
            <img
              src={dept.image}
              alt={`${dept.name} at Apex Health System`}
              className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </SampleSection>

      {/* Conditions + Procedures */}
      <SampleSection bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-5">Conditions We Treat</p>
            <ul className="flex flex-col gap-3">
              {dept.conditions.map((c) => (
                <li key={c} className="flex items-start gap-3 text-slate-700 text-[14px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="#EDE9FE" />
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-5">Procedures & Services</p>
            <ul className="flex flex-col gap-3">
              {dept.procedures.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700 text-[14px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="#EDE9FE" />
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SampleSection>

      {/* Lead provider */}
      {provider && (
        <SampleSection bg="white">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Featured Specialist</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Meet Your Department Lead</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <img
              src={provider.image}
              alt={`Photo of ${provider.name}`}
              className="w-full md:w-64 h-64 md:h-auto object-cover object-top flex-shrink-0"
            />
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-0.5">{provider.name}</h3>
              <p className="text-purple-600 font-medium text-[14px] mb-1">{provider.title}</p>
              <p className="text-slate-400 text-[12px] mb-4">{provider.location}</p>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-5">{provider.shortBio}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {provider.specialties.map((s) => (
                  <span key={s} className="text-[11px] font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to="/enterprise/providers"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold text-[13px] hover:text-purple-700 transition-colors"
              >
                View Full Profile
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </SampleSection>
      )}

      <SampleCTA
        eyebrow={`${dept.name}`}
        title="Request a Referral or Appointment"
        subtitle="Our care coordinators can schedule you directly, verify insurance, and answer any questions about your upcoming visit."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
