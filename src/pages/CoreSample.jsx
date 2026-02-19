import { SampleLayout }      from '../components/sample-site/SampleLayout.jsx'
import { SampleHeader }      from '../components/sample-site/SampleHeader.jsx'
import { SampleHero }        from '../components/sample-site/SampleHero.jsx'
import { SampleSection, SampleSectionHeader } from '../components/sample-site/SampleSection.jsx'
import { SampleServiceCard, SampleProviderCard, SampleTestimonialCard } from '../components/sample-site/SampleCard.jsx'
import { SampleCTA }         from '../components/sample-site/SampleCTA.jsx'
import { SampleFooter }      from '../components/sample-site/SampleFooter.jsx'

/* ─────────────── Clinic data ─────────────── */

const CLINIC = {
  name:    'Sunrise Family Clinic',
  tagline: 'Compassionate, personalized primary care for every member of your family — from first steps to golden years.',
  phone:   '(213) 555-0191',
  email:   'hello@sunrisefamilyclinic.com',
  address: { street: '1234 Wilshire Blvd, Suite 200', city: 'Los Angeles', state: 'CA', zip: '90017' },
}

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team' },
  { label: 'Contact',  href: '#contact' },
]

const HOURS = [
  { days: 'Monday – Friday', time: '8:00 am – 6:00 pm' },
  { days: 'Saturday',        time: '9:00 am – 2:00 pm' },
  { days: 'Sunday',          time: 'Closed' },
]

const TRUST_BADGES = [
  'Board-Certified Physicians',
  'Accepting New Patients',
  'Same-Day Appointments',
]

const SERVICES = [
  {
    title: 'Primary Care',
    description: 'Comprehensive wellness exams, chronic disease management, and routine check-ups for patients of all ages.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Urgent Care',
    description: 'Walk-in and same-day appointments for illnesses and minor injuries — no ER wait times required.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Preventive Wellness',
    description: 'Screenings, immunizations, and lifestyle counseling designed to keep you healthy before problems arise.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Chronic Disease Management',
    description: 'Ongoing, personalized care for diabetes, hypertension, asthma, and other long-term conditions.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 12.5l4 4 11-11" />
        <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
      </svg>
    ),
  },
]

const PROVIDERS = [
  {
    name:  'Dr. Sarah Kim, MD',
    title: 'Family Medicine · Medical Director',
    bio:   'Dr. Kim brings over 12 years of experience in family medicine with a focus on preventive care and patient education. She completed her residency at Cedars-Sinai and is fluent in English and Korean.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name:  'Dr. Michael Torres, MD',
    title: 'Internal Medicine · Senior Physician',
    bio:   'Dr. Torres specializes in managing complex, multi-system conditions. A graduate of UCLA School of Medicine, he is passionate about bridging primary and specialty care for underserved communities.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
  },
]

const TESTIMONIALS = [
  {
    quote:    'Sunrise has been our family doctor for four years. Dr. Kim takes the time to actually listen — something rare these days. Highly recommend.',
    author:   'Jennifer L.',
    location: 'Los Angeles, CA',
    stars:    5,
    source:   'Google Review',
  },
  {
    quote:    'Came in on a Saturday morning for an urgent visit and was seen within 20 minutes. Staff was kind and professional the entire time.',
    author:   'Robert M.',
    location: 'West Hollywood, CA',
    stars:    5,
    source:   'Google Review',
  },
  {
    quote:    'Dr. Torres helped me finally get my blood pressure under control after years of struggling. I feel better than I have in a decade.',
    author:   'Alicia P.',
    location: 'Koreatown, CA',
    stars:    5,
    source:   'Yelp Review',
  },
]

/* ─────────────── Page component ─────────────── */

export function CoreSample() {
  return (
    <SampleLayout tier="Core">
      {/* Header */}
      <SampleHeader
        clinicName={CLINIC.name}
        navLinks={NAV_LINKS}
        phone={CLINIC.phone}
        ctaLabel="Book Appointment"
        ctaHref="#contact"
      />

      {/* Hero */}
      <div id="home">
        <SampleHero
          eyebrow="Serving Los Angeles Since 2009"
          headline={<>Your Family's Health,<br className="hidden sm:block" /> Our Top Priority</>}
          subheadline="Compassionate, evidence-based primary care for every stage of life. From annual check-ups to same-day urgent visits — we're here when you need us."
          primaryCta={{ label: 'Book an Appointment', href: '#contact' }}
          secondaryCta={{ label: 'Meet Our Team', href: '#team' }}
          image={{
            src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80',
            alt: 'Physician consulting with patient in a modern clinic',
          }}
          trustBadges={TRUST_BADGES}
        />
      </div>

      {/* About */}
      <SampleSection id="about" bg="gray">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 w-full lg:max-w-[480px]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Modern Sunrise Family Clinic interior"
              className="w-full h-[340px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          {/* Copy */}
          <div className="flex-1">
            <SampleSectionHeader
              eyebrow="About Our Practice"
              title="A Clinic Built Around You"
              subtitle="For over 15 years, Sunrise Family Clinic has served the Los Angeles community with patient-centered care that treats the whole person — not just the symptoms."
            />
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-2">
              {[
                { value: '15+', label: 'Years Serving LA' },
                { value: '8,000+', label: 'Patients Served' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold text-blue-600 leading-none mb-1">{value}</p>
                  <p className="text-slate-500 text-[13px] leading-snug">{label}</p>
                </div>
              ))}
            </div>
            {/* Checklist */}
            <ul className="mt-8 flex flex-col gap-3">
              {[
                'In-network with most major insurance plans',
                'On-site lab and diagnostic services',
                'Telehealth visits available',
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
          </div>
        </div>
      </SampleSection>

      {/* Services */}
      <SampleSection id="services" bg="white">
        <SampleSectionHeader
          eyebrow="Our Services"
          title="Care for Every Stage of Life"
          subtitle="From routine wellness exams to managing complex chronic conditions, our team provides the full spectrum of primary care services your family needs."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Team */}
      <SampleSection id="team" bg="gray">
        <SampleSectionHeader
          eyebrow="Meet the Team"
          title="Experienced Physicians Who Care"
          subtitle="Our board-certified physicians combine deep clinical expertise with genuine compassion. We believe the best medicine starts with listening."
          center
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      <SampleSection id="testimonials" bg="white">
        <SampleSectionHeader
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Don't take our word for it. Here's what real patients are saying about their experience at Sunrise Family Clinic."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </SampleSection>

      {/* CTA band */}
      <SampleCTA
        eyebrow="Ready to Get Started?"
        title="New Patients Welcome"
        subtitle="Booking an appointment is quick and easy. Same-day appointments are available for urgent needs."
        primaryLabel="Book an Appointment"
        primaryHref="#contact"
        secondaryLabel="Call (213) 555-0191"
        secondaryHref={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
        bg="blue"
      />

      {/* Contact */}
      <SampleSection id="contact" bg="gray">
        <SampleSectionHeader
          eyebrow="Contact Us"
          title="We're Here to Help"
          subtitle="Reach out by phone, email, or stop by our office. We look forward to becoming your family's healthcare home."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {/* Phone */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
            <a href={`tel:${CLINIC.phone.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-700 font-medium text-[15px] transition-colors">
              {CLINIC.phone}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
            <a href={`mailto:${CLINIC.email}`} className="text-blue-600 hover:text-blue-700 font-medium text-[15px] transition-colors break-all">
              {CLINIC.email}
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        {/* Hours table */}
        <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-slate-900 text-center mb-5">Office Hours</h3>
          <ul className="flex flex-col divide-y divide-gray-100">
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
