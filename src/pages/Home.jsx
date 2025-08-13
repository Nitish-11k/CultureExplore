import SearchSection from '../components/SearchSection'
import FeaturedListings from '../components/FeaturedListings'
import Categories from '../components/Categories'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedListings />
    </div>
  )
}

export default Home
