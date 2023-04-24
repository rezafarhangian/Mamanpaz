import React from 'react'
import IntroductionBox from "../Components/IntroductionBox"
import Button from "../Components/Button";


export default function BenefitsOfCookingInMamanpaz() {
  return (
    <div className="container p-2 mb-[390px] md:mb-[200px]">
    <div>
      <h2 className="text-center font-bold text-xl lg:text-2xl">
      مامان‌پزی شو چون ...
      </h2>
    </div>
    <div className="mt-16 flex items-center justify-center gap-10 lg:gap-16 mb-20 flex-wrap bg-red-60  max-w-[1150px] m-auto">
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit7.png"
        desc="درآمد از آشپزخانه "
        text="با کمک مامان‌پز در آشپزخانه خودتون کسب‌وکاری راه بندازید و درآمد خوب و مستمری داشته باشید."
      />
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit12.png"
        desc="تسویه حساب روزانه"
        text="ما خیلی خوش قولیم! هر تعداد غذایی که روزانه بفروشید، فردای اون روز پولش نشسته تو حساب‌تون.
        "
      />
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit2.png"
        desc="بازاریابی، فروش و پشتیبانی با ما"
        text="کافیه فقط شما غذا رو آماده کنید. باقی کارها و دردسرهاش به عهده ماست و نمی‌ذاریم آب تو دلتون تکون بخوره.
        "
      />
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit13.png"
        desc="فروش بیشتر با افزایش ظرفیت"
        text="نگران محدودیت‌های آشپزخانه‌تون نباشید. همین که به ما نشون بدید آشپز خوبی هستید، ما کنارتونیم تا این موانع رو رفع کنیم.
        "
      />
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit14.png"
        desc="بسته‌بندی و ارسال هم با ما"
        text="نگران پیدا کردن جعبه و یا پیچیدگی‌های ارسال نباشید. بعد از پخت، غذاها رو در جعبه‌های مخصوص مامان‌پز بذارید و به پیک‌های ما تحویل بدید.
        "
      />
      <IntroductionBox
        img="./img/BenefitsOfCookingInMamanpaz/merit15.png"
        desc="گزارش‌های مالی"
        text="شما با اپلیکیشن مامان‌پز می‌تونید بهتر حواستون به دخل و خرجتون باشه و گزارش‌های دوره ای از فروشتون داشته باشید.
        "
      />
    </div>

    <div
        onClick={() => window.scrollTo(0, 0)}
        className="flex items-center justify-center w-64 m-auto "
      >
        <Button src="/chefRegistration">میخواهم مامان پزی شوم</Button>
      </div>

  </div>
  )
}
