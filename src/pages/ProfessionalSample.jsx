import { SampleLayout }      from '../components/sample-site/SampleLayout.jsx'
import { SampleHeader }      from '../components/sample-site/SampleHeader.jsx'
import { SampleHero }        from '../components/sample-site/SampleHero.jsx'
import { SampleSection, SampleSectionHeader } from '../components/sample-site/SampleSection.jsx'
import { SampleServiceCard, SampleProviderCard, SampleTestimonialCard } from '../components/sample-site/SampleCard.jsx'
import { SampleCTA }         from '../components/sample-site/SampleCTA.jsx'
import { SampleFooter }      from '../components/sample-site/SampleFooter.jsx'

/* ─────────────── Clinic data ─────────────── */

const CLINIC = {
  name:    'Luminary Skin & Wellness',
  tagline: 'Board-certified dermatology and advanced aesthetic medicine — where clinical precision meets personalized care.',
  phone:   '(480) 555-0174',
  email:   'hello@luminaryskin.com',
  address: { street: '8900 E Pinnacle Peak Rd, Suite 300', city: 'Scottsdale', state: 'AZ', zip: '85255' },
}

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team',       href: '#team' },
  { label: 'Contact',    href: '#contact' },
]

const HOURS = [
  { days: 'Monday – Thursday', time: '9:00 am – 5:30 pm' },
  { days: 'Friday',            time: '9:00 am – 4:00 pm' },
  { days: 'Saturday',          time: '10:00 am – 2:00 pm' },
  { days: 'Sunday',            time: 'Closed' },
]

const TRUST_BADGES = [
  'Board-Certified Dermatologists',
  'AADA Member Practice',
  'Complimentary Consultations',
]

