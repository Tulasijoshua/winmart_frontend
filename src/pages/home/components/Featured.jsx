import React from 'react'
// import jeans from '../items/featured/jena.png';
import jeans from '../items/featured/jeans.svg';
import shirt from '../items/featured/shirt.svg';
import tv from '../items/featured/tv.svg';
import dress from '../items/featured/ladies_dress.svg'

const Featured = ({title}) => {
    const featured = [
        {
            id: 1,
            name: 'HD IPD Display',
            price: 20,
            shipping: 'free delivery',
            img: jeans,
        },
        {
            id: 2,
            name: 'HD IPD Display',
            price: 20,
            shipping: 'free delivery',
            img: shirt
        },
        {
            id: 3,
            name: 'HD IPD Display',
            price: 20,
            shipping: 'free delivery',
            img: tv
        },
        {
            id: 4,
            name: 'HD IPD Display',
            price: 20,
            shipping: 'free delivery',
            img: dress
        },
    ]
  return (
    <div className='w-[80%] mx-auto pt-[4rem] pb-[2rem]'>
        <div className='pb-[0.8rem] flex justify-between items-center'>
            <h2 className='text-[1.1rem] pb-[1.3rem]'>{title}</h2>
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

        <section className='w-full flex justify-between items-center gap-[2rem]'>
            {
                featured.map((item, index) => (
                    <div className='w-[230px] bg-[#F9F9F9] shadow-md rounded-lg hover:scale-105 transition-all ease-in-out delay-150 duration-300'>
                        <div className='w-full h-[200px] self-start'>
                            <img className='w-full h-full object-cover rounded-t-md' src={item.img} alt="" />
                        </div>
                        <div className='px-[1rem] pt-[1rem] pb-[0.7rem]'>
                            <div className='text-[16px] pb-1'>HD IPD Display</div>
                            <small className='py-[5px] text-[14px]'>$20</small><br />
                            <small className='text-[14px]'>free delivery</small>
                            <div className='pt-[0.5rem] flex justify-between items-center'>
                                <div className='px-[0.8rem] py-[.3rem] text-[13px] border-2 border-[#EC5937] rounded-md'>
                                    Get Now
                                </div>
                                <div className='text-[20px] font-medium'>$20</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </section>
    </div>
  )
}

export default Featured