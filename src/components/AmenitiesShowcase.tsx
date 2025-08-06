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
  Clock,
  Star,
  CheckCircle,
} from 'lucide-react'

const AmenitiesShowcase = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const amenities = [
    {
      id: 1,
      icon: Wifi,
      title: 'High-Speed WiFi',
      description:
        'Complimentary high-speed internet access throughout the property for seamless connectivity.',
      additionalInfo:
        'Stay connected with blazing-fast fiber-optic internet. Perfect for video calls, streaming, and business work. Available in all rooms, lobby, and outdoor areas.',
      hoverTitle: 'Lightning Fast Internet',
      hoverDescription:
        'Experience blazing speeds up to 1Gbps with our fiber-optic network. Perfect for streaming, gaming, and business needs.',
      features: [
        'Fiber Optic Connection',
        'Up to 1Gbps Speed',
        '99.9% Uptime Guarantee',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: Car,
      title: 'Free Parking',
      description:
        'Secure and complimentary parking facility available 24/7 for all our guests.',
      additionalInfo:
        'Covered parking spaces with CCTV surveillance and electronic gate access. Accommodates cars, SUVs, and motorcycles. No reservation required.',
      hoverTitle: 'Premium Parking Solutions',
      hoverDescription:
        'Spacious covered parking with advanced security systems, EV charging stations, and valet services available.',
      features: [
        'Covered Parking',
        'EV Charging Stations',
        'Valet Service Available',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: Utensils,
      title: 'Multi-Cuisine Restaurant',
      description:
        'Savor delicious local and international cuisines prepared by our expert chefs.',
      additionalInfo:
        'Open from 6 AM to 11 PM serving breakfast, lunch, and dinner. Features Indian, Continental, Chinese, and Mediterranean dishes with vegetarian and vegan options.',
      hoverTitle: 'Culinary Excellence',
      hoverDescription:
        'Award-winning chefs create masterpieces from around the world. From local delicacies to international favorites.',
      features: [
        'Award-Winning Chefs',
        '5 Cuisine Types',
        'Farm-to-Table Ingredients',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: Dumbbell,
      title: 'Fitness Center',
      description:
        'State-of-the-art gym equipment for maintaining your fitness routine during your stay.',
      additionalInfo:
        'Fully equipped with cardio machines, weight training equipment, and free weights. Open 24/7 with air conditioning and music system for your comfort.',
      hoverTitle: 'Complete Wellness Hub',
      hoverDescription:
        'Modern equipment, personal trainers, yoga classes, and wellness programs designed for your health journey.',
      features: ['Personal Trainers', 'Yoga Classes', 'Modern Equipment'],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 5,
      icon: Waves,
      title: 'Swimming Pool',
      description:
        'Refreshing outdoor swimming pool with crystal clear water for relaxation and recreation.',
      additionalInfo:
        'Olympic-size swimming pool with separate kids area. Pool deck with comfortable loungers and umbrellas. Lifeguard on duty during peak hours.',
      hoverTitle: 'Aquatic Paradise',
      hoverDescription:
        'Olympic-sized pool with heated water, poolside service, and stunning views. Open from sunrise to sunset.',
      features: ['Olympic Size Pool', 'Heated Water', 'Poolside Service'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 6,
      icon: Shield,
      title: '24/7 Security',
      description:
        'Round-the-clock security services ensuring your safety and peace of mind.',
      additionalInfo:
        'Professional security team with CCTV monitoring, electronic key card access, and emergency response system. Regular patrolling throughout the premises.',
      hoverTitle: 'Advanced Security Systems',
      hoverDescription:
        'Multi-layer security with trained personnel, CCTV monitoring, and smart access control for complete protection.',
      features: [
        'Trained Personnel',
        'CCTV Monitoring',
        'Smart Access Control',
      ],
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      id: 7,
      icon: Coffee,
      title: 'Coffee Lounge',
      description:
        'Cozy coffee lounge serving premium beverages and light snacks throughout the day.',
      additionalInfo:
        'Artisan coffee bar with specialty drinks, fresh pastries, and light meals. Comfortable seating with free WiFi. Perfect for meetings or relaxation.',
      hoverTitle: 'Artisan Coffee Experience',
      hoverDescription:
        'Handcrafted beverages by skilled baristas using premium beans sourced from around the world.',
      features: ['Skilled Baristas', 'Premium Beans', 'Handcrafted Beverages'],
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      id: 8,
      icon: Phone,
      title: '24/7 Room Service',
      description:
        'Dedicated room service available around the clock for your convenience and comfort.',
      additionalInfo:
        'Extensive menu with hot meals, beverages, and snacks delivered to your room. Quick service with average delivery time of 25 minutes.',
      hoverTitle: 'Luxury Room Service',
      hoverDescription:
        'Gourmet meals delivered to your room within 30 minutes. Extensive menu available round the clock.',
      features: ['30-Min Delivery', 'Gourmet Menu', '24/7 Availability'],
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 9,
      icon: Tv,
      title: 'Entertainment Hub',
      description:
        'Premium cable TV with international channels and streaming entertainment options.',
      additionalInfo:
        'Smart TVs in every room with Netflix, Amazon Prime, and Disney+ access. High-definition channels including sports, news, movies, and documentaries.',
      hoverTitle: 'Ultimate Entertainment',
      hoverDescription:
        '500+ channels, streaming services, gaming consoles, and premium sound systems in every room.',
      features: ['500+ Channels', 'Streaming Services', 'Gaming Consoles'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 10,
      icon: Wind,
      title: 'Climate Control',
      description:
        'Individual climate control systems in every room for optimal comfort year-round.',
      additionalInfo:
        'Smart thermostats with remote control via mobile app. Energy-efficient AC units with air purification and humidity control for perfect indoor climate.',
      hoverTitle: 'Smart Climate Systems',
      hoverDescription:
        'AI-powered climate control with personalized settings, air purification, and energy-efficient operation.',
      features: ['AI-Powered Control', 'Air Purification', 'Energy Efficient'],
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      id: 11,
      icon: Users,
      title: 'Event Spaces',
      description:
        'Elegant banquet halls and meeting rooms equipped with modern audio-visual facilities.',
      additionalInfo:
        'Multiple venues for 20-500 guests with professional lighting, sound systems, and projectors. Dedicated event coordinators and catering services available.',
      hoverTitle: 'Professional Event Venues',
      hoverDescription:
        'Versatile spaces for weddings, conferences, and celebrations with full-service event planning support.',
      features: [
        'Wedding Venues',
        'Conference Rooms',
        'Event Planning Support',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 12,
      icon: Sparkles,
      title: 'Housekeeping',
      description:
        'Daily housekeeping services maintaining impeccable cleanliness and hygiene standards.',
      additionalInfo:
        'Professional cleaning staff using eco-friendly products. Daily room cleaning, fresh linens, and towel service. Special requests accommodated promptly.',
      hoverTitle: 'Premium Housekeeping',
      hoverDescription:
        'Eco-friendly cleaning products, twice-daily service, and personalized preferences for your comfort.',
      features: [
        'Eco-Friendly Products',
        'Twice Daily Service',
        'Personalized Care',
      ],
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
      id="amenities"
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
              className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.1)',
                borderWidth: '1px',
                minHeight: '420px',
              }}
            >
              {/* Default Card Content */}
              <div className="relative p-6 h-full transition-opacity duration-500 group-hover:opacity-0 flex flex-col">
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <amenity.icon
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  {amenity.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4 transition-colors duration-300"
                  style={{ color: 'var(--muted)' }}
                >
                  {amenity.description}
                </p>

                {/* Additional Info */}
                <p
                  className="text-xs leading-relaxed mb-4 flex-grow transition-colors duration-300"
                  style={{ color: 'var(--muted)', opacity: 0.8 }}
                >
                  {amenity.additionalInfo}
                </p>

                {/* Hover hint */}
                <div className="mt-auto">
                  <div
                    className="inline-flex items-center space-x-2 px-3 py-2 rounded-full border text-xs font-medium transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
                      borderColor: 'rgba(var(--primary-rgb), 0.2)',
                      color: 'var(--primary)',
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Hover for details</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: 'var(--background)',
                    backgroundImage: `linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--primary-rgb), 0.15))`,
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 text-center px-6 py-4 w-full h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex-shrink-0">
                    {/* Icon with animation */}
                    <div className="mb-3">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl mx-auto transform group-hover:scale-110 transition-transform duration-500"
                        style={{
                          backgroundColor: 'var(--accent)',
                          border: '2px solid rgba(var(--primary-rgb), 0.3)',
                        }}
                      >
                        <amenity.icon
                          className="w-8 h-8"
                          style={{ color: 'var(--primary)' }}
                        />
                      </div>
                    </div>

                    {/* Hover Title */}
                    <h4
                      className="font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {amenity.hoverTitle}
                    </h4>
                  </div>

                  {/* Middle Section - Description and Features */}
                  <div className="flex-grow flex flex-col justify-center">
                    {/* Hover Description */}
                    <p
                      className="text-xs leading-relaxed mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      style={{ color: 'var(--muted)' }}
                    >
                      {amenity.hoverDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      {amenity.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center space-x-2"
                        >
                          <CheckCircle
                            className="w-3 h-3 flex-shrink-0"
                            style={{ color: 'var(--primary)' }}
                          />
                          <span
                            className="text-xs font-medium text-center"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section - Status Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"
                      style={{
                        backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                        borderColor: 'rgba(var(--primary-rgb), 0.3)',
                      }}
                    >
                      <Clock
                        className="w-3 h-3"
                        style={{ color: 'var(--primary)' }}
                      />
                      <span
                        className="text-xs font-semibold"
                        style={{ color: 'var(--primary)' }}
                      >
                        Available 24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          {/* Enhanced text section with better styling */}
          <motion.div
            className="max-w-2xl mx-auto mb-12 p-8 rounded-2xl backdrop-blur-sm border"
            style={{
              backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
              borderColor: 'rgba(var(--primary-rgb), 0.1)',
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-6 h-6 text-red-500" />
              <span
                className="text-xl font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                Crafted with Love
              </span>
              <Heart className="w-6 h-6 text-red-500" />
            </motion.div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              Every amenity is thoughtfully designed to ensure your ultimate
              comfort and satisfaction during your stay with us.
            </p>
          </motion.div>

          <motion.button
            className="inline-flex items-center space-x-3 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl border-2"
            style={{
              background: `linear-gradient(to right, #8b4513, #a0522d)`,
              borderColor: '#8b4513',
            }}
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-6 h-6" />
            <span>Explore Our Facilities</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
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
