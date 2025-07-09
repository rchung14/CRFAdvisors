

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {year} CRF Advisors, Inc. All rights reserved.</p>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
      <Link to="/contact">Contact Us</Link>
    </footer>
  )
}