import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function NavbarMobile() {
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [showMenu]);

  return (
    <>
      <div className=" md:hidden fixed top-0 h-[70px] z-30 right-0 left-0 bg-white shadow ">
        <div>
          <div className="container p-4 flex items-center justify-between">
            <div className="flex items-center justify-center">
              <img
                className="w-11 mb-"
                src="./img/logo-brand.png"
                alt="Logo-mamanpaz"
              />
            </div>
            <div htmlFor="my-drawer" className="cursor-pointer">
              <div onClick={() => setShowMenu(true)} className="cursor-pointer">
                <FiMenu className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*start Shadow under the side menu */}
      <div
        onClick={() => setShowMenu(false)}
        className={`bg-[#bbb7b7b4] md:hidden ${
          showMenu
            ? "top-0 right-0 bottom-0 left-0"
            : "top-0 right-0 bottom-0 left-[1500px]"
        }  z-40 fixed `}
      ></div>
      {/*end Shadow under the side menu */}

      {/* ===== start side menu item===== */}
      <div
        className={`fixed top-0 ${
          showMenu ? "right-0" : "-right-80"
        } md:hidden transition-all duration-300 ease-in-out  bottom-0  z-50  bg-white  h-full w-56 overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4 border-b-[1px]">
          <img
            className="w-10"
            src="./img/logo-brand.png"
            alt="logo mamanpaz"
          />

          <div onClick={() => setShowMenu(false)} className=" cursor-pointer">
            <AiOutlineCloseCircle className="text-2xl text-Saina" />
          </div>
        </div>

        <ul className="pr-4 pt-3 ">
          <li className=" mb-2 rounded   block">
            <Link className=" block py-2" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="mb-2  rounded ">
            <Link className="  py-2 block " to="/companies">
              سفارش شرکتی
            </Link>
          </li>
          <li className=" mb-2  rounded ">
            <Link
              className=" block  py-2  "
              to="/userComments"
            >
              آشپزی در مامان پز
            </Link>
          </li>
          <li className=" mb-2  rounded ">
            <Link
              className=" block  py-2  "
              to="/aboutUs"
            >
              ثبت سفارش آنلاین
            </Link>
          </li>
          <li className=" rounded ">
            <Link
              className=" block py-2   "
              to="/aboutUs"
            >
              درباره ما
            </Link>
          </li>
        </ul>
         
         <div className="flex justify-between gap-2 mt-8 px-4 mb-9">
          <button className="bg-white w-24 py-1 border rounded-lg cursor-pointer">
            <Link to="/">ورود</Link>
          </button>
          <button className="bg-white w-24 py-1 border rounded-lg cursor-pointer">
            <Link to="/">ثبت نام</Link>
          </button>
         </div>
      </div>
    </>
  );
}
