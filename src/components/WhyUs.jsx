import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Paintbrush, PackageCheck } from 'lucide-react'

const features = [
  {
    num: '01',
    icon: ShieldCheck,
    title: 'Quality Products',
    description: 'Every item is carefully sourced and quality-checked before it reaches you. We never compromise on craft or excellence.',
    stat: '100%',
    statLabel: 'Quality Assured',
    image: '/images/whyus_quality.png',
    imageAlt: 'Premium quality gift inspection',
    accentColor: 'bg-brand-magenta',
    statColor: 'text-brand-gold',
  },
  {
    num: '02',
    icon: Truck,
    title: 'Fast Delivery',
    description: 'On-time delivery for bulk corporate orders and individual purchases pan India, Salem & Bangalore.',
    stat: '2-5',
    statLabel: 'Days Delivery',
    image: '/images/whyus_delivery.png',
    imageAlt: 'Fast gift delivery to doorstep',
    accentColor: 'bg-brand-gold',
    statColor: 'text-brand-magenta',
  },
  {
    num: '03',
    icon: Paintbrush,
    title: 'Custom Branding',
    description: 'Your logo, your message engraved, printed, or embossed on any product with laser precision and care.',
    stat: '500+',
    statLabel: 'Designs Done',
    image: '/images/whyus_branding.png',
    imageAlt: 'Custom laser engraving on trophy',
    accentColor: 'bg-brand-magenta',
    statColor: 'text-brand-gold',
  },
  {
    num: '04',
    icon: PackageCheck,
    title: 'Bulk Orders',
    description: 'Scale effortlessly with our bulk gifting solutions. Special pricing for corporate and institutional orders of any size.',
    stat: '50+',
    statLabel: 'Happy Clients',
    image: '/images/whyus_bulk.png',
    imageAlt: 'Large bulk corporate gift order',
    accentColor: 'bg-gray-950',
    statColor: 'text-brand-gold',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-magenta text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            Why Choose Us
          </div>
          <h2 id="whyus-heading" className="section-heading">
            The Auram Promise
          </h2>
          <p className="section-subtext">
            We don't just deliver gifts we deliver experiences. Here's what sets us apart.
          </p>
        </motion.div>
      </div>

      {/* ── Full-width zig-zag image strips ── */}
      <div className="divide-y divide-gray-100">
        {features.map((feat, i) => {
          const Icon = feat.icon
          const isEven = i % 2 === 1

          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              aria-label={feat.title}
            >
              {/* ── IMAGE PANEL (alternating left/right) ── */}
              <div className="relative w-full md:w-[45%] overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
                <img
                  src={feat.image}
                  alt={feat.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-transparent to-white/20 pointer-events-none`} />

                {/* Floating stat badge */}
                <div className={`absolute bottom-5 ${isEven ? 'left-5' : 'right-5'} ${feat.accentColor} rounded-2xl px-5 py-3 shadow-xl`}>
                  <p className={`font-display text-3xl font-black ${feat.statColor} leading-none`}>
                    {feat.stat}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5 font-medium">{feat.statLabel}</p>
                </div>

                {/* Step number watermark */}
                <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} ${feat.accentColor}/80 rounded-xl px-3 py-1`}>
                  <span className="text-white/80 font-bold text-xs tracking-widest">{feat.num}</span>
                </div>
              </div>

              {/* ── TEXT PANEL ── */}
              <div className="w-full md:w-[55%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 bg-white">
                {/* Step label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl ${feat.accentColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-gray-300 font-bold text-xs tracking-widest">
                    {feat.num} / 04
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-20 rounded-2xl bg-brand-light px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-700 font-medium text-center sm:text-left">
            Ready to make someone's day special?{' '}
            <span className="text-brand-magenta font-semibold">From 1 gift to 10,000 we've got you.</span>
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary flex-shrink-0"
          >
            Start Your Order
          </a>
        </motion.div>
      </div>
    </section>
  )
}
