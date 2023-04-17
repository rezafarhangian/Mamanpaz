import React from "react";
import CustomersCommentCard from "../Components/CustomersCommentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { IoMdArrowDropdown } from "react-icons/io";


export default function CustomersComments() {
  return (
    <div className="container p-4 mb-20 ">
      <h2 className="text-center font-bold text-xl lg:text-2xl mb-16">
        مشتریان مامان‌پز چه می‌گویند؟
      </h2>
      <div className="m-auto  md:w-[850px]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper py-4"
        >
          <SwiperSlide className=" py-10 px-4 ">
            <CustomersCommentCard
              img1="./img/CustomersComments/food1.jpeg"
              img2="./img/CustomersComments/chef1.jpeg"
              title="عدس‌ پلو دستپخت مامان شقایق"
              desc="خیلی خوشمزه و خوب بود، شبیه غذای مامان خودم"
              name="صبا از اقتصاد بیدار"
            />
          </SwiperSlide>
          <SwiperSlide className=" py-10 px-4 ">
            <CustomersCommentCard
              img1="./img/CustomersComments/food2.jpeg"
              img2="./img/CustomersComments/chef2.jpeg"
              title="چلو خورشت کرفس دستپخت مامان زینت"
              desc="من عاشق این خورشتم و مامان زینت هم این رو عالی میپزه! دست گلتون درد نکنه!"
              name="مهدی از تراکنش همراه ایمن"
            />
          </SwiperSlide>
          <SwiperSlide className=" py-10 px-4 ">
            <CustomersCommentCard
              img1="./img/CustomersComments/food3.jpeg"
              img2="./img/CustomersComments/chef3.jpeg"
              title="زرشک پلو دستپخت مامان لیلیوم"
              desc="زرشک پلو خیلی خوب بود کل همکارای ما از مامان لیلیوم رضایت کامل دارند."
              name="یاسمن از توسعه ابزار بازار سرمایه"
            />
          </SwiperSlide>
          <SwiperSlide className=" py-10 px-4 ">
            <CustomersCommentCard
              img1="./img/CustomersComments/food4.jpeg"
              img2="./img/CustomersComments/chef4.jpeg"
              title="فیله سوخاری دستپخت مامان فلور "
              desc="انقدر عالی بود که کلمه ها کم میارن از گفتنش ... واقعا ممنونم ازتون. "
              name="وحید از تضمین‌چی"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" border-b-4 relative -z-30 pt-20 flex items-center justify-center">
          <div className="bg-gray-100 shadow absolute w-16 h-16 rounded-full flex items-center justify-center">
            <IoMdArrowDropdown className="text-4xl"/>
          </div>
        </div>
    </div>
  );
}
