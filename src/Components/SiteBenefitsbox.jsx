import React from "react";

export default function SiteBenefitsbox({img, title, text}) {
  return (
    <div className="bg-[#faf4f4] max-w-[990px] lg:h-[300px] rounded-2xl overflow-hidden lg:flex items-center justify-between">
      <div>
        <img
          className="h-[300px] w-full lg:w-[426px] rounded-2xl"
          src={img}
          alt=""
        />
      </div>
      <div className="p-7 lg:p-3 lg:max-w-[520px]  lg:h-[300px] lg:pt-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-sm lg:text-[15px] leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}
