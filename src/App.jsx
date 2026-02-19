/**
 * App.jsx — section ordering is the source of truth for page IA.
 *
 * SECTION ORDER (post-fixes):
 *  1. Nav
 *  2. Hero
 *  3. Industries
 *  4. PricingTiers      ← FIX #1: 3 tiers ONLY (Core, Professional, Enterprise)
 *  5. Process
 *  6. Maintenance
 *  7. MicrositeCard     ← FIX #2 + #3: redesigned card, placed ABOVE AddOns
 *  8. AddOns + À La Carte
 *  9. WhyAlpha
 * 10. CTA
 * 11. Footer
 *
 * WHY MicrositeCard sits above AddOns:
 * The Microsite is a complete deliverable (a website), not a granular
 * service. Placing it before À La Carte preserves the product hierarchy:
 *   Full packages → Smaller package → Component services
 * Prospects who can't commit to a main tier discover the Microsite as a
 * natural stepping stone, before they scroll into individual line items.
 */
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

export default function App() {
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
      {/* MicrositeCard: separate from main tiers, above À La Carte */}
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
