import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <section className='bottomhome'>
        <section className='aboutushome'>
          <h1 className='aboutus-title'>About Us</h1>
          <span>CRF Advisors, Inc.</span>
          <p>CRF Advisors delivers independent loan review, credit review, risk rating validation, and portfolio analytics to support regulatory compliance for banks and financial institutions.</p>
        </section>

        <section className='contactushome'>
          <h2 className='contactus-title'>Contact Us</h2>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
              </svg>
              <span>Philadelphia, PA</span>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z"/>
              </svg>
              <span>267.816.4272</span>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v.01l10 6.25L22 6.01V6a2 2 0 0 0-2-2zm0 4.24-7.4 4.63a1 1 0 0 1-1.2 0L4 8.24V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.24z"/>
              </svg>
              <span>Tedahn@crfadvisors.com</span>
            </div>
        </section>
      </section>

      <section className='lastfooter'>
        <span className='crfcopyright'>&copy; {year} CRF Advisors, Inc. All rights reserved.</span>
        <section>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </section>
      </section>
    </footer>
  )
}