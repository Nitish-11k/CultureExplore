import { useState, useEffect } from 'react'

const Listings = () => {
  const [scrollY, setScrollY] = useState(0)
  const [listings] = useState([
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "New York, NY",
      price: 150,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Entire apartment",
      amenities: ["City View", "Gym Access", "Concierge"]
    },
    {
      id: 2,
      title: "Cozy Beach House",
      location: "Malibu, CA",
      price: 280,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Entire house",
      amenities: ["Beachfront", "Private Pool", "BBQ"]
    },
    {
      id: 3,
      title: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      price: 200,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Cabin",
      amenities: ["Mountain View", "Fireplace", "Hiking Trails"]
    },
    {
      id: 4,
      title: "Urban Loft with City Views",
      location: "San Francisco, CA",
      price: 180,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      type: "Loft",
      amenities: ["City Views", "Rooftop Access", "Modern Design"]
    },
    {
      id: 5,
      title: "Historic Townhouse",
      location: "Boston, MA",
      price: 220,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80",
      type: "Townhouse",
      amenities: ["Historic", "Garden", "Character"]
    },
    {
      id: 6,
      title: "Lakefront Villa",
      location: "Lake Tahoe, CA",
      price: 350,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Villa",
      amenities: ["Lake View", "Private Dock", "Water Sports"]
    },
    {
      id: 7,
      title: "Desert Oasis Resort",
      location: "Palm Springs, CA",
      price: 190,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Resort",
      amenities: ["Desert Views", "Pool", "Spa Access"]
    },
    {
      id: 8,
      title: "Coastal Cottage",
      location: "Maine",
      price: 160,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Cottage",
      amenities: ["Ocean View", "Seafood", "Lighthouse"]
    },
    {
      id: 9,
      title: "Ski-in Chalet",
      location: "Vail, CO",
      price: 420,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551524164-6cf64ac26039?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      type: "Chalet",
      amenities: ["Ski Access", "Hot Tub", "Mountain Views"]
    },
    {
      id: 10,
      title: "Tropical Treehouse",
      location: "Hawaii",
      price: 240,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Treehouse",
      amenities: ["Tropical Views", "Private Beach", "Adventure"]
    },
    {
      id: 11,
      title: "Modern Minimalist Loft",
      location: "Los Angeles, CA",
      price: 170,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      type: "Loft",
      amenities: ["Minimalist", "Art Gallery", "Rooftop"]
    },
    {
      id: 12,
      title: "Riverside Cabin",
      location: "Montana",
      price: 130,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Cabin",
      amenities: ["River Access", "Fishing", "Wildlife"]
    }
  ])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Parallax Header */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              All Properties
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover amazing places to stay around the world
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-20 z-20 bg-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-airbnb-primary focus:border-transparent bg-white/50 backdrop-blur-sm">
                <option>Price Range</option>
                <option>Under $100</option>
                <option>$100 - $200</option>
                <option>$200 - $300</option>
                <option>Above $300</option>
              </select>
              <select className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-airbnb-primary focus:border-transparent bg-white/50 backdrop-blur-sm">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Cabin</option>
                <option>Loft</option>
                <option>Villa</option>
              </select>
              <select className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-airbnb-primary focus:border-transparent bg-white/50 backdrop-blur-sm">
                <option>Location</option>
                <option>New York</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Massachusetts</option>
                <option>Hawaii</option>
              </select>
              <button className="btn-primary">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="room-grid">
            {listings.map((listing, index) => (
              <div 
                key={listing.id} 
                className="room-item slide-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="room-image"
                  />
                  
                  {/* Overlay */}
                  <div className="room-overlay"></div>
                  
                  {/* Heart Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 group">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-airbnb-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Content Overlay */}
                  <div className="room-content">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                        {listing.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">{listing.type}</p>
                      <p className="text-white/70 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {listing.location}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {listing.amenities.slice(0, 2).map((amenity, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Price and Rating */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">${listing.price}</span>
                        <span className="text-white/70 text-sm">/ night</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-medium">{listing.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-secondary px-8 py-4 text-lg">
              Load More Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listings
