import React from 'react'
import CartButton from '../../../common/CartButton'
import HeroImage from '../items/mobile_hero_img.svg';
import Arrow from '../items/arrow_forward.svg';

const MobileHero = () => {
  return (
    <div className='w-full pt-[0.5rem] bg-[#F06152]'>
        <div className='w-[80%] mx-auto relative'>
            <div className=''>
                <h2 className='playFair text-[6rem] font-bold text-white tracking-wide'>hoodie</h2>
                <div className='w-[220px] text-white'>
                    <div className='pb-[0.4rem] text-[17px] text-gray-300 tracking-wider'>Description</div>
                    <p className='text-[17px] font-light leading-[1.2rem]'>
                        There are many variations of passages of Lorem Ipsum available, 
                    </p>
                    <div className='py-[2rem]'>
                        <CartButton title='Add to your cart' />
                    </div>
                </div>
            </div>
            <div className='w-[240px] h-[350px] absolute bottom-0 right-4 '>
                <img className='w-full h-full object-cover' src={HeroImage} alt="Hero Image" />
            </div>
            <div className='absolute top-[8.2rem] right-1 w-[3.5rem] h-[3.5rem] bg-gray-200 opacity-[0.7] flex flex-col justify-center items-center rounded-full'>
                <img className='w-[3rem] h-[3rem] pt-1' src={Arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MobileHero