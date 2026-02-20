/**
 * useNoIndex — injects a noindex meta tag for the duration a component is mounted.
 * Used on demo/sample site routes (/basic, /core, /professional, /enterprise)
 * so search engines do not index placeholder content.
 */
import { useEffect } from 'react'

export function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])
}
