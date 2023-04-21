import React from "react";
import Button from "../Components/Button";
import Border from "../Components/Border";
import { IoMdArrowDropdown } from "react-icons/io";


export default function ChooseMealPlan() {
  return (
    <div className="container p-4 mb-16">
      <div className="max-w-[800px] bg-[#faf4f4] m-auto rounded-2xl p-4">
        <h2 className="font-bold text-center text-xl lg:text-2xl mb-5">
          برنامه هفتگی اختصاصی
        </h2>
        <p className="text-center max-w-[650px] m-auto text-sm">
          اینجا یکی از مهم‌ترین بخش‌های سفارش غذا از مامان‌پزه. با تکیه به دانش
          و تجربه چندین ساله در ارایه غذای شرکتی، مصاحبه‌های دقیقی قبل از ثبت
          سفارش با شما خواهیم داشت تا برنامه غذایی متناسب با دغدغه‌های کارفرما و
          سلیقه کارمندها طراحی ‌کنیم.
        </p>
         
         <div className=" md:flex items-center justify-between gap-10 md:px-5 mt-16 mb-8">
           <div className="py-2 px-5 border-2 border-gray-300 flex items-center justify-between rounded-2xl w-full mb-5 md:mb-0">
             <span className=" lg:w-44">محدوده قیمت :</span>
             <select name="" id="" className="bg-transparent  md:w-32 lg:w-full  border-0 outline-0">
              <option value="">اقتصادی</option>
              <option value="">استاندارد</option>
             </select>
           </div>
           <div className="py-2 px-5 border-2 border-gray-300 flex items-center justify-between rounded-2xl  w-full ">
            <span className=" lg:w-14">تنوع :</span>
             <select name="" id="" className="bg-transparent  md:w-44 lg:w-full border-0 outline-0">
              <option value="">یک نوع غذا در روز</option>
              <option value="">دو نوع غذا در روز</option>
              <option value="">سه نوع غذا در روز</option>
             </select>
           </div>
         </div>

         <Button src="https://cdn.mamanpaz.ir/pdf/menu/mamanpaz-e1.pdf?_ga=2.117706441.1741561058.1681654248-1576154787.1680543328">
            دریافت برنامه
         </Button>
      </div>

      <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />
          
      </Border>
    </div>
  );
}
