import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import FilterFood from '../Containers/FilterFood'

export default function Food() {
    return (
        <div>
            <NavbarDesktop />
            <NavbarMobile />

            <div style={{backgroundImage:"url('./img/bg-food.jpg')"}} className=" mt-16">
                 <div className="container p-2">
                   <FilterFood/>
                 </div>
            </div>
        </div>
    )
}
