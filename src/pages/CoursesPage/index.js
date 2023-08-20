import React from "react"
import Aos from "aos"
import Header from "../../components/Common/Header"
import AllCourses from "../../components/CoursesPage/AllCourses"
import Pricing from "../../components/Common/Pricing"
import Newsletter from "../../components/Common/Newsletter"
import Contact from "../../components/Common/Contact"
import ScrollTop from "../../components/Common/ScrollTop"
import Footer from "../../components/Common/Footer"

const CoursesPage = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  })

  return (
    <div className="overflow-hidden">
        <Header />
        <AllCourses />
        <Pricing />
        <Newsletter />
        <Contact />
        <Footer />
        <ScrollTop />
    </div>
  )
}

export default CoursesPage