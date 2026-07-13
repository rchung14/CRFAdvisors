import { Link } from 'react-router-dom'
import { Award, Users, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { TEAM } from '../data/team'
import heroImg from '../assets/page-about.webp'
import '../styles/About.css'

const DIFFERENTIATORS = [
  {
    icon: Award,
    title: 'XX+ Years of Tri-State Experience',
    body: 'XX+ years serving community banks, savings institutions, and credit unions across Pennsylvania, New Jersey, Delaware, and Maryland.',
  },
  {
    icon: Users,
    title: 'Staffed to Engagement Complexity',
    body: 'Every engagement is staffed at the proper experience level relative to portfolio size and complexity, never trained on your time.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity-First Engagements',
    body: 'We engage only with clients where management demonstrates a high degree of integrity and where our full independence can be maintained.',
  },
]

// Full-width horizontal profile row: photo left, text right. Long bios flow
// in a wide readable column instead of expanding a narrow card, so the full
// description is always visible without a Read more toggle.
function TeamMember({ name, title, initials, bio, photo }) {
  return (
    <article className="team-row">
      {photo ? (
        <img
          className="team-row__photo"
          src={photo}
          alt={`${name}, ${title} at CRF Advisors, credit risk management firm in Philadelphia PA`}
          loading="lazy"
        />
      ) : (
        <div
          className="img-placeholder team-row__photo"
          role="img"
          aria-label={`${name}, ${title} at CRF Advisors, credit risk management firm in Philadelphia PA, photo placeholder`}
        >
          <span className="team-row__initials">{initials}</span>
        </div>
      )}
      <div className="team-row__body">
        <h3 className="team-row__name">{name}</h3>
        <p className="team-row__title">{title}</p>
        <p className="team-row__bio">{bio}</p>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/about']} />

      <PageHero
        title="About CRF Advisors, Inc."
        breadcrumb="About Us"
        image={heroImg}
        imageAlt="CRF Advisors team meeting in a boardroom"
      />

      {/* Firm overview */}
      <section className="section">
        <div className="container">
          <h2>Independent Credit Risk Management Since 20XX</h2>
          <div className="text-block firm-overview">
            <p>
              CRF Advisors is a Tri-State credit risk firm, based in
              Philadelphia, serving financial institutions, non-profit
              organizations, and financial services companies. We focus on assisting clients with the identification of
              potential credit issues through{' '}
              <Link to="/consulting-services/loan-review">independent loan review</Link>,
              loan portfolio credit review, and{' '}
              <Link to="/consulting-services/stress-testing">portfolio stress testing</Link>.
            </p>
            <p>
              Specialties include implementation of ALLL methodology to ensure
              compliance with{' '}
              <a href="https://www.ffiec.gov" target="_blank" rel="noopener noreferrer">
                FFIEC
              </a>{' '}
              Interagency policy, and the valuation and accounting of impaired
              loans, TDRs, and OREO. We also provide assistance with preparation
              and review of 10-K and 10-Q financial statements and disclosures in
              compliance with GAAP and SEC regulation.
            </p>
            <p>
              CRF Advisors engages only with clients where management
              demonstrates a high degree of integrity and where our independence
              can be fully maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--off-white">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-sub">
            Experienced credit professionals with deep roots in banking, audit, and
            regulatory compliance.
          </p>
          <div className="team-list">
            {TEAM.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why CRF */}
      <section className="section">
        <div className="container">
          <h2>Why Institutions Choose CRF Advisors</h2>
          <div className="why-grid">
            {DIFFERENTIATORS.map(({ icon, title, body }) => {
              const Icon = icon
              return (
              <div key={title} className="why-item">
                <Icon size={40} strokeWidth={1.5} className="why-item__icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Work with a team that knows your industry."
        subtext="Independent credit expertise, scoped to your institution."
      />
    </main>
  )
}
