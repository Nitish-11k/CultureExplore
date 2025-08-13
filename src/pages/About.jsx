const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Airbnb Startup
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to create a world where anyone can belong anywhere, 
          providing healthy travel that is local, authentic, diverse, inclusive and sustainable.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Airbnb Startup began with a simple idea: connect travelers 
              with unique accommodations and local experiences around the world. What started 
              as a platform for finding a place to stay has evolved into a community-driven 
              ecosystem.
            </p>
            <p className="text-gray-600 mb-4">
              Today, millions of hosts and travelers choose our platform to create meaningful 
              connections and discover new ways to experience the world. From apartments and 
              houses to unique spaces like treehouses and castles, we offer accommodations 
              for every type of traveler.
            </p>
            <p className="text-gray-600">
              Our platform doesn't just provide a place to sleep—it offers a way to live 
              like a local, discover hidden gems, and create lasting memories with people 
              from around the globe.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Belonging</h3>
            <p className="text-gray-600">
              We believe everyone should feel they belong anywhere in the world, 
              regardless of where they come from or where they're going.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              We foster connections between hosts and guests that create lasting relationships 
              and memorable experiences for everyone.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-airbnb-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to sustainable travel that protects the places we visit 
              and supports local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">By the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-airbnb-primary mb-2">4M+</div>
            <div className="text-gray-600">Hosts worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-airbnb-primary mb-2">220+</div>
            <div className="text-gray-600">Countries and regions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-airbnb-primary mb-2">1B+</div>
            <div className="text-gray-600">Guest arrivals</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-airbnb-primary mb-2">100K+</div>
            <div className="text-gray-600">Cities worldwide</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're looking to host, travel, or work with us, there's a place for you 
          in our global community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Become a Host
          </button>
          <button className="btn-secondary">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
