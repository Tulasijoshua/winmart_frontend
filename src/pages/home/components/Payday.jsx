import React from 'react'
import payDay from '../items/pay_day.svg'
import CartButton from '../../../common/CartButton'

const Payday = () => {
  return (
    <div className='w-full mb-2 pt-[5rem] bg-[#FF8900]'>
        <div className='w-[80%] mx-auto flex justify-between '>
            <div className='flex-1'>
                <img className='h-[400px]' src={payDay} alt="" />
            </div>
            <div className='flex-1 '>
                <div className='w-[50%] mx-auto flex flex-col justify-center items-center'>
                    <div className='w-fit relative'>
                        <div className='w-[230px] h-[70px] px-[1.5rem] bg-white transform -rotate-6'></div>
                        <h2 className='absolute inset-y-0 left-1/2 -translate-x-1/2 top-2 text-[2.8rem] uppercase font-semibold'>PayDay</h2>
                    </div>
                    <div className='popp py-[1.5rem] text-[2.3rem] font-bold text-center uppercase pt-[2rem] leading-[1.7rem]'>Sale now</div>
                    <p className='px-[2.5rem] text-[16px] leading-[1.2rem]'>There are many variations of passages of Lorem available</p>
                    <div className='px-[2.5rem] py-[1rem] self-start text-[1.3rem] font-semibold leading-[1.2rem]'>1 June - 10 July 2021</div>
                    <div className='px-[2.5rem] self-start text-[16px] leading-[1rem]'>#Terms & Conditions apply</div>
                    <div className='self-start px-[2.5rem] py-[1.8rem]'>
                        <CartButton title='Shop Now' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payday