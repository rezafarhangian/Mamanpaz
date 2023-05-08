import { useEffect, useState } from "react";
import AllFoods from "../Data/foods";
import ReactPaginate from "react-paginate";
import FoodBox from "../Components/FoodBox";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => <FoodBox key={item.id} item={item} />)}
    </>
  );
}

function PaginatedItems({ itemsPerPage, filteredFoods }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredFoods.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredFoods.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredFoods.length;
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

export default function Pagination({ number, choiceFood, sort }) {
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    let updatedProducts;
    if (!choiceFood) {
      updatedProducts = AllFoods.slice();
    } else {
      updatedProducts = AllFoods.filter((p) => p.category === choiceFood);
    }
    if (sort === "گران") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "ارزان") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredFoods(updatedProducts);
  }, [choiceFood, sort]);

  return (
    <div className="mt-16  max-w-[1000px] m-auto flex md:gap-3 md:px-7 items-center justify-center md:justify-start flex-wrap ">
      <PaginatedItems itemsPerPage={number} filteredFoods={filteredFoods} />
    </div>
  );
}
