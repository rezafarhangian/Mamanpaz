import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import ChoiceOfFood from "./ChoiceOfFood";
import AddressVerification from "./AddressVerification";
import CheckTheOrder from "./CheckTheOrder";
import { useCart } from "../Context/CartProvider";

export default function CartBody() {
  const [activeStep, setActiveStep] = useState(1);
  const [order, setOrder] = useState(false);
  const [banner, setBanner] = useState(true);
  const { cart } = useCart();

  const [address, setAddress] = useState({
    province: "",
    city: "",
    street: "",
  });

  return (
    <div>
      {banner&& (
      <div className="bg-mamanpaz rounded-md p-3 lg:w-[850px] mb-10 m-auto text-white flex justify-between items-center">
        <p className="text-xs md:text-sm">{(50).toLocaleString('fa-IR')} هزار تخفیف ویژه سفارش اولی ها، کد : <span className="text-black font-bold text-base">reza</span></p>
        <button onClick={()=> setBanner(false)} className="outline-0">
          <AiOutlineClose className="text-xl"/>
        </button>
      </div>
      )}
      {cart.length ? (
        <div className="shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] lg:w-[850px] p-2 rounded-md  m-auto">
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
                  setOrder={setOrder}
                />
              </>
            )}

            {/*  ============ Start order details section ============  */}

            {activeStep === 3 && (
              <>
                <CheckTheOrder
                  address={address}
                  setActiveStep={setActiveStep}
                  setOrder={setOrder}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-28">
          <p className="font-bold">سبد خرید خالی است</p>
          <svg
            height="60"
            style={{ enableBackground: "new 0 0 512 512" }}
            width="60"
            version="1.1"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M32 56C18.8 56 8 45.2 8 32S18.8 8 32 8s24 10.8 24 24-10.8 24-24 24zm0-46c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22z"
                fill="#000000"
                data-original="#000000"
              />
              <path
                d="M43 41c-.6 0-1-.4-1-1 0-4.4-4.5-8-10-8s-10 3.6-10 8c0 .6-.4 1-1 1s-1-.4-1-1c0-5.5 5.4-10 12-10s12 4.5 12 10c0 .6-.4 1-1 1zM44.036 20a1 1 0 0 0-.63.196l-6.985 4.987a1 1 0 0 0 .896 1.764s.565-.199 1.68-.199c1.114 0 2.697.22 4.544 1.143a1 1 0 1 0 .895-1.79c-1.584-.791-2.956-1.075-4.166-1.209l4.299-3.069a1 1 0 0 0-.533-1.822zM19.965 20a1 1 0 0 1 .629.196l6.986 4.987a1 1 0 0 1-.897 1.764s-.565-.199-1.68-.199c-1.114 0-2.697.22-4.544 1.143a1 1 0 1 1-.894-1.79c1.584-.791 2.956-1.075 4.165-1.209l-4.298-3.069a1 1 0 0 1 .533-1.822z"
                fill="#000000"
                data-original="#000000"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
