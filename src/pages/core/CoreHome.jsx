import { Link } from 'react-router-dom'
import { SampleHero }    from '../../components/sample-site/SampleHero.jsx'
import { SampleSection, SampleSectionHeader } from '../../components/sample-site/SampleSection.jsx'
import { SampleServiceCard, SampleTestimonialCard } from '../../components/sample-site/SampleCard.jsx'
import { SampleCTA }     from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, SERVICES, PROVIDERS, TESTIMONIALS, STATS, TRUST_BADGES } from '../../data/core-site.js'

const SERVICE_ICONS = {
  'primary-care': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  ),
  'urgent-care': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
  ),
  'preventive-wellness': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  'chronic-disease': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 12.5l4 4 11-11" /><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" /></svg>
  ),
}

export function CoreHome() {
  return (
    <>
      {/* Hero */}
      <SampleHero
        eyebrow="Serving Los Angeles Since 2009"
        headline={<>Your Family's Health,<br className="hidden sm:block" /> Our Top Priority</>}
        subheadline="Compassionate, evidence-based primary care for every stage of life. From annual check-ups to same-day urgent visits — we're here when you need us."
        primaryCta={{ label: 'Book an Appointment', href: '/core/contact' }}
        secondaryCta={{ label: 'Meet Our Team', href: '/core/team' }}
        image={{
          src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80',
          alt: 'Physician consulting with a patient in a modern, welcoming clinic',
        }}
        trustBadges={TRUST_BADGES}
      />

      {/* Stats bar */}
      <div className="bg-blue-600 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-white leading-none mb-1">{value}</p>
              <p className="text-blue-100 text-[13px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services overview */}
      <SampleSection bg="white">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Care for Every Stage of Life
            </h2>
          </div>
          <Link
            to="/core/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-[14px] hover:text-blue-700 transition-colors flex-shrink-0"
          >
            View All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <SampleServiceCard
              key={s.id}
              icon={SERVICE_ICONS[s.id]}
              title={s.title}
              description={s.shortDescription}
              iconBg={s.iconBg}
              iconColor={s.iconColor}
            />
          ))}
        </div>
      </SampleSection>

      {/* About teaser */}
      <SampleSection bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full lg:max-w-[480px]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Sunrise Family Clinic interior"
              className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3">About Our Practice</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              A Clinic Built Around You
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              For over 15 years, Sunrise Family Clinic has served the Los Angeles community with patient-centered care that treats the whole person — not just the symptoms. We're in-network with most major insurance plans, offer Saturday hours, and provide telehealth for follow-up care.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'In-network with most major insurance plans',
                'On-site lab and diagnostic services',
                'Multilingual staff (English, Spanish, Korean)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-[14px]">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
                    <path d="M5 8l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/core/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-[14px] hover:bg-blue-700 transition-colors"
            >
              About Our Practice
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </SampleSection>

      {/* Meet the team teaser */}
      <SampleSection bg="white">
        <SampleSectionHeader
          eyebrow="Meet the Team"
          title="Physicians Who Listen"
          subtitle="Our board-certified doctors combine deep clinical expertise with genuine care for each patient."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {PROVIDERS.map((p) => (
            <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5 items-start">
              <img
                src={p.image}
                alt={`Photo of ${p.name}`}
                className="w-20 h-20 rounded-xl object-cover object-top flex-shrink-0"
              />
              <div>
                <h3 className="text-[16px] font-semibold text-slate-900 mb-0.5">{p.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{p.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{p.shortBio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/core/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-600 font-semibold text-[14px] hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            Meet the Full Team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      {/* Testimonials */}
      <SampleSection bg="gray">
        <SampleSectionHeader
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Over 1,000 five-star reviews across Google and Yelp. Here's what real patients are saying."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <SampleTestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </SampleSection>

      {/* CTA */}
      <SampleCTA
        eyebrow="Ready to Get Started?"
        title="New Patients Welcome"
        subtitle="Booking an appointment is quick and easy. Same-day appointments are available for urgent needs."
        primaryLabel="Book an Appointment"
        primaryHref="/core/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="blue"
      />
    </>
  )
}
