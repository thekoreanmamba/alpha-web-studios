import { useState } from 'react'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { CLINIC, DEPARTMENTS, LOCATIONS } from '../../data/enterprise-site.js'

export function EnterpriseContact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', dob: '', email: '', phone: '',
    location: '', dept: '', reason: '', insurance: '', message: '',
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
        title="Request an Appointment"
        subtitle="Fill out the form and a care coordinator will reach out within one business day — often same-day."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'Contact' }]}
      />

      <SampleSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Appointment Request</h2>
            <p className="text-slate-500 text-[14px] mb-8">
              Our care coordinators will match you with the right specialist, confirm your insurance, and schedule your appointment — often within the week.
            </p>

            {submitted ? (
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Thank you, {form.firstName}. A care coordinator will contact {form.email} within one business day to confirm your appointment details and answer any questions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">First Name *</label>
                    <input type="text" required value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Last Name *</label>
                    <input type="text" required value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="Smith" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Date of Birth</label>
                    <input type="date" value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="(214) 555-0000" />
                  </div>
                </div>

                {/* Location + Specialty */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Preferred Location *</label>
                    <select required value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white">
                      <option value="">Select a location…</option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc.id}>{loc.name} — {loc.city}, {loc.state}</option>
                      ))}
                      <option>No Preference</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Specialty / Department *</label>
                    <select required value={form.dept}
                      onChange={(e) => setForm({ ...form, dept: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white">
                      <option value="">Select a specialty…</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id}>{d.name}</option>
                      ))}
                      <option>Not Sure — Please Help Me</option>
                    </select>
                  </div>
                </div>

                {/* Reason + Insurance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Reason for Visit *</label>
                    <select required value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white">
                      <option value="">Select…</option>
                      <option>New Patient — First Visit</option>
                      <option>Referral from Another Physician</option>
                      <option>Annual Wellness / Physical Exam</option>
                      <option>Follow-Up on Existing Condition</option>
                      <option>Second Opinion</option>
                      <option>Urgent — Symptomatic</option>
                      <option>Pre-Operative Evaluation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Insurance Provider</label>
                    <input type="text" value={form.insurance}
                      onChange={(e) => setForm({ ...form, insurance: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="e.g. Blue Shield, Medicare…" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Additional Information</label>
                  <textarea rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-slate-900 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                    placeholder="Describe your symptoms, preferred appointment times, questions about insurance, or anything else that would help us prepare for your visit…"
                  />
                </div>

                <button type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-purple-600 text-white font-semibold text-[15px] hover:bg-purple-700 transition-colors shadow-sm">
                  Submit Appointment Request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p className="text-slate-400 text-[12px]">A care coordinator will respond within one business day. For urgent needs, please call {CLINIC.phone}.</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Main phone */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-3">Main Line</p>
              <a href={`tel:${CLINIC.phone.replace(/\D/g, '')}`} className="text-purple-600 font-bold text-xl hover:text-purple-700 transition-colors">
                {CLINIC.phone}
              </a>
              <p className="text-slate-400 text-[12px] mt-1">Mon–Fri 7am–7pm · Sat 8am–3pm</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">Email</p>
              <a href={`mailto:${CLINIC.email}`} className="text-purple-600 font-medium text-[14px] hover:text-purple-700 transition-colors">{CLINIC.email}</a>
            </div>

            {/* Location quick list */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-4">Our Locations</p>
              <div className="flex flex-col gap-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id}>
                    <p className="font-semibold text-slate-900 text-[13px] mb-0.5">{loc.name}</p>
                    <p className="text-slate-400 text-[12px] leading-snug">{loc.street}<br />{loc.city}, {loc.state} {loc.zip}</p>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-purple-600 text-[12px] font-medium mt-1 inline-block">{loc.phone}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Portal note */}
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
              <p className="text-purple-800 font-semibold text-[13px] mb-1">Already a Patient?</p>
              <p className="text-purple-600 text-[12px] leading-relaxed mb-3">
                Existing patients can request appointments, refills, and referrals directly through the Apex Patient Portal.
              </p>
              <a href="#portal" className="text-[13px] font-bold text-purple-700 hover:text-purple-900 transition-colors">
                Access Patient Portal →
              </a>
            </div>
          </div>
        </div>
      </SampleSection>
    </>
  )
}
