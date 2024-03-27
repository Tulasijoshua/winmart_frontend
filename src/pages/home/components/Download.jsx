import React from 'react'
import PaydayBtn from '../../../common/PaydayBtn'
import playStore from '../items/play_store.png';
import appStore from '../items/app_store.png'
import mobileAds from '../items/mobile_ad.svg'

const Download = () => {
  return (
    <div className='w-full py-[3.5rem] bg-[#F6F6F8]'>
        <div className='maxContainer w-[70%] mx-auto flex justify-between items-center'>
            <section>
                <div className='w-fit relative'>
                    <div className="w-[230px] h-[65px] px-[1.5rem] bg-[#2A2163] transform -rotate-6"></div>
                    <h2 className='absolute inset-y-0 left-1/2 -translate-x-1/2 top-1 text-white text-[2.8rem] uppercase font-semibold'>PayDay</h2>
                </div>
                <div className='text-[2.5rem] font-semibold pt-[1.5rem] uppercase leading-[3rem]'>Download app &</div>
                <div className='popp text-[2.5rem] font-bold uppercase'>Get the coupon</div>
                <p className='w-[300px] py-[0.5rem] text-[18px] leading-[1.7rem]'>Get 30% off on your first transaction using Winmart mobile app for now</p>
                <div className='py-[1rem] flex justify-start items-center gap-[1rem]'>
                    <div className='w-[3rem] h-[2.5rem]'>
                        <img className='w-full h-full border' src={playStore} alt="Play Store" />
                    </div>
                    <div className='w-[3rem] h-[2.5rem]'>
                        <img className='w-full h-full border' src={appStore} alt="Play Store" />
                    </div>
                </div>
            </section>
            <section>
                <div className='w-[430px] h-[370px]'>
                    <img className='w-full h-full object-cover' src={mobileAds} alt="" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Download