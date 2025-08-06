'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, MessageCircle, ExternalLink, User } from 'lucide-react'

interface GoogleReview {
  id: number
  author_name: string
  profile_photo_url?: string
  rating: number
  text: string
  relative_time_description: string
  aspects?: {
    rooms?: number
    service?: number
    location?: number
  }
  highlights?: string[]
}

const reviewsData: GoogleReview[] = [
  {
    id: 1,
    author_name: 'Swati Jain',
    rating: 5,
    text: 'Nice Cosy well maintained venue in Salt Lake. Ideal for marriage functions n similar events.',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 4,
    },
    highlights: ['Great for events', 'Well maintained'],
  },
  {
    id: 2,
    author_name: 'RAKESH GUPTA',
    rating: 5,
    text: 'Good property nice rooms good location very good for marriage purpose',
    relative_time_description: '4 months ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 4,
    },
  },
  {
    id: 3,
    author_name: 'Vikas Jain',
    rating: 5,
    text: 'guest house is newly constructed, very well organised. all rooms are nicely done. in house staff are very supportive and very professional. i highly recommend them.',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
    highlights: ['Quiet', 'Child-friendly', 'Great value'],
  },
  {
    id: 4,
    author_name: 'Ashish A.',
    rating: 4,
    text: 'Nice place for group stay for functions at salt lake area',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 3,
      service: 3,
      location: 4,
    },
  },
  {
    id: 5,
    author_name: 'Anup Jain C. A. C. S',
    rating: 5,
    text: 'Newly built guest house in Saltlake pnb island',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
  },
  {
    id: 6,
    author_name: 'Nitesh gupta',
    rating: 5,
    text: 'Awesome guest house',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 4,
    },
  },
  {
    id: 7,
    author_name: 'PAYAL AGARWAL',
    rating: 5,
    text: 'Nice place and good rooms',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
    highlights: ['Great value'],
  },
  {
    id: 8,
    author_name: 'Purvanchal mahila mandal',
    rating: 5,
    text: 'Superb',
    relative_time_description: '2 years ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
  },
  {
    id: 9,
    author_name: 'Biplab Mazumder',
    rating: 4,
    text: 'Nice experience',
    relative_time_description: '10 months ago',
    aspects: {
      rooms: 4,
      service: 4,
      location: 4,
    },
    highlights: ['Luxury', 'Romantic'],
  },
  {
    id: 10,
    author_name: 'Aarushi / Prisha Nadhani',
    rating: 4,
    text: 'Good experience overall',
    relative_time_description: 'a month ago',
    aspects: {
      rooms: 4,
      service: 3,
      location: 5,
    },
  },
  {
    id: 11,
    author_name: 'Santanu',
    rating: 5,
    text: 'Excellent guest house',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
  },
  {
    id: 12,
    author_name: 'Biki Dhanuk',
    rating: 5,
    text: 'Great place to stay',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
  },
  {
    id: 13,
    author_name: 'Manisha Jhawar',
    rating: 4,
    text: 'Good experience for family stay',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 4,
      service: 3,
      location: 4,
    },
    highlights: ['Luxury'],
  },
  {
    id: 14,
    author_name: 'Ramanathan Venkataraman',
    rating: 5,
    text: 'Excellent place for family holidays',
    relative_time_description: '8 months ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 5,
    },
    highlights: ['Great value'],
  },
  {
    id: 15,
    author_name: 'Jamil Ansari',
    rating: 5,
    text: 'Perfect for solo travelers',
    relative_time_description: '9 months ago',
    aspects: {
      rooms: 5,
      location: 5,
    },
    highlights: ['Luxury'],
  },
  {
    id: 16,
    author_name: 'jaya barmecha',
    rating: 5,
    text: 'Amazing family vacation stay',
    relative_time_description: '2 years ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
    highlights: ['Luxury', 'Great view', 'Child-friendly'],
  },
  {
    id: 17,
    author_name: 'BHIKHAM CHAND BARMECHA',
    rating: 5,
    text: 'Outstanding guest house with all modern amenities',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 5,
      location: 5,
    },
    highlights: [
      'Luxury',
      'Great view',
      'Quiet',
      'Child-friendly',
      'Great value',
      'High-tech',
    ],
  },
  {
    id: 18,
    author_name: 'Ajay Mandal',
    rating: 5,
    text: 'Highly recommended guest house',
    relative_time_description: '6 months ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 4,
    },
  },
  {
    id: 19,
    author_name: 'ANUPAM PAL',
    rating: 5,
    text: 'Excellent service and facilities',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 4,
    },
  },
  {
    id: 20,
    author_name: 'SUVANKAR SAHA',
    rating: 5,
    text: 'Great experience at Om Vatika',
    relative_time_description: 'a year ago',
    aspects: {
      rooms: 5,
      service: 4,
      location: 4,
    },
  },
  {
    id: 21,
    author_name: 'ABHISEKH SERDA',
    rating: 1,
    text: 'Nice rooms but entire management needs to be revisited.',
    relative_time_description: '7 months ago',
    aspects: {
      rooms: 4,
      service: 1,
      location: 4,
    },
  },
]

const GoogleReviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showWriteReview, setShowWriteReview] = useState(false)

  const displayedReviews = reviewsData.slice(currentIndex, currentIndex + 3)

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
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const averageRating =
    reviewsData.reduce((acc, review) => acc + review.rating, 0) /
    reviewsData.length

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, var(--background), var(--accent), var(--background))`,
        color: 'var(--foreground)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-[length:40px_40px]"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--primary) 25%, transparent 25%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-8 h-8" style={{ color: 'var(--primary)' }} />
            <span
              className="text-lg font-semibold tracking-wider uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Google Reviews
            </span>
            <Star className="w-8 h-8" style={{ color: 'var(--primary)' }} />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            What Our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Guests Say
            </span>
          </motion.h2>

          {/* Overall Rating */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            variants={cardVariants}
          >
            <div className="flex space-x-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <span
              className="text-2xl font-bold"
              style={{ color: 'var(--primary)' }}
            >
              {averageRating.toFixed(1)}
            </span>
            <span
              className="text-lg"
              style={{ color: 'var(--muted-foreground)' }}
            >
              ({reviewsData.length} reviews)
            </span>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.2)',
              }}
              variants={cardVariants}
              whileHover={{
                x: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <div className="p-6 backdrop-blur-sm">
                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {review.author_name}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {review.text}
                </p>

                {/* Aspects Rating */}
                {review.aspects && (
                  <div
                    className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {Object.entries(review.aspects).map(([aspect, rating]) => (
                      <div key={aspect} className="text-center">
                        <p
                          className="text-xs font-medium capitalize"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {aspect}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: 'var(--primary)' }}
                        >
                          {rating}.0
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {review.highlights && (
                  <div className="flex flex-wrap gap-1">
                    {review.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                          color: 'var(--primary)',
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 3))}
            disabled={currentIndex === 0}
            className="px-6 py-2 rounded-full border transition-all duration-300 disabled:opacity-50"
            style={{
              borderColor: 'var(--primary)',
              color: 'var(--primary)',
            }}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentIndex(
                Math.min(reviewsData.length - 3, currentIndex + 3)
              )
            }
            disabled={currentIndex >= reviewsData.length - 3}
            className="px-6 py-2 rounded-full border transition-all duration-300 disabled:opacity-50"
            style={{
              borderColor: 'var(--primary)',
              color: 'var(--primary)',
            }}
          >
            Next
          </button>
        </motion.div>

        {/* Write Review Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <motion.button
            onClick={() => setShowWriteReview(!showWriteReview)}
            className="inline-flex items-center space-x-2 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 mb-6"
            style={{
              background: `linear-gradient(to right, #8b4513, #a0522d)`,
              borderColor: '#8b4513',
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Write a Review</span>
          </motion.button>

          {showWriteReview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="max-w-md mx-auto p-6 rounded-2xl border"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'rgba(var(--primary-rgb), 0.2)',
              }}
            >
              <p className="mb-4" style={{ color: 'var(--foreground)' }}>
                Share your experience at Om Vatika Guest House
              </p>

              <motion.a
                href="https://www.google.com/search?q=Om+Vatika+Guest+House+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Review on Google</span>
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleReviews
