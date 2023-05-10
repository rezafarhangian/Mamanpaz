import React from 'react'
import NavbarDesktop from '../Components/NavbarDesktop'
import NavbarMobile from '../Components/NavbarMobile'
import Footer from '../Components/Footer'
import RegisterForm from '../Containers/RegisterForm'


export default function Register() {

    
    return (
        <div>
            <NavbarDesktop />
            <NavbarMobile />
            <div className='container p-2 mt-32  mb-96 md:mb-72'>
                <RegisterForm />
            </div>
            <Footer />
        </div>
    )
}
