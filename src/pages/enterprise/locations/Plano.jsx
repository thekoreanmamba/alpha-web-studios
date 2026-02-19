import { LocationPageTemplate } from './LocationPageTemplate.jsx'
import { LOCATIONS } from '../../../data/enterprise-site.js'

export function Plano() {
  const loc = LOCATIONS.find((l) => l.id === 'plano')
  return <LocationPageTemplate loc={loc} />
}
