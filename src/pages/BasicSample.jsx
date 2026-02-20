import { Outlet } from 'react-router-dom'
import { SampleLayout } from '../components/sample-site/SampleLayout.jsx'
import { BasicHeader }  from '../components/sample-site/BasicHeader.jsx'
import { BasicFooter }  from '../components/sample-site/BasicFooter.jsx'
import { ScrollToTop }  from '../components/sample-site/ScrollToTop.jsx'
import { useNoIndex }   from '../hooks/useNoIndex.js'

export function BasicSample() {
  useNoIndex()
  return (
    <SampleLayout tier="Starter">
      <ScrollToTop />
      <BasicHeader />
      <Outlet />
      <BasicFooter />
    </SampleLayout>
  )
}
