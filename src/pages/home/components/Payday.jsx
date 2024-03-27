import React from 'react'
import payday from '../items/pay_day.svg'
import CartButton from '../../../common/CartButton'
import PaydayBtn from '../../../common/PaydayBtn'

const Payday = () => {
  return (
    <div className='w-full lg:mb-2 lg:pt-[5rem] pt-[3rem] bg-[#FF8900]'>
        <div className='maxContainer xl:w-[70%] w-[90%] mx-auto flex justify-between '>
            <div className='flex-1'>
                <img className='2xl:h-[420px] lg:h-[400px] h-[350px]' src={payday} alt="" />
            </div>
            <div className='flex-1 '>
                <div className='w-[300px] mx-auto flex flex-col justify-center items-center'>
                    <div className='w-fit relative'>
                        <div className="lg:w-[230px] w-[200px] lg:h-[65px] h-[55px] px-[1.5rem] bg-white transform -rotate-6"></div>
                        <h2 className='absolute inset-y-0 left-1/2 -translate-x-1/2 top-1 lg:text-[2.8rem] text-[2.4rem] uppercase font-semibold'>PayDay</h2>
                    </div>
                    <div className='popp lg:py-[1.5rem] py-[1rem] lg:text-[2.3rem] text-[2rem] font-bold text-center uppercase pt-[2rem] leading-[1.7rem]'>Sale now</div>
                    <p className='lg:px-[2.5rem] px-[2rem] text-[16px] leading-[1.2rem]'>There are many variations of passages of Lorem available</p>
                    <div className='lg:px-[2.5rem] px-[2rem] py-[1rem] self-start lg:text-[1.3rem] text-[1.2rem] font-semibold leading-[1.2rem]'>1 June - 10 July 2021</div>
                    <div className='lg:px-[2.5rem] px-[2rem] self-start lg:text-[16px] text-[15px] leading-[1rem]'>#Terms & Conditions apply</div>
                    <div className='self-start px-[2.5rem] lg:py-[1.8rem] pt-[1.5rem]'>
                        <CartButton title='Shop Now' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payday