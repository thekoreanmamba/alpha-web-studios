import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, SERVICES } from '../../data/professional-site.js'

const SERVICE_ICONS = {
  'medical-dermatology':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  'cosmetic-injectables': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /></svg>,
  'laser-light':          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
  'skin-cancer':          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  'peels-facials':        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  'body-contouring':      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
}

export function ProfessionalServices() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Services & Treatments"
        title="A Complete Spectrum of Skin Care"
        subtitle="Medical dermatology through advanced cosmetic treatments — all in one clinical setting, by one expert team."
        breadcrumb={[
          { label: 'Home', href: '/professional' },
          { label: 'Services' },
        ]}
      />

      {/* Services list */}
      <SampleSection bg="white">
        <div className="flex flex-col gap-20">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon + CTA panel */}
              <div className="flex-shrink-0 w-full lg:w-64">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 ${service.iconColor}`}>
                  {SERVICE_ICONS[service.id]}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <Link
                  to="/professional/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-[13px] hover:bg-slate-800 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{service.overview}</p>

                <h3 className="text-[13px] font-bold tracking-wider uppercase text-slate-400 mb-4">What's Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-slate-600 text-[14px]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" fill="#CCFBF1" />
                        <path d="M5 8l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Financing note */}
      <SampleSection bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Insurance & Financing</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
            Medical dermatology services are covered by most major insurance plans including BCBS, Aetna, Cigna, and UnitedHealthcare. Cosmetic treatments are not covered by insurance but we offer flexible financing through CareCredit and Alphaeon Credit. Our patient coordinators will walk you through all your options.
          </p>
          <a
            href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-700 font-semibold text-[14px] hover:border-teal-200 hover:text-teal-600 hover:bg-teal-50 transition-all"
          >
            Call to Discuss Options
          </a>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Not Sure Where to Start?"
        title="Book a Complimentary Consultation"
        subtitle="A 30-minute consultation with one of our providers to review your skin, answer your questions, and build a plan that fits your goals and your budget."
        primaryLabel="Book a Consultation"
        primaryHref="/professional/contact"
        secondaryLabel="View Our Technology"
        secondaryHref="/professional/technology"
        bg="navy"
      />
    </>
  )
}
