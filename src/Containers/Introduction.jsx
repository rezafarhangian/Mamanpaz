import React from "react";
import IntroductionBox from "../Components/IntroductionBox";
import Border from "../Components/Border";

export default function Introduction() {
  return (
    <div className="container p-2 mb-20 ">
      <div>
        <h2 className="text-center font-bold text-xl lg:text-2xl">چرا مامان‌پز را انتخاب کنیم؟</h2>
      </div>
       <div className="mt-16 flex items-center justify-center gap-10 lg:gap-16 mb-36 flex-wrap bg-red-60  max-w-[700px] m-auto">
        <IntroductionBox img="./img/Introduction/merit1.png" desc="صرفه جویی در وقت"/>
        <IntroductionBox img="./img/Introduction/merit2.png" desc="همراه مشتریان"/>
        <IntroductionBox img="./img/Introduction/merit3.png" desc="یک طعم خانگی"/>
        <IntroductionBox img="./img/Introduction/merit4.png" desc="کار آفرینی برای زنان"/>
        <IntroductionBox img="./img/Introduction/merit5.png" desc="راهکار هوشمند"/>
        <IntroductionBox img="./img/Introduction/merit6.png" desc="برنامه غذایی متنوع"/>
       </div>

        <div className=" max-w-[1100px] m-auto -mt-16">
          <Border icon={true}>
                <p className="text-mamanpaz font-semibold p-2">لحظات دوست داشتنی با طعمی از خانه</p>
          </Border>
        </div>
      
    </div>
  );
}
