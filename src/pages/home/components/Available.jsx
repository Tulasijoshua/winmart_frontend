import React from 'react'
import CartButton from '../../../common/CartButton'
import chop from '../items/available/chops.svg'
import chopItem from '../items/available/chop_item.svg';
import gamePad from '../items/available/game_pad.svg';
import sneaker from '../items/available/sneaker.svg';
import watch from '../items/available/watch.svg';

const Available = () => {
  return (
    <div className='maxContainer xl:w-[70%] lg:w-[85%] md:w-[90%] xs:w-[80%] w-[95%] mx-auto xs:py-[4.5rem] py-[3rem] flex md:flex-row flex-col justify-between items-start gap-[3rem]'>
        <section className='xl:flex-1 lg:w-[45%] md:w-[40%] w-[80%] sm:mx-0 mx-auto md:py-[3.5rem] ss:py-[2rem] '>
            <h2 className='popp 2xl:w-[500px] xl:w-[450px] lg:w-[350px] md:w-[300px] xs:w-[350px] ss:w-[300px] w-[200px] 2xl:text-[3rem] xl:text-[2.5rem] lg:text-[2.1rem] md:text-[1.8rem] xs:text-[2.2rem] ss:text-[1.8rem] text-[1.3rem] font-bold uppercase xl:leading-[4rem] lg:leading-[3rem] md:leading-[2.5rem] xs:leading-[3.5rem] ss:leading-[2.7rem] leading-[2rem]'>Available stores on winmart</h2>
            <p className='xl:w-[350px] md:w-[270px] xs:w-[300px] ss:w-[280px] py-[1rem] xl:text-[20px] md:text-[16px] xs:text-[18px] ss:text-[16px] text-[13px] xl:leading-[1.8rem] md:leading-[1.5rem] xs:leading-[1.7rem] ss:leading-[1.5rem] leading-[1.3rem]'>Get 30% off on your first transaction using Winmart mobile app for now</p>
            <div className='md:pt-[3.5rem] ss:pt-[1.5rem]'>
                <CartButton title="View All" />
            </div>
        </section>
        <section className='md:flex-1 xs:w-[90%] w-full mx-auto'>
            <div className='2xl:w-[80%] ss:w-[95%] w-[80%] mx-auto grid ss:grid-cols-2 grid-cols-1 md:gap-[2rem] sm:gap-[3.5rem] xs:gap-[3rem] gap-[1rem]'>
                <div className='xs:w-[180px] ss:w-[150px] w-[180px] xs:h-[260px] ss:h-[220px] h-[260px] mx-auto relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#FF890080] to-[#ff890010] border'>
                    <div className='xs:w-[150px] ss:w-[110px] w-[150px]  xs:h-[150px] ss:h-[110px] h-[150px] border-[3px] border-gray-200 shadow-xl rounded-full mx-auto '>
                        <img className='xs:w-[120px] ss:w-[90px] w-[120px] xs:h-[130px] ss:h-[100px] h-[130px] pt-4 mx-auto object-cover' src={chop} alt="" />
                    </div>
                    <div className='absolute bottom-2 px-[1rem] self-start'>
                        <div className='xs:w-[2rem] w-[1.5rem] xs:h-[2rem] h-[1.5rem] self-start '>
                            <img className='w-full h-full' src={chopItem} alt="" />
                        </div>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='xs:w-[180px] ss:w-[150px] w-[180px] xs:h-[260px] ss:h-[220px] h-[260px] mx-auto relative flex flex-col justify-center items-center bg-gradient-to-t from-[#fff] to-[#fff] border shadow-lg'>
                    <div className='xs:w-[180px] ss:w-[140px] w-[180px] xs:h-[180px] ss:h-[140px] h-[180px] mx-auto '>
                        <img className='w-full h-full pt-4 mx-auto' src={gamePad} alt="" />
                    </div>
                    <div className='absolute top-6 right-1 px-[1rem] self-start'>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='xs:w-[180px] ss:w-[150px] w-[180px] xs:h-[260px] ss:h-[220px] h-[260px] mx-auto relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#2A216373] to-[#2A216305] border'>
                    <div className='w-[150px] h-[150px] rounded-full mx-auto '>
                        <img className='w-[120px] h-[130px] pt-4 mx-auto object-cover' src={sneaker} alt="" />
                    </div>
                    <div className='absolute bottom-2 px-[1rem] self-start'>
                        <div className='text-[15px] font-medium'>Chops & Hubs</div>
                    </div>
                </div>
                <div className='xs:w-[180px] ss:w-[150px] w-[180px] xs:h-[260px] ss:h-[220px] h-[260px] mx-auto relative flex flex-col justify-center items-center border-[3px] border-gray-200 rounded-lg bg-gradient-to-t from-[#A160B490] to-[#A160B410] border'>
                    <div className='xs:w-[180px] ss:w-[160px] w-[180px] xs:h-[200px] ss:h-[180px] h-[200px] mx-auto '>
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