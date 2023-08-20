import React from "react"
import { navigation } from "../../../data"

const Nav = () => (
  <nav className="ml-[70px]">
    <ul className="flex gap-x-[42px]">
      {navigation.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
