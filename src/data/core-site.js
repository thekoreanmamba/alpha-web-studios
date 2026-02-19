/** Sunrise Family Clinic — shared data for all /core/* pages */

export const CLINIC = {
  name:      'Sunrise Family Clinic',
  tagline:   'Compassionate, personalized primary care for every member of your family — from first steps to golden years.',
  phone:     '(213) 555-0191',
  email:     'hello@sunrisefamilyclinic.com',
  address:   { street: '1234 Wilshire Blvd, Suite 200', city: 'Los Angeles', state: 'CA', zip: '90017' },
  homeHref:  '/core',
  founded:   '2009',
}

export const NAV_LINKS = [
  { label: 'Home',     href: '/core' },
  { label: 'About',    href: '/core/about' },
  { label: 'Services', href: '/core/services' },
  { label: 'Team',     href: '/core/team' },
  { label: 'Contact',  href: '/core/contact' },
]

export const HOURS = [
  { days: 'Monday – Friday', time: '8:00 am – 6:00 pm' },
  { days: 'Saturday',        time: '9:00 am – 2:00 pm' },
  { days: 'Sunday',          time: 'Closed' },
]

export const TRUST_BADGES = [
  'Board-Certified Physicians',
  'Accepting New Patients',
  'Same-Day Appointments',
]

export const SERVICES = [
  {
    id:               'primary-care',
    title:            'Primary Care',
    shortDescription: 'Comprehensive wellness exams, chronic disease management, and routine check-ups for patients of all ages.',
    overview:         'Our primary care services form the foundation of your family\'s long-term health. We provide continuous, comprehensive medical care for patients at every life stage — from well-child visits and adolescent care to adult wellness exams and geriatric medicine. Our physicians take the time to know you as a whole person, not just a chart.',
    highlights: [
      'Annual physical exams & wellness screenings',
      'Acute illness diagnosis & treatment',
      'Chronic disease management (diabetes, hypertension, thyroid)',
      'Medication management & prescription refills',
      'Referrals to trusted specialists',
      'Telehealth available for follow-up visits',
    ],
    whoItsFor: ['Children & adolescents', 'Adults of all ages', 'Seniors & older adults', 'New patients establishing care'],
    iconBg:    'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id:               'urgent-care',
    title:            'Urgent Care',
    shortDescription: 'Walk-in and same-day appointments for illnesses and minor injuries — no ER wait times required.',
    overview:         'When you need care today, we\'re here. Our urgent care services cover a wide range of non-life-threatening conditions with same-day appointments and walk-in availability. Skip the crowded emergency room for issues that don\'t require it — our physicians deliver fast, accurate diagnosis and treatment in a calm, familiar environment.',
    highlights: [
      'Same-day and walk-in appointments',
      'Flu, strep, COVID & RSV testing on-site',
      'Minor wound care, lacerations & sutures',
      'Sprains, strains & minor fractures (X-ray on-site)',
      'Ear, sinus & respiratory infections',
      'UTI diagnosis & treatment',
    ],
    whoItsFor: ['Anyone who needs same-day care', 'Patients avoiding long ER waits', 'Established & new patients alike'],
    iconBg:    'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    id:               'preventive-wellness',
    title:            'Preventive Wellness',
    shortDescription: 'Screenings, immunizations, and lifestyle counseling designed to keep you healthy before problems arise.',
    overview:         'Prevention is the most powerful medicine. Our preventive wellness program goes beyond the annual physical — we partner with you to identify risk factors early, stay current on screenings, and build healthy habits that protect your long-term wellbeing. We\'d much rather catch something at Stage 1 than treat it at Stage 4.',
    highlights: [
      'Age & gender-appropriate cancer screenings',
      'Adult & childhood immunizations',
      'Blood pressure, cholesterol & diabetes screening',
      'Cardiovascular risk assessment',
      'Nutrition & weight management counseling',
      'Mental health screening (PHQ-9, GAD-7)',
    ],
    whoItsFor: ['Health-conscious adults', 'Patients with family history of chronic disease', 'Anyone due for annual screenings'],
    iconBg:    'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    id:               'chronic-disease',
    title:            'Chronic Disease Management',
    shortDescription: 'Ongoing, personalized care for diabetes, hypertension, asthma, and other long-term conditions.',
    overview:         'Living with a chronic condition doesn\'t have to mean living around it. Our chronic disease management program provides structured, proactive care plans tailored to your specific diagnosis and lifestyle. We monitor your progress, adjust your treatment, and coordinate with specialists so your condition is managed — not just controlled.',
    highlights: [
      'Type 1 & Type 2 diabetes (A1C monitoring, insulin management)',
      'Hypertension & cardiovascular disease',
      'Asthma & COPD management',
      'Hypothyroidism & thyroid disorders',
      'Anxiety & depression (ongoing medication management)',
      'Quarterly check-ins & lab monitoring',
    ],
    whoItsFor: ['Patients with existing diagnoses', 'Those recently diagnosed seeking a long-term care team', 'Patients transitioning from specialist care'],
    iconBg:    'bg-purple-50',
    iconColor: 'text-purple-600',
  },
]

