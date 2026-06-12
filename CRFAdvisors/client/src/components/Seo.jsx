import { useEffect } from 'react'
import { SITE_URL, ORG_SCHEMA } from '../config'

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
 * Per-page head manager for this SPA: title, description, canonical,
 * Open Graph / Twitter tags, and JSON-LD structured data.
 *
 * ProfessionalService schema is included on every page; pages pass extra
 * schemas (Person, BreadcrumbList) via `schemas`.
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
    setMeta('name', 'twitter:card', 'summary')
    setCanonical(url)

    document.head
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach((el) => el.remove())

    const allSchemas = [ORG_SCHEMA, ...JSON.parse(schemaJson)]
    allSchemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', '')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [title, description, path, schemaJson])

  return null
}

/** BreadcrumbList schema for interior pages. */
export function breadcrumbSchema(pageName, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: pageName, item: `${SITE_URL}${path}` },
    ],
  }
}
