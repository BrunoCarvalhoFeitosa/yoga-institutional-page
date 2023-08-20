import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignInPage"
import SignUp from "./pages/SignUpPage"
import AboutUs from "./pages/AboutUsPage"
import Courses from "./pages/CoursesPage"
import Advantages from "./pages/AdvantagesPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/cadastre-se" element={<SignUp />}></Route>
        <Route path="/sobre-nos" element={<AboutUs />}></Route>
        <Route path="/cursos" element={<Courses />}></Route>
        <Route path="/vantagens" element={<Advantages />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App