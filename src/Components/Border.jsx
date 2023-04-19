import React from "react";

export default function Border({ icon, children }) {
  return (
    <div className={` border-b-4  relative -z-30 pt-20 flex items-center justify-center`}>
      {icon && (
        <p className="bg-gray-100  absolute p-3 shadow-[rgba(0,0,0,0.19)_0px_10px_20px,_rgba(0,0,0,0.23)_0px_6px_6px] rounded-full flex items-center justify-center">
            {children}
        </p>
      )}
    </div>
  );
}
