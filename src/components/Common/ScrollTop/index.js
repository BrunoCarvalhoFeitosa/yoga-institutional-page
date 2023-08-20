import React, { useEffect, useState, Fragment } from "react"
import { BsArrowBarUp } from "react-icons/bs"

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Fragment>
      {isActive && (
        <button
          onClick={() => handleScrollTop()}
          className="fixed right-4 bottom-4 lg:right-12 lg:bottom-8 w-[50px] h-[50px] md:w-[65px] md:h-[65px] flex justify-center items-center rounded-full bg-orange cursor-pointer"
        >
          <BsArrowBarUp className="text-white w-8 h-8" />
        </button>
      )}
    </Fragment>
  )
}

export default ScrollTop
