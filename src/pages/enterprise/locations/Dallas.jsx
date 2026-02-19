import { LocationPageTemplate } from './LocationPageTemplate.jsx'
import { LOCATIONS } from '../../../data/enterprise-site.js'

export function Dallas() {
  const loc = LOCATIONS.find((l) => l.id === 'dallas')
  return <LocationPageTemplate loc={loc} />
}
