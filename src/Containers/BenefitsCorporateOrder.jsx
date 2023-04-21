import React from "react";
import SiteBenefitsbox from "../Components/SiteBenefitsbox";
import Button from "../Components/Button";
import Border from "../Components/Border";
import { IoMdArrowDropdown } from "react-icons/io";


export default function BenefitsCorporateOrder() {
  return (
    <div className="container p-4  max-w-[1150px] mb-16">
      <div className=" max-w-[990px] ml-auto mb-20">
        <SiteBenefitsbox
          title="پشتیبانی"
          text="با مامان‌پز نگران کارهای اجرایی غذای شرکتی‌تون نباشید. ما هر روز غذا رو سر ساعت و در بسته‌بندی‌های مناسب به شما تحویل می‌دیم. همین‌طور با یک سیستم جامع نظرسنجی سعی می‌کنیم نظر شما رو درباره غذاها بدونیم و روز به روز خودمون رو به سلیقه شما نزدیک‌تر کنیم."
          img="./img/BenefitsCorporateOrder/img1.png"
        />
      </div>
      <div className=" max-w-[990px] mr-auto mb-20">
        <SiteBenefitsbox
          title="حساب و کتاب شفاف"
          text="در سفارش از مامان‌پز نگران دغدغه‌هایی مثل فاکتور و اسناد مالی نباشید. ما براتون فاکتور رسمی صادر می‌کنیم و گزارش‌های شفاف مالی در زمان‌های مختلف ارایه می‌کنیم تا شما با خیال راحت و کمترین چالش مالی بتونید سفارش بدید."
          img="./img/BenefitsCorporateOrder/img2.jpeg"
        />
      </div>
      <div className=" max-w-[990px] ml-auto mb-20">
        <SiteBenefitsbox
          title="سفارش رستورانی"
          text="شما می‌تونید در کنار منوی متنوع و خانگی مامان‌پز، به فهرستی از غذاهای فست‌فودی و رستورانی نیز دسترسی داشته باشید. فقط کافیه به ما بگید تا این غذاها رو از رستوران‌های مطمئن طرف قرارداد مامان‌پز، براتون تهیه کنیم."
          img="./img/BenefitsCorporateOrder/img3.png"
        />
      </div>
      <div onClick={() => window.scrollTo(0,0)} className="flex items-center justify-center w-64 m-auto">
        <Button src="/companies">
            نهار شرکتی میخوام!
        </Button>
      </div>

      <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />
      </Border>
    </div>
  );
}
