import React from "react";
import {Link} from "react-router-dom"

export default function Button({ src, children}) {
  return (
    <Link  to={src} preventScrollReset={false}  className="bg-mamanpaz block text-center m-auto shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] font-bold outline-0 text-white p-3 w-64 rounded-xl">
      {children}
    </Link>
  
  );
}
