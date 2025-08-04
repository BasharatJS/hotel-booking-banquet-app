'use client'

import { useState, useEffect } from 'react'
import Loader from './Loader'

interface ClientWrapperProps {
  children: React.ReactNode
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Don't automatically set loading to false
    // Let the loader component handle the timing
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 500) // Small delay for smooth transition
  }

  return (
    <>
      <Loader isLoading={isLoading} onComplete={handleLoadingComplete} />
      {showContent && (
        <div className="min-h-screen">
          {children}
        </div>
      )}
    </>
  )
}

export default ClientWrapper