import React from 'react'
import NavbarDesktop from '../Components/NavbarDesktop'
import NavbarMobile from '../Components/NavbarMobile'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      
      <Footer/>
    </div>
  )
}
