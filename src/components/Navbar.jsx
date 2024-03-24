import React from 'react'
import logo from '../assets/images/winmart_logo.svg'

const Navbar = () => {
  return (
    <nav className='w-full py-4 flex justify-between items-center'>
        <div className='w-[45px] h-[45px]'>
            <img className='w-full h-full ' src={logo} alt="" />
        </div>
        <div className='flex justify-center items-center gap-3'>
            <div className='w-[150px] px-3 text-gray-500 border border-gray-300 rounded-2xl'>
                <select className='w-full py-[7px] text-[0.8rem] border-none outline-none'>
                    <option value="all_category" className=''>All Category</option>
                    <option value="men_clothes" className=''>Men Clothes</option>
                    <option value="ladies_dress" className=''>Ladies Dress</option>
                </select>
            </div>
            <div className='w-[200px] px-3 py-[7px] flex justify-between items-center  border border-gray-300 rounded-2xl'>
                <input className='text-[0.8rem] border-none outline-none' type="text" />
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='text-[12px] font-medium'>
                <div className='text-gray-300'>Hello, Sign in</div>
                <div className='text-[13px]'>My Account</div>
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
            <div className='pl-3 text-[13px] font-medium'>
                <div className='text-gray-300'>My Cart</div>
                <div className=''>$836.00</div>
            </div>
            <div className='h-[2rem] w-[1px] bg-gray-300'></div>
        </div>
    </nav>
  )
}

export default Navbar