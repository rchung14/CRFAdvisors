

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {year} CRF Advisors, Inc. All rights reserved.</p>
      <section className="flex space-x-4 justify-center mt-2">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/contact">Contact Us</Link>
      </section>
    </footer>
  )
}