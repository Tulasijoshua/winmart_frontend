import React from 'react'
import CartButton from '../../../common/CartButton'
import HeroImage from '../items/mobile_hero_img.svg';
import Arrow from '../items/arrow_forward.svg';

const MobileHero = () => {
  return (
    <div className='w-full pt-[4rem] bg-[#F06152]'>
        <div className='sm:w-[80%] w-[85%] mx-auto relative'>
            <div className=''>
                <h2 className='playFair sm:text-[6rem] xs:text-[5rem] text-[4rem] font-bold text-white tracking-wide'>hoodie</h2>
                <div className='sm:w-[220px] w-[200px] text-white'>
                    <div className='pb-[0.4rem] text-[17px] text-gray-300 tracking-wider'>Description</div>
                    <p className='sm:text-[17px] text-[15px] font-light leading-[1.2rem]'>
                        There are many variations of passages of Lorem Ipsum available,
                    </p>
                    <div className='py-[2rem]'>
                        <CartButton title='Add to your cart' />
                    </div>
                </div>
            </div>
            <div className='sm:w-[240px] xs:w-[220px] w-[150px] sm:h-[350px] xs:h-[340px] h-[220px] absolute bottom-0 sm:right-4 right-0'>
                <img className='w-full h-full object-cover' src={HeroImage} alt="Hero Image" />
            </div>
            <div className='absolute sm:top-[8.2rem] xs:top-[7.5rem] top-[4rem] sm:right-1 -right-4 sm:w-[3.5rem] w-[3rem] sm:h-[3.5rem] h-[3rem] bg-gray-200 opacity-[0.7] flex flex-col justify-center items-center rounded-full'>
                <img className='sm:w-[3rem] w-[2.5rem] sm:h-[3rem] h-[2.5rem] pt-1' src={Arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MobileHero