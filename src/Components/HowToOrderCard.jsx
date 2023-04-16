import React from "react";

export default function HowToOrderCard({img ,title, desc}) {
  return (
    <div className="w-60 text-center  ">
      <img className="w-48 m-auto" src={img} alt="enterprise" />
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
