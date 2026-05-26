import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MessageCircle, User, FileText, CheckCircle, MapPin } from 'lucide-react'

const contacts = [
  { name: 'Aman', phone: '63825 74041', role: 'Sales Head' },
  { name: 'Rajesh', phone: '97896 60449', role: 'Operations' },
  { name: 'Shreyash', phone: '73055 13665', role: 'Corporate Orders' },
]

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const lines = [
      `🎁 *New Enquiry – Auram by Shree Bheru Gifts*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📱 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      ``,
      `💬 *Message:*\n${form.message}`,
    ].filter((l) => l !== null).join('\n')

    const waUrl = `https://wa.me/916382574041?text=${encodeURIComponent(lines)}`
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(initialForm)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    }, 600)
  }

  const inputCls = 'w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-brand-light text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:border-transparent transition text-sm'

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 lg:py-28 bg-white"
      aria-labelledby="contact-heading"
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
            <Mail className="w-4 h-4" aria-hidden="true" />
            Reach Out
          </div>
          <h2 id="contact-heading" className="section-heading">Get In Touch</h2>
          <p className="section-subtext">
            Have a bulk order, custom requirement, or just want to browse? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-magenta text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" aria-label="Contact form" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      id="contact-name" type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name" className={inputCls}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      id="contact-phone" type="tel" name="phone" required
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 00000 00000" className={inputCls}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <input
                      id="contact-email" type="email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com" className={inputCls}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                    <textarea
                      id="contact-message" name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your gifting needs, quantity, occasion..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Team contacts */}
            <div className="rounded-2xl bg-brand-light p-5 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-bold text-brand-magenta mb-4">
                Talk to Our Team
              </h3>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-white transition-colors group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-magenta/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-brand-magenta" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.role}</p>
                    </div>
                    <a
                      href={`tel:+91${c.phone.replace(/\s/g, '')}`}
                      aria-label={`Call ${c.name} at ${c.phone}`}
                      className="flex items-center gap-1.5 text-brand-magenta font-semibold text-xs sm:text-sm hover:underline flex-shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-brand-light p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-brand-magenta" aria-hidden="true" />
                <h3 className="font-semibold text-gray-900">Email Us</h3>
              </div>
              <a
                href="mailto:shreebherugifts@gmail.com"
                className="text-brand-magenta hover:underline font-medium text-sm break-all"
              >
                shreebherugifts@gmail.com
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href={`https://wa.me/916382574041?text=${encodeURIComponent('Hi Auram! I am interested in your gifting products. Please share more details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm sm:text-base">Chat with us on WhatsApp</span>
              </a>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <p className="bg-brand-magenta text-white text-xs font-semibold px-4 py-2 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Salem Store – 20/1 Veerapandiyar Nagar
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31307.28965609523!2d78.13097765441434!3d11.650754696660556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1e72aba09b7%3A0x5eb9d0f9c87db2df!2sVeerapandiyar%20Nagar%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auram Salem Store Location"
                aria-label="Google Maps showing Auram Salem store location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
