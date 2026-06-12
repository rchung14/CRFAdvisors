import { SITE_URL, ORG_SCHEMA, breadcrumbSchema } from '../config'
import { SERVICES } from '../data/services'
import { TEAM } from '../data/team'
import { CLIENT_COUNT } from '../data/clients'

// Single source of truth for per-route SEO metadata. Consumed by:
//  - the Seo component at runtime (client-side navigation)
//  - scripts/prerender.mjs at build time (static HTML for crawlers)

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CRF Advisors, Inc.',
  url: SITE_URL,
  description:
    'Independent loan review, credit review, and loan portfolio review for banks, credit unions, and financial institutions.',
}

const PERSON_SCHEMAS = TEAM.map(({ name, title }) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle: title,
  worksFor: { '@type': 'Organization', name: 'CRF Advisors, Inc.' },
}))

const SERVICE_SCHEMAS = SERVICES.map(({ id, name, summary }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/consulting-services#${id}`,
  name,
  description: summary,
  serviceType: name,
  provider: { '@type': 'Organization', name: 'CRF Advisors, Inc.', url: SITE_URL },
  areaServed: ['PA', 'NJ', 'DE', 'MD', 'NY'],
}))

export const ROUTES_META = {
  '/': {
    path: '/',
    title: 'CRF Advisors — Independent Loan Review & Credit Risk Management',
    description:
      'Independent loan review, credit review, and portfolio stress testing for banks, credit unions, and financial institutions in the Tri-State area.',
    schemas: [ORG_SCHEMA, WEBSITE_SCHEMA],
  },
  '/consulting-services': {
    path: '/consulting-services',
    title: 'Independent Loan Review, Credit Review & Portfolio Review Services | CRF Advisors',
    description:
      'Independent loan review, credit due diligence, CECL implementation, portfolio stress testing, and ALLL methodology review for banks and FCUs.',
    schemas: [
      ORG_SCHEMA,
      breadcrumbSchema('Consulting Services', '/consulting-services'),
      ...SERVICE_SCHEMAS,
    ],
  },
  '/clients': {
    path: '/clients',
    title: 'Our Clients | CRF Advisors — Loan Review for Banks & Credit Unions',
    description: `CRF Advisors has provided independent loan review and credit review to ${CLIENT_COUNT}+ banks, credit unions, and financial institutions. References available upon request.`,
    schemas: [ORG_SCHEMA, breadcrumbSchema('Clients', '/clients')],
  },
  '/about': {
    path: '/about',
    title: 'About CRF Advisors — Credit Review & Loan Portfolio Experts',
    description:
      'Meet the CRF Advisors team. 20+ years of independent loan review, credit review, CECL, and loan portfolio risk expertise serving financial institutions.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('About Us', '/about'), ...PERSON_SCHEMAS],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact CRF Advisors — Loan Review & Credit Risk Consultants',
    description:
      'Contact CRF Advisors to discuss independent loan review, credit review, CECL implementation, or portfolio stress testing for your financial institution.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('Contact Us', '/contact')],
  },
}
