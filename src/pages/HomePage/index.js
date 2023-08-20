import React from "react"
import Aos from "aos"
import Hero from "../../components/HomePage/Hero"
import Cards from "../../components/HomePage/Cards"
import Facts from "../../components/HomePage/Facts"
import Features from "../../components/HomePage/Features"
import Courses from "../../components/HomePage/Courses"
import Pricing from "../../components/Common/Pricing"
import Newsletter from "../../components/Common/Newsletter"
import Contact from "../../components/Common/Contact"
import Footer from "../../components/Common/Footer"
import ScrollTop from "../../components/Common/ScrollTop"

const HomePage = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  })

  return (
    <div className="overflow-hidden">
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default HomePage
