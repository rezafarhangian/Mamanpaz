import React, { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import CartBody from '../Containers/CartBody';

export default function Cart() {


  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className='mt-24 container p-2'>
       
        <CartBody/>
      </div>

    </div>
  )
}
