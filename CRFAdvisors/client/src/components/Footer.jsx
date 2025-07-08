

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#3992cd] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} CRF Advisors, Inc. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-sm hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
)}