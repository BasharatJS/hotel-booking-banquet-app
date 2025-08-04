'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Wifi,
  Snowflake,
  Tv,
  Bath,
  Coffee,
  Car,
  Trees,
  Users,
  Bed,
  Mountain,
  Utensils,
  Music,
  Eye,
  ArrowRight,
} from 'lucide-react'

const RoomsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const roomTypes = [
    {
      id: 1,
      name: 'Deluxe Room',
      type: 'deluxe',
      description: 'Comfortable and elegant accommodation with modern amenities for a perfect stay.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '2,499',
      amenities: [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Snowflake, label: 'Air Conditioning' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Bath, label: 'Private Bathroom' },
        { icon: Coffee, label: 'Tea/Coffee' },
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 2,
      name: 'Premium Suite',
      type: 'premium',
      description: 'Spacious luxury suite with premium amenities and exceptional comfort for discerning guests.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '4,999',
      amenities: [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Snowflake, label: 'Climate Control' },
        { icon: Tv, label: '55" Smart TV' },
        { icon: Bath, label: 'Luxury Bathroom' },
        { icon: Car, label: 'Valet Parking' },
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 3,
      name: 'Family Room',
      type: 'family',
      description: 'Spacious family accommodation designed for comfort and convenience with extra space.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '3,999',
      amenities: [
        { icon: Users, label: 'Family Size' },
        { icon: Bed, label: 'Multiple Beds' },
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Coffee, label: 'Kitchenette' },
      ],
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 4,
      name: 'Executive Suite',
      type: 'executive',
      description: 'Premium business accommodation with luxury amenities and professional services.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '6,999',
      amenities: [
        { icon: Wifi, label: 'High-Speed WiFi' },
        { icon: Mountain, label: 'City View' },
        { icon: Utensils, label: 'Room Service' },
        { icon: Car, label: 'Premium Parking' },
        { icon: Coffee, label: 'Mini Bar' },
      ],
      gradient: 'from-amber-500 to-amber-700',
    },
    {
      id: 5,
      name: 'Garden View Room',
      type: 'garden',
      description: 'Serene accommodation with beautiful garden views and peaceful natural surroundings.',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '3,499',
      amenities: [
        { icon: Trees, label: 'Garden View' },
        { icon: Snowflake, label: 'Air Conditioning' },
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Bath, label: 'Modern Bathroom' },
        { icon: Coffee, label: 'Refreshments' },
      ],
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      id: 6,
      name: 'Banquet Suite',
      type: 'banquet',
      description: 'Special event accommodation with elegant design perfect for celebration guests.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '5,999',
      amenities: [
        { icon: Music, label: 'Event Ready' },
        { icon: Utensils, label: 'Catering Access' },
        { icon: Car, label: 'Valet Service' },
        { icon: Wifi, label: 'Premium WiFi' },
        { icon: Bath, label: 'Luxury Amenities' },
      ],
      gradient: 'from-rose-500 to-rose-700',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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
        background: `linear-gradient(135deg, var(--background), var(--accent), var(--background))`,
        color: 'var(--foreground)',
      }}
    >
      {/* Rooms Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        {/* Elegant Stripe Pattern */}
        <div
          className="absolute inset-0 bg-[length:100px_100px]"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--primary) 1px, transparent 1px, transparent 49px, var(--primary-light) 1px, var(--primary-light) 2px, transparent 2px, transparent 99px),
                             linear-gradient(45deg, transparent 25px, var(--primary) 25px, var(--primary) 26px, transparent 26px, transparent 74px, var(--primary) 74px, var(--primary) 75px, transparent 75px)`,
            backgroundSize: '100px 100px',
          }}
        />
        {/* Subtle Corner Accents */}
        <div
          className="absolute inset-0 bg-[length:60px_60px] opacity-40"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 29px, var(--primary-light) 29px, var(--primary-light) 31px, transparent 31px),
                             linear-gradient(0deg, transparent 29px, var(--primary-light) 29px, var(--primary-light) 31px, transparent 31px)`,
            backgroundSize: '60px 60px',
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
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Rooms & Suites
            </span>
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Experience luxury and comfort in our thoughtfully designed accommodations. 
            Each room offers modern amenities and elegant interiors for an unforgettable stay.
          </motion.p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid rgba(var(--primary-rgb), 0.2)',
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg"
                  style={{
                    background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  ₹{room.price}/night
                </motion.div>

                {/* Room Type Badge */}
                <motion.div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white font-medium text-xs shadow-lg bg-gradient-to-r ${room.gradient}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {room.type.toUpperCase()}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Room Name */}
                <motion.h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--foreground)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {room.name}
                </motion.h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="space-y-3">
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Key Amenities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <motion.div
                        key={amenityIndex}
                        className="flex items-center space-x-1 px-2 py-1 rounded-lg text-xs"
                        style={{
                          backgroundColor: 'var(--accent)',
                          color: 'var(--foreground)',
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'var(--primary)',
                          color: 'white',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + amenityIndex * 0.1 }}
                      >
                        <amenity.icon className="w-3 h-3" />
                        <span>{amenity.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    className="flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                      background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                  
                  <motion.button
                    className="flex items-center justify-center px-4 py-3 rounded-xl border transition-all duration-300"
                    style={{
                      borderColor: 'var(--primary)',
                      color: 'var(--primary)',
                      backgroundColor: 'transparent',
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-sm">Details</span>
                  </motion.button>
                </div>

                {/* Starting Price */}
                <motion.div
                  className="text-center pt-2 border-t"
                  style={{ borderColor: 'var(--primary)', borderOpacity: 0.2 }}
                >
                  <span
                    className="text-xs"
                    style={{ color: 'var(--muted)' }}
                  >
                    Starting from{' '}
                    <span
                      className="font-bold text-lg"
                      style={{ color: 'var(--primary)' }}
                    >
                      ₹{room.price}
                    </span>
                    /night
                  </span>
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom right, var(--primary), var(--primary-light))`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center space-x-2 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default RoomsShowcase