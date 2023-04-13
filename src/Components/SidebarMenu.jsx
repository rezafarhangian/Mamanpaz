import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SidebarMobile({showMenu, setShowMenu }) {
 

  return (
    <div className="transition-all duration-700 ">
      {/* <div
        onClick={() => setShowMenu(false)}
        className="fixed   z-10 top-2/4 left-2/4  -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-[#bbb7b7b4]"
      ></div> */}
      <div className={`fixed top-0 ${showMenu ? "right-0" : "-right-52"} transition-all duration-700  bottom-0    z-30 bg-white  h-full w-2/5 overflow-y-auto`}>
        <div onClick={() => setShowMenu(false)} className="mr-44 pt-10">
          <AiOutlineCloseCircle className="text-2xl text-Saina" />
        </div>

        <ul className="p-2">
          <li className="p-2 mb-2 rounded ">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="w-full mb-4 rounded">
            <Link className=" w-full py-2 pr-2 pl-20" to="/questions">
              سوالات متداول
            </Link>
          </li>
          <li className="w-full mb-2 rounded ">
            <Link className=" w-full py-2 pr-2 pl-20 b " to="/userComments">
              نظرات مشتریان
            </Link>
          </li>
          <li className="w-full mb-2 rounded ">
            <Link className=" w-full py-2 pr-2 pl-20 b " to="/aboutUs">
              درباره ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
