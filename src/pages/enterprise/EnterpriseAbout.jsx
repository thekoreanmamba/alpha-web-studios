import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, STATS, AWARDS, PROVIDERS } from '../../data/enterprise-site.js'

export function EnterpriseAbout() {
  return (
    <>
      <SamplePageBanner
        eyebrow="About Us"
        title="Building a Better Health System for DFW"
        subtitle="The story, mission, and values behind Apex Health System."
        breadcrumb={[{ label: 'Home', href: '/enterprise' }, { label: 'About' }]}
      />

      {/* Mission */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-4">Our Mission</p>
          <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
            "To deliver exceptional, integrated healthcare that meets patients where they are — across every specialty, every location, and every stage of life."
          </p>
          <p className="mt-4 text-slate-400 text-sm font-medium">— Apex Health System Board of Directors, {CLINIC.founded}</p>
        </div>
      </SampleSection>

      {/* Story */}
      <SampleSection bg="gray">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-5">Founded on a Simple Belief</h2>
            <div className="flex flex-col gap-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                Apex Health System was founded in {CLINIC.founded} by a group of six physicians who believed that Dallas-area patients deserved access to academic-caliber, coordinated care without having to travel to Houston or New York. What started as a two-specialty group practice in Uptown Dallas has grown into one of the DFW area's largest independent multi-specialty medical groups, with over 40 physicians across six departments and three clinic locations.
              </p>
              <p>
                From the beginning, our clinical philosophy has been structured around integration — not just in theory, but in practice. All Apex physicians share a single EHR platform. All three locations share the same patient portal. And every week, our multidisciplinary team meets to review complex cases together, ensuring no patient falls through the gaps between specialties.
              </p>
              <p>
                Today, Apex serves over 60,000 patients annually and is recognized by the Joint Commission, U.S. News & World Report, and D Magazine as a leading health system in North Texas. We remain physician-owned and independent — free to make decisions based on what's best for patients, not shareholders.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-[440px] flex flex-col gap-5">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80"
              alt="Apex Health System physicians"
              className="w-full h-[280px] object-cover rounded-2xl shadow-lg"
            />
            {/* Key facts */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-4">At a Glance</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Founded',         value: CLINIC.founded },
                  { label: 'Ownership',        value: 'Physician-Owned & Independent' },
                  { label: 'Locations',        value: 'Dallas · Plano · Fort Worth' },
                  { label: 'Physicians',       value: '40+ Board-Certified Specialists' },
                  { label: 'Accreditation',    value: 'The Joint Commission' },
                  { label: 'EHR Platform',     value: 'Epic — Unified Across All Sites' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex justify-between gap-4 text-[13px] py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-slate-900 font-medium text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SampleSection>

      {/* Stats */}
      <SampleSection bg="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-purple-600 leading-none mb-2">{value}</p>
              <p className="text-slate-500 text-[14px]">{label}</p>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Values */}
      <SampleSection bg="gray">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3 text-center">What We Stand For</p>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Clinical Excellence',    body: 'We recruit physicians trained at the nation\'s top programs and hold every provider to evidence-based, outcomes-driven standards.' },
            { n: '02', title: 'Integration Over Silos', body: 'Every Apex physician shares one record, one portal, and one team goal: coherent care for every patient.' },
            { n: '03', title: 'Patient-First Decisions', body: 'We are physician-owned and independent. Our clinical decisions are driven by patient outcomes, not financial pressures.' },
            { n: '04', title: 'Community Access',       body: 'Three locations across DFW, a robust financial counseling program, and telehealth ensure that quality care is reachable.' },
            { n: '05', title: 'Continuous Improvement', body: 'Weekly case conferences, active research participation, and a culture of transparency keep us learning and improving.' },
            { n: '06', title: 'Respect & Dignity',      body: 'Every patient, every staff member, every partner — treated with the respect and dignity they deserve, always.' },
          ].map((v) => (
            <div key={v.n} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <span className="text-[13px] font-bold text-purple-300 mb-3 block">{v.n}</span>
              <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Awards */}
      <SampleSection bg="white">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-purple-600 mb-3 text-center">Recognition</p>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Awards & Accreditations</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {AWARDS.map((a) => (
            <div key={a.title} className="flex items-start gap-5 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
              <span className="text-purple-600 font-bold text-[14px] flex-shrink-0 w-12">{a.year}</span>
              <div>
                <p className="font-semibold text-slate-900 text-[14px]">{a.title}</p>
                <p className="text-slate-400 text-[13px]">{a.org}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Provider CTA */}
      <SampleSection bg="gray">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex -space-x-3">
            {PROVIDERS.slice(0, 4).map((p) => (
              <img key={p.id} src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover object-top border-2 border-white" />
            ))}
            <div className="w-14 h-14 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-700 font-bold text-[12px]">
              40+
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Meet Our Physicians</h3>
            <p className="text-slate-500 text-[15px]">Fellowship-trained specialists from Johns Hopkins, Cleveland Clinic, MSK, and more — all practicing together in Dallas–Fort Worth.</p>
          </div>
          <Link
            to="/enterprise/providers"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold text-[14px] hover:bg-purple-700 transition-colors"
          >
            Meet Our Team →
          </Link>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="Become an Apex Patient"
        title="Accepting New Patients in All Specialties"
        subtitle="Most appointments are available within 5 business days. Urgent referrals are accommodated same-week."
        primaryLabel="Request an Appointment"
        primaryHref="/enterprise/contact"
        secondaryLabel="View Our Locations"
        secondaryHref="/enterprise/locations"
        bg="navy"
      />
    </>
  )
}
