import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { SERVICES, APPROACH, PROCESS_STEPS } from '../data/services'
import hubBanner from '../assets/svc-hub.webp'
import '../styles/Services.css'

export default function ConsultingServices() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/consulting-services']} />

      <PageHero
        title="Credit Risk & Loan Review Consulting Services"
        breadcrumb="Consulting Services"
        subtext="Independent, objective credit risk management consulting for banks, credit unions, and financial institutions."
        image={hubBanner}
        imageAlt="Professionals in a boardroom presentation, representing CRF Advisors' credit risk and loan review consulting services"
      />

      {/* Service overview cards — each links to a dedicated deep-dive page */}
      <section className="section">
        <div className="container">
          <h2>Five Core Credit Risk Services</h2>
          <p className="section-sub">
            Each engagement is independent and scoped to your institution. Explore
            any service for methodology, scope, and answers to common questions.
          </p>
          <div className="services-grid">
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
        </div>
      </section>

      {/* Approach + Process, two columns */}
      <section className="section approach-process">
        <div className="container approach-process__grid">
          <div>
            <h2>How We Think About Credit Risk</h2>
            <ul className="approach-process__list">
              {APPROACH.map(({ title, body }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>From Portfolio to Report</h2>
            <ol className="approach-process__steps">
              {PROCESS_STEPS.map(({ title, body }, i) => (
                <li key={title}>
                  <span className="process__number" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure where to start?"
        subtext="Let's assess your portfolio and scope the right engagement together."
        buttonLabel="Contact Us"
      />
    </main>
  )
}
