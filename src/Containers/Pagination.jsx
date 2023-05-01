import {useState} from 'react'
import AllFoods from "../Data/foods"
import ReactPaginate from 'react-paginate';
import FoodBox from '../Components/FoodBox';


function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <FoodBox key={item.id} item={item}/>
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


export default function Pagination({number}) {
  return (
    <div className='mt-16  max-w-[1000px] m-auto flex md:gap-3 md:px-7 items-center justify-center md:justify-between flex-wrap '>
        <PaginatedItems itemsPerPage={number} />
    </div>
  )
}
