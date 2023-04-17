import React from 'react'

export default function IntroductionBox({img, desc}) {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='shadow-[rgba(0,0,0,0.2)_0px_12px_28px_0px,_rgba(0,0,0,0.1)_0px_2px_4px_0px,_rgba(255,255,255,0.05)_0px_0px_0px_1px_inset] w-[175px] h-[150px] rounded-2xl  flex items-center justify-center'>
            <img src={img} alt="" />
        </div>
        <p className='font-bold mt-8'>{desc}</p>
    </div>
  )
}
