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
import { CoreSample }         from './pages/CoreSample.jsx'
import { ProfessionalSample } from './pages/ProfessionalSample.jsx'

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
      <Route path="/"     element={<MarketingPage />} />
      <Route path="/core"         element={<CoreSample />} />
      <Route path="/professional" element={<ProfessionalSample />} />
    </Routes>
  )
}
