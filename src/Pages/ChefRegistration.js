import React from 'react'
import HeaderChefRegistration from '../Containers/HeaderChefRegistration'
import ChefRegistrationProcedures from '../Containers/ChefRegistrationProcedures'
import CommentsCooks from '../Containers/CommentsCooks'
import BenefitsOfCookingInMamanpaz from '../Containers/BenefitsOfCookingInMamanpaz'
import Footer from "../Components/Footer"

export default function ChefRegistration() {
  return (
    <div>
        <HeaderChefRegistration/>
        <ChefRegistrationProcedures/>
        <CommentsCooks/>
        <BenefitsOfCookingInMamanpaz/>
        <Footer/>
    </div>
  )
}
