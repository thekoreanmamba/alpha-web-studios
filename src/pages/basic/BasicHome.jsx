import { PRACTICE, DOCTOR, SERVICES, TESTIMONIALS, HOURS, WHY_US } from '../../data/basic-site.js'

/* ── Icons keyed by id ─────────────────────────────────── */
const SERVICE_ICONS = {
  adjustment: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  decompression: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 11 12 6 7 11" /><polyline points="17 18 12 13 7 18" />
    </svg>
  ),
  sports: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M4.93 4.93l14.14 14.14" />
    </svg>
  ),
  auto: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 4v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
}

const WHY_ICONS = {
  'same-day': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  evidence: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  insurance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

const CONDITIONS = [
  'Lower Back Pain', 'Neck Pain & Stiffness', 'Tension Headaches & Migraines',
  'Sciatica', 'Herniated / Bulging Discs', 'Pinched Nerves',
  'Shoulder & Rotator Cuff Pain', 'Hip & Knee Pain',
  'Whiplash (Auto Accidents)', 'Sports Injuries', 'Poor Posture', 'Carpal Tunnel Syndrome',
]

const PROCESS_STEPS = [
  {
    num:   '01',
    title: 'Comprehensive Assessment',
    body:  'We begin with a full evaluation of your posture, range of motion, neurological function, and spinal alignment to pinpoint the root cause — not just the symptom.',
  },
  {
    num:   '02',
    title: 'Personalized Treatment Plan',
    body:  'Based on your assessment, Dr. Kim designs a care plan tailored to your specific condition, goals, and lifestyle. No cookie-cutter protocols.',
  },
  {
    num:   '03',
    title: 'Lasting Relief & Prevention',
    body:  'Ongoing chiropractic care doesn\'t just relieve pain — it maintains proper alignment and nervous system function to help prevent future injury.',
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#16a34a" stroke="none" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function BasicHome() {
  const tel = `tel:${PRACTICE.phone.replace(/\D/g, '')}`

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="home" className="relative bg-slate-900 overflow-hidden" style={{ minHeight: '560px' }}>
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col justify-center" style={{ minHeight: '560px' }}>
          <span className="inline-flex items-center gap-2 text-green-400 text-[11px] font-bold tracking-[0.18em] uppercase mb-5">
            <span className="w-6 h-px bg-green-400" />
            Austin, Texas
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5 max-w-xl">
            Relief Starts{' '}
            <span className="text-green-400">Here.</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-lg">
            Expert chiropractic care for back pain, sports injuries, auto accidents, and whole-body wellness — with same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={tel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-green-600 text-white font-bold text-[15px] hover:bg-green-700 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Call Us Today
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {['Same-Day Appts', 'Most Insurance Accepted', '10+ Years Experience'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-[12px] text-slate-400 font-medium">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="rgba(34,197,94,0.2)" />
                  <path d="M5 8l2 2 4-4" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={DOCTOR.image}
                alt={DOCTOR.name}
                className="w-full max-w-sm mx-auto md:mx-0 h-[400px] object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Meet Your Doctor</span>
              <h2 className="text-3xl font-black text-slate-900 mb-1">{DOCTOR.name}</h2>
              <p className="text-green-600 font-semibold text-[15px] mb-5">{DOCTOR.title}</p>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{DOCTOR.bio}</p>
              <div>
                <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Credentials</p>
                <ul className="flex flex-col gap-2">
                  {DOCTOR.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[14px] text-slate-600">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" fill="#dcfce7" />
                        <path d="M5 8l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ─────────────────────────────────────────────── */}
      <section className="py-14 bg-green-50 border-y border-green-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-700">
                  {WHY_ICONS[item.id]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-[15px] mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">What We Offer</span>
            <h2 className="text-3xl font-black text-slate-900">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-green-200 hover:bg-green-50/50 transition-colors group">
                <div className="w-11 h-11 bg-white rounded-xl border border-gray-100 flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-100 group-hover:border-green-200 transition-colors shadow-sm">
                  {SERVICE_ICONS[svc.id]}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{svc.name}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={tel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold text-[14px] hover:bg-green-700 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Call to Schedule — {PRACTICE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Chiropractic Care ─────────────────────────────────── */}
      <section id="chiropractic" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">The Science Behind It</span>
              <h2 className="text-3xl font-black text-slate-900 mb-5">What Is Chiropractic Care?</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                Chiropractic care is a non-invasive, drug-free healthcare discipline focused on the diagnosis, treatment, and prevention of mechanical disorders of the musculoskeletal system — particularly the spine.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                When the vertebrae of your spine are misaligned — a condition chiropractors call a <em>subluxation</em> — they can compress or irritate the surrounding nerves. This disrupts the signals your nervous system sends throughout your body, leading to pain, reduced mobility, and compromised organ function.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                A precise chiropractic adjustment restores proper alignment, relieves nerve pressure, and allows your body to heal naturally — without drugs or surgery.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
                alt="Chiropractic adjustment in progress"
                className="w-full h-72 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 text-center mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                  <div className="text-[36px] font-black text-green-100 leading-none mb-3">{step.num}</div>
                  <h4 className="font-bold text-slate-900 text-[16px] mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-3">Conditions We Commonly Treat</h3>
            <p className="text-slate-500 text-[14px] text-center mb-8 max-w-lg mx-auto">
              Chiropractic care is effective for a wide range of musculoskeletal and neurological conditions. If you don't see your condition listed, give us a call — we may still be able to help.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {CONDITIONS.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-slate-600 text-[13px] font-medium shadow-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Patient Stories</span>
            <h2 className="text-3xl font-black text-slate-900">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col">
                <StarRow />
                <p className="text-slate-600 text-[14px] leading-relaxed mt-4 flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <p className="text-slate-900 font-semibold text-[14px]">{t.author}</p>
                  <p className="text-slate-400 text-[12px]">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Find Us</span>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Visit Summit Chiropractic</h2>
            <p className="text-slate-500 text-[15px]">Call us to schedule — same-day appointments often available.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-green-600 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <p className="text-green-100 text-[11px] font-bold tracking-wider uppercase mb-2">Call or Text</p>
              <a href={tel} className="text-white font-black text-2xl hover:text-green-100 transition-colors block mb-1">
                {PRACTICE.phone}
              </a>
              <p className="text-green-200 text-[12px]">Same-day appointments often available</p>
              <a href={`mailto:${PRACTICE.email}`} className="inline-block mt-4 text-green-200 text-[13px] hover:text-white transition-colors">
                {PRACTICE.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Location</p>
              <address className="not-italic text-slate-700 text-[15px] font-medium leading-relaxed mb-4">
                {PRACTICE.address}<br />{PRACTICE.city}, {PRACTICE.state} {PRACTICE.zip}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${PRACTICE.address}, ${PRACTICE.city}, ${PRACTICE.state} ${PRACTICE.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-4 text-center">Office Hours</p>
              <ul className="flex flex-col gap-2.5">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between gap-3 text-[13px]">
                    <span className="text-slate-500">{h.days}</span>
                    <span className="text-slate-900 font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
