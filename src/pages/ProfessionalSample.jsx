import { Outlet } from 'react-router-dom'
import { SampleLayout }  from '../components/sample-site/SampleLayout.jsx'
import { SampleHeader }  from '../components/sample-site/SampleHeader.jsx'
import { SampleFooter }  from '../components/sample-site/SampleFooter.jsx'
import { ScrollToTop }   from '../components/sample-site/ScrollToTop.jsx'
import { CLINIC, NAV_LINKS, HOURS } from '../data/professional-site.js'
import { useNoIndex }    from '../hooks/useNoIndex.js'

export function ProfessionalSample() {
  useNoIndex()
  return (
    <SampleLayout tier="Professional">
      <ScrollToTop />
      <SampleHeader
        clinicName={CLINIC.name}
        homeHref={CLINIC.homeHref}
        navLinks={NAV_LINKS}
        phone={CLINIC.phone}
        ctaLabel="Book a Consultation"
        ctaHref="/professional/contact"
      />
      <Outlet />
      <SampleFooter
        clinicName={CLINIC.name}
        tagline={CLINIC.tagline}
        address={CLINIC.address}
        phone={CLINIC.phone}
        email={CLINIC.email}
        hours={HOURS}
        navLinks={NAV_LINKS}
      />
    </SampleLayout>
  )
}
