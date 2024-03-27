import React from 'react'
import CartButton from '../../../common/CartButton'
import chop from '../items/available/chops.svg'
import chopItem from '../items/available/chop_item.svg';
import gamePad from '../items/available/game_pad.svg';
import sneaker from '../items/available/sneaker.svg';
import watch from '../items/available/watch.svg';

const Available = () => {
  return (
    <div className='maxContainer w-[70%] mx-auto py-[4.5rem] flex justify-between items-start gap-[3rem]'>
        <section className='flex-1 py-[3.5rem]'>
            <h2 className='popp 2xl:w-[500px] w-[450px] 2xl:text-[3rem] text-[2.5rem] font-bold uppercase leading-[4rem]'>Available stores on winmart</h2>
            <p className='w-[350px] py-[1rem] text-[20px] leading-[1.8rem]'>Get 30% off on your first transaction using Winmart mobile app for now</p>
            <div className='pt-[3.5rem]'>
                <CartButton title="View All" />
            </div>
        </section>
        <section className='flex-1'>
            <div className='2xl:w-[80%] w-full mx-auto grid grid-cols-2 gap-[2rem]'>
                <div className='w-[180px] h-[260px] relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#FF890080] to-[#ff890010] border'>
                    <div className='w-[150px] h-[150px] border-[3px] border-gray-200 shadow-xl rounded-full mx-auto '>
                        <img className='w-[120px] h-[130px] pt-4 mx-auto object-cover' src={chop} alt="" />
                    </div>
                    <div className='absolute bottom-2 px-[1rem] self-start'>
                        <div className='w-[2rem] h-[2rem] self-start '>
                            <img className='w-full h-full' src={chopItem} alt="" />
                        </div>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='w-[180px] h-[260px] relative flex flex-col justify-center items-center bg-gradient-to-t from-[#fff] to-[#fff] border shadow-lg'>
                    <div className='w-[180px] h-[180px] mx-auto '>
                        <img className='w-full h-full pt-4 mx-auto' src={gamePad} alt="" />
                    </div>
                    <div className='absolute top-6 right-1 px-[1rem] self-start'>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='w-[180px] h-[260px] relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#2A216373] to-[#2A216305] border'>
                    <div className='w-[150px] h-[150px] rounded-full mx-auto '>
                        <img className='w-[120px] h-[130px] pt-4 mx-auto object-cover' src={sneaker} alt="" />
                    </div>
                    <div className='absolute bottom-2 px-[1rem] self-start'>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='w-[180px] h-[260px] relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#A160B490] to-[#A160B410] border'>
                    <div className='w-[180px] h-[200px] mx-auto '>
                        <img className='w-full h-full pt-4 mx-auto' src={watch} alt="Watch" />
                    </div>
                    <div className='absolute top-2 right-1 px-[1rem] self-start'>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Available