import { useEffect, useState } from "react";
import foods from "../Data/foods";
import { AiFillStar, AiOutlineUser, AiOutlineApple } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useCart, useCartActions } from "../Context/CartProvider";
import { HiPlus, HiOutlineMinusSm } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";

export default function FoodBody() {
  const [food, setFood] = useState(null);
  const [momsFood, setMomsFood] = useState([]);
  const [showBtn, setShowBtn] = useState([]);

  const { id } = useParams();
  const dispatch = useCartActions();
  const { cart } = useCart();

  useEffect(() => {
    const filterdFood = foods.filter((f) => f.id === Number(id));
    setFood(filterdFood[0]);
  }, [id]);

  useEffect(() => {
    if (food) {
      const allFoodsMom = foods.filter((f) => f.mother === food.mother);
      setMomsFood(allFoodsMom);
    }
  }, [food]);

  useEffect(() => {
    if (food) {
      const checkingCart = cart.filter((f) => f.id === food.id);
      if (checkingCart) {
        setShowBtn(checkingCart);
      }
    }
  }, [cart,food]);

  const addFoodToCart = (Food) => {
    dispatch({ type: "ADD_TO_CART", payload: Food });
  };
  const minusFood = (Food) => {
    dispatch({ type: "MINUS_PRODUCT", payload: Food });
  };

  return (
    <div className="container p-2 mt-28 md:flex justify-center items-start  gap-10 pb-96 md:pb-72">
      {food && (
        <>
          <div className="max-w-[450px]  m-auto md:m-0 ">
            <div className=" shadow-[rgba(67,71,85,0.27)_0px_0px_0.25em,_rgba(90,125,188,0.05)_0px_0.25em_1em] p-4 rounded-sm">
              <div className="flex  items-center justify-between font-bold  mt-4 ">
                <p>{food.title}</p>
                <p>{food.price.toLocaleString("fa-IR")} تومان</p>
              </div>
              <div className="flex  items-center justify-between mt-5 text-xs">
                <div className="flex items-center">
                  <div className="p-1 w-12 h-12 overflow-hidden">
                    <img
                      className="rounded-full"
                      src={food.Chefpicture}
                      alt=""
                    />
                  </div>
                  <div>{food.mother}</div>
                </div>
                <div className="flex items-center">
                  <p className="ml-1 flex text-slate-400">
                    ({food.comments.length.toLocaleString("fa-IR")}{" "}
                    <AiOutlineUser />)
                  </p>
                  <div className="flex items-center bg-slate-100 p-1 rounded">
                    <AiFillStar className="text-yellow-400 text-base" />
                    <span className="font-bold mr-1">
                      {food.score.toLocaleString("fa-IR")}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-6 md:text-sm  text-gray-500 text-xs">
                {food.title} دستپخت مامان مهر آیین تاکنون +
                 <span className="font-bold">{food.Numberoforders.toLocaleString("fa-IR")}</span> بار سفارش داده شده
                است.
              </p>
              <div className="mt-8">
                {showBtn.length > 0 ? (
                  <div className="flex items-center justify-between  w-24 m-auto">
                    <button
                      onClick={() => addFoodToCart(food)}
                      className="outline-0 bg-green-600  h-6 flex justify-center items-center text-white px-2 ml-2 rounded-md text-base w-8"
                    >
                      <HiPlus />
                    </button>
                    <span>{ showBtn[0].quantity.toLocaleString("fa-IR")}</span>
                    {/* <span>{food.quantity.toLocaleString("fa-IR")}</span> */}
                    <button
                      onClick={() => minusFood(food)}
                      className="outline-0 bg-red-600 h-6   flex justify-center items-center text-white px-2 mr-2 rounded-md text-lg w-8"
                    >
                      {food.quantity === 1 ? <BiTrash /> : <HiOutlineMinusSm />}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addFoodToCart(food)}
                    className="flex m-auto items-center text-sm font-bold p-2 rounded-sm bg-mamanpaz text-white"
                  >
                    <TiPlus className="text-2xl ml-1" />
                    <p>افزودن به سبد خرید</p>
                  </button>
                )}
              </div>
              <div className="mt-9 md:hidden flex items-center justify-center">
                <img src={food.images[0].img} alt="" className="w-72 rounded-md" />
              </div>
              {/* ============= Cooking instruction =============*/}
              <div>
                <div className="flex items-center mt-8">
                  <div className="w-[88px] font-bold shrink-0 text-lg text-gray-500">
                    دستور پخت
                  </div>
                  <div className="h-[2px] w-full bg-gray-200"></div>
                </div>
                <p className="p-2 text-gray-600 text-sm ">{food.recipes}</p>
              </div>
              {/* ============= Cooking instruction =============*/}

              <div className="">
                <div className="flex items-center mt-8">
                  <div className="w-[105px] font-bold shrink-0 text-lg text-gray-500">
                    ترکیبات غذایی
                  </div>
                  <div className="h-[2px] w-full bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center   mt-4 gap-3 ">
                  {food.Foodingredients.map((f) => (
                    <div
                      key={f.id}
                      className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7"
                    >
                      <img
                        className="w-10 text-gray-500"
                        src={f.img}
                        alt="not found"
                      />
                      <span className="font-bold text-gray-600">{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =============== start Customer comments =============== */}
              <div>
                <div className="flex items-center mt-8 mb-5">
                  <div className="w-[113px] font-bold shrink-0 text-lg text-gray-500">
                    نظرات مشتریان
                  </div>
                  <div className="h-[2px] w-full bg-gray-200"></div>
                </div>

                {food.comments.length > 0 ? (
                  <div>
                    {food.comments.map((f) => (
                      <div key={f.id} className="border-b pb-4 mt-3 ">
                        <div className="flex gap-5 mb-6 p-3">
                          <div className="flex flex-col items-center">
                            <FaUserCircle className="text-2xl text-gray-600" />
                            <span className="text-gray-600 text-sm mt-1 inline-block font-bold">
                              {f.user}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">
                              {f.date}
                            </span>
                            <p className="text-sm text-gray-500">{f.opinion}</p>
                          </div>
                        </div>
                        {f.response && (
                          <div className="flex justify-end  gap-3">
                            <div className="bg-gray-200 text-sm relative text-gray-600 rounded-md p-4 mt-4 before:absolute before:content-[''] before:-rotate-45 before:-left-1 before:top-3 before:-z-10 before:origin-top-right before:skew-y-[47deg] before:bg-gray-200 before:w-5 before:h-5 ">
                              {f.response}
                            </div>
                            <div className="w-16 flex flex-col items-center ">
                              <img
                                className="w-9 h-9 rounded-full"
                                src={food.Chefpicture}
                                alt=""
                              />
                              <span className="inline-block text-xs text-gray-400   w-20 text-center  mt-1">
                                {food.mother}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center font-bold text-gray-600 border-b-2 pb-5">
                    نظری وجود ندارد
                  </p>
                )}
              </div>
              {/* =============== end Customer comments =============== */}

              {/* =============== start Other foods cooked by chef ===============*/}
              <div className="mt-14 md:hidden">
                <h2 className="font-bold text-center text-gray-600">
                  سایر غذاهای مامان فلور
                </h2>
                <div className="p-2 text-gray-600 text-sm">
                  {momsFood &&
                    momsFood.map((f) => (
                      <Link to={`/food/${f.id}`} key={f.id}>
                        <div className="flex items-center justify-between  py-4 border-b">
                          <span>{f.title}</span>
                          <span>{f.price.toLocaleString("fa-IR")} تومان</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
              {/* =============== end Other foods cooked by chef ===============*/}
            </div>
          </div>

          <div className="md:w-[400px] shadow-[rgba(67,71,85,0.27)_0px_0px_0.25em,_rgba(90,125,188,0.05)_0px_0.25em_1em]  rounded-sm hidden md:block p-3">
            <div className="mt-5 flex items-center justify-center ">
              <img  src={food.images[0].img} alt="" className="w-80 rounded-md" />
            </div>
            <div className="mt-14 ">
              <h2 className="font-bold text-center text-gray-600">
                سایر غذا ها {food.mother}
              </h2>
              <div className="p-2 text-gray-600 text-sm">
                {momsFood &&
                  momsFood.map((f) => (
                    <Link to={`/food/${f.id}`} key={f.id}>
                      <div className="flex items-center justify-between  py-4 border-b">
                        <span>{f.title}</span>
                        <span>{f.price.toLocaleString("fa-IR")} تومان</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
