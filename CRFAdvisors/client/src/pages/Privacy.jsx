import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import { CONTACT } from '../config'
import '../styles/Legal.css'

export default function Privacy() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/privacy']} />

      <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" />

      <section className="section">
        <div className="container legal">
          <p className="legal__updated">Last updated: June 12, 2026</p>

          <p>
            CRF Advisors, Inc. ("CRF Advisors," "we," "us," or "our") respects
            your privacy. This Privacy Policy describes how we collect, use, and
            protect information when you visit our website or contact us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our contact
            form, which may include your name, institution or company, email
            address, phone number, and the contents of your message. We do not
            require you to create an account, and we do not collect payment
            information through this website.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to your inquiries and requests</li>
            <li>Discuss potential engagements and services</li>
            <li>Maintain records of our business correspondence</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>

          <h2>Service Providers</h2>
          <p>
            We use trusted third-party service providers to operate this
            website and deliver email, such as website hosting and email
            delivery services. These providers process information only as
            needed to perform services on our behalf and are not permitted to
            use it for their own purposes.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            This website does not use advertising cookies or third-party
            tracking for marketing. Basic technical information (such as
            browser type and pages visited) may be logged by our hosting
            provider for security and performance purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We use reasonable administrative and technical safeguards designed
            to protect the information you provide. However, no method of
            transmission over the internet is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain business correspondence only as long as needed for the
            purposes described above or as required by law.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website and services are directed at financial institutions and
            business professionals. We do not knowingly collect information
            from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last
            updated" date above reflects the most recent revision. Continued
            use of the website after changes constitutes acceptance of the
            updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or the information
            we hold about you, contact us at{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
