import { SITE_URL, ORG_SCHEMA, breadcrumbSchema, breadcrumbTrail, faqSchema } from '../config'
import { SERVICES } from '../data/services'
import { SERVICE_PAGE_META_LIST } from '../data/servicePagesMeta'
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

// Hub-level Service schemas point at each dedicated service page.
const SERVICE_SCHEMAS = SERVICES.map(({ name, summary, slug }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/consulting-services/${slug}`,
  url: `${SITE_URL}/consulting-services/${slug}`,
  name,
  description: summary,
  serviceType: name,
  provider: { '@type': 'Organization', name: 'CRF Advisors, Inc.', url: SITE_URL },
  areaServed: ['PA', 'NJ', 'DE', 'MD', 'NY'],
}))

// One ROUTES_META entry per dedicated service page, each carrying its own
// Service + FAQPage + 3-level BreadcrumbList structured data.
const SERVICE_PAGE_META = Object.fromEntries(
  SERVICE_PAGE_META_LIST.map((p) => [
    `/consulting-services/${p.slug}`,
    {
      path: `/consulting-services/${p.slug}`,
      title: p.metaTitle,
      description: p.metaDescription,
      schemas: [
        ORG_SCHEMA,
        breadcrumbTrail([
          { name: 'Home', path: '/' },
          { name: 'Consulting Services', path: '/consulting-services' },
          { name: p.breadcrumb, path: `/consulting-services/${p.slug}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${SITE_URL}/consulting-services/${p.slug}`,
          url: `${SITE_URL}/consulting-services/${p.slug}`,
          name: p.h1,
          description: p.metaDescription,
          serviceType: p.eyebrow,
          provider: { '@type': 'Organization', name: 'CRF Advisors, Inc.', url: SITE_URL },
          areaServed: ['PA', 'NJ', 'DE', 'MD', 'NY'],
        },
        faqSchema(p.faqs),
      ],
    },
  ])
)

export const ROUTES_META = {
  '/': {
    path: '/',
    title: 'CRF Advisors | Independent Loan Review & Credit Risk Management',
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
    title: 'Our Clients | Loan Review for Banks & Credit Unions | CRF Advisors',
    description: `CRF Advisors has provided independent loan review and credit review to ${CLIENT_COUNT}+ banks, credit unions, and financial institutions. References available upon request.`,
    schemas: [ORG_SCHEMA, breadcrumbSchema('Clients', '/clients')],
  },
  '/about': {
    path: '/about',
    title: 'About CRF Advisors | Credit Review & Loan Portfolio Experts',
    description:
      'Meet the CRF Advisors team. Independent loan review, credit review, and CECL expertise serving banks, credit unions, non-profit organizations, and financial services companies.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('About Us', '/about'), ...PERSON_SCHEMAS],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact CRF Advisors | Loan Review & Credit Risk Consultants',
    description:
      'Contact CRF Advisors to discuss independent loan review, credit review, CECL implementation, or portfolio stress testing for your financial institution.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('Contact Us', '/contact')],
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | CRF Advisors',
    description:
      'How CRF Advisors collects, uses, and protects information submitted through this website.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('Privacy Policy', '/privacy')],
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service | CRF Advisors',
    description:
      'Terms governing the use of the CRF Advisors website, including disclaimers and intellectual property.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('Terms of Service', '/terms')],
  },
  '/accessibility': {
    path: '/accessibility',
    title: 'Accessibility Statement | CRF Advisors',
    description:
      'CRF Advisors is committed to an accessible website for all visitors, targeting WCAG 2.1 AA conformance. Learn about our measures and how to report barriers.',
    schemas: [ORG_SCHEMA, breadcrumbSchema('Accessibility Statement', '/accessibility')],
  },
  ...SERVICE_PAGE_META,
}
