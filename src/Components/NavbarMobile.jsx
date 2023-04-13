import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SidebarMobile from "./SidebarMenu";

export default function NavbarMobile() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" md:hidden fixed top-0 h-[70px] right-0 left-0 bg-white shadow ">
      <div>
        <div className="container p-4 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              className="w-11 mb-"
              src="./img/logo-brand.png"
              alt="Logo-mamanpaz"
            />
          </div>
          <div onClick={() => setShowMenu(true)} className="cursor-pointer">
            <FiMenu className="text-4xl" />
          </div>
        </div>

         {showMenu && <SidebarMobile className="bg-red-700" showMenu={showMenu} setShowMenu={setShowMenu}/>}
         
      </div>
    </div>
  );
}
