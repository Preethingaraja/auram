import React from 'react'
import { Phone, Mail, MapPin, Share2, ExternalLink, MessageSquare, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#why-us' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white" role="contentinfo" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpeg"
                alt="Auram logo"
                className="w-12 h-12 object-contain flex-shrink-0"
              />
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white">Auram</p>
                <p className="text-xs text-gray-400">by Shree Bheru Gifts</p>
              </div>
            </div>
            <p className="text-brand-gold font-display italic text-base sm:text-lg mb-4">
              "Unlock Happiness with us.."
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Auram is a premium gifting brand based in Salem &amp; Bangalore, India offering curated seasonal gifts, corporate hampers, custom trophies, awards, and personalized items.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: MessageSquare, href: 'https://wa.me/916382574041', label: 'Chat on WhatsApp' },
                { Icon: Share2, href: 'https://instagram.com', label: 'Follow us on Instagram' },
                { Icon: ExternalLink, href: 'https://facebook.com', label: 'Find us on Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-magenta flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-gold rounded-full inline-block" aria-hidden="true" />
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors duration-150 hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-gold rounded-full inline-block" aria-hidden="true" />
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a href="tel:+916382574041" className="flex items-center gap-2.5 text-gray-400 hover:text-brand-gold text-sm transition-colors" aria-label="Call Aman">
                  <Phone className="w-4 h-4 text-brand-magenta flex-shrink-0" aria-hidden="true" />
                  63825 74041 (Aman)
                </a>
              </li>
              <li>
                <a href="tel:+919789660449" className="flex items-center gap-2.5 text-gray-400 hover:text-brand-gold text-sm transition-colors" aria-label="Call Rajesh">
                  <Phone className="w-4 h-4 text-brand-magenta flex-shrink-0" aria-hidden="true" />
                  97896 60449 (Rajesh)
                </a>
              </li>
              <li>
                <a href="mailto:shreebherugifts@gmail.com" className="flex items-start gap-2.5 text-gray-400 hover:text-brand-gold text-sm transition-colors break-all" aria-label="Email us">
                  <Mail className="w-4 h-4 text-brand-magenta flex-shrink-0 mt-0.5" aria-hidden="true" />
                  shreebherugifts@gmail.com
                </a>
              </li>
              <li>
                <address className="flex items-start gap-2.5 text-gray-400 text-sm not-italic">
                  <MapPin className="w-4 h-4 text-brand-magenta flex-shrink-0 mt-0.5" aria-hidden="true" />
                  20/1 Veerapandiyar Nagar,<br />Near New Bus Stand,<br />Salem – 636 004
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Auram by Shree Bheru Gifts. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-brand-magenta fill-brand-magenta mx-0.5" aria-hidden="true" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
