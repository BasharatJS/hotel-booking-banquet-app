'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Camera,
  Filter,
  Eye,
  Heart,
  Share2,
  Download,
  ZoomIn,
  Grid3X3,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react'

const GalleryShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const filters = [
    { id: 'all', label: 'All Photos', count: 24 },
    { id: 'rooms', label: 'Rooms & Suites', count: 8 },
    { id: 'amenities', label: 'Amenities', count: 6 },
    { id: 'dining', label: 'Dining', count: 4 },
    { id: 'events', label: 'Events', count: 4 },
    { id: 'exterior', label: 'Exterior', count: 2 },
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Deluxe Suite',
      description: 'Elegant and spacious deluxe suite with modern amenities',
      likes: 124,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Premium Room',
      description: 'Comfortable premium room with city view',
      likes: 89,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Executive Suite',
      description: 'Luxury executive suite for business travelers',
      likes: 156,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'dining',
      title: 'Restaurant Interior',
      description: 'Modern restaurant with elegant dining atmosphere',
      likes: 203,
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Family Room',
      description: 'Spacious family room with comfortable seating',
      likes: 98,
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Garden View Room',
      description: 'Peaceful room overlooking beautiful gardens',
      likes: 142,
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Banquet Hall',
      description: 'Elegant banquet hall for special occasions',
      likes: 178,
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Swimming Pool',
      description: 'Crystal clear swimming pool with lounge area',
      likes: 234,
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'dining',
      title: 'Fine Dining',
      description: 'Exquisite fine dining experience',
      likes: 167,
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Spa & Wellness',
      description: 'Relaxing spa and wellness center',
      likes: 189,
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Luxury Suite',
      description: 'Ultimate luxury suite with premium amenities',
      likes: 276,
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1590490360782-c019bc1979e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art fitness and gym facilities',
      likes: 112,
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'dining',
      title: 'Breakfast Area',
      description: 'Bright and welcoming breakfast dining area',
      likes: 134,
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'exterior',
      title: 'Hotel Exterior',
      description: 'Beautiful exterior architecture and landscaping',
      likes: 198,
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Penthouse Suite',
      description: 'Exclusive penthouse with panoramic views',
      likes: 312,
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'exterior',
      title: 'Garden & Landscaping',
      description: 'Beautifully maintained gardens and outdoor spaces',
      likes: 156,
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Conference Room',
      description: 'Modern conference room for business meetings',
      likes: 87,
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Lobby Area',
      description: 'Welcoming lobby with comfortable seating',
      likes: 145,
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'dining',
      title: 'Bar & Lounge',
      description: 'Sophisticated bar and lounge area',
      likes: 221,
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Wedding Venue',
      description: 'Perfect venue for weddings and celebrations',
      likes: 298,
    },
    {
      id: 21,
      src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Recreation Area',
      description: 'Fun recreation and entertainment area',
      likes: 167,
    },
    {
      id: 22,
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'rooms',
      title: 'Honeymoon Suite',
      description: 'Romantic honeymoon suite with special amenities',
      likes: 234,
    },
    {
      id: 23,
      src: 'https://images.unsplash.com/photo-1590490360782-c019bc1979e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Business Center',
      description: 'Fully equipped business center and services',
      likes: 89,
    },
    {
      id: 24,
      src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      title: 'Party Hall',
      description: 'Vibrant party hall for celebrations',
      likes: 178,
    },
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  const visibleImages = filteredImages.slice(0, visibleCount)
  const hasMore = visibleCount < filteredImages.length

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length))
  }

  const openLightbox = (image: any) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
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
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Hexagonal Pattern Layer 1 */}
        <div
          className="absolute inset-0 bg-[length:80px_80px]"
          style={{
            backgroundImage: `radial-gradient(circle at 40px 40px, var(--primary) 2px, transparent 2px),
                             radial-gradient(circle at 20px 60px, var(--primary-light) 1.5px, transparent 1.5px),
                             radial-gradient(circle at 60px 60px, var(--primary-light) 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Subtle Wave Pattern Layer 2 */}
        <div
          className="absolute inset-0 bg-[length:120px_60px] opacity-30"
          style={{
            backgroundImage: `linear-gradient(60deg, transparent 40%, var(--primary) 42%, var(--primary) 43%, transparent 45%),
                             linear-gradient(-60deg, transparent 40%, var(--primary-light) 42%, var(--primary-light) 43%, transparent 45%)`,
            backgroundSize: '120px 60px',
          }}
        />
        {/* Premium Accent Dots */}
        <div
          className="absolute inset-0 bg-[length:200px_200px] opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, var(--primary) 1px, transparent 1px),
                             radial-gradient(circle at 150px 150px, var(--primary-light) 1px, transparent 1px)`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Floating Camera Icons */}
      <motion.div
        className="absolute top-20 right-10 opacity-10"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Camera className="w-24 h-24" style={{ color: 'var(--primary)' }} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Camera className="w-8 h-8" style={{ color: 'var(--primary)' }} />
            <span
              className="text-lg font-semibold tracking-wider uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Visual Experience
            </span>
            <Camera className="w-8 h-8" style={{ color: 'var(--primary)' }} />
          </motion.div>

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
              Gallery
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Explore the beauty and elegance of Om Vatika Guest House through our stunning 
            photo gallery showcasing our rooms, amenities, and memorable moments.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              variants={filterVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveFilter(filter.id)
                setVisibleCount(6)
              }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'shadow-lg transform scale-105'
                  : 'hover:shadow-md hover:scale-102'
              }`}
              style={{
                backgroundColor: activeFilter === filter.id ? 'var(--primary)' : 'var(--background)',
                color: activeFilter === filter.id ? 'white' : 'var(--foreground)',
                borderColor: activeFilter === filter.id ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.3)',
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence>
            {visibleImages.map((image, index) => (
              <motion.div
                key={`${activeFilter}-${image.id}`}
                variants={imageVariants}
                layout
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: 'var(--background)',
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => openLightbox(image)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Icons */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex space-x-3">
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ZoomIn className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Like Counter */}
                  <motion.div
                    className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>{image.likes}</span>
                  </motion.div>
                </div>

                {/* Image Info */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  }}
                >
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </motion.div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)`,
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              onClick={loadMore}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: 'var(--primary)',
                color: 'white',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid3X3 className="w-5 h-5" />
              <span>Load More Photos</span>
              <motion.span
                className="bg-white/20 px-2 py-1 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
              >
                +{filteredImages.length - visibleCount}
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                onClick={prevImage}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                onClick={nextImage}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Main Image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90 mb-3">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    <span>{selectedImage.likes} likes</span>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryShowcase