import React from 'react'

const PaydayBtn = ({ className, ...props }) => {
    const defaultClasses = "w-[230px] h-[65px] px-[1.5rem] bg-${backgroundClr} transform -rotate-6";
  return (
    <div className='w-fit relative'>
        <div className="w-[230px] h-[65px] px-[1.5rem] bg-${backgroundClr} transform -rotate-6"></div>
        <h2 className='absolute inset-y-0 left-1/2 -translate-x-1/2 top-1 text-[2.8rem] uppercase font-semibold'>PayDay</h2>
    </div>
  )
}

export default PaydayBtn