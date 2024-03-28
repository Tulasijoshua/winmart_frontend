import React from 'react'
import PaydayBtn from '../../../common/PaydayBtn'
import playStore from '../items/play_store.png';
import appStore from '../items/app_store.png'
import mobileAds from '../items/mobile_ad.svg'

const Download = () => {
  return (
    <div className='w-full mt-[5rem] sm:py-[3.5rem] py-[5rem] bg-[#F6F6F8]'>
        <div className='maxContainer relative xl:w-[70%] lg:w-[80%] w-[90%] mx-auto flex justify-between items-center'>
            <section className='sm:flex-1 w-fit mx-auto z-[10]'>
                <div className='w-fit relative'>
                    <div className="lg:w-[230px] w-[200px] lg:h-[65px] h-[55px] px-[1.5rem] bg-[#2A2163] transform -rotate-6"></div>
                    <h2 className='absolute inset-y-0 left-1/2 -translate-x-1/2 top-1 text-white lg:text-[2.8rem] text-[2.4rem] uppercase font-semibold'>PayDay</h2>
                </div>
                <div className='lg:text-[2.5rem] md:text-[2rem] text-[1.7rem] font-semibold pt-[1.5rem] uppercase leading-[3rem]'>Download app &</div>
                <div className='popp lg:text-[2.5rem] md:text-[2rem] text-[1.7rem] font-bold uppercase'>Get the coupon</div>
                <p className='lg:w-[300px] w-[250px] py-[0.5rem] lg:text-[18px] text-[15px] lg:leading-[1.7rem] leading-[1.3rem]'>Get 30% off on your first transaction using Winmart mobile app for now</p>
                <div className='py-[1rem] flex justify-start items-center gap-[1rem]'>
                    <div className='lg:w-[3rem] w-[2.5rem] lg:h-[2.5rem] h-[2rem]'>
                        <img className='w-full h-full border' src={playStore} alt="Play Store" />
                    </div>
                    <div className='lg:w-[3rem] w-[2.5rem] lg:h-[2.5rem] h-[2rem]'>
                        <img className='w-full h-full border' src={appStore} alt="Play Store" />
                    </div>
                </div>
            </section>
            <section className='sm:block hidden'>
                <div className='lg:w-[430px] md:w-[350px] w-[300px] lg:h-[370px] md:h-[300px] h-[250px]'>
                    <img className='w-full h-full object-cover' src={mobileAds} alt="" />
                </div>
            </section>
            <div className='xs:w-[380px] xs:h-[380px] absolute left-8  border-[5px] rounded-full z-[1]'></div>
            <div className='xs:w-[450px] xs:h-[450px] absolute  border-[5px] rounded-full z-[1]'></div>
        </div>
    </div>
  )
}

export default Download