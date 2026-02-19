import { Routes, Route } from 'react-router-dom'

import { Nav }           from './components/Nav.jsx'
import { Hero }          from './components/Hero.jsx'
import { Industries }    from './components/Industries.jsx'
import { PricingTiers }  from './components/PricingTiers.jsx'
import { Process }       from './components/Process.jsx'
import { Maintenance }   from './components/Maintenance.jsx'
import { MicrositeCard } from './components/MicrositeCard.jsx'
import { AddOns }        from './components/AddOns.jsx'
import { WhyAlpha }      from './components/WhyAlpha.jsx'
import { CTA }           from './components/CTA.jsx'
import { Footer }        from './components/Footer.jsx'
import { LineDivider }   from './components/ui/LineDivider.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

// Core sample site
import { CoreSample }          from './pages/CoreSample.jsx'
import { CoreHome }            from './pages/core/CoreHome.jsx'
import { CoreAbout }           from './pages/core/CoreAbout.jsx'
import { CoreServices }        from './pages/core/CoreServices.jsx'
import { CoreTeam }            from './pages/core/CoreTeam.jsx'
import { CoreContact }         from './pages/core/CoreContact.jsx'

// Enterprise sample site
import { EnterpriseSample }         from './pages/EnterpriseSample.jsx'
import { EnterpriseHome }           from './pages/enterprise/EnterpriseHome.jsx'
import { EnterpriseAbout }          from './pages/enterprise/EnterpriseAbout.jsx'
import { EnterpriseSpecialties }    from './pages/enterprise/EnterpriseSpecialties.jsx'
import { EnterpriseLocations }      from './pages/enterprise/EnterpriseLocations.jsx'
import { EnterpriseProviders }      from './pages/enterprise/EnterpriseProviders.jsx'
import { EnterprisePatients }       from './pages/enterprise/EnterprisePatients.jsx'
import { EnterpriseContact }        from './pages/enterprise/EnterpriseContact.jsx'
import { Cardiology }               from './pages/enterprise/specialties/Cardiology.jsx'
import { Orthopedics }              from './pages/enterprise/specialties/Orthopedics.jsx'
import { Neurology }                from './pages/enterprise/specialties/Neurology.jsx'
import { WomensHealth }             from './pages/enterprise/specialties/WomensHealth.jsx'
import { PrimaryCare }              from './pages/enterprise/specialties/PrimaryCare.jsx'
import { Oncology }                 from './pages/enterprise/specialties/Oncology.jsx'

// Professional sample site
import { ProfessionalSample }      from './pages/ProfessionalSample.jsx'
import { ProfessionalHome }        from './pages/professional/ProfessionalHome.jsx'
import { ProfessionalAbout }       from './pages/professional/ProfessionalAbout.jsx'
import { ProfessionalServices }    from './pages/professional/ProfessionalServices.jsx'
import { ProfessionalTechnology }  from './pages/professional/ProfessionalTechnology.jsx'
import { ProfessionalTeam }        from './pages/professional/ProfessionalTeam.jsx'
import { ProfessionalContact }     from './pages/professional/ProfessionalContact.jsx'

function MarketingPage() {
  useScrollReveal()
  return (
    <>
      <Nav />
      <Hero />
      <LineDivider />
      <Industries />
      <LineDivider />
      <PricingTiers />
      <LineDivider />
      <Process />
      <LineDivider />
      <Maintenance />
      <LineDivider />
      <MicrositeCard />
      <LineDivider />
      <AddOns />
      <LineDivider />
      <WhyAlpha />
      <LineDivider />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />

      {/* Core sample site */}
      <Route path="/core" element={<CoreSample />}>
        <Route index           element={<CoreHome />} />
        <Route path="about"    element={<CoreAbout />} />
        <Route path="services" element={<CoreServices />} />
        <Route path="team"     element={<CoreTeam />} />
        <Route path="contact"  element={<CoreContact />} />
      </Route>

      {/* Professional sample site */}
      <Route path="/professional" element={<ProfessionalSample />}>
        <Route index              element={<ProfessionalHome />} />
        <Route path="about"       element={<ProfessionalAbout />} />
        <Route path="services"    element={<ProfessionalServices />} />
        <Route path="technology"  element={<ProfessionalTechnology />} />
        <Route path="team"        element={<ProfessionalTeam />} />
        <Route path="contact"     element={<ProfessionalContact />} />
      </Route>

      {/* Enterprise sample site */}
      <Route path="/enterprise" element={<EnterpriseSample />}>
        <Route index                      element={<EnterpriseHome />} />
        <Route path="about"               element={<EnterpriseAbout />} />
        <Route path="specialties"         element={<EnterpriseSpecialties />} />
        <Route path="specialties/cardiology"    element={<Cardiology />} />
        <Route path="specialties/orthopedics"   element={<Orthopedics />} />
        <Route path="specialties/neurology"     element={<Neurology />} />
        <Route path="specialties/womens-health" element={<WomensHealth />} />
        <Route path="specialties/primary-care"  element={<PrimaryCare />} />
        <Route path="specialties/oncology"      element={<Oncology />} />
        <Route path="locations"           element={<EnterpriseLocations />} />
        <Route path="providers"           element={<EnterpriseProviders />} />
        <Route path="patients"            element={<EnterprisePatients />} />
        <Route path="contact"             element={<EnterpriseContact />} />
      </Route>
    </Routes>
  )
}
