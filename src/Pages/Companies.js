import Footer from "../Components/Footer"
import BenefitsCorporateOrder from "../Containers/BenefitsCorporateOrder"
import ChooseMealPlan from "../Containers/ChooseMealPlan"
import CompanySlides from "../Containers/CompanySlides"
import CorporateOrderApplication from "../Containers/CorporateOrderApplication"
import HeaderCompanies from "../Containers/HeaderCompanies"
import IntroductionCompany from "../Containers/IntroductionCompany"

export default function Companies() {
  return (
    <div>
      <HeaderCompanies />
      <IntroductionCompany/>
      <CompanySlides/>
      <BenefitsCorporateOrder/>
       <ChooseMealPlan/>
       <CorporateOrderApplication/>
      <Footer />
    </div>
  )
}
