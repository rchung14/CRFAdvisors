import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT } from '../config'
import '../styles/Footer.css'

const FOOTER_LINKS = [
  { to: '/consulting-services', label: 'Consulting Services' },
  { to: '/clients', label: 'Clients' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__about">
            <p className="footer__brand">CRF Advisors, Inc.</p>
            <p className="footer__blurb">
              Independent loan review, credit review, risk rating validation, and
              portfolio analytics supporting regulatory compliance for banks and
              financial institutions.
            </p>
            <nav className="footer__nav" aria-label="Footer navigation">
              {FOOTER_LINKS.map(({ to, label }) => (
                <Link key={to} to={to}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__contact">
            <p className="footer__heading">Contact</p>
            <p className="footer__contact-item">
              <MapPin size={16} aria-hidden="true" />
              <span>{CONTACT.location}</span>
            </p>
            <p className="footer__contact-item">
              <Phone size={16} aria-hidden="true" />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </p>
            <p className="footer__contact-item">
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copyright">
            &copy; {year} CRF Advisors, Inc. All rights reserved.
          </span>
          <span className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
