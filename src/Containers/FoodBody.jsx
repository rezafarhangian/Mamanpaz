import { useEffect, useState } from "react";
import foods from "../Data/foods";
import { AiFillStar, AiOutlineUser, AiOutlineApple } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import {useParams} from "react-router-dom"

export default function FoodBody() {
  const [food, setFood] = useState({})
  const {id} = useParams()
   
  useEffect(() => {
         const filterdFood = foods.filter(f => f.id === Number(id))
         setFood(filterdFood[0])
  },[id])

  return (
    <div className="container p-2 mt-20 md:flex justify-center items-start  gap-10">
      <div className="max-w-[450px]  m-auto md:m-0 ">
        <div className=" shadow-[rgba(67,71,85,0.27)_0px_0px_0.25em,_rgba(90,125,188,0.05)_0px_0.25em_1em] p-4 rounded-sm">
          <div className="flex  items-center justify-between font-bold text-xs mt-4 md:text-base">
            <p>{food.title}</p>
            <p>{(food.price).toLocaleString("fa-IR")} تومان</p>
          </div>
          <div className="flex  items-center justify-between mt-5 text-xs">
            <div className="flex items-center">
              <div className="p-1 w-12 h-12 overflow-hidden">
                <img
                  className="rounded-full"
                  src="https://www.mamanpaz.ir/files/image/chef/06/01/2021/0cc357d0-7aa9-4506-a002-0ca2c3302e6e_64.jpg"
                  alt=""
                />
              </div>
              <div>مامان ارشید</div>
            </div>
            <div className="flex items-center">
              <p className="ml-1 flex text-slate-400">
                (25 <AiOutlineUser />)
              </p>
              <div className="flex items-center bg-slate-100 p-1 rounded">
                <AiFillStar className="text-yellow-400 text-base" />
                <span className="font-bold mr-1">4.07</span>
              </div>
            </div>
          </div>
          <p className="mt-6 md:text-sm  text-gray-500 text-xs">
            هویج پلو با گوشت قلقلی دستپخت مامان مهر آیین تاکنون +100 بار سفارش
            داده شده است.
          </p>
          <div className="mt-8">
            <button className="flex m-auto items-center text-sm font-bold p-2 rounded-sm bg-mamanpaz text-white">
              <TiPlus className="text-2xl ml-1" />
              <p>افزودن به سبد خرید</p>
            </button>
          </div>
          <div className="mt-9 md:hidden">
            <img
              src="https://www.mamanpaz.ir/files/image/food/18/05/2019/84830200-a690-4fc3-91d4-f2e8f2b4560b_600.jpg"
              alt=""
            />
          </div>
          {/* ============= Cooking instruction =============*/}
          <div>
            <div className="flex items-center mt-8">
              <div className="w-[88px] font-bold shrink-0 text-lg text-gray-500">
                دستور پخت
              </div>
              <div className="h-[2px] w-full bg-gray-200"></div>
            </div>
            <p className="p-2 text-gray-600 text-sm ">
              پیاز و گوشت را تفت می‌دهیم و سپس نمک ، فلفل و ادویه را اضافه
              {/* می‌کنیم. برنج ، موادگوشتی ، لپه و سبزی همه را باهم مخلوط می‌کنیم. */}
              {/* مواد را در بادمجان ، گوجه و فلفل قرار می‌دهیم و اجازه می دهیم تا
              با شعله ملایم پخته شوند ، نوش جان */}
            </p>
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
              <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                <AiOutlineApple className="text-5xl" />
                <span className="font-bold text-gray-600">سیب</span>
              </div>
              <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                <AiOutlineApple className="text-5xl" />
                <span className="font-bold text-gray-600">سیب</span>
              </div>
              <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                <AiOutlineApple className="text-5xl" />
                <span className="font-bold text-gray-600">سیب</span>
              </div>
              <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                <AiOutlineApple className="text-5xl" />
                <span className="font-bold text-gray-600">سیب</span>
              </div>
              <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                <AiOutlineApple className="text-5xl" />
                <span className="font-bold text-gray-600">سیب</span>
              </div>
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
            <div>
              <div className="border-b pb-3 mt-3">
                <div className="flex gap-5 mb-6">
                  <div>
                    <FaUserCircle className="text-2xl text-gray-600" />
                    <span className="text-gray-600 text-sm mt-1 inline-block font-bold">
                      رضا
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">۱۴۰۰/۰۷/۰۳</span>
                    <p className="text-sm text-gray-500">
                      عالی ، خوشمزه و معطر ، مخصوصا مرغ ها که فوق‌العاده خوشمزه
                      عالی ، خوشمزه و معطر ، مخصوصا مرغ ها که فوق‌العاده خوشمزه
                      عالی ، خوشمزه و معطر ، مخصوصا مرغ ها که فوق‌العاده خوشمزه
                      شده بودن ممنونیم
                    </p>
                  </div>
                </div>
                <div className="flex justify-end  gap-3">
                  <div className="bg-gray-200 text-sm relative text-gray-600 rounded-md p-4 mt-4 before:absolute before:content-[''] before:-rotate-45 before:-left-1 before:top-3 before:-z-10 before:origin-top-right before:skew-y-[47deg] before:bg-gray-200 before:w-5 before:h-5 ">
                    نوش جان عزیزم نوش جان عزیزم نوش جان عزیزم نوش جان عزیزم نوش
                    جان عزیزم نوش جان عزیزم
                  </div>
                  <div className="w-16 flex flex-col items-center ">
                    <img
                      className="w-9 h-9 rounded-full"
                      src="https://www.mamanpaz.ir/files/image/chef/14/12/2019/43e85604-e3d3-43fa-a779-baeb7742d6ae_64.jpg"
                      alt=""
                    />
                    <span className="inline-block text-xs text-gray-400   w-20 text-center  mt-1">
                      مامان فلور
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =============== end Customer comments =============== */}

          {/* =============== start Other foods cooked by chef ===============*/}
          <div className="mt-14 md:hidden">
            <h2 className="font-bold text-center text-gray-600">
              سایر غذاهای مامان فلور
            </h2>
            <div className="p-2 text-gray-600 text-sm">
              <div className="flex items-center justify-between  py-4 border-b">
                <span>باقالی پلو</span>
                <span>30000 تومان</span>
              </div>
              <div className="flex items-center justify-between  py-4 border-b">
                <span>باقالی پلو</span>
                <span>30000 تومان</span>
              </div>
              <div className="flex items-center justify-between  py-4 border-b">
                <span>باقالی پلو</span>
                <span>30000 تومان</span>
              </div>
            </div>
          </div>
          {/* =============== end Other foods cooked by chef ===============*/}
        </div>
      </div>

      <div className="md:w-[400px] shadow-[rgba(67,71,85,0.27)_0px_0px_0.25em,_rgba(90,125,188,0.05)_0px_0.25em_1em]  rounded-sm hidden md:block p-4">
        <div className="mt-9 ">
          <img
            src="https://www.mamanpaz.ir/files/image/food/18/05/2019/84830200-a690-4fc3-91d4-f2e8f2b4560b_600.jpg"
            alt=""
          />
        </div>
        <div className="mt-14 ">
          <h2 className="font-bold text-center text-gray-600">
            سایر غذاهای مامان فلور
          </h2>
          <div className="p-2 text-gray-600 text-sm">
            <div className="flex items-center justify-between  py-4 border-b">
              <span>باقالی پلو</span>
              <span>30000 تومان</span>
            </div>
            <div className="flex items-center justify-between  py-4 border-b">
              <span>باقالی پلو</span>
              <span>30000 تومان</span>
            </div>
            <div className="flex items-center justify-between  py-4 border-b">
              <span>باقالی پلو</span>
              <span>30000 تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
