/** Luminary Skin & Wellness — shared data for all /professional/* pages */

export const CLINIC = {
  name:     'Luminary Skin & Wellness',
  tagline:  'Board-certified dermatology and advanced aesthetic medicine — where clinical precision meets personalized care.',
  phone:    '(480) 555-0174',
  email:    'hello@luminaryskin.com',
  address:  { street: '8900 E Pinnacle Peak Rd, Suite 300', city: 'Scottsdale', state: 'AZ', zip: '85255' },
  homeHref: '/professional',
  founded:  '2015',
}

export const NAV_LINKS = [
  { label: 'Home',       href: '/professional' },
  { label: 'About',      href: '/professional/about' },
  { label: 'Services',   href: '/professional/services' },
  { label: 'Technology', href: '/professional/technology' },
  { label: 'Team',       href: '/professional/team' },
  { label: 'Contact',    href: '/professional/contact' },
]

export const HOURS = [
  { days: 'Monday – Thursday', time: '9:00 am – 5:30 pm' },
  { days: 'Friday',            time: '9:00 am – 4:00 pm' },
  { days: 'Saturday',          time: '10:00 am – 2:00 pm' },
  { days: 'Sunday',            time: 'Closed' },
]

export const TRUST_BADGES = [
  'Board-Certified Dermatologists',
  'AADA Member Practice',
  'Complimentary Consultations',
]

