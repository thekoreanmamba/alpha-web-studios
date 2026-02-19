import { useState } from 'react'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { CLINIC, HOURS }    from '../../data/professional-site.js'

export function ProfessionalContact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', interest: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SamplePageBanner
        eyebrow="Contact"
        title="Start Your Skin Journey"
        subtitle="Book a consultation, ask about a treatment, or verify your insurance — we're here Monday through Saturday."
        breadcrumb={[
          { label: 'Home', href: '/professional' },
          { label: 'Contact' },
        ]}
      />

      <SampleSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Consultation</h2>
            <p className="text-slate-500 text-[14px] mb-8">Fill out the form and a patient coordinator will contact you within one business day to confirm your appointment and answer any questions.</p>

            {submitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Thank you, {form.firstName}. Our team will reach out to {form.email} within one business day to schedule your complimentary consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">First Name *</label>
                    <input
                      type="text" required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Last Name *</label>
                    <input
                      type="text" required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      placeholder="(480) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Area of Interest *</label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select an area…</option>
                    <option>Medical Dermatology (acne, eczema, rosacea, etc.)</option>
                    <option>Skin Cancer Screening</option>
                    <option>Cosmetic Injectables (Botox / Fillers)</option>
                    <option>Laser & Light Therapy (Halo, BBL, etc.)</option>
                    <option>Chemical Peels & Facials</option>
                    <option>Body Contouring (CoolSculpting)</option>
                    <option>General Consultation / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Tell Us About Your Goals</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    placeholder="Describe your skin concerns, questions, or what you're hoping to achieve…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-slate-900 text-white font-semibold text-[15px] hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Submit Consultation Request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p className="text-slate-400 text-[12px]">All new patient consultations are complimentary. No commitment required.</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                label: 'Phone',
                value: CLINIC.phone,
                href: `tel:${CLINIC.phone.replace(/\D/g, '')}`,
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                label: 'Email',
                value: CLINIC.email,
                href: `mailto:${CLINIC.email}`,
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">{label}</p>
                  <a href={href} className="text-teal-600 font-medium text-[14px] hover:text-teal-700 transition-colors">{value}</a>
                </div>
              </div>
            ))}

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Location</p>
              <address className="not-italic text-slate-700 text-[14px] leading-relaxed mb-3">
                {CLINIC.address.street}<br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.state} ${CLINIC.address.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Get Directions →
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Office Hours</p>
              <ul className="flex flex-col divide-y divide-gray-200">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between py-2.5 text-[13px]">
                    <span className="text-slate-500">{h.days}</span>
                    <span className="text-slate-800 font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultation note */}
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
              <p className="text-teal-800 font-semibold text-[13px] mb-1">Complimentary Consultations</p>
              <p className="text-teal-700 text-[13px] leading-relaxed">All new patient consultations include a complimentary VISIA skin analysis — a $150 value — at no charge.</p>
            </div>
          </div>
        </div>
      </SampleSection>
    </>
  )
}
