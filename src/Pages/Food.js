import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import FoodBody from '../Containers/FoodBody'

export default function Food() {
  return (
    <div>
        <NavbarDesktop/>
        <NavbarMobile/>
        <FoodBody/>
    </div>
  )
}
