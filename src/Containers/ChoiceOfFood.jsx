import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";


export default function ChoiceOfFood({setActiveStep}) {
  return (
    <div>
      <div className="overflow-x-auto mt-10 mb-12">
        <table className="w-[800px] m-auto">
          <thead>
            <tr>
              <th className="py-3 bg-gray-200">نام غذا</th>
              <th className="py-3 bg-gray-200">آشپز</th>
              <th className="py-3 bg-gray-200">قیمت</th>
              <th className="py-3 bg-gray-200">تعداد</th>
              <th className="py-3 bg-gray-200">جمع قیمت</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="border-b">
              <td className="py-5 ">جوجه کباب</td>
              <td className="py-5 ">مامان فلور</td>
              <td className="py-5 ">150000</td>
              <td className="py-5 ">2</td>
              <td className="py-5 ">300000</td>
            </tr>
            <tr className="border-b">
              <td className="py-5 ">جوجه کباب</td>
              <td className="py-5 ">مامان فلور</td>
              <td className="py-5 ">150000</td>
              <td className="py-5 ">2</td>
              <td className="py-5 ">300000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex px-2 font-bold md:px-6 mt-5 bg-gray-200 py-2 justify-between">
        <p>مجموع قابل پرداخت :</p>
        <p> 20000 تومان</p>
      </div>

      <button
        onClick={() => setActiveStep(2)}
        className="flex items-center bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3"
      >
        <span>بعدی</span>
        <MdArrowBackIosNew className="text-lg mr-2" />
      </button>
    </div>
  );
}
