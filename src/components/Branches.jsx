import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Building2, Phone } from 'lucide-react'

const branches = [
  {
    city: 'Bangalore',
    icon: Building2,
    address: 'Bangalore Branch',
    fullAddress: 'Bangalore, Karnataka, India',
    phone: '63825 74041',
    directionUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bangalore+Karnataka',
    highlight: 'Head Office',
  },
  {
    city: 'Salem',
    icon: MapPin,
    address: '20/1, Veerapandiyar Nagar,',
    fullAddress: 'Near New Bus Stand, Salem – 636 004',
    phone: '97896 60449',
    directionUrl: 'https://www.google.com/maps/dir/?api=1&destination=Veerapandiyar+Nagar+Salem+636004',
    highlight: 'Main Store',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Branches() {
  return (
    <section
      id="branches"
      className="py-14 sm:py-20 lg:py-28 bg-brand-light"
      aria-labelledby="branches-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-brand-magenta/10 text-brand-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            We're Nearby
          </div>
          <h2 id="branches-heading" className="section-heading">
            Our Branches
          </h2>
          <p className="section-subtext">
            Visit us at our stores in Bangalore and Salem we'd love to help you find the perfect gift.
          </p>
        </motion.div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {branches.map((branch, i) => {
            const BranchIcon = branch.icon
            return (
              <motion.article
                key={branch.city}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl"
                aria-label={`${branch.city} branch`}
              >
                {/* Card background */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: 'linear-gradient(135deg, #8B1A6B 0%, #6d1454 70%, #5a1047 100%)' }}
                />
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-brand-gold/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                <div className="relative p-6 sm:p-8 text-white">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold text-xs font-bold px-3 py-1 rounded-full mb-5">
                    <BranchIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    {branch.highlight}
                  </div>

                  {/* City */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                    {branch.city}
                  </h3>
                  <div className="w-12 h-0.5 bg-brand-gold mb-4 sm:mb-5 group-hover:w-20 transition-all duration-300" />

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <address className="not-italic text-white/80 leading-relaxed text-sm">
                      {branch.address}<br />{branch.fullAddress}
                    </address>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0" aria-hidden="true" />
                    <a
                      href={`tel:+91${branch.phone.replace(/\s/g, '')}`}
                      className="text-white/80 text-sm hover:text-brand-gold transition-colors"
                    >
                      +91 {branch.phone}
                    </a>
                  </div>

                  {/* CTA */}
                  <a
                    href={branch.directionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${branch.city} branch`}
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-magenta font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-brand-gold-dark hover:-translate-y-0.5 hover:shadow-gold transition-all duration-200 text-sm"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    Get Directions
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Tagline strip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-500 mt-10 sm:mt-12 text-sm px-4"
        >
          📦 We also ship pan-India for bulk corporate orders.{' '}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-brand-magenta font-semibold hover:underline"
          >
            Contact us for shipping details →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
