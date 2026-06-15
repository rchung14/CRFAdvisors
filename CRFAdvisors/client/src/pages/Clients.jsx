import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import CTABanner from '../components/CTABanner'
import { CLIENT_GROUPS, CLIENT_COUNT } from '../data/clients'
import heroImg from '../assets/page-clients.webp'
import '../styles/Clients.css'

export default function Clients() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/clients']} />

      <PageHero
        title="Financial Institutions We've Served"
        breadcrumb="Clients"
        subtext="XX+ years of independent credit review engagements with community banks, savings institutions, and credit unions."
        image={heroImg}
        imageAlt="Advisory meeting between a CRF Advisors consultant and a client institution"
      />

      <section className="section">
        <div className="container">
          <SectionEyebrow>Client Roster</SectionEyebrow>
          <h2>{CLIENT_COUNT} Institutions Across the Tri-State Area and Beyond</h2>
          <p className="section-sub">
            Banks, savings institutions, credit unions, and financial services
            companies that rely on CRF Advisors for{' '}
            <Link to="/consulting-services/loan-review">independent loan review</Link>,{' '}
            <Link to="/consulting-services/due-diligence">credit review and due diligence</Link>,
            and <Link to="/consulting-services/stress-testing">loan portfolio review and stress testing</Link>.
          </p>

          {CLIENT_GROUPS.map(({ label, abbr, blurb, clients }) => (
            <div key={abbr} className="client-group">
              <h3 className="client-group__label">
                {label}
                <span className="client-group__count">{clients.length}</span>
              </h3>
              <p className="client-group__blurb">{blurb}</p>
              <ul className="client-grid">
                {clients.map(({ name, city }) => (
                  <li key={name} className="card client-card">
                    <span className="client-card__name">{name}</span>
                    <span className="client-card__city">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="clients-references">References available upon request.</p>
        </div>
      </section>

      <CTABanner
        heading="Join our client roster."
        subtext="Start with a consultation about your loan portfolio and credit oversight needs."
        buttonLabel="Start a Conversation"
      />
    </main>
  )
}
