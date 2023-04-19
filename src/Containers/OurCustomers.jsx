import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Autoplay } from "swiper";
import Border from "../Components/Border";

export default function OurCustomers() {
  return (
    <div className="container py-6   p-2 -z-50 mb-16">
      <div className="max-w-[1100px] m-auto  ">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1300: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
          className=""
        >
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo1.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo2.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo3.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-24 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo4.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo5.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo6.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo7.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo8.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo9.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo10.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo11.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo12.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo13.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-8">
            <div className="w-16 h-16 m-auto">
              <img
                className="w-full h-full"
                src="./img/Customers/logo14.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        
        <div className="-mt-16 max-w-[1100px]  ">
           <Border/>
        </div>
      </div>
    </div>
  );
}
