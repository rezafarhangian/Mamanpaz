import React from "react";

export default function CustomersCommentCard({img1,img2, title, desc, name}) {
  return (
    <div className="flex flex-col m-auto lg:flex-row gap-5 max-w-[500px] lg:max-w-[700px] items-center justify-around rounded-2xl p-3 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
      <div className="text-center">
        <img className="rounded-2xl w-[225px] m-auto mb-7" src={img1} alt="" />
        <h2 className="text-mamanpaz my-4 lg:text-xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-700 max-w-[300px]">{desc}</p>
        <span className="text-gray-500">{name}</span>
      </div>
      <div className="">
        <img className="rounded-2xl md:max-w-[360px] md:h-[400px] object-cover" src={img2} alt="" />
      </div>
    </div>
  );
}
