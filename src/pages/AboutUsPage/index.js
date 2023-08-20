import React from "react"
import Aos from "aos"
import Header from "../../components/Common/Header"
import IntroductionGallery from "../../components/AboutUsPage/IntroductionGallery"
import Texts from "../../components/AboutUsPage/Texts"
import OurLocalization from "../../components/AboutUsPage/OurLocalization"
import Pricing from "../../components/Common/Pricing"
import Newsletter from "../../components/Common/Newsletter"
import Contact from "../../components/Common/Contact"
import ScrollTop from "../../components/Common/ScrollTop"
import Footer from "../../components/Common/Footer"


const HomePage = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  })

  return (
    <div className="overflow-hidden">
        <Header />
        <IntroductionGallery />
        <Texts />
        <OurLocalization />
        <Pricing />
        <Newsletter />
        <Contact />
        <Footer />
        <ScrollTop />
    </div>
  )
}

export default HomePage
