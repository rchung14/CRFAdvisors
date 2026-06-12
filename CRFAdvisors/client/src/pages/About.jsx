import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import CTABanner from '../components/CTABanner'
import { TEAM } from '../data/team'
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
    title: 'Selective Client Acceptance',
    body: 'Client acceptance is limited to institutions with high integrity management, protecting the independence our opinions depend on.',
  },
]

function TeamCard({ name, title, initials, bio, photo, featured = false }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className={`card team-card${featured ? ' team-card--featured' : ''}`}>
      {photo ? (
        <img
          className="team-card__photo team-card__img"
          src={photo}
          alt={`${name}, ${title} at CRF Advisors, credit risk management firm in Philadelphia PA`}
          loading="lazy"
        />
      ) : (
        <div
          className="img-placeholder team-card__photo"
          role="img"
          aria-label={`${name}, ${title} at CRF Advisors, credit risk management firm in Philadelphia PA, photo placeholder`}
        >
          <span className="team-card__initials">{initials}</span>
          <span className="img-placeholder__label">{name} Photo</span>
        </div>
      )}
      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__title">{title}</p>
        <p className={`team-card__bio${expanded ? '' : ' team-card__bio--clamped'}`}>{bio}</p>
        <div className="team-card__footer">
          <button
            type="button"
            className="team-card__more"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="team-card__linkedin"
            aria-label={`${name} on LinkedIn`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function About() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/about']} />

      <PageHero title="About CRF Advisors, Inc." breadcrumb="About Us" />

      {/* Firm overview */}
      <section className="section">
        <div className="container">
          <SectionEyebrow>The Firm</SectionEyebrow>
          <h2>Independent Credit Risk Management Since 20XX</h2>
          <div className="text-block firm-overview">
            <p>
              CRF Advisors is a credit risk management firm that services financial
              institutions, non-profit organizations, and financial services
              companies. We focus on assisting clients with the identification of
              potential credit issues through{' '}
              <Link to="/consulting-services#loan-review">independent loan review</Link>,
              loan portfolio credit review, and{' '}
              <Link to="/consulting-services#stress-testing">portfolio stress testing</Link>.
            </p>
            <p>
              Specialties include implementation of ALLL methodology to ensure
              compliance with FFIEC Interagency policy, and the valuation and
              accounting of impaired loans, TDRs, and OREO. We also provide
              assistance with preparation and review of 10-K and 10-Q financial
              statements and disclosures in compliance with GAAP and SEC
              regulation.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--off-white">
        <div className="container">
          <SectionEyebrow>Our People</SectionEyebrow>
          <h2>Our Team</h2>
          <p className="section-sub">
            Experienced credit professionals with deep roots in banking, audit, and
            regulatory compliance.
          </p>
          <div className="team-featured">
            <TeamCard {...TEAM[0]} featured />
          </div>
          <div className="team-grid">
            {TEAM.slice(1).map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why CRF */}
      <section className="section">
        <div className="container">
          <SectionEyebrow>Why CRF</SectionEyebrow>
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
