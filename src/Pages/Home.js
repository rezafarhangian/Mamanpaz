import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HowToOrder from '../Containers/HowToOrder'
import OurCustomers from '../Containers/OurCustomers'
import Introduction from '../Containers/Introduction'
export default function Home() {
  return (
    <div>
      <Header/>
      <HowToOrder/>
      <OurCustomers/>
      <Introduction/>
      <Footer/>
    </div>
  )
}
