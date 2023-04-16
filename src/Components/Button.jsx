import React from "react";

export default function Button({text}) {
  return (
    <button className="bg-mamanpaz shadow-[rgba(0,0,0,0.16)_0px_10px_36px_0px,rgba(0,0,0,0.06)_0px_0px_0px_1px] font-bold outline-0 text-white p-3 w-64 rounded-xl">
      {text}
    </button>
  );
}
