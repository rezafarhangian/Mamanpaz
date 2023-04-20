import React from 'react'

export default function CompanySlibeBox({img}) {
  return (
     <div className='shadow-[rgba(0,0,0,0.24)_0px_3px_8px] w-52 h-48 rounded-xl overflow-hidden bg-white m-auto'> 
        <img className='w-full h-full' src={img} alt="" />
    </div>
  )
}
