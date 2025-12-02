import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {year} CRF Advisors, Inc. All rights reserved.</p>
      <section>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      </section>
    </footer>
  )
}