const SERVICES = [
  {
    title:       'Medical Dermatology',
    description: 'Diagnosis and treatment of acne, eczema, psoriasis, rosacea, and other chronic skin conditions.',
    iconBg:      'bg-teal-50',
    iconColor:   'text-teal-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title:       'Cosmetic Injectables',
    description: 'Botox, Dysport, and dermal fillers (Juvederm, Sculptra) administered by fellowship-trained injectors.',
    iconBg:      'bg-pink-50',
    iconColor:   'text-pink-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title:       'Laser & Light Therapy',
    description: 'BBL photofacial, Halo fractional laser, and IPL treatments for sun damage, pigmentation, and texture.',
    iconBg:      'bg-amber-50',
    iconColor:   'text-amber-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title:       'Skin Cancer Screening',
    description: 'Full-body mole mapping, dermoscopy, and same-week biopsy for suspicious lesions — early detection saves lives.',
    iconBg:      'bg-red-50',
    iconColor:   'text-red-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title:       'Chemical Peels & Facials',
    description: 'Medical-grade VI peels, TCA treatments, and hydrafacial protocols tailored to your skin type and goals.',
    iconBg:      'bg-teal-50',
    iconColor:   'text-teal-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title:       'Body Contouring',
    description: 'CoolSculpting Elite and Emtone for non-invasive fat reduction and skin-tightening without surgery or downtime.',
    iconBg:      'bg-purple-50',
    iconColor:   'text-purple-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
]

const TECHNOLOGY = [
  {
    name:   'Halo Hybrid Fractional Laser',
    detail: 'Dual-wavelength laser (ablative + non-ablative) delivering skin resurfacing results with dramatically shorter downtime.',
    badge:  'Laser',
  },
  {
    name:   'BroadBand Light (BBL HERO)',
    detail: "Sciton's next-generation IPL platform — the only technology shown to reverse signs of aging at the cellular level.",
    badge:  'Photofacial',
  },
  {
    name:   'CoolSculpting Elite',
    detail: "FDA-cleared fat-freezing with dual applicators for 35% more coverage per session — treat two areas simultaneously.",
    badge:  'Body',
  },
  {
    name:   'VISIA Complexion Analysis',
    detail: 'AI-powered 3D skin imaging that quantifies spots, pores, texture, and UV damage to baseline and track your results.',
    badge:  'Diagnostics',
  },
]

const PROVIDERS = [
  {
    name:  'Dr. Priya Nair, MD',
    title: 'Board-Certified Dermatologist · Founder',
    bio:   'A graduate of Johns Hopkins School of Medicine and fellowship-trained in cosmetic dermatology, Dr. Nair founded Luminary in 2015 with a mission to blend rigorous clinical care with artful aesthetics. She is a national trainer for Sciton laser systems.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name:  'Dr. James Whitfield, MD',
    title: 'Board-Certified Dermatologist',
    bio:   'Dr. Whitfield specializes in complex medical dermatology and Mohs micrographic surgery for skin cancer. His work has been published in JAAD and he lectures nationally on melanoma early detection techniques.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name:  'Sarah Chen, PA-C',
    title: 'Physician Assistant · Lead Injector',
    bio:   'With over 8 years of aesthetic medicine experience, Sarah is known for her conservative, natural-looking injectable results. She holds advanced certifications in facial anatomy and has completed training with Allergan and Galderma.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
  },
]

const TESTIMONIALS = [
  {
    quote:    'Dr. Nair completely transformed my skin after years of failed treatments elsewhere. Her approach is methodical and she actually explains why she recommends each step.',
    author:   'Amanda K.',
    location: 'Scottsdale, AZ',
    stars:    5,
    source:   'Google Review',
  },
  {
    quote:    'The Halo treatment was life-changing. My sun damage from 20 years in Arizona is basically gone after two sessions. The team made the process completely comfortable.',
    author:   'David R.',
    location: 'Paradise Valley, AZ',
    stars:    5,
    source:   'RealSelf',
  },
  {
    quote:    "Sarah is hands-down the best injector I've seen in Scottsdale. She listened to what I wanted, didn't oversell, and my results look completely natural. I won't go anywhere else.",
    author:   'Michelle T.',
    location: 'Tempe, AZ',
    stars:    5,
    source:   'Yelp Review',
  },
  {
    quote:    'Dr. Whitfield caught a melanoma in situ during a routine mole check. His thoroughness literally saved my life. This clinic is the real deal — clinical excellence through and through.',
    author:   'Thomas B.',
    location: 'Chandler, AZ',
    stars:    5,
    source:   'Google Review',
  },
]

/* Badge color map for technology cards */
const BADGE_COLORS = {
  Laser:       'bg-amber-100 text-amber-700',
  Photofacial: 'bg-teal-100 text-teal-700',
  Body:        'bg-purple-100 text-purple-700',
  Diagnostics: 'bg-blue-100 text-blue-700',
}

/* ─────────────── Page component ─────────────── */

export function ProfessionalSample() {
  return (
    <SampleLayout tier="Professional">
      {/* Header */}
      <SampleHeader
        clinicName={CLINIC.name}
        navLinks={NAV_LINKS}
        phone={CLINIC.phone}
        ctaLabel="Book a Consultation"
        ctaHref="#contact"
      />

      {/* Hero */}
      <div id="home">
        <SampleHero
          eyebrow="Scottsdale's Premier Dermatology Practice"
          headline={<>Skin That Reflects<br className="hidden sm:block" /> Your Best Self</>}
          subheadline="Board-certified dermatologists and advanced aesthetic treatments — personalized to your skin, your goals, and your lifestyle."
          primaryCta={{ label: 'Book a Consultation', href: '#contact' }}
          secondaryCta={{ label: 'Explore Services', href: '#services' }}
          image={{
            src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
            alt: 'Clean, modern dermatology consultation room',
          }}
          trustBadges={TRUST_BADGES}
        />
      </div>

      {/* About */}
      <SampleSection id="about" bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Copy first on desktop */}
          <div className="flex-1 order-2 lg:order-1">
            <SampleSectionHeader
              eyebrow="About Luminary"
              title="Clinical Excellence, Artful Results"
              subtitle="Since 2015, Luminary Skin & Wellness has been the destination for Scottsdale residents seeking the highest standard of dermatological care — from life-changing medical treatments to precision aesthetic enhancements."
            />
            <div className="grid grid-cols-3 gap-6 mt-2">
              {[
                { value: '9+',    label: 'Years in Practice' },
                { value: '12K+',  label: 'Patients Treated' },
                { value: '4.97★', label: 'Google Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold text-teal-600 leading-none mb-1">{value}</p>
                  <p className="text-slate-500 text-[13px] leading-snug">{label}</p>
                </div>
              ))}
            </div>
            <ul className="mt-8 flex flex-col gap-3">
              {[
                'Accredited by the American Academy of Dermatology',
                'Certified Sciton laser training center',
                'On-site Mohs surgery for skin cancer',
                'Complimentary VISIA skin analysis at every visit',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-[14px]">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="#CCFBF1" />
                    <path d="M5 8l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="flex-1 w-full lg:max-w-[480px] order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=900&q=80"
              alt="Luminary Skin & Wellness clinic interior"
              className="w-full h-[340px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </SampleSection>

      {/* Services */}
      <SampleSection id="services" bg="white">
        <SampleSectionHeader
          eyebrow="Services & Treatments"
          title="A Complete Spectrum of Skin Care"
          subtitle="From diagnosing complex skin conditions to the most advanced cosmetic treatments available — all under one roof, with one team."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <SampleServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              iconBg={s.iconBg}
              iconColor={s.iconColor}
            />
          ))}
        </div>
      </SampleSection>

      {/* Technology */}
      <SampleSection id="technology" bg="gray">
        <SampleSectionHeader
          eyebrow="Technology & Equipment"
          title="The Most Advanced Tools in Aesthetic Dermatology"
          subtitle="We invest in technology that delivers measurable, reproducible results — not trends. Every device at Luminary is FDA-cleared and backed by peer-reviewed evidence."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNOLOGY.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-5 items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-teal-100"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] font-semibold text-slate-900">{tech.name}</h3>
                  <span className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full ${BADGE_COLORS[tech.badge]}`}>
                    {tech.badge}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* Providers */}
      <SampleSection id="team" bg="white">
        <SampleSectionHeader
          eyebrow="Our Providers"
          title="Expertise You Can Trust"
          subtitle="Our team combines rigorous clinical training with a genuine passion for delivering natural, lasting results — never cookie-cutter."
          center
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROVIDERS.map((p) => (
            <SampleProviderCard
              key={p.name}
              image={p.image}
              name={p.name}
              title={p.title}
              bio={p.bio}
            />
          ))}
        </div>
      </SampleSection>

      {/* Testimonials */}
      <SampleSection id="testimonials" bg="gray">
        <SampleSectionHeader
          eyebrow="Patient Reviews"
          title="Real Results, Real Stories"
          subtitle="Over 1,200 five-star reviews across Google, Yelp, and RealSelf. Here's what patients say about their Luminary experience."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <SampleTestimonialCard
              key={t.author}
              quote={t.quote}
              author={t.author}
              location={t.location}
              stars={t.stars}
              source={t.source}
            />
          ))}
        </div>
        {/* Aggregate rating strip */}
        <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          {[
            { platform: 'Google',  rating: '4.97', count: '847' },
            { platform: 'Yelp',    rating: '4.9',  count: '312' },
            { platform: 'RealSelf', rating: '4.8', count: '91'  },
          ].map(({ platform, rating, count }) => (
            <div key={platform} className="flex flex-col items-center gap-1">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-900 font-bold text-lg leading-none">{rating}</p>
              <p className="text-slate-400 text-[12px]">{platform} · {count} reviews</p>
            </div>
          ))}
        </div>
      </SampleSection>

      {/* CTA band */}
      <SampleCTA
        eyebrow="Begin Your Skin Journey"
        title="Complimentary Consultations Available"
        subtitle="Every new patient receives a complimentary VISIA skin analysis and personalized treatment plan — no obligations, no pressure."
        primaryLabel="Schedule a Consultation"
        primaryHref="#contact"
        secondaryLabel="Call (480) 555-0174"
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="navy"
      />

      {/* Contact */}
      <SampleSection id="contact" bg="white">
        <SampleSectionHeader
          eyebrow="Visit Us"
          title="Ready to Get Started?"
          subtitle="Our patient coordinators are available to answer questions, confirm insurance, and schedule your first appointment."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {/* Phone */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
            <a href={`tel:${CLINIC.phone.replace(/\D/g, '')}`} className="text-teal-600 hover:text-teal-700 font-medium text-[15px] transition-colors">
              {CLINIC.phone}
            </a>
          </div>

          {/* Email */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
            <a href={`mailto:${CLINIC.email}`} className="text-teal-600 hover:text-teal-700 font-medium text-[15px] transition-colors break-all">
              {CLINIC.email}
            </a>
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
            <address className="not-italic text-slate-500 text-[14px] leading-relaxed">
              {CLINIC.address.street}<br />
              {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.zip}
            </address>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-8 bg-gray-50 rounded-xl border border-gray-100 p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-slate-900 text-center mb-5">Office Hours</h3>
          <ul className="flex flex-col divide-y divide-gray-200">
            {HOURS.map((h) => (
              <li key={h.days} className="flex justify-between py-3 text-sm">
                <span className="text-slate-500">{h.days}</span>
                <span className="text-slate-900 font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </SampleSection>

      {/* Footer */}
      <SampleFooter
        clinicName={CLINIC.name}
        tagline={CLINIC.tagline}
        address={CLINIC.address}
        phone={CLINIC.phone}
        email={CLINIC.email}
        hours={HOURS}
        navLinks={NAV_LINKS}
      />
    </SampleLayout>
  )
}
