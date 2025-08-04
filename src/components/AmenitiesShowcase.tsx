'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Shield,
  Coffee,
  Phone,
  Tv,
  Wind,
  Users,
  Sparkles,
  MapPin,
  Heart,
} from 'lucide-react'

const AmenitiesShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const amenities = [
    {
      id: 1,
      icon: Wifi,
      title: 'High-Speed WiFi',
      description:
        'Complimentary high-speed internet access throughout the property for seamless connectivity.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: Car,
      title: 'Free Parking',
      description:
        'Secure and complimentary parking facility available 24/7 for all our guests.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: Utensils,
      title: 'Multi-Cuisine Restaurant',
      description:
        'Savor delicious local and international cuisines prepared by our expert chefs.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: Dumbbell,
      title: 'Fitness Center',
      description:
        'State-of-the-art gym equipment for maintaining your fitness routine during your stay.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 5,
      icon: Waves,
      title: 'Swimming Pool',
      description:
        'Refreshing outdoor swimming pool with crystal clear water for relaxation and recreation.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 6,
      icon: Shield,
      title: '24/7 Security',
      description:
        'Round-the-clock security services ensuring your safety and peace of mind.',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      id: 7,
      icon: Coffee,
      title: 'Coffee Lounge',
      description:
        'Cozy coffee lounge serving premium beverages and light snacks throughout the day.',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      id: 8,
      icon: Phone,
      title: '24/7 Room Service',
      description:
        'Dedicated room service available around the clock for your convenience and comfort.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 9,
      icon: Tv,
      title: 'Entertainment Hub',
      description:
        'Premium cable TV with international channels and streaming entertainment options.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 10,
      icon: Wind,
      title: 'Climate Control',
      description:
        'Individual climate control systems in every room for optimal comfort year-round.',
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      id: 11,
      icon: Users,
      title: 'Event Spaces',
      description:
        'Elegant banquet halls and meeting rooms equipped with modern audio-visual facilities.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 12,
      icon: Sparkles,
      title: 'Housekeeping',
      description:
        'Daily housekeeping services maintaining impeccable cleanliness and hygiene standards.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, var(--accent), var(--background), var(--accent))`,
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-[length:40px_40px]"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--primary) 25%, transparent 25%), 
                             linear-gradient(-45deg, var(--primary) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, var(--primary) 75%), 
                             linear-gradient(-45deg, transparent 75%, var(--primary) 75%)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-8 h-8" style={{ color: 'var(--primary)' }} />
            <span
              className="text-lg font-semibold tracking-wider uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Premium Facilities
            </span>
            <Sparkles className="w-8 h-8" style={{ color: 'var(--primary)' }} />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            World-Class{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Amenities
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Experience luxury at its finest with our comprehensive range of
            premium amenities designed to make your stay extraordinary and
            memorable.
          </motion.p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.1)',
                borderWidth: '1px',
              }}
            >
              {/* Default Card Content */}
              <div className="relative p-6 h-full z-10 group-hover:opacity-0 transition-opacity duration-500">
                {/* Icon Container */}
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <amenity.icon
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  {amenity.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--muted)' }}
                >
                  {amenity.description}
                </p>
              </div>

              {/* Hover Overlay - Left to Right Animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, #ffffff, #f8fafc)`,
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Dark Theme Overlay */}
                <div className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 dark:opacity-100"></div>

                <div className="relative z-10 text-center p-6">
                  <amenity.icon className="w-16 h-16 mx-auto mb-4 text-gray-800 dark:text-gray-900" />
                  <h4 className="font-bold text-2xl mb-3 text-gray-800 dark:text-gray-900">
                    {amenity.title}
                  </h4>
                  <p className="text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-700">
                    {amenity.description}
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-200 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-900">
                      Available 24/7
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Colored Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${amenity.gradient} opacity-0 group-hover:opacity-20`}
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-6 h-6 text-red-500" />
            <span
              className="text-lg font-medium"
              style={{ color: 'var(--muted)' }}
            >
              Crafted with love for your comfort
            </span>
            <Heart className="w-6 h-6 text-red-500" />
          </motion.div>

          <motion.button
            className="inline-flex items-center space-x-3 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            style={{
              background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-5 h-5" />
            <span>Explore Our Facilities</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default AmenitiesShowcase
