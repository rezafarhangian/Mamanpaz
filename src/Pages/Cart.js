import React, { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import Footer from "../Components/Footer"
import CartBody from '../Containers/CartBody';

export default function Cart() {


  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className='mt-24 container p-2 pb-96 md:pb-72'>
        <CartBody/>
      </div>
      <Footer/>

    </div>
  )
}
