import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, SERVICES } from '../../data/core-site.js'

const SERVICE_ICONS = {
  'primary-care': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  ),
  'urgent-care': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
  ),
  'preventive-wellness': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  'chronic-disease': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 12.5l4 4 11-11" /><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" /></svg>
  ),
}

export function CoreServices() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Services"
        title="Comprehensive Primary Care Under One Roof"
        subtitle="From same-day urgent visits to ongoing chronic disease management — we handle it all."
        breadcrumb={[
          { label: 'Home', href: '/core' },
          { label: 'Services' },
        ]}
      />

      {/* Services list */}
      <SampleSection bg="white">
        <div className="flex flex-col gap-16">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon panel */}
              <div className="flex-shrink-0 w-full lg:w-64">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 ${service.iconColor}`}>
                  {SERVICE_ICONS[service.id]}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <Link
                  to="/core/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-[13px] hover:bg-blue-700 transition-colors"
                >
                  Book This Service
                </Link>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{service.overview}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-[13px] font-bold tracking-wider uppercase text-slate-400 mb-3">What's Included</h3>
                    <ul className="flex flex-col gap-2.5">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-slate-600 text-[14px]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
                            <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold tracking-wider uppercase text-slate-400 mb-3">Who It's For</h3>
                    <ul className="flex flex-col gap-2.5">
                      {service.whoItsFor.map((w) => (
                        <li key={w} className="flex items-start gap-2.5 text-slate-600 text-[14px]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" fill="#F0FDF4" />
                            <path d="M5 8l2 2 4-4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {w}
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

      {/* Insurance note */}
      <SampleSection bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Insurance & Payment</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
            Sunrise Family Clinic is in-network with most major insurance plans, including Blue Shield, Anthem, Aetna, Cigna, UnitedHealth, and many more. We also accept Medicare and Medi-Cal. Our front desk team is happy to verify your coverage before your visit — just give us a call.
          </p>
          <a
            href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-700 font-semibold text-[14px] hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call to Verify Insurance
          </a>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Ready to Get Started?"
        title="Book an Appointment Today"
        subtitle="Same-day and next-day appointments available for most services. New patients always welcome."
        primaryLabel="Book an Appointment"
        primaryHref="/core/contact"
        secondaryLabel="Call Us"
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="blue"
      />
    </>
  )
}
