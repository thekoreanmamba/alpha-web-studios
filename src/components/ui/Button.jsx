/**
 * Button — all CTA variants across the site.
 * variant: 'primary' | 'teal' | 'ghost' | 'blue-soft' | 'purple-soft' | 'teal-soft'
 */
const variantClasses = {
  primary: `
    bg-gradient-to-br from-blue-600 to-teal-500
    text-white shadow-[0_4px_22px_rgba(37,99,235,0.28)]
    hover:shadow-[0_8px_36px_rgba(37,99,235,0.42)]
    hover:-translate-y-0.5
  `,
  teal: `
    bg-gradient-to-br from-teal-400 to-cyan-400
    text-navy-950 font-bold shadow-[0_4px_26px_rgba(62,207,178,0.32)]
    hover:shadow-[0_10px_40px_rgba(62,207,178,0.5)]
    hover:-translate-y-0.5
  `,
  ghost: `
    bg-transparent text-slate-400
    border border-white/10
    hover:border-teal-400/40 hover:text-teal-400 hover:bg-teal-400/5
    hover:-translate-y-px
  `,
  'blue-soft': `
    bg-blue-500/10 text-blue-300
    border border-blue-500/28
    hover:bg-blue-500/22 hover:border-blue-500/50 hover:text-white
    hover:-translate-y-px
  `,
  'purple-soft': `
    bg-purple-500/10 text-purple-300
    border border-purple-500/28
    hover:bg-purple-500/22 hover:border-purple-500/50 hover:text-white
    hover:-translate-y-px
  `,
  'teal-soft': `
    bg-teal-400/10 text-teal-300
    border border-teal-400/28
    hover:bg-teal-400/22 hover:border-teal-400/50 hover:text-white
    hover:-translate-y-px
  `,
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  fullWidth = false,
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-6 py-3.5 text-[14px]',
    lg: 'px-8 py-4 text-[15px]',
  }

  const base = `
    inline-flex items-center justify-center gap-2 rounded-[10px]
    font-semibold whitespace-nowrap cursor-pointer transition-all duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}

export function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
