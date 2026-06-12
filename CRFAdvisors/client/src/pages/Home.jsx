import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Button from '../components/Button'
import SectionEyebrow from '../components/SectionEyebrow'
import CTABanner from '../components/CTABanner'
import { SERVICES, APPROACH, PROCESS_STEPS } from '../data/services'
import { FEATURED_CLIENTS, CLIENT_COUNT } from '../data/clients'
import heroPhoto from '../assets/test.avif'
import '../styles/Home.css'

export default function Home() {
  return (
    <main className="page">
      <Seo
        title="CRF Advisors — Independent Loan Review & Credit Risk Management"
        description="Independent credit review, CECL modeling, and portfolio stress testing for banks, credit unions, and financial institutions in the Tri-State area."
        path="/"
      />

      {/* Hero: dark photo + navy overlay + centered quote card */}
      <section className="hero">
        <img
          className="hero__photo"
          src={heroPhoto}
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
              Ted Ahn, President, CRF Advisors
            </figcaption>
          </figure>
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
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2>Credit Risk &amp; Loan Review Services</h2>
          <p className="section-sub">
            Your credit risk decisions shape your future. Ours help shape them.
          </p>
          <div className="services-grid">
            {SERVICES.map(({ id, name, icon: Icon, summary }) => (
              <article key={id} className="card service-card">
                <span className="service-card__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <h3>{name}</h3>
                <p>{summary}</p>
                <Link className="text-link" to={`/consulting-services#${id}`}>
                  Learn more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach: 3-col on blue gradient */}
      <section className="approach">
        <div className="container">
          <SectionEyebrow light>Our Approach</SectionEyebrow>
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
          <SectionEyebrow>How We Work</SectionEyebrow>
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
            Trusted by {CLIENT_COUNT}+ banks, credit unions, and financial
            institutions across the Tri-State area
          </h2>
          <ul className="trust__list">
            {FEATURED_CLIENTS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <Link className="text-link" to="/clients">
            View all clients &rarr;
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
