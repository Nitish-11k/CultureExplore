import { useState, useEffect, useRef } from 'react'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [scrollY, setScrollY] = useState(0)
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

  const categories = [
    {
      id: 1,
      name: "Mountain Retreats",
      icon: "🏔️",
      description: "Experience the majestic beauty of the Himalayas",
      longDescription: "Discover serene mountain lodges nestled among snow-capped peaks. Perfect for adventure seekers and nature lovers seeking tranquility in the lap of the mountains.",
      color: "from-blue-400 to-cyan-400",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Manali, Himachal Pradesh"
    },
    {
      id: 2,
      name: "River Views",
      icon: "🌊",
      description: "Peaceful riverside serenity",
      longDescription: "Wake up to the soothing sounds of flowing rivers. These properties offer perfect views of pristine waters and opportunities for river activities.",
      color: "from-green-400 to-emerald-400",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      location: "Rishikesh, Uttarakhand"
    },
    {
      id: 3,
      name: "Forest Cabins",
      icon: "🌿",
      description: "Immerse in dense woodland adventures",
      longDescription: "Hidden among ancient trees, these forest cabins provide an authentic wilderness experience with modern comforts and wildlife encounters.",
      color: "from-emerald-400 to-teal-400",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      location: "Coorg, Karnataka"
    },
    {
      id: 4,
      name: "Coastal Views",
      icon: "🏖️",
      description: "Oceanfront paradise",
      longDescription: "Breathtaking views of the Arabian Sea and Indian Ocean. Enjoy pristine beaches, water sports, and stunning sunsets from your private coastal retreat.",
      color: "from-blue-400 to-indigo-400",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      location: "Goa, India"
    },
    {
      id: 5,
      name: "Desert Landscapes",
      icon: "🏜️",
      description: "Experience the magic of the Thar Desert",
      longDescription: "Discover the golden sands of Rajasthan. Stay in luxury desert camps under starlit skies and experience traditional desert culture and camel safaris.",
      color: "from-yellow-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Jaisalmer, Rajasthan"
    },
    {
      id: 6,
      name: "Valley Views",
      icon: "🏞️",
      description: "Panoramic valley vistas",
      longDescription: "Spectacular views of lush valleys surrounded by towering mountains. Perfect for photography enthusiasts and those seeking peaceful mountain retreats.",
      color: "from-indigo-400 to-purple-400",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Kashmir Valley"
    },
    {
      id: 7,
      name: "Tea Gardens",
      icon: "🍃",
      description: "Lush tea plantation experiences",
      longDescription: "Stay amidst rolling tea gardens with misty mountain views. Learn about tea cultivation and enjoy the fresh mountain air of the Eastern Himalayas.",
      color: "from-emerald-400 to-green-400",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80",
      location: "Darjeeling, West Bengal"
    },
    {
      id: 8,
      name: "Wildlife Sanctuaries",
      icon: "🦁",
      description: "Close encounters with nature",
      longDescription: "Experience wildlife in their natural habitat. Stay in eco-friendly lodges near national parks and witness India's diverse wildlife up close.",
      color: "from-orange-400 to-red-400",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Ranthambore, Rajasthan"
    }
  ]

  return (
    <div className="relative mobile-padding overflow-hidden">
      {/* Beautiful Green Nature Background of India */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
          alt="Lush Green Nature of India"
          className="w-full h-full object-cover "
          loading="lazy"
          style={{
            transform: `translateX(${scrollX * 0.1}px) scale(2.4)`
          }}
        />
                    <div className="absolute inset-0 bg-gradient-to-b from-green-50/90 via-emerald-50/80 to-teal-50/90"></div>
      </div>

      {/* Floating Nature Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.1}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * 0.05}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.15}px)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mobile-container">
        {/* Section Header with Parallax */}
        <div 
          className="text-center mb-8 sm:mb-12 lg:mb-16 slide-in"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-2xl">
            🎯 Explore India's Natural Categories
          </div>
          <h2 
            className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`
            }}
          >
            Discover India's
            <span className="gradient-text block">Natural Diversity</span>
          </h2>
          <p 
            className="mobile-text text-gray-600 max-w-3xl mx-auto px-4"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`
            }}
          >
            From mountain peaks to coastal shores, explore accommodations that showcase 
            the breathtaking beauty of India's natural landscapes.
          </p>
        </div>

        {/* Enhanced Parallax Categories Grid - Only 4 Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {categories.slice(0, 4).map((category, index) => (
            <div
              key={category.id}
              className={`room-item slide-in premium-shadow group cursor-pointer`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * (0.08 + index * 0.015)}px) translateX(${scrollY * (index % 2 === 0 ? 0.02 : -0.02)}px) rotateY(${scrollY * (0.001 + index * 0.0005)}deg)`
              }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl group">
                {/* Background Image with Enhanced Parallax */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                    style={{
                      transform: `scale(${1 + scrollY * 0.0001})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>

                {/* Content Overlay with Parallax */}
                <div 
                  className="relative z-10 p-4 sm:p-5 lg:p-6 h-full flex flex-col justify-end"
                  style={{
                    transform: `translateY(${scrollY * (0.02 + index * 0.005)}px)`
                  }}
                >
                  {/* Icon with Floating Effect */}
                  <div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    style={{
                      transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`
                    }}
                  >
                    {category.icon}
                  </div>

                  {/* Location Badge with Parallax */}
                  <div 
                    className="mb-2 sm:mb-3"
                    style={{
                      transform: `translateX(${scrollY * (0.01 + index * 0.002)}px)`
                    }}
                  >
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
                      📍 {category.location}
                    </span>
                  </div>

                  {/* Text Content with Enhanced Animations */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3">
                      {category.description}
                    </p>
                    
                    {/* Long Description with Smooth Reveal */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 max-h-0 group-hover:max-h-32 overflow-hidden">
                      <p className="text-white/70 text-xs leading-relaxed">
                        {category.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Arrow Indicator with Parallax */}
                  <div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0"
                    style={{
                      transform: `translateX(${scrollY * 0.01}px)`
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Active State Overlay */}
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-30 transition-all duration-500"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Parallax */}
        <div 
          className="text-center mt-8 sm:mt-12 lg:mt-16"
          style={{
            transform: `translateY(${scrollY * 0.04}px)`
          }}
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
            <span className="text-base sm:text-lg font-medium">Explore all natural experiences</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
