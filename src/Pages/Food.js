import { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import FilterFood from '../Containers/FilterFood'
import { Link } from 'react-router-dom'
import AllFoods from "../Data/foods"
import ReactPaginate from 'react-paginate';
import { AiFillStar } from "react-icons/ai"
import { HiUser } from "react-icons/hi"
import { BiPlusMedical } from "react-icons/bi"
import { FaMinus } from "react-icons/fa"



function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div key={item.id} className='bg-white rounded-md overflow-hidden m-2 relative'>
                        <div className='w-[290px] h-[190px] '>
                            <img className='w-full h-full object-cover' src={item.images[0].img} alt="" />
                        </div>
                        <div className='flex justify-between p-2 mt-5'>
                            <p className='w-40 truncate font-bold'>{item.title}</p>
                            <p className='font-bold'>{item.price.toLocaleString("fa-IR")} <span className='text-xs'>تومان</span></p>
                        </div>
                        <div className='flex items-center justify-between p-2 mt-4'>
                            <div className='flex items-center'>
                                <div className='w-[37px] h-[37px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full' src={item.Chefpicture} alt="" />
                                </div>
                                <p className='text-xs mr-1'>{item.mother}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='text-xs ml-2 text-gray-400'>
                                    <p className='flex'>({item.comments.length.toLocaleString("fa-IR")} <HiUser />)</p>
                                </div>
                                <div className='flex items-center text-sm'>
                                    <AiFillStar className='text-yellow-400 ml-1' />
                                    <span>{item.score.toLocaleString("fa-IR")}</span>
                                </div>
                            </div>

                        </div>
                        <div className='bg-mamanpaz rounded flex justify-center z-10 items-center cursor-pointer w-6 h-6 top-[150px] right-4 absolute'>
                            <BiPlusMedical className='text-white' />
                        </div>
                        <div className=' rounded flex items-center  cursor-pointer   top-[150px] right-7 absolute'>
                            <div className='bg-white -ml-3 w-16 flex justify-center items-center text-sm'>
                                12
                            </div>
                            <div className='bg-mamanpaz flex items-center justify-center rounded w-6 h-6'>
                                <FaMinus className='text-white' />
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = AllFoods.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(AllFoods.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % AllFoods.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center items-center mt-10  h-10 w-full "
                pageClassName="list-none mx-[5px] text-[18px]"
                pageLinkClassName="inline-block px-3 pt-[0.2rem] "
                activeClassName=" bg-mamanpaz text-white rounded"
            />
        </>
    );
}

export default function Food() {
    return (
        <div>
            <NavbarDesktop />
            <NavbarMobile />

            <div style={{ backgroundImage: "url('./img/bg-food.jpg')" }} className=" mt-16">
                <div className="container p-2 ">
                    <FilterFood />
                    <Link to="/companies">

                        <div className='max-w-[1000px] m-auto mt-10'>
                            <img src="./img/baner.jpg" alt="" />
                        </div>
                    </Link>
                    <div className='mt-16  max-w-[1000px] m-auto flex  items-center justify-center flex-wrap'>
                        <PaginatedItems itemsPerPage={4} />
                    </div>
                </div>
            </div>
        </div>
    )
}
