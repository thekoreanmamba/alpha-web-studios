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
    </Routes>
  )
}
