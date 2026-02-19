/**
 * The 4 primary website packages.
 * The Landing Page / Microsite is NOT in this array —
 * it lives in its own MicrositeCard component.
 *
 * `inherits` — when set, TierCard shows an "Everything in X +" badge
 * and the features list represents only what's NEW at this tier.
 */
export const tiers = [
  {
    id: 'basic',
    label: 'Starter',
    samplePath: '/basic',
    labelVariant: 'green',
    name: 'Starter Website',
    description:
      'A polished single-page website — the fastest way to get a professional online presence without a large investment.',
    priceFrom: '$1,200',
    priceTo: '$2,000',
    timeline: '1–2 Weeks',
    bestFor: ['Solo Practitioners', 'New Startups', 'Side Practices', 'Quick Launch'],
    bestForVariant: 'green',
    features: [
      'Single-page scrolling design',
      '4–6 custom sections',
      'Contact info, hours & location display',
      'Mobile-responsive layout',
      'Basic on-page SEO & go-live support',
    ],
    cta: 'Start With Starter',
    cardClass: 'tier-basic',
    accentColor: 'green',
  },
  {
    id: 'core',
    label: 'Essential',
    samplePath: '/core',
    labelVariant: 'blue',
    inherits: 'Starter',
    name: 'Core Website',
    description:
      'Everything you need to establish a clean, professional online presence and start attracting clients.',
    priceFrom: '$3,500',
    priceTo: '$4,500',
    timeline: '2–3 Weeks',
    bestFor: ['Solo Practitioners', 'New Practices', 'Simple Online Presence'],
    bestForVariant: 'blue',
    features: [
      '3–5 pages (Home, About, Services, Team, Contact)',
      'Contact form + Google Maps integration',
      'Professional theme customization',
      'Google Analytics & Search Console setup',
      'Local business schema markup',
    ],
    cta: 'Start With Core',
    cardClass: 'tier-core',
    accentColor: 'blue',
  },
  {
    id: 'professional',
    label: '★ Most Popular',
    samplePath: '/professional',
    labelVariant: 'popular',
    inherits: 'Core',
    name: 'Professional Website',
    description:
      'Custom design with advanced features for established practices ready to grow their digital presence.',
    priceFrom: '$5,000',
    priceTo: '$8,000',
    timeline: '3–5 Weeks',
    bestFor: [
      'Med Spas & Dermatology',
      'Urgent Care Centers',
      'Multi-Provider Offices',
      'Content Marketing',
    ],
    bestForVariant: 'teal',
    features: [
      '6–10 pages, fully custom design',
      'Detailed service & treatment pages',
      'Provider profiles & team bios',
      'Blog / resources section setup',
      'Advanced SEO strategy & optimization',
      'Image galleries or before/after sections',
    ],
    cta: 'Start With Professional',
    cardClass: 'tier-professional',
    accentColor: 'teal',
  },
  {
    id: 'enterprise',
    label: 'Premium',
    samplePath: '/enterprise',
    labelVariant: 'purple',
    inherits: 'Professional',
    name: 'Enterprise Website',
    description:
      'Full-scale, fully custom solutions for large organizations, specialty centers, and multi-location practices.',
    priceFrom: '$8,500',
    priceTo: '$15,000+',
    timeline: '5–8 Weeks',
    bestFor: [
      'Large Medical Groups',
      'Multi-Location Practices',
      'Specialty Centers',
      'High-End Branding',
    ],
    bestForVariant: 'purple',
    features: [
      'Online booking / scheduling integration',
      'Advanced forms & patient portal links',
      'Multi-location support',
      'E-commerce capabilities',
      'Security hardening & performance optimization',
      'Priority support & hands-on training',
    ],
    cta: 'Request Enterprise Quote',
    cardClass: 'tier-enterprise',
    accentColor: 'purple',
  },
]
