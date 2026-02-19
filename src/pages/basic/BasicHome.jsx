import { useState } from 'react'
import { PRACTICE, DOCTOR, SERVICES, TESTIMONIALS, HOURS, WHY_US } from '../../data/basic-site.js'

/* ── Icons keyed by service/why-us id ─────────────────── */
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
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-green-600 text-white font-bold text-[15px] hover:bg-green-700 transition-colors"
            >
              Book an Appointment
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href={`tel:${PRACTICE.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {PRACTICE.phone}
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
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">What We Treat</span>
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
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold text-[14px] hover:bg-green-700 transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Patient Stories</span>
            <h2 className="text-3xl font-black text-slate-900">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <StarRow />
                <p className="text-slate-600 text-[14px] leading-relaxed mt-4 flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-slate-900 font-semibold text-[14px]">{t.author}</p>
                  <p className="text-slate-400 text-[12px]">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Get In Touch</span>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Request an Appointment</h2>
            <p className="text-slate-500 text-[15px]">Call us, or fill out the form and we'll reach out within a few hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Thanks, {form.name}. We'll call or text you at {form.phone} within a few hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel" required value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        placeholder="(512) 555-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">What brings you in?</label>
                    <textarea
                      rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                      placeholder="Briefly describe your symptoms or the type of care you're looking for…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-green-600 text-white font-bold text-[15px] hover:bg-green-700 transition-colors"
                  >
                    Send Request
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <p className="text-[11px] font-bold tracking-wider uppercase text-green-700 mb-2">Call Us</p>
                <a href={`tel:${PRACTICE.phone.replace(/\D/g, '')}`} className="text-green-700 font-black text-2xl hover:text-green-800 transition-colors">
                  {PRACTICE.phone}
                </a>
                <p className="text-green-600 text-[12px] mt-1">Same-day appointments often available</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-2">Location</p>
                <address className="not-italic text-slate-700 text-[14px] leading-relaxed mb-3">
                  {PRACTICE.address}<br />{PRACTICE.city}, {PRACTICE.state} {PRACTICE.zip}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${PRACTICE.address}, ${PRACTICE.city}, ${PRACTICE.state} ${PRACTICE.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-green-600 hover:text-green-700 transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Office Hours</p>
                <ul className="flex flex-col gap-2">
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
        </div>
      </section>
    </>
  )
}
