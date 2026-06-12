import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { to: '/consulting-services', label: 'Consulting Services' },
  { to: '/clients', label: 'Clients' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={close}>
          CRF Advisors, Inc.
        </Link>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="navbar__cta" onClick={close}>
            Get Started
          </Link>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
