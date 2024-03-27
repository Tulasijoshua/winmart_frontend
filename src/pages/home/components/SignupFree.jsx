import React from 'react'
import food from '../../../assets/images/food.svg'

const SignupFree = () => {
  return (
    <div className='w-full ml-[rem] h-[400px] py-[2rem] px-[1.5rem] bg-[#13152D] rounded-bl-[12rem]'>
      <button className='text-white text-[11px] py-[0.4rem] px-[1rem] border border-[#E99517] uppercase rounded-md'>Sign up free</button>
      <div className='pt-[4rem] 2xl:px-[3.5rem] px-[2rem] flex flex-col justify-center items-end gap-[2.5rem]'>
        <div className=' flex justify-center items-center gap-[2px] text-white'>
          <div className='text-[14px] font-light text-gray-200'>Food App</div>
          <div className='w-[1.5rem] h-[1.5rem]'>
            <img className='w-full h-full' src={food} alt="" />
          </div>
        </div>
        <div className='text-[14px] font-light text-gray-200'>Accessories</div>
        <div className='text-[14px] font-light text-gray-200'>Latops</div>
        <div className='text-[14px] font-light text-gray-200'>Watch</div>
      </div>
    </div>
  )
}

export default SignupFree