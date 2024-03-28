import React, { useRef } from 'react'
import food from '../../../assets/images/food.svg'

const SignupFree = () => {
  const navRef = useRef();

  const showSide = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div className=' w-full'>
      <div onClick={showSide} className='lg:hidden block pt-[1rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
      </div>
      <div ref={navRef} className='nav lg:w-full w-[230px]  lg:relative fixed right-0 top-0  h-[400px] py-[2rem] px-[1.5rem] bg-[#13152D] rounded-bl-[12rem]'>
        <div className='flex justify-between items-center'>
          <button className='text-white text-[11px] py-[0.4rem] px-[1rem] border border-[#E99517] uppercase rounded-md'>Sign up free</button>
          <div onClick={showSide} className='lg:hidden block text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
          </div>
        </div>
        <div className='pt-[4rem] 2xl:px-[3.5rem] px-[1rem] flex flex-col justify-center items-end gap-[2.5rem]'>
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
    </div>
  )
}

export default SignupFree