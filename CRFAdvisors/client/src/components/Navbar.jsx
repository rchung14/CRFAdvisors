import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false)
  const lastScrollY = useRef(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        setIsShrunk(true)
      } else {
        setIsShrunk(false)
      }
      lastScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={menuRef} className={`navbar ${(isShrunk && !menuOpen) ? 'shrink' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="brand">CRF Advisors, Inc.</Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/consulting">Consulting Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}