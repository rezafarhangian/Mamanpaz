import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../Components/Button";
import {  Autoplay } from "swiper";


export default function CorporateOrderApplication() {
  const [seedescription, setSeedescription] = useState(1);
  return (
    <div className="container p-2 mb-96 md:mb-72 ">
      <h2 className="text-2xl font-bold text-center xl:text-3xl">
        نرم افزار شرکتی
      </h2>

      <ul className="text-sm lg:text-base flex justify-center flex-wrap mt-10 bg-red-40 gap-y-2">
        <li
          onClick={() => setSeedescription(1)}
          className={`${
            seedescription === 1
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          شرکت در نظرسنجی
        </li>
        <li
          onClick={() => setSeedescription(2)}
          className={`${
            seedescription === 2
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          مدیریت کارمندان
        </li>
        <li
          onClick={() => setSeedescription(3)}
          className={`${
            seedescription === 3
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          ثبت یادآور
        </li>
        <li
          onClick={() => setSeedescription(4)}
          className={`${
            seedescription === 4
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          گزارش گیری
        </li>
        <li
          onClick={() => setSeedescription(5)}
          className={`${
            seedescription === 5
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          مدیریت نحوه پرداخت
        </li>
        <li
          onClick={() => setSeedescription(6)}
          className={`${
            seedescription === 6
              ? "text-mamanpaz border-mamanpaz"
              : "text-black border-gray-300"
          } w-[150px] xl:w-[170px] cursor-pointer p-2 text-center border-b-4`}
        >
          مدیریت سفارش مدیران
        </li>
      </ul>

      <div className="md:flex justify-around xl:justify-between items-center max-w-[1000px] m-auto  mt-16">
        <div className="max-w-[400px] mt-10 text-sm lg:text-lg p-3 text-center h-32  lg:h-48 flex flex-col justify-between items-center ">
            
          <p className={`${seedescription === 1 ? "block" : "hidden"}`}>
            برای این که افراد ثبت غذا را فراموش نکنند، امکان ارسال اعلان یادآوری
            و امکان انتخاب خودکار غذا توسط نرم افزار وجود دارد.
          </p>
          <p className={`${seedescription === 2 ? "block" : "hidden"}`}>
            کارمندان می‌توانند در مورد همه غذاها نظر خود را ثبت کنند تا در هر
            دوره زمانی غذاهای موردپسند همه انتخاب شود.
          </p>
          <p className={`${seedescription === 3 ? "block" : "hidden"}`}>
            مدیرسیستم می‌تواند در بخش گزارشات میزان هزینه‌ها و میزان رضایت
            کارکنان را در هر دوره زمانی مشاهده کند.
          </p>
          <p className={`${seedescription === 4 ? "block" : "hidden"}`}>
            مدیرسیستم می‌تواند به راحتی افراد جدید را فعال و دسترسی کارمندان را
            مدیریت کند.
          </p>
          <p className={`${seedescription === 5 ? "block" : "hidden"}`}>
            شما می‌توانید هزینه غذا را توسط شرکت، کارمند و یا به صورت مشترک
            پرداخت کنید.
          </p>
          <p className={`${seedescription === 6 ? "block" : "hidden"}`}>
            مدیر سیستم می‌تواند برای مدیرانی که فرصت کافی ندارند، وارد سیستم شود
            و سفارش آنها را ویرایش یا ثبت کند.
          </p>

          <div onClick={() => window.scrollTo(0,0)} className=" hidden md:block">
            <Button src="/companies">نهار شرکتی میخواهم</Button>
          </div>
        </div>

        <div className="relative  h-[480px]  w-[270px] m-auto lg:m-0">
          <img
            className="absolute w-[270px] top-0 right-0 left-0"
            src="./img/CorporateOrderApplication/iphone.png"
            alt=""
          />
          <div className="w-[230px] m-auto pt-16">
            <Swiper
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[ Autoplay]}
             className="mySwiper">
              <SwiperSlide>
                <img
                  src="./img/CorporateOrderApplication/enterprise-app-home.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./img/CorporateOrderApplication/enterprise-app-menu.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./img/CorporateOrderApplication/enterprise-app-score.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div onClick={() => window.scrollTo(0,0)} className="mt-28 md:hidden ">
        <Button  src="/companies">نهار شرکتی میخواهم</Button>
      </div>
    </div>
  );
}
