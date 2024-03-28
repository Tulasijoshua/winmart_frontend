import React from 'react'
import watch from '../items/trending/casio_watch.svg';
import iPhone from '../items/trending/iPhone.svg';
import jacket from '../items/trending/brown_jacket.svg';
import lgtv from '../items/trending/lg_monitor.svg';

const Trending = () => {
    const trending = [
        {
            id: 1, 
            name: 'Casio Watch',
            img: watch
        },
        {
            id: 2, 
            name: 'Iphone 12',
            img: iPhone
        },
        {
            id: 3, 
            name: 'Brown Jacket',
            img: jacket
        },
        {
            id: 4, 
            name: 'LG HD Monitor',
            img: lgtv,
        },
    ]
  return (
    <div className='maxContainer pt-[1rem] pb-[2rem] xl:w-[70%] w-[85%] mx-auto'>
        <div className=' flex justify-between items-center'>
            <h2 className='ss:text-[1.1rem] text-[0.9rem] '>Trending Products</h2>
            <div className='flex justify-center items-center gap-[0.5rem]'>
                <div className='text-gray-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className='text-gray-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
        <section className='py-[1rem] flex justify-between items-center flex-nowrap gap-[2.5rem] overflow-auto'>
            {
                trending.map((trend, index) => {
                    return <div className='hover:scale-105 transition-all'>
                        <div className='2xl:w-[13rem] xl:w-[12rem] w-[11rem] 2xl:h-[17rem] xl:h-[15rem] h-[14rem] px-1 bg-gray-100 shadow-md border-gray-200  flex flex-col justify-center items-center'>
                            <div className='2xl:w-[13rem] xl:w-[12rem] w-[11rem] 2xl:h-[13rem] xl:h-[12rem] h-[12rem]'>
                                <img className='w-full h-full object-cover' src={trend.img} alt="" />
                            </div>
                        </div>
                        <div className='py-[1rem] px-[0.5rem] flex justify-between items-center gap-[1rem]'>
                            <div>
                                <div className='2xl:text-[15px] text-[14px]'>{trend.name}</div>
                                <div className='2xl:text-[13px] text-[12px]'>Buy now</div>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="2xl:w-5 w-4 2xl:h-5 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                            </div>
                        </div>
                    </div>
                })
            }
        </section>
    </div>
  )
}

export default Trending