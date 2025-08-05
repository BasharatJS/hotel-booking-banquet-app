'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoaderProps {
  isLoading: boolean
  onComplete: () => void
}

const Loader = ({ isLoading, onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const loadingMessages = [
    'Welcome to Om Vatika Guest House',
    'Preparing your perfect stay experience',
    'Loading comfort and hospitality',
    'Almost ready for you...',
  ]

  useEffect(() => {
    if (!isLoading) return

    // Progress animation - slower and more realistic
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          // Only call onComplete when progress reaches 100%
          setTimeout(onComplete, 1000) // Wait 1 second after reaching 100%
          return 100
        }
        // Slower increment for better visibility
        return prev + 0.8
      })
    }, 60) // Slightly slower interval

    // Message rotation
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length)
    }, 2000) // Slower message rotation

    return () => {
      clearInterval(progressTimer)
      clearInterval(messageTimer)
    }
  }, [isLoading, onComplete, loadingMessages.length])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, var(--accent), var(--background), var(--accent))',
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

          {/* Main Loader Content */}
          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            {/* Simple Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                {/* Single Rotating Circle */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-20 h-20 rounded-full border-4 border-transparent"
                  style={{
                    background: `conic-gradient(from 0deg, var(--primary), var(--primary-light), transparent, var(--primary))`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--background)' }}
                  >
                    <span
                      className="font-bold text-2xl"
                      style={{ color: 'var(--primary)' }}
                    >
                      {/* ॐ */}
                      OM
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <h1
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Om{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: `linear-gradient(to right, var(--primary), var(--primary-light))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Vatika
                </span>
              </h1>
              <p
                className="text-lg font-medium"
                style={{ color: 'var(--primary)' }}
              >
                Guest House
              </p>
            </motion.div>

            {/* Loading Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8 h-6"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMessage}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg"
                  style={{ color: 'var(--muted)' }}
                >
                  {loadingMessages[currentMessage]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-4"
            >
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: 'rgba(var(--primary-rgb), 0.2)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, var(--primary), var(--primary-light))`,
                    width: `${Math.round(progress)}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round(progress)}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <motion.p
                className="text-sm mt-2 font-medium"
                style={{ color: 'var(--primary)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
