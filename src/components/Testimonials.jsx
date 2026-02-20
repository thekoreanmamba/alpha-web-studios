/**
 * Testimonials — infinite dual-row scrolling carousel of client reviews.
 * Row 1 scrolls left, Row 2 scrolls right for a premium layered feel.
 * Pure CSS animation — no JS or library required.
 */
import { SectionHeader } from './ui/SectionHeader.jsx'

const REVIEWS = [
  {
    quote: "Jay took the time to understand exactly what made our med spa different. The result was a website that finally felt like us — not just another template.",
    author: 'Priya Sharma',
    role: 'Owner, Glow Aesthetics & Laser',
    stars: 5,
  },
  {
    quote: "We launched our new site in under three weeks. The design is stunning, and patients constantly comment on how easy it is to navigate.",
    author: 'Dr. Marcus Webb',
    role: 'Orthopedic Surgeon, Austin TX',
    stars: 5,
  },
  {
    quote: "I've worked with several web agencies before. Alpha Web Studios is in a completely different league — worth every single penny.",
    author: 'Dr. Christopher Patel',
    role: 'Director, CityUrgent Care Centers',
    stars: 5,
  },
  {
    quote: "Jay was incredibly responsive throughout the entire project. Every revision was handled quickly and the final product exceeded our expectations.",
    author: 'Thomas Reyes',
    role: 'Practice Administrator, Reyes Family Medicine',
    stars: 5,
  },
  {
    quote: "The attention to detail on our enterprise site was remarkable. Multiple locations, dozens of providers — all organized flawlessly.",
    author: 'Dr. Angela Foster',
    role: 'Chief Medical Officer, Apex Health Group',
    stars: 5,
  },
  {
    quote: "Our new website has completely changed how patients perceive our practice. Professional, fast, and beautifully designed from top to bottom.",
    author: 'Dr. Kenji Nakamura',
    role: 'Sports Medicine & Rehabilitation',
    stars: 5,
  },
  {
    quote: "Jay genuinely cares about outcomes, not just deliverables. He asked the right questions and built us a site that actually converts visitors into patients.",
    author: 'Michelle Torres',
    role: 'Marketing Director, Vitality Dermatology',
    stars: 5,
  },
  {
    quote: "From our very first call to launch day, the process was smooth and completely stress-free. Alpha Web Studios handled absolutely everything.",
    author: 'Dr. Lorena Cruz',
    role: "Women's Health Associates of Dallas",
    stars: 5,
  },
  {
    quote: "The SEO work they built in made an immediate difference. We're showing up in local searches we never appeared in before. Highly recommend.",
    author: 'Dr. Alicia Monroe',
    role: 'Pediatrics & Adolescent Medicine',
    stars: 5,
  },
  {
    quote: "I was skeptical about the timeline, but they delivered ahead of schedule. Our online appointment requests have gone up noticeably since launch.",
    author: 'Dr. Sandra Kim',
    role: 'Dermatology Associates of Houston',
    stars: 5,
  },
  {
    quote: "Jay built our Core package site and the level of care was exceptional. It's exactly what a growing practice needs — clean, fast, and professional.",
    author: 'Dr. Brian Walsh',
    role: 'Internal Medicine, Walsh Wellness Clinic',
    stars: 5,
  },
  {
    quote: "Switching to Alpha Web Studios was the best decision we made for our online presence. The before-and-after difference is night and day.",
    author: 'Dr. Renata Silva',
    role: 'Director, Premier Spine & Rehab',
    stars: 5,
  },
]

/* Split into two rows for the dual-scroll effect */
const ROW_1 = REVIEWS.slice(0, 6)
const ROW_2 = REVIEWS.slice(6, 12)

const STARS = Array(5).fill(null)

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#3ECFB2" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="review-card flex-shrink-0 w-[320px] mx-3 p-6 rounded-[18px] flex flex-col gap-3"
      style={{
        background: 'linear-gradient(160deg, rgba(10,22,50,0.72) 0%, rgba(4,12,30,0.80) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {STARS.map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-[13.5px] leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="pt-1 border-t border-white/[0.06]">
        <p className="text-white text-[13px] font-semibold">{review.author}</p>
        <p className="text-slate-500 text-[11.5px] mt-0.5">{review.role}</p>
      </div>
    </div>
  )
}

function ScrollRow({ reviews, direction = 'left', speed = 40 }) {
  /* Duplicate the array so the loop is seamless */
  const doubled = [...reviews, ...reviews]
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #030B18, transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: 'linear-gradient(270deg, #030B18, transparent)' }} />

      <div
        className={`flex ${animClass}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">

      <SectionHeader
        eyebrow="Client Reviews"
        headline={<>Practices That Trust<br /><span className="text-gradient-teal">Alpha Web Studios</span></>}
        subtitle="Real feedback from real healthcare practices — from solo practitioners to large multi-location groups."
        className="mb-10"
      />

      <div className="flex flex-col gap-5">
        <ScrollRow reviews={ROW_1} direction="left"  speed={45} />
        <ScrollRow reviews={ROW_2} direction="right" speed={38} />
      </div>

    </section>
  )
}
