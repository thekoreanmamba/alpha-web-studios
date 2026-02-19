import { DEPARTMENTS, PROVIDERS } from '../../../data/enterprise-site.js'
import { SpecialtyPageTemplate } from './SpecialtyPageTemplate.jsx'

const ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

export function Neurology() {
  const dept     = DEPARTMENTS.find(d => d.id === 'neurology')
  const provider = PROVIDERS.find(p => p.id === dept.providerId)
  return <SpecialtyPageTemplate department={dept} provider={provider} deptIcon={ICON} />
}
