import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, INSURANCE, FAQ }  from '../../data/enterprise-site.js'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-slate-900 font-semibold text-[14px]">{q}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-slate-600 text-[14px] leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export function EnterprisePatients() {
  return (
    <>
      <SamplePageBanner
        eyebrow="Patient Resources"
        title="Everything You Need, In One Place"
        subtitle="Patient portal access, new patient forms, insurance information, and answers to common questions."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'Patients' }]}
      />

      {/* Patient portal CTA */}
      <SampleSection bg="white">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-purple-200 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Patient Portal</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Your Health, at Your Fingertips</h2>
            <p className="text-purple-100 text-[15px] leading-relaxed mb-6">
              The Apex Patient Portal (powered by Epic MyChart) gives you secure access to your medical records, test results, appointment scheduling, prescription refill requests, and secure messaging with your care team — 24/7, from any device.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#portal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-purple-700 font-bold text-[14px] hover:bg-purple-50 transition-colors"
              >
                Log In to MyChart
              </a>
              <a
                href="#portal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold text-[14px] hover:bg-white/10 transition-colors"
              >
                Create an Account
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </SampleSection>

      {/* New Patient info */}
      <SampleSection bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">New Patients</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Before Your First Visit</h2>
            <div className="flex flex-col gap-4 text-slate-600 text-[14px] leading-relaxed">
              <p>We want your first visit to Apex to be as smooth as possible. Here's what to prepare:</p>
              <ul className="flex flex-col gap-3">
                {[
                  'Valid government-issued photo ID',
                  'Insurance card(s) — primary and secondary if applicable',
                  'List of all current medications with dosages',
                  'Relevant imaging or lab results (CD or digital format)',
                  'Names and contact information for any prior physicians',
                  'Completed new patient forms (available in the Patient Portal)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill="#EDE9FE" />
                      <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Forms */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Patient Forms</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-4">
                Download and complete forms before your visit to save time. Forms are also available through the Apex Patient Portal.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  'New Patient Registration',
                  'Medical History Questionnaire',
                  'HIPAA Authorization & Privacy Notice',
                  'Insurance & Financial Information',
                ].map((form) => (
                  <a
                    key={form}
                    href="#forms"
                    className="flex items-center gap-2 text-[13px] text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {form}
                  </a>
                ))}
              </div>
            </div>

            {/* Telehealth */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Telehealth Visits</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-3">
                Video visits are available for primary care, neurology, and most follow-up appointments Monday–Friday, 7am–7pm.
              </p>
              <Link to="/enterprise/contact" className="text-[13px] font-semibold text-purple-600 hover:text-purple-700">
                Schedule a Telehealth Visit →
              </Link>
            </div>
          </div>
        </div>
      </SampleSection>

      {/* Insurance */}
      <SampleSection bg="white">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3 text-center">Insurance</p>
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">Accepted Insurance Plans</h2>
        <p className="text-slate-500 text-[15px] text-center leading-relaxed mb-10 max-w-xl mx-auto">
          Apex is in-network with most major commercial carriers, Medicare, and Medicaid. Call us to verify your specific plan before your visit.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
          {INSURANCE.map((plan) => (
            <div key={plan} className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-center text-[12px] font-medium text-slate-600">
              {plan}
            </div>
          ))}
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 max-w-xl mx-auto text-center">
          <p className="text-purple-800 font-semibold text-[14px] mb-1">Don't see your plan?</p>
          <p className="text-purple-600 text-[13px] leading-relaxed">
            Call our insurance verification team at <a href={`tel:${CLINIC.phone.replace(/\D/g, '')}`} className="font-bold hover:underline">{CLINIC.phone}</a> and we'll confirm your coverage before your visit.
          </p>
        </div>
      </SampleSection>

      {/* FAQ */}
      <SampleSection bg="gray">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3 text-center">FAQ</p>
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {FAQ.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Questions? We're Here."
        title="Contact Our Patient Services Team"
        subtitle="Our care coordinators are available Monday–Friday, 7am–7pm and Saturday, 8am–3pm."
        primaryLabel="Contact Us"
        primaryHref="/enterprise/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
