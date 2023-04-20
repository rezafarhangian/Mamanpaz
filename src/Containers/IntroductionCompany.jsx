
import IntroductionBox from "../Components/IntroductionBox";
import { IoMdArrowDropdown } from "react-icons/io";
import Border from "../Components/Border";

export default function IntroductionCompany() {
  return (
    <div className="container p-2 mb-20 ">
      <div>
        <h2 className="text-center font-bold text-xl lg:text-2xl">
            چرا مامان پز؟
        </h2>
      </div>
      <div className="mt-16 flex items-center justify-center gap-10 lg:gap-16 mb-36 flex-wrap bg-red-60  max-w-[700px] m-auto">
        <IntroductionBox
          img="./img/IntroductionCompany/merit8.png"
          desc="تنوع غذایی"
        />
        <IntroductionBox
          img="./img/IntroductionCompany/merit2.png"
          desc="پشتیبانی"
        />
        <IntroductionBox
          img="./img/IntroductionCompany/merit7.png"
          desc="حساب و کتاب شفاف"
        />
        <IntroductionBox
          img="./img/IntroductionCompany/merit9.png"
          desc="سفارش رستورانی"
        />
        <IntroductionBox
          img="./img/IntroductionCompany/merit9.png"
          desc="نرم افزار شرکتی"
        />
        <IntroductionBox
          img="./img/IntroductionCompany/merit6.png"
          desc="برنامه هفته ای اختصاصی"
        />
      </div>

      <div className=" max-w-[1100px] m-auto -mt-16">
        <Border icon={true}>
        <IoMdArrowDropdown className="text-4xl" />

        </Border>
      </div>
    </div>
  );
}
