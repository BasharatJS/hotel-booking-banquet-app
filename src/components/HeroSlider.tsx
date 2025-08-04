'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [supportsWebP, setSupportsWebP] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Beautiful Exterior',
      alt: 'Om Vatika Guest House Exterior View',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Luxury Room Interior',
      alt: 'Elegant guest room with modern amenities',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Garden Paradise',
      alt: 'Beautiful garden and outdoor spaces',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Fine Dining',
      alt: 'Restaurant and dining area',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Pool & Amenities',
      alt: 'Swimming pool and recreational facilities',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      imageWebP: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&fm=webp',
      imageMobile: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80',
      title: 'Banquet Hall',
      alt: 'Elegant banquet hall for special events',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Client-side detection for responsive images and WebP support
  useEffect(() => {
    const detectCapabilities = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
        const canvas = document.createElement('canvas')
        const webpSupported = canvas.toDataURL('image/webp').indexOf('webp') > -1
        setSupportsWebP(webpSupported)

        const handleResize = () => {
          setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }
    }
    detectCapabilities()
  }, [])

  // Preload first 3 images for smooth performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preloadImages = () => {
        slides.slice(0, 3).forEach((slide) => {
          const img = new Image()
          if (isMobile) {
            img.src = slide.imageMobile
          } else {
            img.src = supportsWebP ? slide.imageWebP : slide.image
          }
        })
      }
      preloadImages()
    }
  }, [isMobile, supportsWebP, slides])

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 3500)
      return () => clearInterval(timer)
    }
  }, [slides.length, isHovered])

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Utility function to get optimized image URL
  const getOptimizedImageUrl = (slide: typeof slides[0]) => {
    if (isMobile) {
      return slide.imageMobile
    }
    return supportsWebP ? slide.imageWebP : slide.image
  }

  const contentVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen h-screen sm:h-screen md:h-screen lg:min-h-[130vh] lg:h-[130vh] xl:h-screen 2xl:h-screen overflow-hidden"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Image Slider with Ken Burns Effect */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ y }}
          >
            <motion.div
              className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
              style={{
                backgroundImage: `url(${getOptimizedImageUrl(slides[currentSlide])})`,
              }}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.08 }}
              transition={{
                duration: 15,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-orange-900/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay - New Approach */}
      <div className="absolute inset-0 z-10">
        <div className="h-full flex flex-col">
          {/* Header Spacer */}
          <div className="h-4 sm:h-20 md:h-24 lg:h-40 xl:h-20 2xl:h-16 flex-shrink-0"></div>
          
          {/* Content Container */}
          <div className="flex-1 flex items-center justify-center px-4 pb-2 sm:pb-8 lg:pb-24 xl:pb-12 2xl:pb-8">
            <motion.div
              className="text-center max-w-5xl mx-auto w-full"
              style={{ color: 'var(--foreground)' }}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl mb-8 sm:mb-6 lg:mb-8 leading-tight tracking-tight px-2"
                style={{
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Welcome to Om Vatika Guest House
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl mb-8 sm:mb-6 lg:mb-8 tracking-wide px-2"
                style={{ 
                  color: 'white',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
                }}
              >
                Where Comfort Meets Luxury
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-3xl mb-10 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-95 px-4"
                style={{ 
                  color: 'var(--muted)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)' 
                }}
              >
                Experience exceptional hospitality in our beautiful guest house and banquet hall. 
                Perfect for your stay and special celebrations with world-class amenities.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 sm:gap-6 lg:gap-8 justify-center items-center mb-10 sm:mb-8 lg:mb-10 px-4"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-2xl w-full sm:w-auto sm:min-w-[180px] lg:min-w-[220px] border-2"
                  style={{
                    background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                    borderColor: 'var(--primary)'
                  }}
                >
                  📞 Book Your Stay
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-transparent border-2 sm:border-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl transition-all duration-300 backdrop-blur-sm w-full sm:w-auto sm:min-w-[180px] lg:min-w-[220px] shadow-xl"
                  style={{
                    borderColor: 'white',
                    color: 'white'
                  }}
                >
                  🏨 Explore Rooms
                </motion.button>
              </motion.div>

              {/* Enhanced Contact Quick Info */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4"
                style={{ color: 'var(--foreground)' }}
              >
                <motion.a
                  href="tel:+911234567890"
                  className="flex items-center space-x-2 sm:space-x-3 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--foreground)'
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone 
                    className="w-4 sm:w-5 h-4 sm:h-5" 
                    style={{ color: 'var(--primary)' }}
                  />
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">
                    +91 12345 67890
                  </span>
                </motion.a>
                <motion.div
                  className="flex items-center space-x-2 sm:space-x-3 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--foreground)'
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <MapPin 
                    className="w-4 sm:w-5 h-4 sm:h-5" 
                    style={{ color: 'var(--primary)' }}
                  />
                  <span className="font-semibold text-sm sm:text-base lg:text-lg">
                    Prime Location
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators - Vertical Right Side */}
      <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2 sm:space-y-3 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-3 sm:py-4 lg:py-6 rounded-full">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'h-6 sm:h-8 w-2 sm:w-3' : 'h-2 sm:h-3 w-2 sm:w-3'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-b from-amber-400 to-orange-500'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Loading animation overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--background))'
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full mx-auto mb-4"
                style={{
                  border: `4px solid var(--primary)`,
                  borderTop: '4px solid transparent'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <h2 
                className="text-2xl font-bold"
                style={{ color: 'var(--foreground)' }}
              >
                Welcome to Om Vatika
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default HeroSlider