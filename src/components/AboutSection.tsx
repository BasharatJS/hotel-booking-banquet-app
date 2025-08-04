'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  MapPin,
  Users,
  Star,
  Home,
  Heart,
  Award,
  Clock,
  CheckCircle,
} from 'lucide-react'

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Animated counters
  const [counts, setCounts] = useState({
    years: 0,
    guests: 0,
    rooms: 0,
    staff: 0,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const finalCounts = {
        years: 15,
        guests: 5000,
        rooms: 25,
        staff: 12,
      }

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps

      Object.keys(finalCounts).forEach((key) => {
        const finalValue = finalCounts[key as keyof typeof finalCounts]
        const increment = finalValue / steps
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          setCounts((prev) => ({
            ...prev,
            [key]: Math.floor(increment * currentStep),
          }))

          if (currentStep >= steps) {
            clearInterval(timer)
            setCounts((prev) => ({
              ...prev,
              [key]: finalValue,
            }))
          }
        }, stepTime)
      })
    }
  }, [isInView])

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut',
        delay: 0.2,
      },
    },
  }

  const stats = [
    {
      icon: Clock,
      value: counts.years,
      suffix: '+',
      label: 'Years of Excellence',
      color: 'text-amber-500',
    },
    {
      icon: Users,
      value: counts.guests,
      suffix: '+',
      label: 'Happy Guests',
      color: 'text-blue-500',
    },
    {
      icon: Home,
      value: counts.rooms,
      suffix: '',
      label: 'Comfortable Rooms',
      color: 'text-green-500',
    },
    {
      icon: Heart,
      value: counts.staff,
      suffix: '',
      label: 'Dedicated Staff',
      color: 'text-red-500',
    },
  ]

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description:
        'Strategically located near major attractions and business centers',
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Personalized hospitality ensuring memorable experiences',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description:
        'Recognized for excellence in guest satisfaction and service',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, var(--accent), var(--background), var(--accent))`,
        color: 'var(--foreground)',
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[length:20px_20px]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: 'var(--foreground)' }}
              >
                About{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Om Vatika Guest House
                </span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-4 leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                <p className="text-lg">
                  Welcome to Om Vatika Guest House, where traditional
                  hospitality meets modern comfort. For over 15 years, we have
                  been creating unforgettable experiences for travelers seeking
                  a perfect blend of luxury, warmth, and authentic service.
                </p>

                <p>
                  Founded with a vision to redefine hospitality, Om Vatika
                  stands as a testament to our commitment to excellence. Every
                  corner of our property reflects our dedication to providing
                  guests with a home away from home, where comfort and care are
                  paramount.
                </p>

                <p>
                  Nestled in a prime location, our guest house offers easy
                  access to major attractions, business centers, and cultural
                  landmarks. Whether you&apos;re here for business or leisure, our
                  experienced team ensures your stay is nothing short of
                  exceptional.
                </p>

                <p>
                  Our mission extends beyond accommodation – we create moments
                  that matter. From our elegantly appointed rooms to our
                  world-class banquet facilities, every detail is crafted to
                  exceed your expectations and create lasting memories.
                </p>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={iconVariants}
                  className="text-center p-4 rounded-lg backdrop-blur-sm border hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent)',
                    borderColor: 'var(--primary)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    // borderOpacity: 0.3
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="flex justify-center mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon
                      className="w-8 h-8"
                      style={{ color: 'var(--primary)' }}
                    />
                  </motion.div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                className="inline-flex items-center space-x-2 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <CheckCircle className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <div className="space-y-8">
            {/* Main Image */}
            <motion.div
              ref={imageRef}
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <motion.div
                style={{ y: imageY }}
                className="relative h-96 lg:h-[500px]"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Om Vatika Guest House"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Image overlay content */}
              <motion.div
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  Experience Excellence
                </h3>
                <p className="text-white/90">
                  Where every stay becomes a cherished memory
                </p>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={iconVariants}
                  className="backdrop-blur-sm rounded-xl p-6 text-center border hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--primary)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    // borderOpacity: 0.2
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="flex justify-center mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
