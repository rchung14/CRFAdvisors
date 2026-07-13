import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import Button from '../components/Button'
import CTABanner from '../components/CTABanner'
import { SERVICES, APPROACH, PROCESS_STEPS } from '../data/services'
import { CLIENT_GROUPS, CLIENT_COUNT } from '../data/clients'
import heroPhoto from '../assets/test.avif'
import '../styles/Home.css'

export default function Home() {
  // First 12 institutions (across states) for the homepage trust-bar pills.
  const featuredClients = CLIENT_GROUPS.flatMap((g) => g.clients).slice(0, 12)
  return (
    <main className="page">
      <Seo {...ROUTES_META['/']} />

      {/* Hero: dark photo + navy overlay + centered quote card */}
      <section className="hero">
        <img
          className="hero__photo"
          src={heroPhoto}
          width="2230"
          height="833"
          fetchPriority="high"
          alt="Dark city skyline of a financial district, representing CRF Advisors' institutional credit risk management clients"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 className="hero__title">
            Independent Loan Review and Credit Risk Management for Financial Institutions
          </h1>
          <figure className="hero__quote-card">
            <blockquote className="hero__quote">
              &ldquo;Based on our experience servicing financial institutions in the
              Tri-State area... the credit risk management function is more than just
              an assertion that a loan is properly classified, but also to evaluate
              for any potential impairment as well as determine the impact on the
              Allowance for Loan Losses.&rdquo;
            </blockquote>
            <figcaption className="hero__attribution">
              Ted Ahn, Team Leader, CRF Advisors
            </figcaption>
          </figure>
          <p className="hero__stats">
            <span>{CLIENT_COUNT}+ Clients</span>
            <span className="hero__stats-dot" aria-hidden="true">·</span>
            <span>{SERVICES.length} Service Lines</span>
            <span className="hero__stats-dot" aria-hidden="true">·</span>
            <span>Tri-State &amp; Beyond</span>
          </p>
          <div className="hero__ctas">
            <Button to="/consulting-services" variant="white">
              Our Services
            </Button>
            <Button to="/clients" variant="ghost-light">
              View Clients
            </Button>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container">
          <h2>Credit Risk &amp; Loan Review Services</h2>
          <p className="section-sub">
            Your credit risk decisions shape your future. Ours help shape them.
          </p>
          <div className="services-grid services-grid--4-3">
            {SERVICES.map(({ id, slug, name, summary }, i) => (
              <article key={id} className="card service-card">
                <span className="service-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{summary}</p>
                <Link className="text-link" to={`/consulting-services/${slug}`}>
                  Learn more &rarr;
                </Link>
              </article>
            ))}
          </div>
          <p className="services-note">
            Every engagement is independent and objective, whether you need a
            full <Link to="/consulting-services/loan-review">independent loan review</Link>,
            a targeted <Link to="/consulting-services/due-diligence">credit review for an acquisition</Link>,
            or an annual <Link to="/consulting-services/stress-testing">loan portfolio review and stress test</Link>.
            CRF Advisors also provides assistance with 10-K and 10-Q financial
            statement preparation and disclosures in compliance with GAAP and
            SEC regulation.
          </p>
        </div>
      </section>

      {/* Approach: 3-col on blue gradient */}
      <section className="approach">
        <div className="container">
          <h2 className="approach__heading">
            Objective Insight, Consistent Methodology
          </h2>
          <div className="approach__grid">
            {APPROACH.map(({ title, body }) => (
              <div key={title} className="approach__item">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <Link className="approach__link" to="/consulting-services">
            Learn more about our approach &rarr;
          </Link>
        </div>
      </section>

      {/* Process snapshot */}
      <section className="section section--off-white">
        <div className="container">
          <h2>Our Loan Review Process</h2>
          <ol className="process">
            {PROCESS_STEPS.map(({ title, body }, i) => (
              <li key={title} className="process__step">
                <span className="process__number" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="process__title">{title}</h3>
                <p className="process__body">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Client trust bar */}
      <section className="section trust">
        <div className="container">
          <h2 className="trust__heading">
            Trusted by {CLIENT_COUNT}+ banks, credit unions, non-profit
            organizations, and financial services companies across the
            Tri-State area and beyond
          </h2>
          <ul className="trust__pills">
            {featuredClients.map(({ name, city }) => (
              <li key={name} className="trust__pill">
                <span className="trust__pill-name">{name}</span>
                <span className="trust__pill-city">{city}</span>
              </li>
            ))}
          </ul>
          <Link className="text-link" to="/clients">
            View all {CLIENT_COUNT} clients &rarr;
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Ready to strengthen your credit oversight?"
        subtext="Talk with our team about loan review, CECL, or stress testing for your institution."
      />
    </main>
  )
}
