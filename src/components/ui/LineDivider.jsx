export function LineDivider({ className = '' }) {
  return (
    <div
      className={`h-px max-w-6xl mx-auto ${className}`}
      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }}
    />
  )
}
