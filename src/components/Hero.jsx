import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef(null)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking.current = false
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Nature Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      
      {/* Parallax Background with Nature Elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full parallax-container"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Himalayan Mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        
        {/* Nature Overlay Elements */}
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen mobile-container">
        <div className="text-center max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto">
          {/* Nature Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-green-500">
            <span className="text-white/90 text-xs sm:text-sm font-medium">✨ Discover India's Natural Beauty</span>
          </div>

          {/* Main Heading */}
          <h1 className="mobile-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">Experience</span>
            <span className="block gradient-text">India's Nature</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 text-white/80 font-Normal">
              Through Authentic Stays
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mobile-text text-white/90 mb-8 sm:mb-12 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4">
            Immerse yourself in the breathtaking landscapes, pristine rivers, and majestic mountains of India. 
            From Himalayan peaks to coastal shores, discover accommodations that connect you with nature.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group">
              <span className="flex items-center space-x-2">
                <span>Start Exploring</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Become a Host
            </button>
          </div>

          {/* Nature Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl sm:max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5000+</div>
              <div className="text-white/70 text-xs sm:text-sm">Natural Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">28+</div>
              <div className="text-white/70 text-xs sm:text-sm">Indian States</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1000+</div>
              <div className="text-white/70 text-xs sm:text-sm">Years of Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50K+</div>
              <div className="text-white/70 text-xs sm:text-sm">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Nature Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-20"></div>
    </div>
  )
}

export default Hero