export const PROVIDERS = [
  {
    id:          'dr-kim',
    name:        'Dr. Sarah Kim, MD',
    title:       'Family Medicine · Medical Director',
    shortBio:    'Dr. Kim brings over 12 years of experience in family medicine with a focus on preventive care and patient education.',
    fullBio:     'Dr. Kim founded Sunrise Family Clinic in 2009 with a vision of making high-quality primary care accessible to every family in Los Angeles. She completed her residency at Cedars-Sinai Medical Center and a fellowship in Preventive Medicine at UCLA. She is fluent in English and Korean, and has been recognized three consecutive years by Los Angeles Magazine as a "Top Doctor." Outside the clinic, she volunteers with CityImpact LA\'s free health screening program.',
    credentials: ['MD — UCLA David Geffen School of Medicine', 'Residency — Cedars-Sinai Medical Center', 'Fellowship — Preventive Medicine, UCLA', 'Board Certified — American Board of Family Medicine'],
    specialties: ['Preventive Medicine', 'Women\'s Health', 'Pediatric Care', 'Chronic Disease Management'],
    image:       'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    languages:   ['English', 'Korean'],
  },
  {
    id:          'dr-torres',
    name:        'Dr. Michael Torres, MD',
    title:       'Internal Medicine · Senior Physician',
    shortBio:    'Dr. Torres specializes in managing complex, multi-system conditions with a passion for bridging primary and specialty care.',
    fullBio:     'Dr. Torres joined Sunrise Family Clinic in 2013 after completing his internal medicine residency at USC Keck Medical Center. He is deeply committed to serving Los Angeles\' Latino community and has been instrumental in launching Sunrise\'s Spanish-language health education series. His clinical interests include cardiometabolic disease, diabetes management, and complex multi-system cases that benefit from coordinated primary care. He is a fellow of the American College of Physicians.',
    credentials: ['MD — University of Southern California, Keck School of Medicine', 'Residency — Internal Medicine, USC Keck Medical Center', 'Fellow — American College of Physicians', 'Board Certified — American Board of Internal Medicine'],
    specialties: ['Internal Medicine', 'Cardiometabolic Disease', 'Men\'s Health', 'Diabetes Management'],
    image:       'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    languages:   ['English', 'Spanish'],
  },
]

export const TESTIMONIALS = [
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

export const STATS = [
  { value: '15+',   label: 'Years Serving LA' },
  { value: '8,000+', label: 'Patients Served' },
  { value: '4.9★',  label: 'Average Rating' },
  { value: '2',     label: 'Board-Certified Physicians' },
]

export const VALUES = [
  {
    title:       'Compassion First',
    description: 'Every patient deserves to feel heard, respected, and cared for as an individual — not rushed through a system.',
  },
  {
    title:       'Clinical Excellence',
    description: 'We stay current on evidence-based guidelines so your care reflects the latest and safest medical standards.',
  },
  {
    title:       'Accessibility',
    description: 'Same-day appointments, Saturday hours, telehealth, and in-network billing ensure care is never out of reach.',
  },
  {
    title:       'Community Roots',
    description: 'Los Angeles is our home. We\'re committed to the neighborhoods we serve through outreach, education, and affordable care.',
  },
]
