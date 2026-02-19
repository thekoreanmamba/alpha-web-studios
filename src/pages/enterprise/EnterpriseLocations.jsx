import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, LOCATIONS } from '../../data/enterprise-site.js'

export function EnterpriseLocations() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Locations"
        title="Three DFW Locations. One Seamless System."
        subtitle="Dallas, Plano, and Fort Worth — each location shares the same EHR, the same patient portal, and the same standard of care."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'Locations' }]}
      />

      <SampleSection bg="white">
        <div className="flex flex-col gap-14">
          {LOCATIONS.map((loc, i) => (
            <div key={loc.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="flex-shrink-0 w-full lg:w-96">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full mb-3">{loc.tag}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{loc.name}</h2>
                <address className="not-italic text-slate-500 text-[14px] mb-5 leading-relaxed">
                  {loc.street}<br />
                  {loc.city}, {loc.state} {loc.zip}
                </address>

                <div className="flex gap-4 mb-6 flex-wrap">
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    {loc.phone}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    Get Directions
                  </a>
                </div>

                {/* Hours */}
                <div className="mb-5">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Hours</p>
                  <ul className="flex flex-col gap-1.5">
                    {loc.hours.map((h) => (
                      <li key={h.days} className="flex justify-between text-[13px] gap-4">
                        <span className="text-slate-500">{h.days}</span>
                        <span className="text-slate-900 font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services at this location */}
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Available Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.services.map((s) => (
                      <span key={s} className="text-[11px] font-medium bg-gray-100 text-slate-600 px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Common questions */}
      <SampleSection bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Good to Know</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Visiting Any Apex Location</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: 'Shared Medical Records',
              body:  'Your chart is accessible at any Apex location. You never have to transfer records or repeat your history when switching between our clinics.',
            },
            {
              title: 'Free Parking',
              body:  'All three Apex locations offer complimentary patient parking. Accessible spaces are available at each entrance.',
            },
            {
              title: 'On-Site Lab & Imaging',
              body:  'Dallas Main Campus offers full lab and imaging services including MRI, CT, X-ray, and ultrasound. Lab services are available at all locations.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Ready to Visit?"
        title="Book at Any Location"
        subtitle="Our care coordinators will schedule you at the Apex location most convenient for you — and verify your insurance before you arrive."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
