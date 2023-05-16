import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdArrowBackIosNew } from "react-icons/md";

export default function CartBody() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div>
      <div></div>
      <div className="shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] md:w-[850px] p-2 rounded-md  m-auto">
        {/* ============ start stepper ============ */}

        <div className="">
          {/* <div className="flex flex-col justify-center items-center gap-16"> */}

          <ul className="flex justify-between w-[290px] md:w-[400px] mt-4 m-auto">
            <li className="flex flex-col items-center justify-center">
              <span className="font-bold text-mamanpaz ">غذاها</span>
              <span className="inline-block z-20 mt-2 w-4 h-4 rounded-full bg-mamanpaz ">
                {activeStep > 1 && <TiTick className="text-white" />}
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <span
                className={`font-bold  ${
                  activeStep > 1 ? "text-mamanpaz" : "text-gray-400"
                }`}
              >
                تایید آدرس
              </span>
              <span
                className={`inline-block  mt-2 w-4 h-4 rounded-full  ${
                  activeStep > 1
                    ? "bg-mamanpaz after:bg-mamanpaz"
                    : "bg-gray-300 after:bg-gray-300"
                } relative after:left-0 after:-z-10 after:absolute after:content-[""] after:top-[6px] after:w-36 after:md:w-48 after:h-1 `}
              >
                {activeStep > 2 && <TiTick className="text-white" />}
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <span
                className={`font-bold ${
                  activeStep > 2 ? "text-mamanpaz" : "text-gray-400"
                }`}
              >
                ثبت
              </span>
              <span
                className={`inline-block  mt-2 w-4 h-4 rounded-full ${
                  activeStep > 2
                    ? "bg-mamanpaz after:bg-mamanpaz"
                    : "bg-gray-300 after:bg-gray-300"
                }  relative after:left-0 after:-z-10 after:absolute after:content-[""] after:top-[6px] after:w-36 after:md:w-48 after:h-1 `}
              >
                {activeStep > 3 && <TiTick className="text-white" />}
              </span>
            </li>
          </ul>

          {/*  ============ start table ============  */}
         {activeStep === 1 && (
            <>
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

            <button onClick={()=> setActiveStep(2)} className="flex items-center bg-mamanpaz text-white outline-0 py-[3px] px-4 rounded-sm m-auto mt-7 mb-3">
                <span>بعدی</span>
                <MdArrowBackIosNew className="text-lg mr-2"/>
            </button>
            </>
         )}

         {activeStep === 2 && (
            <>
            
            </>
         )}
         
        </div>
      </div>
    </div>
  );
}
