import React from "react";
import CompanySlibeBox from "../Components/CompanySlibeBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { IoMdArrowDropdown } from "react-icons/io";


import "swiper/css";
import Border from "../Components/Border";

export default function CompanySlides() {
  return (
    <div className="container p-2 mb-40">
      <div className="text-center mb-16">
        <h2 className=" font-bold text-2xl xl:text-3xl">تنوع غذایی</h2>
        <p className="max-w-[700px] m-auto mt-7 text-sm">
          مامان‌پز با گروهی از بهترین آشپزهای خونگی مجموعه متنوعی از غذاها را در
          منوی روزانه خود گردآورده است. برای همین اگر کارمندان شما سلایق متنوعی
          دارند، نگران نباشید. ما هر سلیقه‌ای را راضی نگه می‌داریم
        </p>
      </div>

      <div className="max-w-[900px] m-auto p-5 md:p-0 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
              //   slidesPerGroup: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="p-48 "
        >
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo3.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo4.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo5.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo7.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo8.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo9.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo10.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo11.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo12.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo13.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo14.jpg" />
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <CompanySlibeBox img="./img/CompanySlides/photo15.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" max-w-[1100px] m-auto ">
        <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />

        </Border>
      </div>
    </div>
  );
}
