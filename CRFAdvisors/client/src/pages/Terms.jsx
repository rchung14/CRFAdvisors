import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import { CONTACT } from '../config'
import '../styles/Legal.css'

export default function Terms() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/terms']} />

      <PageHero title="Terms of Service" breadcrumb="Terms of Service" />

      <section className="section">
        <div className="container legal">
          <p className="legal__updated">Last updated: June 12, 2026</p>

          <p>
            These Terms of Service ("Terms") govern your use of the CRF
            Advisors, Inc. website. By accessing or using this website, you
            agree to these Terms. If you do not agree, please do not use the
            website.
          </p>

          <h2>Use of This Website</h2>
          <p>
            This website is provided for general informational purposes about
            CRF Advisors and its services. You agree to use the website only
            for lawful purposes and in a manner that does not infringe the
            rights of, or restrict the use of, any other party.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            Content on this website is provided for general information only
            and does not constitute accounting, legal, regulatory, investment,
            or other professional advice. No client or advisory relationship is
            created by visiting this website or submitting an inquiry. Any
            engagement of CRF Advisors is governed by a separate written
            agreement.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            design, is the property of CRF Advisors, Inc. or its licensors and
            is protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works from this content
            without our prior written consent.
          </p>

          <h2>Disclaimers</h2>
          <p>
            This website is provided "as is" and "as available" without
            warranties of any kind, express or implied, including warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the website will be
            uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, CRF Advisors, Inc. shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising out of or relating to your use of this
            website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those websites,
            and a link does not imply endorsement.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of
            Pennsylvania, without regard to its conflict of law principles.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time. The "Last updated" date
            above reflects the most recent revision. Continued use of the
            website after changes constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these Terms may be directed to{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
