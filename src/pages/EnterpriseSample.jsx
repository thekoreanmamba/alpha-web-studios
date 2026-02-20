import { Outlet } from 'react-router-dom'
import { SampleLayout }      from '../components/sample-site/SampleLayout.jsx'
import { EnterpriseHeader }  from '../components/sample-site/EnterpriseHeader.jsx'
import { EnterpriseFooter }  from '../components/sample-site/EnterpriseFooter.jsx'
import { ScrollToTop }       from '../components/sample-site/ScrollToTop.jsx'
import { CLINIC, NAV_LINKS, DEPARTMENTS, LOCATIONS } from '../data/enterprise-site.js'
import { useNoIndex }        from '../hooks/useNoIndex.js'

export function EnterpriseSample() {
  useNoIndex()
  return (
    <SampleLayout tier="Enterprise">
      <ScrollToTop />
      <EnterpriseHeader
        clinicName={CLINIC.name}
        homeHref={CLINIC.homeHref}
        navLinks={NAV_LINKS}
        phone={CLINIC.phone}
        ctaLabel="Request Appointment"
        ctaHref="/enterprise/contact"
        locationsHref="/enterprise/locations"
      />
      <Outlet />
      <EnterpriseFooter
        clinicName={CLINIC.name}
        tagline={CLINIC.tagline}
        phone={CLINIC.phone}
        email={CLINIC.email}
        navLinks={NAV_LINKS}
        departments={DEPARTMENTS.map(d => ({ name: d.name, slug: d.slug }))}
        locations={LOCATIONS}
        homeHref={CLINIC.homeHref}
      />
    </SampleLayout>
  )
}
