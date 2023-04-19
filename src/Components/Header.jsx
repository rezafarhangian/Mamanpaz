import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";
import Border from "./Border";

export default function Header() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className="container  mt-[70px]  mb-16 px-2">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="md:order-1">
            <img
              src="./img/Header/mamanpaz-main-bg.png"
              alt="mamanpaz-main-bg"
            />
          </div>
          <div className="text-center mt-5 md:mt-0  md:w-[800px]">
            <h1 className="text-2xl mb-3 font-bold lg:text-3xl lg:mb-7 xl:text-4xl">
              ناهار شرکتی با طعمی از خونه
            </h1>
            <p className="text-gray-500 m-auto font-medium mb-8 max-w-xs xl:font-bold">
              مامان‌پز با غذاهای خانگی و سالم یک ناهار کاری فراموش نشدنی را برای
              شما رقم می‌زند.
            </p>
            <Button text="نهار شرکتی میخوام" />
          </div>
        </div>
   
        <Border icon="true">
          <IoMdArrowDropdown className="text-4xl" />
        </Border>
      </div>
    </div>
  );
}
