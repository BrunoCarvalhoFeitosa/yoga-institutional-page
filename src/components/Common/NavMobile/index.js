import React, { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { navigation } from ".././../../data"

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div
        className="text-4xl text-heading ml-[10px] lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiMenu />
      </div>
      <ul className={`${isOpen ? 'p-8' : 'max-h-0 p-0'} flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden transition-all`}>
        {navigation.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMobile
