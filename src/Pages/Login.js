import { useState } from 'react'
import NavbarDesktop from '../Components/NavbarDesktop'
import NavbarMobile from '../Components/NavbarMobile'
import Footer from '../Components/Footer'
import LoginForm from '../Containers/LoginForm'







export default function Login() {



  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      <div className='container p-2 mt-32  mb-96 md:mb-72'>
       <LoginForm/>
      </div>
      <Footer />
    </div>
  )
}
