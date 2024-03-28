import React, { useRef } from 'react'
import logo from '../assets/images/winmart_logo2.svg';
import food from '../assets/images/food.svg'

const Navbar2 = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
  return (
    <div className='w-full px-[2rem] py-[0.7rem] flex justify-between items-center fixed top-0 bg-white z-[99] shadow-md'>
        <div className='w-[2.5rem] h-[2.5rem]'>
            <img className='w-full h-full' src={logo} alt="" />
        </div>
        <div className='flex justify-center items-center gap-[2rem]'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className='relative'>
                <div className='p-2 bg-gray-100 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-300">
                        <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                    </svg>
                </div>
                <div className='absolute -top-1 -right-2 w-5 h-5 flex flex-col justify-center items-center text-white text-[0.7rem] font-medium rounded-full bg-[#EC5937]'>
                    2
                </div>
            </div>
            <div onClick={showNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </div>
        </div>
        <div ref={navRef} className='nav fixed right-0 top-0 w-full h-[100vh] bg-[#333333cc]  z-[99]'>
            <div className='w-[85%] mx-auto py-[3.5rem]'>
                <div className='flex justify-between items-center gap-[2rem]'>
                    <div onClick={showNavbar} className='px-[6px] py-[5px] border-[2px] border-white rounded-md text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className='py-[0.6rem] px-[1.1rem] text-white text-[0.9rem] uppercase bg-[#E9951780] rounded-md border border-[#E99517]'>Sign up free</div>
                </div>

                <div className='pt-[4rem] 2xl:px-[3.5rem] px-[2rem] flex flex-col justify-center items-end gap-[2rem]'>
                    <div onClick={showNavbar} className=' flex justify-center items-center gap-[2px] text-white'>
                        <div className='text-[20px]  text-gray-200'>Food App</div>
                        <div className='w-[2.5rem] h-[2.5rem]'>
                            <img className='w-full h-full' src={food} alt="Restaurant" />
                        </div>
                    </div>
                    <div onClick={showNavbar} className='text-[20px] text-gray-200'>Accessories</div>
                    <div onClick={showNavbar} className='text-[20px] text-gray-200'>Latops</div>
                    <div onClick={showNavbar} className='text-[20px] text-gray-200'>Watch</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar2