'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Send,
  User,
  MessageSquare,
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
})

// Fix for default markers - only run on client side
const fixLeafletIcons = () => {
  if (typeof window !== 'undefined') {
    const L = require('leaflet')
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    })
  }
}

// Create custom brown marker icon
const createCustomIcon = () => {
  if (typeof window !== 'undefined') {
    const L = require('leaflet')
    return L.divIcon({
      className: 'custom-marker',
      html: `<svg width="30" height="44" viewBox="0 0 30 44" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(0,0,0,0.3)"/>
          </filter>
        </defs>
        <path d="M15 0C6.716 0 0 6.716 0 15c0 8.284 15 29 15 29s15-20.716 15-29C30 6.716 23.284 0 15 0z" 
              fill="#8b4513" 
              filter="url(#shadow)"/>
        <circle cx="15" cy="15" r="6" fill="white"/>
        <circle cx="15" cy="15" r="3" fill="#8b4513"/>
      </svg>`,
      iconSize: [30, 44],
      iconAnchor: [15, 44],
      popupAnchor: [0, -44],
    })
  }
  return null
}

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [customIcon, setCustomIcon] = useState<any>(null)

  // Fix Leaflet icons on client side
  useEffect(() => {
    fixLeafletIcons()
    const icon = createCustomIcon()
    setCustomIcon(icon)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ]

  // Coordinates for AA 40, AA Block, Sec-1, Bidhannagar, Kolkata, West Bengal 700064
  const position: [number, number] = [22.5726, 88.4639]

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--accent)',
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%)',
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-48 -translate-y-48"
          style={{ backgroundColor: 'var(--primary)' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-48 translate-y-48"
          style={{ backgroundColor: 'var(--secondary)' }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-4 py-16"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-8 h-8" style={{ color: 'var(--primary)' }} />
            <span
              className="text-lg font-semibold tracking-wider uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Get Connected
            </span>
            <Mail className="w-8 h-8" style={{ color: 'var(--primary)' }} />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            Contact{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Us
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Ready to experience the comfort and hospitality of Om Vatika Guest
            House? Get in touch with us for reservations, inquiries, or just to
            say hello.
          </motion.p>
        </motion.div>
        {/* First Row - Office Address & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Visit Our Office Card */}
          <motion.div variants={itemVariants}>
            <div
              className="backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.2)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: 'var(--primary)' }}
              >
                Visit Our Office
              </h3>

              <div className="text-center mb-6">
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ohm Vatika Guest House
                </h4>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: 'var(--muted)' }}
                >
                  Experience comfort and hospitality at its finest. Your perfect
                  stay awaits you.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                  >
                    <MapPin
                      className="w-6 h-6"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Address
                    </h4>
                    <p
                      className="leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      AA 40, AA Block, Sec-1, Bidhannagar,
                      <br />
                      Kolkata, West Bengal 700064
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                  >
                    <Phone
                      className="w-6 h-6"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:+918240600977"
                      className="transition-colors duration-300 hover:underline hover:text-primary"
                      style={{ color: 'var(--muted)' }}
                    >
                      +91 82406 00977
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div
                    className="p-3 rounded-lg group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.1)' }}
                  >
                    <Mail
                      className="w-6 h-6"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-lg mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:info@ohmvatika.com"
                      className="transition-colors duration-300 hover:underline hover:text-primary"
                      style={{ color: 'var(--muted)' }}
                    >
                      info@ohmvatika.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-6 text-center">
                <h4
                  className="font-semibold text-lg mb-4"
                  style={{ color: 'var(--foreground)' }}
                >
                  Follow Us
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                      }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon
                        className="w-5 h-5"
                        style={{ color: 'var(--primary)' }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Get In Touch Card */}
          <motion.div variants={itemVariants}>
            <div
              className="backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.2)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: 'var(--primary)' }}
              >
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--muted)' }}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--accent)',
                      borderColor: 'rgba(var(--primary-rgb), 0.3)',
                      color: 'var(--foreground)',
                    }}
                    required
                  />
                </div>

                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--muted)' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--accent)',
                      borderColor: 'rgba(var(--primary-rgb), 0.3)',
                      color: 'var(--foreground)',
                    }}
                    required
                  />
                </div>

                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--muted)' }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--accent)',
                      borderColor: 'rgba(var(--primary-rgb), 0.3)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>

                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 w-5 h-5"
                    style={{ color: 'var(--muted)' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--accent)',
                      borderColor: 'rgba(var(--primary-rgb), 0.3)',
                      color: 'var(--foreground)',
                    }}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-white border-2"
                  style={{
                    background: 'linear-gradient(to right, #8b4513, #a0522d)',
                    borderColor: '#8b4513',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Second Row - Map */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ color: 'var(--foreground)' }}
          >
            Find Us Here
          </h3>
          <div
            className="relative h-[450px] rounded-2xl overflow-hidden border"
            style={{ borderColor: 'rgba(var(--primary-rgb), 0.2)' }}
          >
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              className="rounded-2xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup maxWidth={300} className="custom-popup">
                  <div className="p-4 min-w-[280px]">
                    {/* Header */}
                    <div className="text-center mb-4 pb-3 border-b border-gray-200">
                      <div className="flex justify-center items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-sm">
                            ॐ
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-orange-600">
                          Om Vatika Guest House
                        </h4>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <span className="text-orange-500 mr-2 mt-0.5">📍</span>
                        <div>
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">
                            AA 40, AA Block, Sec-1, Bidhannagar,
                            <br />
                            Kolkata, West Bengal 700064
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <span className="mr-2">📧</span>
                        <a
                          href="mailto:info@ohmvatika.com"
                          className="text-sm text-orange-600 hover:text-orange-800 hover:underline font-medium"
                        >
                          info@ohmvatika.com
                        </a>
                      </div>

                      <div className="flex items-center">
                        <span className="mr-2">📱</span>
                        <div className="text-sm text-gray-700">
                          <a
                            href="tel:+918240600977"
                            className="text-orange-600 hover:text-orange-800 hover:underline font-medium mr-2"
                          >
                            +91 82406 00977
                          </a>
                          <span className="text-gray-400">|</span>
                          <a
                            href="tel:+918240600977"
                            className="text-orange-600 hover:text-orange-800 hover:underline font-medium ml-2"
                          >
                            +91 082406 00977
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">
                        Experience comfort and hospitality
                      </p>
                      <div className="flex justify-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-yellow-400">⭐</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="border-t pt-8"
          style={{ borderColor: 'rgba(var(--primary-rgb), 0.2)' }}
        >
          {/* Business Info */}
          <div className="text-center mb-6">
            <h4
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--foreground)' }}
            >
              Om Vatika Guest House
            </h4>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--muted)' }}
            >
              AA 40, AA Block, Sec-1, Bidhannagar, Kolkata, West Bengal 700064
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm mb-4">
              <div className="flex items-center">
                <span className="mr-1">📧</span>
                <a
                  href="mailto:info@ohmvatika.com"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: 'var(--primary)' }}
                >
                  info@ohmvatika.com
                </a>
              </div>

              <span style={{ color: 'var(--muted)' }}>|</span>

              <div className="flex items-center">
                <span className="mr-1">📱</span>
                <a
                  href="tel:+918240600977"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: 'var(--primary)' }}
                >
                  +91 82406 00977
                </a>
              </div>

              <span style={{ color: 'var(--muted)' }}>|</span>

              <div className="flex items-center">
                <span className="mr-1">📱</span>
                <a
                  href="tel:+918240600977"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: 'var(--primary)' }}
                >
                  +91 082406 00977
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="text-center pt-4 border-t"
            style={{ borderColor: 'rgba(var(--primary-rgb), 0.1)' }}
          >
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              ©2025 Ohm Vatika Guest House. All rights reserved. Powered by{' '}
              <a
                href="https://www.evonnexis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 cursor-pointer hover:underline font-medium hover:opacity-80"
                style={{ color: 'var(--primary)' }}
              >
                Evonnexis Pvt. Ltd.
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
