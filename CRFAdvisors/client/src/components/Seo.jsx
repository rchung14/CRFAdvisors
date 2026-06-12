import { useEffect } from 'react'
import { SITE_URL } from '../config'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

/**
 * Per-page head manager for client-side navigation: title, description,
 * canonical, Open Graph / Twitter tags, and JSON-LD structured data.
 *
 * Crawlers get the same values baked into static HTML by scripts/prerender.mjs;
 * both read from src/seo/routesMeta.js. This component keeps the head in sync
 * as users navigate the SPA.
 */
export default function Seo({ title, description, path = '/', schemas = [] }) {
  const schemaJson = JSON.stringify(schemas)

  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', 'CRF Advisors, Inc.')
    setMeta('property', 'og:locale', 'en_US')
    setMeta('property', 'og:image', `${SITE_URL}/logo1.png`)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'robots', 'index, follow, max-image-preview:large')
    setCanonical(url)

    document.head
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach((el) => el.remove())

    JSON.parse(schemaJson).forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', '')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [title, description, path, schemaJson])

  return null
}
