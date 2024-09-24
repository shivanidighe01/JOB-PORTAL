import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './CategoryCarousel.jsx'
import LatestJob from './LatestJob'
import Footer from './shared/Footer'
const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <CategoryCarousel></CategoryCarousel>
        <LatestJob></LatestJob>
        <Footer></Footer>
    </div>
  )
}

export default Home;