export const SERVICES = [
  {
    id:               'medical-dermatology',
    title:            'Medical Dermatology',
    shortDescription: 'Diagnosis and treatment of acne, eczema, psoriasis, rosacea, and other chronic skin conditions.',
    overview:         'Our medical dermatology practice is the clinical foundation of Luminary. We diagnose and treat the full spectrum of skin, hair, and nail conditions — from common concerns like acne and eczema to complex inflammatory diseases. Every patient receives a thorough skin assessment and a customized, evidence-based treatment plan built around their lifestyle.',
    highlights: [
      'Acne & cystic acne (topical, oral, and isotretinoin protocols)',
      'Eczema (atopic dermatitis) & psoriasis management',
      'Rosacea diagnosis & vascular treatment',
      'Hair loss (alopecia areata, androgenetic alopecia)',
      'Nail disorders & fungal infections',
      'Hyperpigmentation & melasma',
    ],
    iconBg:    'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    id:               'cosmetic-injectables',
    title:            'Cosmetic Injectables',
    shortDescription: 'Botox, Dysport, and dermal fillers administered by fellowship-trained injectors for natural-looking results.',
    overview:         'Injectable treatments at Luminary are performed exclusively by our board-certified physicians and our lead PA-C — never delegated to untrained staff. We take a conservative, anatomy-first approach: our goal is to restore balance and refresh your appearance, not alter it. Every treatment begins with a detailed facial assessment and honest consultation.',
    highlights: [
      'Botox & Dysport (forehead, frown lines, crow\'s feet, lip flip)',
      'Juvederm & Restylane filler (lips, cheeks, jawline, under-eye)',
      'Sculptra collagen stimulator (gradual, long-lasting volume)',
      'Kybella (submental fat reduction)',
      'Preventive Botox for patients in their 20s–30s',
      'Combination treatments & full-face rejuvenation planning',
    ],
    iconBg:    'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    id:               'laser-light',
    title:            'Laser & Light Therapy',
    shortDescription: 'BBL photofacial, Halo fractional laser, and IPL treatments for sun damage, pigmentation, and texture.',
    overview:         'Luminary is a certified Sciton training center — among fewer than 200 practices in the country to hold this designation. Our laser suite features the industry\'s most precise, versatile technology, allowing us to treat virtually any skin concern with a level of customization unavailable at most med spas. All laser services are supervised or performed by a physician.',
    highlights: [
      'Halo hybrid fractional laser (resurfacing with minimal downtime)',
      'BBL HERO photofacial (sun damage, redness, age spots)',
      'MOXI laser (gentle resurfacing for all skin tones)',
      'Laser hair removal (face, body, bikini)',
      'Vascular & redness treatments (Excel V)',
      'Tattoo removal (PicoWay picosecond laser)',
    ],
    iconBg:    'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    id:               'skin-cancer',
    title:            'Skin Cancer Screening',
    shortDescription: 'Full-body mole mapping, dermoscopy, and same-week biopsy for suspicious lesions — early detection saves lives.',
    overview:         'Arizona has one of the highest rates of skin cancer in the United States. Early detection is the single most important factor in treatment success. Our skin cancer program includes comprehensive full-body exams, advanced dermoscopic analysis, and on-site Mohs micrographic surgery — the gold standard treatment for basal cell and squamous cell carcinomas with the highest cure rate available.',
    highlights: [
      'Annual full-body skin cancer screenings',
      'Dermoscopic mole analysis & digital mapping',
      'Same-week shave, punch & excisional biopsy',
      'Mohs micrographic surgery (highest cure rate, smallest scar)',
      'Melanoma staging & oncology coordination',
      'High-risk patient monitoring programs',
    ],
    iconBg:    'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    id:               'peels-facials',
    title:            'Chemical Peels & Facials',
    shortDescription: 'Medical-grade VI peels, TCA treatments, and hydrafacial protocols tailored to your skin type and goals.',
    overview:         'Unlike spa facials, our medical-grade treatments are performed by licensed aestheticians working under physician supervision — using concentrations and formulations unavailable in a spa setting. Whether you\'re targeting active acne, uneven texture, fine lines, or dullness, we build a customized peel or facial protocol that fits your skin and your schedule.',
    highlights: [
      'VI Peel (all skin types, including darker complexions)',
      'TCA cross & blended peels (acne scarring, deep texture)',
      'ZO Stimulator peel (lunchtime glow, no downtime)',
      'HydraFacial with personalized boosters',
      'Brightening & pigment-correcting protocols',
      'Series pricing for ongoing skin health maintenance',
    ],
    iconBg:    'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    id:               'body-contouring',
    title:            'Body Contouring',
    shortDescription: 'CoolSculpting Elite and Emtone for non-invasive fat reduction and skin-tightening without surgery or downtime.',
    overview:         'Non-surgical body contouring has advanced significantly in the past five years. At Luminary, we offer the most clinically validated fat-reduction and skin-tightening technologies available — curated from a field crowded with overpromising devices. Our providers help you set realistic expectations, design a treatment plan, and track measurable results.',
    highlights: [
      'CoolSculpting Elite (FDA-cleared fat-freezing, dual applicators)',
      'Emtone (cellulite & skin laxity, combines radiofrequency + pressure)',
      'SkinTyte skin tightening (BBL infrared technology)',
      'Combination treatment planning for optimal results',
      'Before & after photography for objective tracking',
      'Financing available through CareCredit',
    ],
    iconBg:    'bg-purple-50',
    iconColor: 'text-purple-600',
  },
]

