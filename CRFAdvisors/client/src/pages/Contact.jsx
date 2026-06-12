import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import { ROUTES_META } from '../seo/routesMeta'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import { API_URL, CONTACT } from '../config'
import '../styles/Contact.css'

const SERVICE_OPTIONS = [
  'Loan Review',
  'Due Diligence',
  'Portfolio Stress Testing',
  'ALLL Methodology',
  'CECL Implementation',
  'General Inquiry',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM = {
  name: '',
  institution: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '', // honeypot — humans never see or fill this
}

// Mirrored on the server; client-side copy exists only for instant feedback.
function validate(form) {
  const errors = {}
  if (!form.name.trim() || form.name.length > 100) {
    errors.name = 'Please enter your name.'
  }
  if (!form.institution.trim() || form.institution.length > 150) {
    errors.institution = 'Please enter your institution or company.'
  }
  if (!EMAIL_RE.test(form.email) || form.email.length > 254) {
    errors.email = 'Please enter a valid email address.'
  }
  if (form.phone && form.phone.length > 30) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (form.service && !SERVICE_OPTIONS.includes(form.service)) {
    errors.service = 'Please choose a service from the list.'
  }
  if (!form.message.trim() || form.message.length > 5000) {
    errors.message = 'Please enter a message.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setStatus('sent')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page">
      <Seo {...ROUTES_META['/contact']} />

      <PageHero
        title="Get in Touch"
        breadcrumb="Contact Us"
        subtext="Looking to see if a CRF Advisors service is a good fit? Fill out the form and we'll follow up promptly."
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-col">
            <SectionEyebrow>Send a Message</SectionEyebrow>
            <h2>Tell Us About Your Institution</h2>

            {status === 'sent' ? (
              <p className="contact-success" role="status">
                Thank you, your message has been sent. We typically respond
                within 1 business day.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="institution">Institution / Company *</label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    value={form.institution}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.institution)}
                    required
                  />
                  {errors.institution && (
                    <span className="form-error">{errors.institution}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      required
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    required
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Honeypot — hidden from humans, bots fill it */}
                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn--primary"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>

                {status === 'error' && (
                  <p className="contact-error" role="alert">
                    Something went wrong sending your message. Please try again
                    later or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Direct contact info */}
          <aside className="contact-info card">
            <h3>Direct Contact</h3>
            <p className="contact-info__name">Ted Ahn, President</p>
            <ul className="contact-info__list">
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{CONTACT.location}</span>
              </li>
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>We typically respond within 1 business day.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}
