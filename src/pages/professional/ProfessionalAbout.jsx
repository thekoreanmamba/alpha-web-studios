import { Link } from 'react-router-dom'
import { SamplePageBanner } from '../../components/sample-site/SamplePageBanner.jsx'
import { SampleSection }    from '../../components/sample-site/SampleSection.jsx'
import { SampleCTA }        from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, STATS, AWARDS, PROVIDERS } from '../../data/professional-site.js'

export function ProfessionalAbout() {
  return (
    <>
      <SamplePageBanner
        eyebrow="About Us"
        title="Clinical Excellence, Artful Results"
        subtitle="The story, mission, and values behind Luminary Skin & Wellness."
        breadcrumb={[
          { label: 'Home', href: '/professional' },
          { label: 'About' },
        ]}
      />

      {/* Mission */}
      <SampleSection bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-4">Our Mission</p>
          <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
            "To deliver the highest standard of dermatological care — clinical rigor without sacrificing warmth, and aesthetic precision without sacrificing authenticity."
          </p>
          <p className="mt-4 text-slate-400 text-sm font-medium">— Dr. Priya Nair, Founder</p>
        </div>
      </SampleSection>

      {/* Story */}
      <SampleSection bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              Founded on a Belief That Dermatology Should Be Better
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-[15px]">
              <p>
                Dr. Priya Nair founded Luminary Skin & Wellness in 2015 after recognizing a gap in the Scottsdale market: patients were choosing between high-quality clinical dermatology and premium aesthetic experiences, when they deserved both. She had seen too many patients receive one-size-fits-all injectable treatments at med spas without proper medical oversight, and too many aesthetic concerns dismissed at conventional dermatology offices.
              </p>
              <p>
                Luminary was built to close that gap — a practice where board-certified dermatologists perform skin cancer screenings in the morning and cosmetic consultations in the afternoon, where every treatment is informed by clinical expertise, and where the patient experience rivals the finest medical spas in the country.
              </p>
              <p>
                Since opening, Luminary has grown to a three-provider team, treating over 12,000 patients and becoming one of fewer than 200 certified Sciton laser training centers in the United States. We've been honored by Scottsdale Living, Phoenix Magazine, and our patients — who have left over 1,200 five-star reviews across Google, Yelp, and RealSelf.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-[480px]">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=900&q=80"
              alt="Luminary Skin & Wellness clinic interior"
              className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </SampleSection>

      {/* Stats */}
      <SampleSection bg="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <p className="text-4xl font-bold text-teal-600 leading-none mb-2">{value}</p>
              <p className="text-slate-500 text-[14px]">{label}</p>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* What makes us different */}
      <SampleSection bg="gray">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3 text-center">What Sets Us Apart</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center mb-12">
          The Luminary Difference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Physician-Led, Always',
              detail: 'All medical procedures and injectable treatments are performed or directly supervised by a board-certified physician or our fellowship-trained PA-C. No delegation to unlicensed staff — ever.',
            },
            {
              title: 'Science Over Sales',
              detail: 'We recommend what the evidence supports, not what\'s most profitable. If a treatment isn\'t right for you, we\'ll tell you — and explain why. Overpromising is not in our vocabulary.',
            },
            {
              title: 'Certified Technology Center',
              detail: 'As one of fewer than 200 Sciton-certified training centers nationwide, we\'re equipped with the most advanced and clinically validated laser technology available anywhere.',
            },
            {
              title: 'Measurable Results',
              detail: 'Every patient receives a complimentary VISIA skin analysis at intake. We track objective data — not just how you feel — so you can see the real impact of your treatment plan over time.',
            },
          ].map((item, i) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 text-teal-600 font-bold text-[15px]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Awards */}
      <SampleSection bg="white">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3 text-center">Awards & Recognition</p>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-10">Recognized for Excellence</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {AWARDS.map((award) => (
            <div key={award.title} className="flex items-start gap-5 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
              <span className="text-teal-600 font-bold text-[15px] flex-shrink-0 w-12">{award.year}</span>
              <div>
                <p className="font-semibold text-slate-900 text-[14px]">{award.title}</p>
                <p className="text-slate-400 text-[13px]">{award.org}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Team CTA */}
      <SampleSection bg="gray">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex -space-x-3">
            {PROVIDERS.map((p) => (
              <img key={p.id} src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover object-top border-2 border-white" />
            ))}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Meet the Luminary Team</h3>
            <p className="text-slate-500 text-[15px]">Dr. Nair, Dr. Whitfield, and Sarah Chen PA-C — credentials, specialties, and what drives their approach to care.</p>
          </div>
          <Link
            to="/professional/team"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold text-[14px] hover:bg-slate-800 transition-colors"
          >
            Meet the Team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      <SampleCTA
        eyebrow="We'd Love to Meet You"
        title="Complimentary New Patient Consultations"
        subtitle="Every new patient receives a VISIA skin analysis and personalized treatment plan — no commitment required."
        primaryLabel="Book a Consultation"
        primaryHref="/professional/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
