import { Link } from 'react-router-dom'
import { SampleSection, SampleSectionHeader } from '../../components/sample-site/SampleSection.jsx'
import { SampleTestimonialCard } from '../../components/sample-site/SampleCard.jsx'
import { SampleCTA }     from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, DEPARTMENTS, PROVIDERS, TESTIMONIALS, STATS, LOCATIONS } from '../../data/enterprise-site.js'

const DEPT_ICONS = {
  'cardiology':    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  'orthopedics':   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
  'neurology':     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  'womens-health': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  'primary-care':  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  'oncology':      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 12.5l4 4 11-11" /><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" /></svg>,
}

export function EnterpriseHome() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="relative min-h-[560px] flex items-center bg-slate-900 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/20" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-400/30 text-purple-300 text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" aria-hidden="true" />
              Serving the DFW Metroplex Since {CLINIC.founded}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.08] tracking-tight mb-6">
              World-Class Care.<br />
              <span className="text-purple-400">One Health System.</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Apex Health System brings together 40+ board-certified specialists across six departments and three DFW locations — so your entire health story is coordinated by one expert team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                to="/enterprise/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-purple-600 text-white font-semibold text-[15px] hover:bg-purple-700 transition-colors shadow-lg"
              >
                Request an Appointment
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link
                to="/enterprise/specialties"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-all"
              >
                Our Specialties
              </Link>
            </div>

            {/* Location finder */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-slate-400 text-sm">Find care near you:</span>
              {LOCATIONS.map(loc => (
                <Link
                  key={loc.id}
                  to="/enterprise/locations"
                  className="text-[13px] font-medium text-purple-300 hover:text-white border border-purple-400/30 px-3 py-1 rounded-full transition-colors"
                >
                  {loc.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div className="bg-purple-600 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-white leading-none mb-1">{value}</p>
              <p className="text-purple-200 text-[13px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Specialties grid ─────────────────────────────────── */}
      <SampleSection bg="white">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Our Specialties</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Six Departments. One System.</h2>
          </div>
          <Link
            to="/enterprise/specialties"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold text-[14px] hover:text-purple-700 flex-shrink-0"
          >
            View All Specialties
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.id}
              to={`/enterprise/specialties/${dept.slug}`}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:-translate-y-1 hover:shadow-md hover:border-purple-100 transition-all duration-200"
            >
              <div className={`w-11 h-11 ${dept.iconBg} rounded-xl flex items-center justify-center mb-4 ${dept.iconColor}`}>
                {DEPT_ICONS[dept.id]}
              </div>
              <h3 className="text-[15px] font-semibold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">{dept.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{dept.shortDesc}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-purple-600 text-[12px] font-semibold">
                Learn More
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </SampleSection>

      {/* ── Why Apex ─────────────────────────────────────────── */}
      <SampleSection bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full lg:max-w-[480px]">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80"
              alt="Apex Health System physicians collaborating"
              className="w-full h-[340px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Why Apex</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5">
              Coordinated Care Across Every Specialty
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
              Most health systems say they're "integrated." At Apex, it's structural. Your cardiologist and your oncologist can message each other directly. Your primary care doctor sees every specialist note. One patient record, shared across every department, every location.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Weekly multidisciplinary case conferences across departments',
                'Single unified electronic health record (EHR) across all 3 locations',
                'Patient portal with secure messaging to your entire care team',
                'Joint Commission–certified in multiple care areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-[14px]">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="#EDE9FE" />
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/enterprise/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold text-[14px] hover:bg-purple-700 transition-colors"
            >
              About Apex Health System
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </SampleSection>

      {/* ── Featured providers ───────────────────────────────── */}
      <SampleSection bg="white">
        <SampleSectionHeader
          eyebrow="Our Physicians"
          title="40+ Board-Certified Specialists"
          subtitle="Fellowship-trained physicians recruited from the nation's top medical programs — practicing together in a fully integrated system."
          center
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {PROVIDERS.map((p) => (
            <div key={p.id} className="text-center">
              <img
                src={p.image}
                alt={`Photo of ${p.name}`}
                className="w-full aspect-square object-cover object-top rounded-xl mb-3"
              />
              <p className="font-semibold text-slate-900 text-[13px] leading-tight mb-0.5">{p.name.split(',')[0]}</p>
              <p className="text-purple-600 text-[11px]">{p.dept}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/enterprise/providers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-600 font-semibold text-[14px] hover:border-purple-200 hover:text-purple-600 hover:bg-purple-50 transition-all"
          >
            Meet All Our Providers
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      {/* ── Locations strip ──────────────────────────────────── */}
      <SampleSection bg="gray">
        <SampleSectionHeader
          eyebrow="Our Locations"
          title="Three Locations Across DFW"
          subtitle="Dallas, Plano, and Fort Worth — with most specialties available at multiple sites."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <img src={loc.image} alt={loc.name} className="w-full h-40 object-cover" />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-wider uppercase text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{loc.tag}</span>
                <h3 className="font-bold text-slate-900 text-[15px] mt-2 mb-1">{loc.name}</h3>
                <p className="text-slate-500 text-[13px] mb-1">{loc.street}</p>
                <p className="text-slate-500 text-[13px] mb-3">{loc.city}, {loc.state} {loc.zip}</p>
                <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-purple-600 text-[13px] font-medium">{loc.phone}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/enterprise/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold text-[14px] hover:bg-slate-800 transition-colors"
          >
            View Hours & Directions
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <SampleSection bg="white">
        <SampleSectionHeader
          eyebrow="Patient Experiences"
          title="What Our Patients Say"
          subtitle="Thousands of five-star reviews across departments. Here are a few."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <SampleTestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Ready to Get Started?"
        title="One Call. One System. Total Care."
        subtitle="Our care coordinators will match you with the right specialist, verify your insurance, and schedule your appointment — often within the week."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
