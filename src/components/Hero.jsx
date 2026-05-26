import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gift, Package, Trophy, Award, Clock, Sparkles,
  ArrowRight, Star
} from 'lucide-react'

const heroSlides = [
  { src: '/images/hero_slide_1.png', alt: 'Premium luxury gift box' },
  { src: '/images/hero_slide_2.png', alt: 'Seasonal festive gifts arrangement' },
  { src: '/images/hero_slide_3.png', alt: 'Corporate executive gift set' },
  { src: '/images/hero_slide_4.png', alt: 'Custom laser engraved trophy' },
  { src: '/images/hero_slide_5.png', alt: 'Premium designer wall clock' },
]

const floatingIcons = [
  { Icon: Gift,     size: 'w-12 h-12', pos: 'top-24 left-[5%]',   cls: 'float-1', opacity: 'opacity-20' },
  { Icon: Trophy,   size: 'w-9 h-9',   pos: 'bottom-40 left-[10%]', cls: 'float-3', opacity: 'opacity-15' },
  { Icon: Award,    size: 'w-8 h-8',   pos: 'top-1/3 left-[2%]',  cls: 'float-4', opacity: 'opacity-10' },
  { Icon: Clock,    size: 'w-7 h-7',   pos: 'bottom-32 right-[5%]', cls: 'float-5', opacity: 'opacity-15' },
  { Icon: Sparkles, size: 'w-6 h-6',   pos: 'top-40 right-[8%]',  cls: 'float-2', opacity: 'opacity-10' },
]

const scrollToSection = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const navH = 72
    const top = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero – Unlock Happiness with us"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #8B1A6B 0%, #6d1454 45%, #4a0e38 70%, #2d0022 100%)',
        }}
      />

      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(245,197,24,0.35) 0%, transparent 60%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating bg icons */}
      {floatingIcons.map(({ Icon, size, pos, cls, opacity }, i) => (
        <div key={i} className={`absolute z-0 ${pos} ${cls} ${opacity} pointer-events-none`} aria-hidden="true">
          <Icon className={`${size} text-brand-gold`} strokeWidth={1} />
        </div>
      ))}

      {/* ── Main content: two-column on lg, stacked on mobile ── */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pt-24 sm:pt-28 pb-16 sm:pb-20">

        {/* LEFT – Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Premium Gifting · Salem &amp; Bangalore
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5"
          >
            Unlock{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F5C518, #ffd94d, #F5C518)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Happiness
            </span>
            <br />
            <span className="text-white/90">with us..</span>
          </motion.h1>

          {/* Subtext + Buttons guaranteed same width */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Subtext block element fills the full container width */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-full text-white/70 text-base sm:text-lg mb-8 leading-relaxed"
            >
              Premium Seasonal Gifts · Corporate Gifts · Trophies · Awards · Wall Clocks
            </motion.p>

            {/* CTA Buttons compact, sized to text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#products')}
                aria-label="Explore our products"
                className="group inline-flex items-center gap-2 bg-brand-gold text-brand-magenta font-bold px-5 py-3 rounded-full hover:bg-brand-gold-dark hover:-translate-y-0.5 hover:shadow-gold transition-all duration-200 text-sm"
              >
                <Gift className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" aria-hidden="true" />
                Explore Products
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                aria-label="Contact us"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-5 py-3 rounded-full hover:border-brand-gold hover:text-brand-gold hover:-translate-y-0.5 backdrop-blur-sm transition-all duration-200 text-sm"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
          >
            {[
              { value: '500+', label: 'Products' },
              { value: '50+', label: 'Happy Clients' },
              { value: '2', label: 'Branches' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-bold text-brand-gold">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT – Hero product image */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 w-full max-w-sm lg:max-w-none flex items-center justify-center"
        >
          {/* Image wrapper — overflow-hidden clips glow and badges */}
          <div className="relative w-full max-w-md overflow-visible">
            {/* Glow blob — contained within wrapper */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40 blur-3xl"
              style={{ background: 'radial-gradient(circle, #F5C518 0%, #8B1A6B 60%, transparent 100%)' }}
              aria-hidden="true"
            />
            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-brand-magenta/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slideIndex}
                  src={heroSlides[slideIndex].src}
                  alt={heroSlides[slideIndex].alt}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </AnimatePresence>
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/20 to-transparent pointer-events-none z-10" />
            </div>

            {/* Floating badge top left (hidden on small screens) */}
            <div className="hidden sm:flex absolute -top-4 -left-4 bg-white rounded-2xl shadow-brand px-3 py-2 sm:px-4 sm:py-2.5 items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-brand-magenta flex items-center justify-center">
                <Gift className="w-4 h-4 text-brand-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-none">Premium</p>
                <p className="text-xs text-gray-500 leading-none mt-0.5">Gifting Brand</p>
              </div>
            </div>

            {/* Floating badge bottom right (hidden on small screens) */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-brand-gold rounded-2xl shadow-gold px-3 py-2 sm:px-4 sm:py-2.5 items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3 h-3 text-brand-magenta fill-brand-magenta" aria-hidden="true" />
                ))}
              </div>
              <p className="text-brand-magenta font-bold text-sm">Trusted</p>
            </div>
          </div>
        </motion.div>
      </div>


      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F9F4F8" />
        </svg>
      </div>
    </section>
  )
}
