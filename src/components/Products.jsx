import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gift, Package, Trophy, Award, Clock, Sparkles, Heart } from 'lucide-react'

const categories = [
  {
    icon: Gift,
    title: 'Seasonal Gifts',
    description: 'Curated hampers and festive collections for Diwali, Christmas, Pongal, and every celebration.',
    image: '/images/seasonal_gifts.png',
  },
  {
    icon: Package,
    title: 'Corporate Gifts',
    description: 'Branded corporate gifts that leave a lasting impression ideal for clients, partners & employees.',
    image: '/images/corporate_gifts.png',
  },
  {
    icon: Trophy,
    title: 'Trophies',
    description: 'Premium custom trophies in crystal, acrylic, metal, and wood perfect for any achievement.',
    image: '/images/trophies.png',
  },
  {
    icon: Award,
    title: 'Awards',
    description: 'Elegant award plaques and mementos engraved with precision for recognition events.',
    image: '/images/awards.png',
  },
  {
    icon: Clock,
    title: 'Wall Clocks',
    description: 'Designer and branded wall clocks stylish additions to any workspace or home.',
    image: '/images/wall_clocks.png',
  },
  {
    icon: Sparkles,
    title: 'Customized Items',
    description: 'Personalized mugs, frames, keychains, pen stands, and more made uniquely yours.',
    image: '/images/customized_gifts.png',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-brand-light"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-magenta/10 text-brand-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Our Collections
          </div>
          <h2 id="products-heading" className="section-heading">
            What We Offer
          </h2>
          <p className="section-subtext">
            From festive hampers to corporate awards we craft gifting experiences that inspire, celebrate, and connect.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.article
                key={cat.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl shadow-md hover:shadow-brand-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default"
                aria-label={cat.title}
              >
                {/* Product Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Magenta gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-brand-magenta" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                {/* Magenta top accent bar */}
                <div className="h-1 bg-gradient-to-r from-brand-magenta to-brand-gold w-full" />

                {/* Card content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-magenta transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  {/* Hover CTA */}
                  <div className="mt-4 flex items-center gap-1.5 text-brand-magenta text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
                    <span>Enquire now</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="btn-primary"
            aria-label="Contact us for custom orders"
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            Request a Custom Order
          </a>
        </motion.div>
      </div>
    </section>
  )
}
