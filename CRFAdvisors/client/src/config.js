// Site-wide constants. Contact details come from environment variables
// (.env.local) with public fallbacks so production builds never render blanks.
export const SITE_URL = 'https://crf-advisors.vercel.app'

export const API_URL = import.meta.env.VITE_API_URL || 'https://crfadvisors.onrender.com'

export const CONTACT = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'Tedahn@crfadvisors.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '(267) 816-4272',
  phoneHref: `tel:${import.meta.env.VITE_CONTACT_PHONE_TEL || '+12678164272'}`,
  location: 'Philadelphia, PA',
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

/** BreadcrumbList schema for arbitrarily deep trails (e.g. service pages). */
export function breadcrumbTrail(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

/** FAQPage schema built from [{ q, a }] entries. */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CRF Advisors, Inc.',
  url: SITE_URL,
  telephone: import.meta.env.VITE_CONTACT_PHONE_TEL || '+12678164272',
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Philadelphia',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  areaServed: ['PA', 'NJ', 'DE', 'MD', 'NY'],
  description:
    'Independent loan review, credit review, loan portfolio review, CECL implementation, and portfolio stress testing for banks and financial institutions.',
  slogan: 'Your credit risk decisions shape your future. Ours help shape them.',
  knowsAbout: [
    'Independent Loan Review',
    'Credit Review',
    'Loan Portfolio Review',
    'CECL',
    'ALLL',
    'Portfolio Stress Testing',
    'Credit Risk Management',
    'Due Diligence',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Credit Risk & Loan Review Services',
    itemListElement: [
      'Loan Review',
      'Due Diligence',
      'Portfolio Stress Testing',
      'ALLL Methodology & Review',
      'CECL Methodology & ACL Review',
      'CECL Implementation & Modeling',
      'Training',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}
