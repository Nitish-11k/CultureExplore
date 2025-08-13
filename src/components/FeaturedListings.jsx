import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const FeaturedListings = () => {
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

  const featuredListings = [
    {
      id: 1,
      title: "Himalayan Mountain Lodge",
      location: "Manali, Himachal Pradesh, India",
      price: 850,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Mountain Lodge",
      featured: true,
      amenities: ["Mountain Views", "Alpine Suite", "Nature Trails"]
    },
    {
      id: 2,
      title: "Riverside Forest Cabin",
      location: "Rishikesh, Uttarakhand, India",
      price: 650,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Forest Cabin",
      featured: true,
      amenities: ["River Views", "Forest Walks", "Wildlife Watching"]
    },
    {
      id: 3,
      title: "Goa Beachfront Villa",
      location: "Calangute, Goa, India",
      price: 750,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      type: "Beach Villa",
      featured: true,
      amenities: ["Beach Access", "Ocean Views", "Water Sports"]
    },
    {
      id: 4,
      title: "Kerala Backwater Houseboat",
      location: "Alleppey, Kerala, India",
      price: 320,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Houseboat",
      featured: true,
      amenities: ["Backwater Views", "Nature Tours", "Traditional Food"]
    },
    {
      id: 5,
      title: "Rajasthan Desert Camp",
      location: "Jaisalmer, Rajasthan, India",
      price: 580,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Desert Camp",
      featured: true,
      amenities: ["Desert Views", "Camel Safari", "Stargazing"]
    },
    {
      id: 6,
      title: "Darjeeling Tea Estate",
      location: "Darjeeling, West Bengal, India",
      price: 920,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80",
      type: "Tea Estate",
      featured: true,
      amenities: ["Tea Gardens", "Mountain Views", "Nature Walks"]
    },
    {
      id: 7,
      title: "Varanasi Riverside House",
      location: "Varanasi, Uttar Pradesh, India",
      price: 280,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Riverside House",
      featured: true,
      amenities: ["Ganges View", "Cultural Experience", "Ancient City"]
    },
    {
      id: 8,
      title: "Kashmir Valley House",
      location: "Gulmarg, Jammu & Kashmir, India",
      price: 180,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Valley House",
      featured: true,
      amenities: ["Valley Views", "Mountain Views", "Nature Trails"]
    }
  ]

  return (
    <div className="relative mobile-padding overflow-hidden">
      {/* Nature Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-10"></div>
      
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full opacity-5 parallax-container"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Himalayan Mountains"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mobile-container">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 slide-in">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            🌟 Featured Natural Properties
          </div>
          <h2 className="mobile-heading font-bold text-gray-900 mb-4 sm:mb-6">
            Experience India's
            <span className="gradient-text block">Natural Beauty</span>
          </h2>
          <p className="mobile-text text-gray-600 max-w-3xl mx-auto px-4">
            Handpicked natural accommodations that offer authentic Indian experiences 
            from mountain peaks to coastal shores.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="mobile-grid mb-8 sm:mb-12">
          {featuredListings.map((listing, index) => (
            <div 
              key={listing.id} 
              className="room-item slide-in premium-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="room-image group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="room-overlay group-hover:opacity-100"></div>
                
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                )}

                {/* Heart Button */}
                <button className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Content Overlay */}
                <div className="room-content group-hover:translate-y-0">
                  <div className="mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
                      {listing.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">{listing.type}</p>
                    <p className="text-white/70 text-xs sm:text-sm flex items-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {listing.location}
                    </p>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {listing.amenities.slice(0, 2).map((amenity, idx) => (
                      <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Price and Rating */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">₹{listing.price}</span>
                      <span className="text-white/70 text-xs sm:text-sm">/ night</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-medium text-xs sm:text-sm">{listing.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/listings" 
            className="btn-primary inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group"
          >
            <span>Explore All Natural Stays</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedListings
