import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import CTABanner from '../components/CTABanner'
import { SERVICES, APPROACH, PROCESS_STEPS } from '../data/services'
import '../styles/Services.css'

export default function ConsultingServices() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/consulting-services']} />

      <PageHero
        title="Credit Risk & Loan Review Consulting Services"
        breadcrumb="Consulting Services"
        subtext="Independent, objective credit risk management consulting for banks, credit unions, and financial institutions."
      />

      {/* Service detail sections — alternating backgrounds, anchor ids */}
      {SERVICES.map(({ id, name, icon, h2, paragraphs, bullets }, i) => {
        const Icon = icon
        return (
        <section
          key={id}
          id={id}
          className={`section service-detail${i % 2 ? ' section--off-white' : ''}`}
        >
          <div className="container service-detail__grid">
            <div className="service-detail__icon-col">
              <span className="service-card__icon service-detail__icon" aria-hidden="true">
                <Icon size={28} strokeWidth={1.5} />
              </span>
            </div>
            <div className="service-detail__content">
              <SectionEyebrow>{name}</SectionEyebrow>
              <h2>{h2}</h2>
              {paragraphs.map((text) => (
                <p key={text.slice(0, 32)} className="service-detail__para">
                  {text}
                </p>
              ))}
              <ul className="service-detail__bullets">
                {bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        )
      })}

      {/* Approach + Process, two columns */}
      <section className="section approach-process">
        <div className="container approach-process__grid">
          <div>
            <SectionEyebrow>Our Approach</SectionEyebrow>
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
            <SectionEyebrow>Our Process</SectionEyebrow>
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
