import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-slate-200 absolute bottom-0 left-0 right-0 h-[530px] md:h-[350px] ">
      <div className="bg-[#cfd8dc] p-1  md:py-4 text-gray-600">
        <div className="container flex items-center justify-center md:justify-evenly xl:justify-between md:pr-9 md:pl-5 max-w-[1000px]  ">
          <p className="hidden md:block">مامان‌پز پشتیبان شماست!</p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="flex items-center justify-center gap-2">
              <span>۰۹۱۰۰۰۱۶۴۰۰</span>
              <BsTelephoneFill />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>info@mamanpaz.ir</span>
              <MdEmail />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center md:flex-row md:justify-evenly xl:justify-between max-w-[1000px] mt-8 ">
        <dir className="flex  gap-5">
          <div className="">
            <h2 className="font-bold">مامان پز</h2>
            <ul className="text-sm text-gray-600 mt-2 ">
              <li>غذاها</li>
              <li className="mt-1">مامان ها</li>
              <li className="mt-1">سفارش شرکتی</li>
              <li className="mt-1">در مامان پز آشپزی کنید</li>
              <li className="mt-1">وبلاگ</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold">خدمات مشتریان</h2>
            <ul className="text-sm  text-gray-600 mt-2">
              <li>درباره ما</li>
              <li className="mt-1">تماس باما</li>
              <li className="mt-1">ثبت شکایت</li>
              <li className="mt-1">سوالات متداول</li>
              <li className="mt-1">قوانین و مقررات</li>
            </ul>
          </div>
        </dir>

        <div className="flex flex-col items-center justify-center gap-4 my-8 ">
          <img
            className="w-[192px]"
            src="/img/Footer/mamanpaz_logo.png"
            alt="mamanpaz_logo"
          />
          <div className="w-[150px]">
            <Link
              to="/"
              className=" bg-gray-800 flex items-center justify-between cursor-pointer px-2 py-3   rounded-md text-white"
            >
              <ImMobile />
              <span>مامان پز در موبایل</span>
            </Link>
          </div>
          <div className="flex items-center justify-between w-[140px] ">
            <div className="w-[29px] h-[29px] rounded-md bg-gradient-to-br from-yellow-500 via-pink-600 to-purple-700  text-white flex items-center justify-center">
              <IoLogoInstagram />
            </div>
            <div className="w-[29px] h-[29px] rounded-md bg-[#0077B5] text-white flex items-center justify-center">
              <GrLinkedinOption />
            </div>
            <div className="w-[29px] h-[29px] rounded-md bg-[#3b5999] text-white flex items-center justify-center">
              <GrFacebookOption />
            </div>
            <div className="w-[29px] h-[29px] rounded-md bg-[#55acee] text-white flex items-center justify-center">
              <FiTwitter />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-300 text-xs text-gray-500 text-center p-4 absolute bottom-0 right-0 left-0">
        <p>کلیه حقوق متعلق به وبسایت مامان پز می باشد</p>
      </div>
    </div>
  );
}