export const TECHNOLOGY = [
  {
    id:     'halo',
    name:   'Halo Hybrid Fractional Laser',
    badge:  'Laser',
    short:  'Dual-wavelength laser delivering resurfacing results with dramatically shorter downtime.',
    detail: 'Halo is the world\'s first hybrid fractional laser, combining ablative and non-ablative wavelengths in a single pass. This means we can precisely control the depth of treatment — delivering dramatic resurfacing results (improved tone, texture, pores, fine lines, and pigmentation) with only 3–5 days of social downtime instead of the 10–14 days required by traditional ablative lasers. Luminary is one of fewer than 200 certified Halo training centers in the United States.',
    badge_color: 'bg-amber-100 text-amber-700',
    specs: ['Two wavelengths: 1470nm (ablative) + 2940nm (non-ablative)', 'Treats 25–50% of the skin surface per pass', 'Intelligent thermal sensing for precision dosing', 'Results visible at 1 month, continuing to improve for 6+ months'],
  },
  {
    id:     'bbl',
    name:   'BroadBand Light (BBL HERO)',
    badge:  'Photofacial',
    short:  "Sciton's next-generation IPL — the only technology shown to reverse aging at the cellular level.",
    detail: 'BBL HERO (High Energy Rapid Output) is the fastest, most powerful BBL system available, delivering up to 4x the energy of standard IPL in a fraction of the time. Stanford research has demonstrated that regular BBL treatments don\'t just mask signs of aging — they reprogram gene expression in skin cells to behave younger. We use BBL to address sunspots, redness, rosacea, broken capillaries, and overall skin tone.',
    badge_color: 'bg-teal-100 text-teal-700',
    specs: ['Treats sun damage, vascular lesions, and pigmentation', 'Covers the full face in under 10 minutes', 'Proven gene-expression research from Stanford University', 'No downtime (mild redness resolves in hours)'],
  },
  {
    id:     'coolsculpting',
    name:   'CoolSculpting Elite',
    badge:  'Body',
    short:  'FDA-cleared fat-freezing with dual applicators for 35% more coverage and faster results.',
    detail: 'CoolSculpting Elite is the only FDA-cleared, non-surgical fat-reduction treatment with over 100 published clinical studies behind it. The Elite system features redesigned C-shaped applicators that conform more precisely to the body, treating 35% more tissue per session than original CoolSculpting. We offer dual simultaneous treatment, cutting session time in half while improving comfort throughout.',
    badge_color: 'bg-purple-100 text-purple-700',
    specs: ['FDA-cleared for 9 body areas including abdomen, flanks, thighs, and chin', '20–25% permanent fat reduction per treatment area', 'Dual applicators treat two areas simultaneously', 'Results fully visible at 3 months, no downtime required'],
  },
  {
    id:     'visia',
    name:   'VISIA Complexion Analysis',
    badge:  'Diagnostics',
    short:  'AI-powered 3D skin imaging that quantifies and tracks your skin health across every dimension.',
    detail: 'VISIA is the industry\'s leading complexion analysis system, used by research institutions and dermatology practices worldwide. It captures standardized, multi-spectral images of your skin and quantifies spots, pores, wrinkles, texture, UV damage, red areas, and porphyrins (bacteria) against an age-matched database. Every new patient at Luminary receives a complimentary VISIA scan — giving us an objective baseline to measure the real impact of your treatments over time.',
    badge_color: 'bg-blue-100 text-blue-700',
    specs: ['8 skin analysis categories quantified and scored', 'UV fluorescence reveals subsurface sun damage invisible to the eye', 'Age-matched database comparison (over 50,000 patients)', 'Progress tracking at every visit to measure treatment outcomes'],
  },
]

