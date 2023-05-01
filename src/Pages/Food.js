import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import FilterFood from '../Containers/FilterFood'
import { Link } from 'react-router-dom'
import Pagination from '../Containers/Pagination'
import Footer from "../Components/Footer"




export default function Food() {
    return (
        <div>
            <NavbarDesktop />
            <NavbarMobile />

            <div style={{ backgroundImage: "url('./img/bg-food.jpg')" }} className=" mt-16 pb-96 md:pb-72">
                <div className="container p-2 ">
                    <FilterFood />
                    <Link to="/companies">

                        <div className='max-w-[1000px] m-auto mt-10'>
                            <img src="./img/baner.jpg" alt="" />
                        </div>
                    </Link>
                    <div>
                        <Pagination number={6}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
