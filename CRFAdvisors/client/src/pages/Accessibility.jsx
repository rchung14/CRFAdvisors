import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import { CONTACT } from '../config'
import '../styles/Legal.css'

export default function Accessibility() {
  return (
    <main className="page">
      <Seo {...ROUTES_META['/accessibility']} />

      <PageHero title="Accessibility Statement" breadcrumb="Accessibility Statement" />

      <section className="section">
        <div className="container legal">
          <p className="legal__updated">Last updated: July 12, 2026</p>

          <p>
            CRF Advisors, Inc. is committed to ensuring that our website is
            accessible to people with disabilities. We want every visitor —
            including those using assistive technologies — to be able to learn
            about our services and contact us without barriers.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines
            (WCAG) 2.1, Level AA. These guidelines explain how to make web
            content more accessible to people with a wide range of
            disabilities, including visual, auditory, cognitive, and motor
            impairments.
          </p>

          <h2>Measures We Take</h2>
          <p>Accessibility practices on this website include:</p>
          <ul>
            <li>Semantic HTML structure with proper headings and landmarks</li>
            <li>Text alternatives for meaningful images</li>
            <li>Color contrast that meets WCAG AA ratios for text</li>
            <li>Links distinguishable by more than color alone</li>
            <li>Full keyboard navigability, including the mobile menu</li>
            <li>Labels and error messages on all contact form fields</li>
            <li>Support for reduced-motion preferences</li>
            <li>Readable, resizable text that reflows on zoom</li>
          </ul>

          <h2>Ongoing Efforts</h2>
          <p>
            Accessibility is an ongoing effort. We review the website against
            accessibility criteria as content and features change, and we work
            to remediate issues as they are identified.
          </p>

          <h2>Known Limitations</h2>
          <p>
            Despite our efforts, some content may not yet be fully accessible.
            If you encounter a barrier, please let us know so we can address it
            and provide the information you need through an alternative method.
          </p>

          <h2>Feedback and Contact</h2>
          <p>
            If you experience difficulty accessing any part of this website or
            would like to request information in an alternative format, contact
            us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. We aim to respond
            within one business day.
          </p>
        </div>
      </section>
    </main>
  )
}
