import { DEPARTMENTS, PROVIDERS } from '../../../data/enterprise-site.js'
import { SpecialtyPageTemplate } from './SpecialtyPageTemplate.jsx'

const ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 12.5l4 4 11-11" /><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
  </svg>
)

export function Oncology() {
  const dept     = DEPARTMENTS.find(d => d.id === 'oncology')
  const provider = PROVIDERS.find(p => p.id === dept.providerId)
  return <SpecialtyPageTemplate department={dept} provider={provider} deptIcon={ICON} />
}
