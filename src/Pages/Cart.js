import React, { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import { TiTick } from "react-icons/ti"
export default function Cart() {

  const [activeStep, setActiveStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];



  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className='mt-28 '>
        <ul className='flex justify-between w-[290px] md:w-[400px] m-auto'>
          <li className='flex flex-col items-center justify-center'>
            <span className='font-bold text-mamanpaz'>غذاها</span>
            <span className='inline-block z-50 mt-2 w-4 h-4 rounded-full bg-mamanpaz '>
              {activeStep > 1 && <TiTick className='text-white' />}

            </span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <span className={`font-bold  ${activeStep > 1 ? "text-mamanpaz" : "text-gray-400"}`}>تایید آدرس</span>
            <span className={`inline-block  mt-2 w-4 h-4 rounded-full  ${activeStep > 1 ? "bg-mamanpaz after:bg-mamanpaz" : "bg-gray-300 after:bg-gray-300"} relative after:left-0 after:-z-10 after:absolute after:content-[""] after:top-[6px] after:w-36 after:md:w-48 after:h-1 `}>
              {activeStep > 2 && <TiTick className='text-white' />}
            </span>
          </li>
          <li className='flex flex-col items-center justify-center'>
            <span className={`font-bold ${activeStep > 2 ? "text-mamanpaz" : "text-gray-400"}`}>ثبت</span>
            <span className={`inline-block  mt-2 w-4 h-4 rounded-full ${activeStep > 2 ? "bg-mamanpaz after:bg-mamanpaz" : "bg-gray-300 after:bg-gray-300"}  relative after:left-0 after:-z-10 after:absolute after:content-[""] after:top-[6px] after:w-36 after:md:w-48 after:h-1 `}>
              {activeStep > 3 && <TiTick className='text-white' />}
            </span>
          </li>
        </ul>
      </div>
    
    </div>
  )
}
