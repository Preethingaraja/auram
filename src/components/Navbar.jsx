import React, { useState, useEffect } from 'react'
import { Gift, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
    { label: 'About', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setDrawerOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 72
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-brand' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group"
            aria-label="Auram Go to home"
          >
            <div className="relative">
              <img
                src="/logo.jpeg"
                alt="Auram logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-105 transition-all duration-200"
              />
            </div>
            <div>
              <span className={`font-display text-2xl font-bold leading-none transition-colors duration-300 ${
                scrolled ? 'text-brand-magenta' : 'text-white'
              }`}>
                Auram
              </span>
              <p className={`text-xs leading-none mt-0.5 hidden sm:block transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                by Shree Bheru Gifts
              </p>
            </div>
          </a>

          {/* Right side: nav links + CTA + hamburger all right-aligned */}
          <div className="flex items-center gap-6">

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-7" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`nav-link text-sm font-medium pb-0.5 transition-colors duration-300 ${
                      scrolled
                        ? 'text-gray-700 hover:text-brand-magenta'
                        : 'text-white/90 hover:text-brand-gold'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA – desktop */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className={`hidden lg:inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-brand-magenta text-white hover:bg-brand-magenta-dark shadow-brand hover:shadow-brand-lg'
                  : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-magenta'
              }`}
            >
              Get a Quote
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                scrolled ? 'text-brand-magenta hover:bg-brand-light' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          id="mobile-drawer"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel — half screen width */}
          <div className="drawer-enter absolute right-0 top-0 h-full w-1/2 min-w-[200px] bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <img src="/logo.jpeg" alt="Auram logo" className="w-8 h-8 object-contain" />
                <span className="font-display text-lg font-bold text-brand-magenta">Auram</span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer nav */}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-brand-light hover:text-brand-magenta transition-all duration-150 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block flex-shrink-0"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Drawer footer */}
            <div className="px-4 pb-6">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary w-full justify-center text-xs px-3 py-2"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
