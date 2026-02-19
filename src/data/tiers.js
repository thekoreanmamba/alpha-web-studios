/**
 * The 3 primary website packages.
 * The Landing Page / Microsite is NOT in this array —
 * it lives in its own MicrositeCard component.
 */
export const tiers = [
  {
    id: 'core',
    label: 'Essential',
    samplePath: '/core',
    labelVariant: 'blue',
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
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form + Google Maps',
      'Professional theme customization',
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
      '6–10 pages with custom layouts',
      'Detailed service / treatment pages',
      'Provider profiles & team bios',
      'Blog / resources section setup',
      'Advanced SEO optimization',
      'Fully custom design — not template-based',
      'Image galleries or before/after sections',
    ],
    cta: 'Start With Professional',
    cardClass: 'tier-professional',
    accentColor: 'teal',
  },
  {
    id: 'enterprise',
    label: 'Premium',
    labelVariant: 'purple',
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
      '10+ pages, fully custom design',
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
