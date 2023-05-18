import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { HiPlus, HiOutlineMinusSm } from "react-icons/hi";
import { useCart, useCartActions } from "../Context/CartProvider";

export default function ChoiceOfFood({ setActiveStep }) {
  const { cart } = useCart();
  const { total } = useCart();
  const dispatch = useCartActions();

  const addFoodToCart = (Food) => {
    dispatch({ type: "ADD_TO_CART", payload: Food });
  };
  const minusFood = (Food) => {
    dispatch({ type: "MINUS_PRODUCT", payload: Food });
  };

  return (
    <div className="">
      <div className="overflow-x-auto mt-10 mb-12  scrollbar-thin	 scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <table className="w-[800px] m-auto ">
          <thead>
            <tr>
              <th className="py-3 w-60 bg-gray-200">نام غذا</th>
              <th className="py-3 bg-gray-200">آشپز</th>
              <th className="py-3 bg-gray-200">قیمت</th>
              <th className="py-3 bg-gray-200">تعداد</th>
              <th className="py-3 bg-gray-200">جمع قیمت</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart.map((food) => (
              <tr key={food.id} className="border-b">
                <td className="py-5 ">{food.title}</td>
                <td className="py-5 ">{food.mother}</td>
                <td className="py-5 ">{food.price.toLocaleString("fa-IR")}</td>
                <td className="py-5 flex items-center justify-between  w-24 m-auto">
                  <button
                    onClick={() => addFoodToCart(food)}
                    className="outline-0 bg-green-600  h-6 flex justify-center items-center text-white px-2 ml-2 rounded-md text-base w-8"
                  >
                    <HiPlus />
                  </button>
                  <span>{food.quantity.toLocaleString("fa-IR")}</span>
                  <button
                    onClick={() => minusFood(food)}
                    className="outline-0 bg-red-600 h-6   flex justify-center items-center text-white px-2 mr-2 rounded-md text-lg w-8"
                  >
                    {food.quantity === 1 ? <BiTrash /> : <HiOutlineMinusSm />}
                  </button>
                </td>
                <td className="py-5 ">
                  {(food.price * food.quantity).toLocaleString("fa-IR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex px-2 font-bold md:px-6 mt-5 bg-gray-200 py-2 justify-between">
        <p>مجموع قابل پرداخت :</p>
        <p> {total.toLocaleString("fa-IR")} تومان</p>
      </div>

      <button
        onClick={() => setActiveStep(2)}
        className="flex items-center bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3"
      >
        <span>بعدی</span>
        <MdArrowBackIosNew className="text-lg mr-2" />
      </button>
    </div>
  );
}
