/**
 * Testimonials — single infinite-scrolling row of client reviews.
 * Pure CSS marquee animation, pauses on hover.
 */
import { SectionHeader } from './ui/SectionHeader.jsx'

const REVIEWS = [
  {
    quote: "Jay took the time to understand exactly what made our practice different. The result was a website that finally felt like us — not just another template.",
    author: 'Priya S.',
    role: 'Owner — G**** Aesthetics & Laser',
    stars: 5,
  },
  {
    quote: "We launched our new site in under three weeks. The design is stunning, and patients constantly comment on how easy it is to navigate.",
    author: 'Dr. Marcus W.',
    role: 'Orthopedic Surgeon — S******* Orthopedic Center',
    stars: 5,
  },
  {
    quote: "Jay was incredibly responsive throughout. Every revision was handled quickly and the final product exceeded our expectations.",
    author: 'Thomas R.',
    role: 'Practice Administrator — R***** Family Medicine',
    stars: 5,
  },
  {
    quote: "The attention to detail on our enterprise site was remarkable. Multiple locations, dozens of providers — all organized flawlessly.",
    author: 'Dr. Angela F.',
    role: 'Chief Medical Officer — A**** Health Group',
    stars: 5,
  },
  {
    quote: "Jay genuinely cares about outcomes, not just deliverables. He asked the right questions and built a site that actually converts visitors into patients.",
    author: 'Michelle T.',
    role: 'Marketing Director — V******* Dermatology',
    stars: 5,
  },
  {
    quote: "I've worked with several agencies before. Alpha Web Studios is in a completely different league — the quality and communication are unmatched.",
    author: 'Dr. Christopher P.',
    role: 'Director — C******* Urgent Care Centers',
    stars: 5,
  },
  {
    quote: "From our first call to launch day, the process was smooth and stress-free. Alpha Web Studios handled everything and delivered ahead of schedule.",
    author: 'Dr. Lorena C.',
    role: "Women's Health — W******* Medical Associates",
    stars: 5,
  },
]

const STARS = Array(5).fill(null)

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#3ECFB2" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ReviewCard({ review }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] mx-3 p-6 rounded-[18px] flex flex-col gap-3"
      style={{
        background: 'linear-gradient(160deg, rgba(10,22,50,0.72) 0%, rgba(4,12,30,0.80) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="flex gap-0.5">
        {STARS.map((_, i) => <StarIcon key={i} />)}
      </div>
      <p className="text-slate-300 text-[13.5px] leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="pt-2 border-t border-white/[0.06]">
        <p className="text-white text-[13px] font-semibold">{review.author}</p>
        <p className="text-slate-500 text-[11.5px] mt-0.5">{review.role}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const doubled = [...REVIEWS, ...REVIEWS]

  return (
    <section id="testimonials" className="py-20 overflow-hidden">

      <SectionHeader
        eyebrow="Client Reviews"
        headline={<>Trusted by Practices<br /><span className="text-gradient-teal">Across the Country</span></>}
        subtitle="Real feedback from healthcare practices — from solo providers to large multi-location groups."
        className="mb-10"
      />

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10"
          style={{ background: 'linear-gradient(90deg, #030B18, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10"
          style={{ background: 'linear-gradient(270deg, #030B18, transparent)' }} />

        <div
          className="flex animate-marquee-left"
          style={{ '--marquee-speed': '42s' }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

    </section>
  )
}
