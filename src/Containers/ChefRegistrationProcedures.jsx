import React from "react";
import SiteBenefitsbox from "../Components/SiteBenefitsbox";
import Button from "../Components/Button";
import Border from "../Components/Border";
import { IoMdArrowDropdown } from "react-icons/io";

export default function ChefRegistrationProcedures() {
  return (
    <div className="container p-4  max-w-[1150px] mb-16">
      <h2 className="text-center font-bold text-xl lg:text-2xl mb-10">
        چطور با مامان‌پز همکاری کنیم؟
      </h2>
      <p className="text-center text-sm mb-10">
        برای اینکه به تیم مامان‌پز اضافه بشید باید سه مرحله رو پشت سر بذارید. ما
        در اینجا بهتون می‌گیم که چی‌کار کنید.
      </p>
      <div className=" max-w-[990px] ml-auto mb-20">
        <SiteBenefitsbox
          title="ثبت نام کنید."
          text="فرم ثبت‌نامی که تو این صفحه قرار داره رو پر کنید. اطلاعات شما در اختیار کارشناس‌های ما قرار می‌گیره و با شما در تماس خواهند بود."
          img="./img/ChefRegistrationProcedures/chef1.png"
        />
      </div>
      <div className=" max-w-[990px] mr-auto mb-20">
        <SiteBenefitsbox
          order={true}
          title="تست غذا بفرستید."
          text="برای اینکه بتونیم کیفیت آشپزی‌تون رو بسنجیم، با هماهنگی قبلی از شما می‌خوایم که چهار نمونه غذای مختلف بپزید و برای ما بفرستید. کارشناس‌های ما این غذاها رو بررسی می‌کنن و در صورت تایید، وارد مرحله سوم و پایانی می‌شید."
          img="./img/ChefRegistrationProcedures/chef2.png"
        />
      </div>
      <div className=" max-w-[990px] ml-auto mb-20">
        <SiteBenefitsbox
          title="مامان پزی شوید."
          text="مرحله سوم جاییه که شما مامان‌پزی می‌شید. از شما دعوت می‌کنیم که به دفتر ما بیاید تا در جریان دستورالعمل‌های جامع مامان‌پز مثل اصول بهداشتی، استانداردهای هر پرس غذا، نحوه بسته‌بندی، چارچوب قیمت‌گذاری و نظام محاسبه پاداش و جریمه قرار بگیرید. یادتون باشه که شما یک ماه فرصت خواهید داشت تا کارت بهداشت خودتون رو از یکی از مراکز بهداشت شهر دریافت کنید."
          img="./img/ChefRegistrationProcedures/chef3.png"
        />
      </div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="flex items-center justify-center w-64 m-auto"
      >
        <Button src="/chefRegistration">میخواهم مامان پزی شوم</Button>
      </div>

      <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />
      </Border>
    </div>
  );
}
