import { Link } from 'react-router-dom'
import { SampleHero }    from '../../components/sample-site/SampleHero.jsx'
import { SampleSection, SampleSectionHeader } from '../../components/sample-site/SampleSection.jsx'
import { SampleServiceCard, SampleTestimonialCard } from '../../components/sample-site/SampleCard.jsx'
import { SampleCTA }     from '../../components/sample-site/SampleCTA.jsx'
import { CLINIC, SERVICES, TECHNOLOGY, PROVIDERS, TESTIMONIALS, STATS, TRUST_BADGES } from '../../data/professional-site.js'

const SERVICE_ICONS = {
  'medical-dermatology':  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  'cosmetic-injectables': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /></svg>,
  'laser-light':          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
  'skin-cancer':          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  'peels-facials':        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  'body-contouring':      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
}

const TECH_BADGE_COLORS = {
  Laser:       'bg-amber-100 text-amber-700',
  Photofacial: 'bg-teal-100 text-teal-700',
  Body:        'bg-purple-100 text-purple-700',
  Diagnostics: 'bg-blue-100 text-blue-700',
}

export function ProfessionalHome() {
  return (
    <>
      {/* Hero */}
      <SampleHero
        eyebrow="Scottsdale's Premier Dermatology Practice"
        headline={<>Skin That Reflects<br className="hidden sm:block" /> Your Best Self</>}
        subheadline="Board-certified dermatologists and advanced aesthetic treatments — personalized to your skin, your goals, and your lifestyle."
        primaryCta={{ label: 'Book a Consultation', href: '/professional/contact' }}
        secondaryCta={{ label: 'Explore Services', href: '/professional/services' }}
        image={{
          src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
          alt: 'Clean, modern Luminary dermatology consultation room',
        }}
        trustBadges={TRUST_BADGES}
      />

      {/* Stats bar */}
      <div className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-teal-400 leading-none mb-1">{value}</p>
              <p className="text-slate-400 text-[13px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services overview */}
      <SampleSection bg="white">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">Services & Treatments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              A Complete Spectrum of Skin Care
            </h2>
          </div>
          <Link
            to="/professional/services"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-[14px] hover:text-teal-700 transition-colors flex-shrink-0"
          >
            View All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Technology teaser */}
      <SampleSection bg="gray">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-teal-600 mb-3">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              The Most Advanced Tools in the Field
            </h2>
          </div>
          <Link
            to="/professional/technology"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-[14px] hover:text-teal-700 transition-colors flex-shrink-0"
          >
            Our Technology
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNOLOGY.slice(0, 2).map((tech) => (
            <div key={tech.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5 items-start hover:-translate-y-1 hover:shadow-md hover:border-teal-100 transition-all duration-200">
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-[15px] font-semibold text-slate-900">{tech.name}</h3>
                  <span className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full ${TECH_BADGE_COLORS[tech.badge]}`}>{tech.badge}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.short}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Team teaser */}
      <SampleSection bg="white">
        <SampleSectionHeader
          eyebrow="Our Providers"
          title="Expertise You Can Trust"
          subtitle="Board-certified dermatologists and fellowship-trained aesthetics specialists."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PROVIDERS.map((p) => (
            <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden text-center">
              <img
                src={p.image}
                alt={`Photo of ${p.name}`}
                className="w-full h-52 object-cover object-top"
              />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 text-[16px] mb-0.5">{p.name}</h3>
                <p className="text-teal-600 text-sm font-medium">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/professional/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-slate-600 font-semibold text-[14px] hover:border-teal-200 hover:text-teal-600 hover:bg-teal-50 transition-all"
          >
            Meet the Full Team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </SampleSection>

      {/* Testimonials */}
      <SampleSection bg="gray">
        <SampleSectionHeader
          eyebrow="Patient Reviews"
          title="Real Results, Real Stories"
          subtitle="Over 1,200 five-star reviews across Google, Yelp, and RealSelf."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <SampleTestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </SampleSection>

      {/* CTA */}
      <SampleCTA
        eyebrow="Begin Your Skin Journey"
        title="Complimentary Consultations Available"
        subtitle="Every new patient receives a complimentary VISIA skin analysis and personalized treatment plan."
        primaryLabel="Schedule a Consultation"
        primaryHref="/professional/contact"
        secondaryLabel={`Call ${CLINIC.phone}`}
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />
    </>
  )
}
