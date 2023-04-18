import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HowToOrder from '../Containers/HowToOrder'
import OurCustomers from '../Containers/OurCustomers'
import Introduction from '../Containers/Introduction'
import CustomersComments from '../Containers/CustomersComments'
import WebsiteServices from '../Containers/WebsiteServices'
export default function Home() {
  return (
    <div>
      <Header/>
      <HowToOrder/>
      <OurCustomers/>
      <Introduction/>
      <CustomersComments/>
      <WebsiteServices/>
      <Footer/>
    </div>
  )
}
