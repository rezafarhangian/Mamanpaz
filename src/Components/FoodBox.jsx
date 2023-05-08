import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useCartActions, useCart } from "../Context/CartProvider";

export default function FoodBox({ item }) {
  const dispatch = useCartActions();
  const { cart } = useCart();

  const addFoodToCart = (Food) => {
    dispatch({ type: "ADD_TO_CART", payload: Food });
  };
  const minusFood = (Food) => {
    dispatch({ type: "MINUS_PRODUCT", payload: Food });
  };

   
  return (
    <div className="bg-white rounded-md overflow-hidden m-2 relative shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
      <div className="w-[290px] h-[190px] ">
        <img
          className="w-full h-full object-cover"
          src={item.images[0].img}
          alt=""
        />
      </div>
      <div className="flex justify-between p-2 mt-5">
        <p className="w-40 truncate font-bold">{item.title}</p>
        <p className="font-bold">
          {item.price.toLocaleString("fa-IR")}{" "}
          <span className="text-xs">تومان</span>
        </p>
      </div>
      <div className="flex items-center justify-between p-2 mt-4">
        <div className="flex items-center">
          <div className="w-[37px] h-[37px] rounded-full overflow-hidden">
            <img className="w-full h-full" src={item.Chefpicture} alt="" />
          </div>
          <p className="text-xs mr-1">{item.mother}</p>
        </div>
        <div className="flex items-center">
          <div className="text-xs ml-2 text-gray-400">
            <p className="flex">
              ({item.comments.length.toLocaleString("fa-IR")} <HiUser />)
            </p>
          </div>
          <div className="flex items-center text-sm">
            <AiFillStar className="text-yellow-400 ml-1" />
            <span>{item.score.toLocaleString("fa-IR")}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => addFoodToCart(item)}
        className="bg-mamanpaz rounded flex items-center justify-center outline-0 z-10 items-cent w-6 h-6 top-[150px] right-4 absolute"
      >
        <BiPlusMedical className="text-white" />
      </button>

      <div
        className={`${
          cart && cart.find((p) => p.id === item.id)
            ? "translate-x-0 scale-100"
            : "translate-x-11 scale-0"
        }  transition duration-500 rounded flex items-center  cursor-pointer   top-[150px] right-7 absolute`}
      >
        <div className="bg-white -ml-3 w-16 flex justify-center items-center text-sm">
          {cart
            ? cart
                .filter((food) => food.id === item.id)
                .map((fo) => fo.quantity)
            : 0}
        </div>
        <button
          onClick={() => minusFood(item)}
          className="bg-mamanpaz flex items-center outline-0 justify-center rounded w-6 h-6"
        >
          <FaMinus className="text-white" />
        </button>
      </div>
    </div>
  );
}
