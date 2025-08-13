import { useState } from 'react'

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    {
      id: 1,
      name: "Mountain Retreats",
      icon: "🏔️",
      description: "Experience alpine beauty",
      color: "from-blue-400 to-cyan-400",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "River Views",
      icon: "🌊",
      description: "Peaceful water scenes",
      color: "from-green-400 to-emerald-400",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Forest Cabins",
      icon: "🌿",
      description: "Woodland adventures",
      color: "from-emerald-400 to-teal-400",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      name: "Coastal Views",
      icon: "🏖️",
      description: "Oceanfront serenity",
      color: "from-blue-400 to-indigo-400",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
    },
    {
      id: 5,
      name: "Desert Landscapes",
      icon: "🏜️",
      description: "Arid beauty",
      color: "from-yellow-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      name: "Valley Views",
      icon: "🏞️",
      description: "Scenic landscapes",
      color: "from-indigo-400 to-purple-400",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      name: "Tea Gardens",
      icon: "🍃",
      description: "Lush plantations",
      color: "from-emerald-400 to-green-400",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80"
    },
    {
      id: 8,
      name: "Wildlife Sanctuaries",
      icon: "🦁",
      description: "Nature encounters",
      color: "from-orange-400 to-red-400",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="relative mobile-padding overflow-hidden">
      {/* Nature Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto mobile-container">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 slide-in">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            🎯 Explore India's Natural Categories
          </div>
          <h2 className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6">
            Discover India's
            <span className="gradient-text block">Natural Diversity</span>
          </h2>
          <p className="mobile-text text-gray-600 max-w-3xl mx-auto px-4">
            From mountain peaks to coastal shores, explore accommodations that showcase 
            the breathtaking beauty of India's natural landscapes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`room-item slide-in premium-shadow`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-2xl group">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-3 sm:p-4 lg:p-6 h-full flex flex-col justify-end">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {category.icon}
                  </div>

                  {/* Text Content */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Arrow Indicator */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Active State Overlay */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 transition-all duration-500"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
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
