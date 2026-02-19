/**
 * Badge — shared across tiers, maintenance plans, and sections.
 * variant: 'blue' | 'teal' | 'purple' | 'popular'
 */
const variantClasses = {
  blue:    'bg-blue-500/10   text-blue-300   border border-blue-500/28',
  teal:    'bg-teal-400/10   text-teal-300   border border-teal-400/30',
  purple:  'bg-purple-500/10 text-purple-300 border border-purple-500/28',
  green:   'bg-green-500/10  text-green-300  border border-green-500/28',
  popular: 'bg-gradient-to-r from-teal-400 to-cyan-400 text-navy-950 font-black shadow-[0_0_18px_rgba(62,207,178,0.35)]',
}

export function Badge({ children, variant = 'blue', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-[10px] font-bold tracking-[0.14em] uppercase
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
