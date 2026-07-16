import { useParams, Navigate, Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import FaqAccordion from '../components/FaqAccordion'
import { SERVICE_PAGE_BY_SLUG, WHY_CRF, SERVICE_SOURCES } from '../data/servicePages'
import '../styles/ServicePage.css'

function SectionList({ items, ordered }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`service-page__list${ordered ? ' service-page__list--ordered' : ''}`}>
      {items.map((item, i) => (
        <li key={typeof item === 'string' ? item : item.term} className="service-page__item">
          {ordered && <span className="service-page__num" aria-hidden="true">{i + 1}</span>}
          <span>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <strong>{item.term}.</strong> {item.desc}
              </>
            )}
          </span>
        </li>
      ))}
    </Tag>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const page = SERVICE_PAGE_BY_SLUG[slug]

  // Unknown slug: send back to the services hub.
  if (!page) return <Navigate to="/consulting-services" replace />

  const { icon: Icon } = page
  const sources = SERVICE_SOURCES[slug] || []

  return (
    <main className="page service-detail-page">
      <Seo {...ROUTES_META[`/consulting-services/${slug}`]} />

      <PageHero
        title={page.h1}
        breadcrumb={page.breadcrumb}
        parent={{ label: 'Consulting Services', to: '/consulting-services' }}
        image={page.banner}
        imageAvif={page.bannerAvif}
        imageAlt={page.bannerAlt}
      />

      {/* Intro / definition */}
      <section className="section">
        <div className="container service-page__intro-grid">
          <div className="service-page__icon-col">
            <span className="service-page__icon" aria-hidden="true">
              <Icon size={28} strokeWidth={1.5} />
            </span>
          </div>
          <div className="text-block">
            {page.intro.map((text) => (
              <p key={text.slice(0, 32)} className="service-page__lead">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections, alternating backgrounds */}
      {page.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`section${i % 2 === 0 ? ' section--off-white' : ''}`}
        >
          <div className="container">
            <div className="service-page__head text-block">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text.slice(0, 32)} className="service-page__para">
                  {text}
                </p>
              ))}
              {section.itemsLead && (
                <p className="service-page__para">{section.itemsLead}</p>
              )}
            </div>
            {section.items &&
              (section.heading === 'What You Receive' ? (
                <ul className="deliverables">
                  {section.items.map((item) => (
                    <li key={item} className="deliverables__item">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <SectionList items={section.items} ordered={section.ordered} />
              ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2>{page.eyebrow} FAQ</h2>
          <FaqAccordion items={page.faqs} />
        </div>
      </section>

      {/* Our approach */}
      <section className="section section--off-white">
        <div className="container">
          <h2>How We Work</h2>
          <ul className="service-page__approach">
            {page.approach.map(({ term, desc }) => (
              <li key={term}>
                <strong>{term}.</strong> {desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why CRF (shared trust block) */}
      <section className="section">
        <div className="container">
          <h2>Why Institutions Choose CRF Advisors</h2>
          <ul className="service-page__approach">
            {WHY_CRF.map(({ term, desc }) => (
              <li key={term}>
                <strong>{term}.</strong> {desc}
              </li>
            ))}
          </ul>

          <p className="service-page__related">
            {page.related.map((part, i) =>
              typeof part === 'string' ? (
                part
              ) : (
                <Link key={part.to + i} to={part.to}>
                  {part.label}
                </Link>
              )
            )}
          </p>
        </div>
      </section>

      {/* Authoritative / regulatory sources (editorial outbound citations) */}
      {sources.length > 0 && (
        <section className="section section--off-white">
          <div className="container">
            <h2>Regulatory &amp; Authoritative Sources</h2>
            <p className="service-page__para text-block">
              Primary regulatory and standard-setting references relevant to{' '}
              {page.eyebrow.toLowerCase()}. These link to the issuing
              authorities for current, authoritative guidance.
            </p>
            <ul className="service-page__sources">
              {sources.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABanner
        heading="Ready to discuss your portfolio?"
        subtext="Talk with a senior credit professional about scoping the right engagement for your institution."
        buttonLabel="Contact Us"
      />
    </main>
  )
}
