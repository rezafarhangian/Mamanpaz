import React, { useState } from "react";
import Button from "../Components/Button";

export default function WebsiteServices() {
  const [category, setCategory] = useState("A");
  return (
    <div className="container p-2 mb-20">
      <h2 className="text-center font-bold text-xl lg:text-2xl mb-16">
        مامان‌پز چه خدماتی دارد؟
      </h2>

      <div>
        <div className="flex items-center justify-center gap-8 max-w-[526px] m-auto">
          <div
            onClick={() => setCategory("A")}
            className={` ${
              category === "A"
                ? "border-mamanpaz text-mamanpaz"
                : "text-black border-gray-300"
            } cursor-pointer border-b-4  text-center pb-3 w-full`}
          >
            <p className="">سفارش شرکتی</p>
          </div>
          <div
            onClick={() => setCategory("B")}
            className={` ${
              category === "B"
                ? "border-mamanpaz text-mamanpaz"
                : "text-black border-gray-300"
            } cursor-pointer border-b-4  text-center pb-3 w-full`}
          >
            <p className="">سفارش آنلاین</p>
          </div>
        </div>

        <div className={`${category === "B" ? "flex" : "hidden"} mt-8 flex flex-col md:flex-row gap-5 items-center justify-center md:w-[700px] md:justify-evenly m-auto`} >
          <div className="w-[269px] md:w-[300px] md:h-[220px] rounded-xl overflow-hidden ">
            <img
              className="w-full h-full"
              src="./img/WebsiteServices/bg1.jpg"
              alt="Photo of online shopping"
            />
          </div>
          <div className="max-w-[270px] text-sm  text-justify flex flex-col justify-between items-center h-[225px] ">
            <p className="mb-10 md:mb-8">
              شما می‌توانید از روی سایت و به طور مستقیم هم سفارش خود را از میان
              غذاهای مامان‌پز انتخاب و ثبت کنید. فقط در نظر داشته باشید که به
              دلیل محدودیت مامان‌ها در تهیه مواد اولیه‌، باید یک روز زودتر غذای
              خود را سفارش دهید. هر مامان در صورتی که چهار سفارش برای غذای
              مورد‌نظر دریافت کند آن را تهیه می‌کند.
            </p>
            <Button text="میخواهم سفارش دهم" />
          </div>
        </div>

        <div className={`${category === "A" ? "flex" : "hidden"} mt-8 flex flex-col md:flex-row gap-5 items-center justify-center md:w-[700px] md:justify-evenly m-auto `}>
          <div className="w-[269px] h-[152px] md:w-[300px] md:h-[220px] rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="./img/WebsiteServices/bg2.png"
              alt="Photo of online shopping"
            />
          </div>
          <div className="max-w-[270px] text-sm  text-justify flex flex-col justify-between items-center  h-[225px] ">
            <p className="mb-16 md:mb-8">
              اگر شرکتی هستید که می‌خواهید برای تامین غذای روزانه کارکنان خود از
              خدمات مامان‌پز استفاده کنید، فقط کافیست اطلاعات تماس خود را با ما
              به اشتراک بگذارید تا کارشناسان مامان‌پز با شما تماس بگیرند. .
            </p>
            <Button text="نهار شرکتی میخواهم" />
          </div>
        </div>
      </div>
    </div>
  );
}
