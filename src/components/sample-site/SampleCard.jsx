/**
 * SampleCard — generic card shell for sample clinic sites.
 *
 * Props:
 *   className — extra Tailwind classes
 *   hover     — boolean, whether to apply hover lift
 *   children
 */
export function SampleCard({ className = '', hover = true, children }) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-100 shadow-sm p-6
        ${hover ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-100' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/**
 * SampleServiceCard — icon + title + description, used in Services section.
 *
 * Props:
 *   icon      — SVG path string or JSX
 *   title
 *   description
 *   iconBg    — Tailwind bg class (default blue-50)
 *   iconColor — Tailwind text class (default text-blue-600)
 */
export function SampleServiceCard({ icon, title, description, iconBg = 'bg-blue-50', iconColor = 'text-blue-600' }) {
  return (
    <SampleCard>
      <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <h3 className="text-[16px] font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </SampleCard>
  )
}

/**
 * SampleProviderCard — headshot + name + credentials + bio.
 *
 * Props:
 *   image     — image URL
 *   name
 *   title     — e.g. "MD, Family Medicine"
 *   bio
 */
export function SampleProviderCard({ image, name, title, bio }) {
  return (
    <SampleCard className="flex flex-col sm:flex-row gap-5">
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-top flex-shrink-0"
      />
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-0.5">{name}</h3>
        <p className="text-blue-600 text-sm font-medium mb-3">{title}</p>
        <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
      </div>
    </SampleCard>
  )
}

/**
 * SampleTestimonialCard — star rating + quote + author.
 *
 * Props:
 *   quote
 *   author
 *   location  — e.g. "Los Angeles, CA"
 *   stars     — number 1–5 (default 5)
 *   source    — e.g. "Google Review"
 */
export function SampleTestimonialCard({ quote, author, location, stars = 5, source = 'Google Review' }) {
  return (
    <SampleCard className="flex flex-col justify-between">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 text-[14px] leading-relaxed italic mb-5">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-900 font-semibold text-sm">{author}</p>
          {location && <p className="text-slate-400 text-[12px]">{location}</p>}
        </div>
        <span className="text-[10px] font-semibold tracking-wide uppercase text-slate-400 bg-gray-100 px-2 py-1 rounded-full">
          {source}
        </span>
      </div>
    </SampleCard>
  )
}
