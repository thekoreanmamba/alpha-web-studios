import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, STATS, VALUES, PROVIDERS } from '../../data/core-site.js'

export function CoreAbout() {
  return (
    <>
      <SamplePageBanner
        eyebrow="About Us"
        title="Caring for LA Families Since 2009"
        subtitle="The story, the mission, and the people behind Sunrise Family Clinic."
        breadcrumb={[
          { label: 'Home', href: '/core' },
          { label: 'About' },
        ]}
      />

      {/* Mission statement */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-4">Our Mission</p>
          <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
            "To provide every patient with the kind of care we'd want for our own families — thorough, compassionate, and built on a long-term relationship."
          </p>
          <p className="mt-4 text-slate-400 text-sm font-medium">— Dr. Sarah Kim, Founder</p>
        </div>
      </SampleSection>

      {/* Story */}
      <SampleSection bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full lg:max-w-[480px]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Inside Sunrise Family Clinic"
              className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              Built for the Community, by the Community
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-[15px]">
              <p>
                Sunrise Family Clinic opened its doors in 2009, when Dr. Sarah Kim recognized a clear gap in the Mid-Wilshire corridor: working families in Los Angeles needed access to high-quality primary care that didn't require a week's wait or a walk down the hall from an ER.
              </p>
              <p>
                Starting with a two-room office and a single exam table, Dr. Kim built the practice one patient relationship at a time. By 2013, the clinic had expanded to its current location on Wilshire Boulevard and welcomed Dr. Michael Torres to the team, bringing with him a specialty focus on internal medicine and cardiometabolic disease.
              </p>
              <p>
                Today, Sunrise serves over 8,000 active patients across Los Angeles. We're in-network with most major insurance plans, offer Saturday hours, telehealth follow-ups, and a multilingual staff that speaks English, Spanish, and Korean.
              </p>
            </div>
          </div>
        </div>
      </SampleSection>

      {/* Stats */}
      <SampleSection bg="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <p className="text-4xl font-bold text-blue-600 leading-none mb-2">{value}</p>
              <p className="text-slate-500 text-[14px]">{label}</p>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Values */}
      <SampleSection bg="gray">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3 text-center">What We Stand For</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-[15px]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Accreditations */}
      <SampleSection bg="white">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3 text-center">Accreditations & Memberships</p>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-10">Recognized for Excellence</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            'American Academy of Family Physicians (AAFP)',
            'American College of Physicians (ACP)',
            'Los Angeles County Medical Association',
            'California Medical Association',
            'National Committee for Quality Assurance (NCQA) Recognized',
            'Recognized by LA Magazine "Top Doctors" (2022, 2023, 2024)',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
                <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-slate-600 text-[13px] leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Team CTA */}
      <SampleSection bg="gray">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex -space-x-3">
            {PROVIDERS.map((p) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-white"
              />
            ))}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Meet Our Physicians</h3>
            <p className="text-slate-500 text-[15px]">Learn more about Dr. Kim and Dr. Torres — their backgrounds, specialties, and what drives their approach to care.</p>
          </div>
          <Link
            to="/core/team"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-[14px] hover:bg-blue-700 transition-colors"
          >
            Meet the Team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="We'd Love to Meet You"
        title="New Patients Welcome"
        subtitle="Ready to establish care or switch to a practice that actually knows your name? We're accepting new patients now."
        primaryLabel="Book an Appointment"
        primaryHref="/core/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="blue"
      />
    </>
  )
}
