import { LocationPageTemplate } from './LocationPageTemplate.jsx'
import { LOCATIONS } from '../../../data/enterprise-site.js'

export function FortWorth() {
  const loc = LOCATIONS.find((l) => l.id === 'fortworth')
  return <LocationPageTemplate loc={loc} />
}
