import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import ChoiceOfFood from "./ChoiceOfFood";
import AddressVerification from "./AddressVerification";
import CheckTheOrder from "./CheckTheOrder";



export default function CartBody() {
  const [activeStep, setActiveStep] = useState(1);
  const [order, setOrder] = useState(false);

  const [address, setAddress] = useState({
    province: "",
    city: "",
    street: "",
  });

  


  return (
    <div>
      <div></div>
      <div className="shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] md:w-[850px] p-2 rounded-md  m-auto">
        {/* ============ start stepper ============ */}

        <div className="">
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
                {order && <TiTick className="text-white" />}
              </span>
            </li>
          </ul>

          {/*  ============ Start table of the food section ============  */}

          {activeStep === 1 && (
            <>
              <ChoiceOfFood setActiveStep={setActiveStep} />
            </>
          )}

          {/*  ============ Start table address confirmation section ============  */}

          {activeStep === 2 && (
            <>
              <AddressVerification
                setActiveStep={setActiveStep}
                address={address}
                setAddress={setAddress}
              />
            </>
          )}
          {activeStep === 3 && (
            <>
              <CheckTheOrder address={address} setActiveStep={setActiveStep} setOrder={setOrder}/>
            </>
          )}

        
        </div>
      </div>
    </div>
  );
}
