/** Summit Chiropractic — data for the /basic single-page sample site */

export const PRACTICE = {
  name:     'Summit Chiropractic',
  tagline:  'Hands-on healing for a pain-free life — serving Austin, TX for over a decade.',
  phone:    '(512) 555-0120',
  email:    'hello@summitchiro.com',
  address:  '1480 S. Lamar Blvd, Suite 101',
  city:     'Austin',
  state:    'TX',
  zip:      '78704',
  homeHref: '/basic',
}

export const DOCTOR = {
  name:   'Dr. Sarah Kim, DC',
  title:  'Doctor of Chiropractic',
  bio:    "Dr. Sarah Kim is a board-certified Doctor of Chiropractic with over 10 years of experience treating spine, joint, and soft-tissue conditions. She graduated summa cum laude from the University of Western States, where she specialized in sports chiropractic and rehabilitation. Before opening Summit Chiropractic, Dr. Kim served as the team chiropractor for two Austin-area high school athletic programs. Her approach is hands-on, evidence-based, and always centered on your goals — not a one-size-fits-all protocol.",
  credentials: [
    'DC — University of Western States, Portland, OR',
    'Board Certified — National Board of Chiropractic Examiners',
    'Sports Chiropractic Certification (CCSP)',
    '10+ Years Clinical Experience',
  ],
  image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=500&q=80',
}

export const SERVICES = [
  {
    id:          'adjustment',
    name:        'Chiropractic Adjustment',
    description: "Precision spinal and joint adjustments to restore alignment, relieve pain, and support your body's natural healing capacity. Safe, effective, and tailored to your specific presentation.",
  },
  {
    id:          'decompression',
    name:        'Spinal Decompression',
    description: 'Non-surgical traction therapy that gently stretches the spine to relieve pressure on compressed discs, bulging discs, and pinched nerves. A drug-free alternative to surgery for many patients.',
  },
  {
    id:          'sports',
    name:        'Sports Injury Care',
    description: 'Specialized chiropractic care for athletes — from weekend warriors to competitive professionals. We target sports-related muscle, joint, and soft-tissue injuries to get you back in action faster.',
  },
  {
    id:          'auto',
    name:        'Auto Accident Rehab',
    description: 'Comprehensive chiropractic treatment for whiplash, soft-tissue injuries, and post-accident pain. We provide thorough documentation to support your insurance claim from day one.',
  },
]

export const TESTIMONIALS = [
  {
    quote:  "After two years of daily lower back pain, Dr. Kim had me feeling better in three visits. I can't believe I waited this long.",
    author: 'Jason R.',
    city:   'Austin, TX',
    stars:  5,
  },
  {
    quote:  "I came in after a car accident and wasn't sure what to expect. Dr. Kim was thorough, patient, and incredibly knowledgeable. The decompression therapy changed everything.",
    author: 'Maria L.',
    city:   'Round Rock, TX',
    stars:  5,
  },
  {
    quote:  'As a marathon runner, this office keeps me on the road. Same-day appointments whenever I need them. Best chiropractor in Austin, hands down.',
    author: 'Derek P.',
    city:   'Austin, TX',
    stars:  5,
  },
]

export const HOURS = [
  { days: 'Monday – Thursday', time: '8:00 am – 6:00 pm' },
  { days: 'Friday',            time: '8:00 am – 3:00 pm' },
  { days: 'Saturday',          time: '9:00 am – 12:00 pm' },
  { days: 'Sunday',            time: 'Closed' },
]

export const WHY_US = [
  {
    id:    'same-day',
    title: 'Same-Day Appointments',
    body:  "We know pain doesn't wait. Call before noon and we'll almost always get you in that day.",
  },
  {
    id:    'evidence',
    title: 'Evidence-Based Care',
    body:  'Every treatment plan is rooted in current clinical research — no cookie-cutter protocols, no unnecessary visits.',
  },
  {
    id:    'insurance',
    title: 'Most Insurance Accepted',
    body:  'We work with most major insurance providers, including auto insurance for accident-related injuries. Call us to verify.',
  },
]
