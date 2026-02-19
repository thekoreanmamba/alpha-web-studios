import { DEPARTMENTS, PROVIDERS } from '../../../data/enterprise-site.js'
import { SpecialtyPageTemplate } from './SpecialtyPageTemplate.jsx'

const ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
  </svg>
)

export function Orthopedics() {
  const dept     = DEPARTMENTS.find(d => d.id === 'orthopedics')
  const provider = PROVIDERS.find(p => p.id === dept.providerId)
  return <SpecialtyPageTemplate department={dept} provider={provider} deptIcon={ICON} />
}