export const PROVIDERS = [
  {
    id:          'dr-nair',
    name:        'Dr. Priya Nair, MD',
    title:       'Board-Certified Dermatologist · Founder',
    shortBio:    'A Johns Hopkins graduate and fellowship-trained cosmetic dermatologist, Dr. Nair founded Luminary in 2015.',
    fullBio:     'Dr. Priya Nair is a board-certified dermatologist with subspecialty training in cosmetic and laser dermatology. She completed her dermatology residency at Johns Hopkins Hospital and a cosmetic dermatology fellowship at the University of Miami, where she trained under some of the world\'s leading experts in laser physics and injectable techniques. She returned to her home state of Arizona to found Luminary in 2015 with the mission of bringing academic-caliber dermatology care to Scottsdale. Dr. Nair is a national clinical trainer for Sciton laser systems, a member of the American Society for Dermatologic Surgery, and a frequently invited speaker at the American Academy of Dermatology annual meeting. Her research on laser treatment outcomes has been published in the Journal of the American Academy of Dermatology.',
    credentials: [
      'MD — Johns Hopkins University School of Medicine',
      'Dermatology Residency — Johns Hopkins Hospital',
      'Cosmetic Dermatology Fellowship — University of Miami',
      'Board Certified — American Board of Dermatology',
      'Fellow — American Society for Dermatologic Surgery',
    ],
    specialties: ['Cosmetic Laser Dermatology', 'Injectables & Facial Rejuvenation', 'Inflammatory Skin Disease', 'Skin Cancer Surveillance'],
    image:       'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    languages:   ['English', 'Hindi', 'Punjabi'],
  },
  {
    id:          'dr-whitfield',
    name:        'Dr. James Whitfield, MD',
    title:       'Board-Certified Dermatologist',
    shortBio:    'Dr. Whitfield specializes in complex medical dermatology and Mohs surgery for skin cancer.',
    fullBio:     'Dr. James Whitfield joined Luminary in 2017 to lead the clinic\'s medical dermatology and skin cancer programs. He completed dermatology residency training at Mayo Clinic and a Mohs micrographic surgery fellowship at Memorial Sloan Kettering Cancer Center in New York. His research on melanoma early detection has been featured in JAMA Dermatology and presented at the Society for Investigative Dermatology annual conference. Dr. Whitfield is a passionate advocate for routine skin cancer screening in Arizona, where UV exposure levels are among the highest in the country, and has partnered with local schools and community organizations to provide free screenings. Outside the clinic, he is an avid cyclist and amateur astronomer.',
    credentials: [
      'MD — Washington University School of Medicine',
      'Dermatology Residency — Mayo Clinic',
      'Mohs Surgery Fellowship — Memorial Sloan Kettering Cancer Center',
      'Board Certified — American Board of Dermatology',
      'Member — American College of Mohs Surgery',
    ],
    specialties: ['Mohs Micrographic Surgery', 'Melanoma Detection & Staging', 'Inflammatory Dermatology', 'Patch Testing & Contact Dermatitis'],
    image:       'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    languages:   ['English'],
  },
  {
    id:          'sarah-chen',
    name:        'Sarah Chen, PA-C',
    title:       'Physician Assistant · Lead Injector',
    shortBio:    'With 8+ years in aesthetic medicine, Sarah is known for conservative, natural-looking injectable results.',
    fullBio:     'Sarah Chen has been practicing aesthetic medicine for over eight years, specializing in cosmetic injectables and non-surgical facial rejuvenation. She holds a Master of Physician Assistant Studies from Arizona State University and has completed advanced training through the Allergan Medical Institute (Master Injector designation) and Galderma\'s advanced filler training program. Sarah\'s approach is built on a deep understanding of facial anatomy and an unwavering commitment to natural-looking results — she believes the best injectable treatment is one that nobody can identify. She has been invited to speak on injectable technique at regional aesthetics conferences and serves as a KOL (Key Opinion Leader) for Allergan Aesthetics.',
    credentials: [
      'MPAS — Arizona State University',
      'Board Certified — National Commission on Certification of PAs',
      'Master Injector — Allergan Medical Institute',
      'Advanced Filler Certification — Galderma Aesthetics',
    ],
    specialties: ['Botox & Dysport', 'Dermal Fillers', 'Lip Augmentation', 'Non-surgical Facial Contouring'],
    image:       'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    languages:   ['English', 'Mandarin'],
  },
]

export const TESTIMONIALS = [
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
    quote:    "Sarah is the best injector I've seen in Scottsdale. She listened, didn't oversell, and my results look completely natural. I won't go anywhere else.",
    author:   'Michelle T.',
    location: 'Tempe, AZ',
    stars:    5,
    source:   'Yelp Review',
  },
  {
    quote:    'Dr. Whitfield caught a melanoma in situ during a routine mole check. His thoroughness literally saved my life. This clinic is the real deal.',
    author:   'Thomas B.',
    location: 'Chandler, AZ',
    stars:    5,
    source:   'Google Review',
  },
]

export const STATS = [
  { value: '9+',    label: 'Years in Practice' },
  { value: '12K+',  label: 'Patients Treated' },
  { value: '4.97★', label: 'Google Rating' },
  { value: '1,200+', label: 'Five-Star Reviews' },
]

export const AWARDS = [
  { year: '2024', title: 'Best Dermatology Practice', org: 'Scottsdale Living Magazine' },
  { year: '2023', title: 'Top Doctors in Arizona', org: 'Phoenix Magazine (Dr. Nair & Dr. Whitfield)' },
  { year: '2022', title: 'Sciton Center of Excellence', org: 'Sciton Inc. — National Designation' },
  { year: '2021', title: 'Best Med Spa', org: 'East Valley Tribune Readers\' Choice' },
]
