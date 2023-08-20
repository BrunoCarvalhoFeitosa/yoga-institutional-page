import React, { useEffect, useState } from "react"
import Nav from "../Nav"
import NavMobile from "../NavMobile"
import Logo from '../../../assets/img/logo.png'

const Header = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [])
  
  return (
    <div className="container mx-auto">
      <header className={`${header ? 'top-0' : 'top-9'} fixed w-full max-w-[90vw] md:max-w[90%] lg:max-w-[1170px] mx-auto rounded-md h-[90px] flex items-center justify-between shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 bg-white `}>
        <div className="flex items-center">
          <div>
            <a href="/">
              <img
                src={Logo}
                alt="Yola."
              />
            </a>
          </div>
          <div className="hidden lg:flex">
            <Nav />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-x-4 lg:gap-x-9">
            <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
              <a
                href="/login"
                rel="noreferrer"
                className="w-full h-full"
              >
                Entre
              </a>
            </button>
            <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition">
              <a
                href="/cadastre-se"
                rel="noreferrer"
                className="w-full h-full"
              >
                Cadastre-se
              </a>
            </button>
          </div>
          <NavMobile />
        </div>
      </header>
    </div>
  )
}

export default Header