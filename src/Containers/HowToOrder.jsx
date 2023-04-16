import React from "react";
import HowToOrderCard from "../Components/HowToOrderCard";
import Button from "../Components/Button";

export default function HowToOrder() {
  return (
    <div className="container p-2 border-b-4 pb-10">
      <h2 className="text-center font-bold text-xl lg:text-2xl">
        چطور غذای شرکتی سفارش دهیم؟
      </h2>
      <div className="flex items-center justify-center xl:justify-evenly flex-wrap mt-8">
        <HowToOrderCard
          img="./img/HowToOrder/enterprise1.png"
          title="ثبت درخواست"
          desc="با ثبت درخواست در سایت، کارشناسان ما با شما در تماس خواهند بود.
"
        />
        <HowToOrderCard
          img="./img/HowToOrder/enterprise2.png"
          title="دریافت برنامه اختصاصی"
          desc="بر اساس سلیقه‌ شما، یک برنامه غذایی ویژه سازمانتان ارائه می‌کنیم.
"
        />
        <HowToOrderCard
          img="./img/HowToOrder/enterprise3.png"
          title="پخت غذا با مامان‌ها"
          desc="مامان‌ها غذاها را با تازه‌ترین مواد اولیه آماده می‌کنند.
"
        />
        <HowToOrderCard
          img="./img/HowToOrder/enterprise4.png"
          title="ارسال غذاها"
          desc="غذاها را طبق برنامه و در یک بسته‌بندی مناسب به دست شما می‌رسانیم.
"
        />
      </div>
        
        <div className="flex items-center justify-center mt-20">
           <Button text="اطلاعات بیشتر"/>
        </div>

    </div>
  );
}
