import foods from "../Data/foods";
import { AiFillStar, AiOutlineUser, AiOutlineApple } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";

export default function FoodBody() {
  return (
    <div className="container p-2 mt-20 md:flex justify-between">
      <div className="min-w-[300px] m-auto ">
        <div className=" shadow-[rgba(67,71,85,0.27)_0px_0px_0.25em,_rgba(90,125,188,0.05)_0px_0.25em_1em] p-4 rounded-sm">
          <div className="flex  items-center justify-between font-bold text-xs mt-4 md:text-base">
            <p>جوجه کباب</p>
            <p>230000 تومان</p>
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
          <div>
          <div className="flex items-center mt-8">
              <div className="w-[105px] font-bold shrink-0 text-lg text-gray-500">
                ترکیبات غذایی
              </div>
              <div className="h-[2px] w-full bg-gray-200"></div>
            </div>
              <div className="flex flex-wrap  justify-center gap-3 ">
                 <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                    <AiOutlineApple className="text-5xl"/>
                    <span className="font-bold text-gray-600">سیب</span>
                 </div>
                 <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                    <AiOutlineApple className="text-5xl"/>
                    <span className="font-bold text-gray-600">سیب</span>
                 </div>
                 <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                    <AiOutlineApple className="text-5xl"/>
                    <span className="font-bold text-gray-600">سیب</span>
                 </div>
                 <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                    <AiOutlineApple className="text-5xl"/>
                    <span className="font-bold text-gray-600">سیب</span>
                 </div>
                 <div className="h-40 w-32  bg-slate-200 rounded-md flex flex-col justify-center items-center gap-7">
                    <AiOutlineApple className="text-5xl"/>
                    <span className="font-bold text-gray-600">سیب</span>
                 </div>
              </div>
              
          </div>
        </div>
      </div>

      <div className="md:w-[400px] bg-red-300">ffff</div>
    </div>
  );
}
