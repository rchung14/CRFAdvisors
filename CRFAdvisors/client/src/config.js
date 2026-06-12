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
    'Independent loan review, credit risk management, CECL implementation, and portfolio stress testing for banks and financial institutions.',
  knowsAbout: [
    'Loan Review',
    'CECL',
    'ALLL',
    'Portfolio Stress Testing',
    'Credit Risk Management',
    'Due Diligence',
  ],
}
