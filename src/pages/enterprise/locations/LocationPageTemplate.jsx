import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../../components/sample-site/SampleCTA.jsx'
import { PROVIDERS, DEPARTMENTS, CLINIC } from '../../../data/enterprise-site.js'

/** Returns providers who practice at the given location */
function getProviders(loc) {
  return PROVIDERS.filter((p) =>
    p.location === 'All Three Locations' ||
    p.location.includes(loc.city) ||
    p.location.includes(loc.name)
  )
}

export function LocationPageTemplate({ loc }) {
  const providers = getProviders(loc)

  return (
    <>
      <SamplePageBanner
        eyebrow={loc.tag}
        title={loc.name}
        subtitle={`${loc.street} · ${loc.city}, ${loc.state} ${loc.zip}`}
        breadcrumb={[
          { label: 'Home',      href: '/enterprise' },
          { label: 'Locations', href: '/enterprise/locations' },
          { label: loc.city },
        ]}
      />

      {/* Overview + image */}
      <SampleSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Contact */}
            <div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-4">Contact & Hours</p>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div>
                  <p className="text-[12px] font-semibold text-slate-500 mb-1">Phone</p>
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-purple-600 font-bold text-lg hover:text-purple-700 transition-colors">
                    {loc.phone}
                  </a>
                </div>
                {loc.fax && (
                  <div>
                    <p className="text-[12px] font-semibold text-slate-500 mb-1">Fax</p>
                    <p className="text-slate-700 font-medium">{loc.fax}</p>
                  </div>
                )}
                <div>
                  <p className="text-[12px] font-semibold text-slate-500 mb-1">Address</p>
                  <address className="not-italic text-slate-700 text-[14px] leading-snug">
                    {loc.street}<br />{loc.city}, {loc.state} {loc.zip}
                  </address>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={`tel:${loc.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-[13px] hover:bg-purple-700 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Call This Location
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-slate-700 font-semibold text-[13px] hover:border-purple-400 hover:text-purple-600 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Get Directions
                </a>
                <Link
                  to="/enterprise/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-slate-700 font-semibold text-[13px] hover:border-purple-400 hover:text-purple-600 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-4">Office Hours</p>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <ul className="flex flex-col gap-2.5">
                  {loc.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 text-[14px]">
                      <span className="text-slate-500">{h.days}</span>
                      <span className="text-slate-900 font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2">
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-72 lg:h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </SampleSection>

      {/* Specialties */}
      <SampleSection bg="gray">
        <p className="text-[11px] font-bold tracking-wider uppercase text-purple-600 mb-3">Services at This Location</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Specialties</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {loc.services.map((s) => {
            const dept = DEPARTMENTS.find((d) => d.name.toLowerCase().includes(s.toLowerCase().split(' ')[0]))
            return dept ? (
              <Link
                key={s}
                to={`/enterprise/specialties/${dept.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-slate-700 text-[13px] font-medium hover:border-purple-400 hover:text-purple-600 transition-colors shadow-sm"
              >
                {s}
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            ) : (
              <span key={s} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-slate-700 text-[13px] font-medium shadow-sm">
                {s}
              </span>
            )
          })}
        </div>
      </SampleSection>

      {/* Providers at this location */}
      {providers.length > 0 && (
        <SampleSection bg="white">
          <p className="text-[11px] font-bold tracking-wider uppercase text-purple-600 mb-3">Our Team</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Providers at {loc.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((p) => {
              const dept = DEPARTMENTS.find((d) => d.providerId === p.id)
              return (
                <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Photo of ${p.name}`}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {p.languages.length > 1 && p.languages.slice(1).map((lang) => (
                        <span key={lang} className="text-[10px] font-semibold bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">{lang}</span>
                      ))}
                    </div>
                    <h3 className="font-bold text-slate-900 text-[15px] mb-0.5">{p.name}</h3>
                    <p className="text-purple-600 text-[13px] font-medium mb-1">{p.title}</p>
                    {dept && (
                      <Link
                        to={`/enterprise/specialties/${dept.slug}`}
                        className="text-[12px] text-slate-400 hover:text-purple-600 transition-colors"
                      >
                        {dept.name} →
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/enterprise/providers"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              View All Apex Providers →
            </Link>
          </div>
        </SampleSection>
      )}

      <SampleCTA
        eyebrow="Ready to Visit?"
        title={`Book at ${loc.name}`}
        subtitle={`Our care coordinators will schedule you at ${loc.city} and verify your insurance before you arrive.`}
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${loc.phone}`}
        secondaryHref={`tel:${loc.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
