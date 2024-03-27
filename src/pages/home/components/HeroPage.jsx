import React from 'react'
import CartButton from '../../../common/CartButton'
import heroImg from '../items/hero_img.svg'

const HeroPage = () => {
  return (
    <div className='w-full mx-auto pt-[3.5rem] pb-[1.5rem] flex items-start justify-start gap-[7rem]'>
      <div className='w-fit py-[2rem] flex flex-col justify-center items-center'>
        <div className='text-[15px] pb-2'>01</div>
        <div className='w-[1px] h-[68px] bg-[#C2BABD]'></div>
        <div className='py-[0.7rem] text-[13px] text-gray-400'>02</div>
        <div className='w-[1px] h-[68px] bg-[#C2BABD]'></div>
        <div className='py-[0.7rem] text-[13px] text-gray-400'>03</div>
      </div>
      <div className='w-full flex justify-start items-center gap-3 '>
        <div className='w-[45%] pt-[0.7rem]'>
          <small className='text-[15px]  uppercase'>Design by King David</small>
          <div className='playFair 2xl:text-[7.5rem] text-[6rem] text-[#EEB28D] 2xl:leading-[9rem] font-bold tracking-wide'>hoodie</div>
          <div className='w-[300px] py-[1rem]'>
            <small className='text-[16px] text-gray-300'>Description</small>
            <p className='py-[0.5rem] text-[16px] leading-[1.4rem] '>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className='w-[250px] pb-[1.5rem] border-b'>
            <small className=" text-[16px] text-gray-300">Sizes</small>
            <div className='pt-[0.5rem] flex justify-start items-center gap-[2rem]'>
              <div className='flex justify-start items-center gap-[0.7rem]'>
                <input className='' type="radio" name='size' />
                <label className='text-[15px]' htmlFor="">Medium</label>
              </div>
              <div className='flex justify-start items-center gap-[0.7rem]'>
                <input type="radio" name='size' />
                <label className='text-[15px]' htmlFor="">Large</label>
              </div>
            </div>
          </div>
          <div className='py-[1.6rem]'>
            <CartButton title="Add to your cart" />
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex justify-end 2xl:w-[450px] w-[350px]'>
            <div className='w-[25px] h-[25px] rounded-full border-[3px] border-gray-300'></div>
          </div>
          <div className='relative'>
            <div className='2xl:w-[450px] w-[400px] 2xl:h-[450px] h-[400px] m-auto rounded-full bg-gradient-to-b from-[#2A2163] to-[#2A216370]'></div>
            <div className='absolute inset-y-0 left-1/2 -top-32 -translate-x-[55%]  2xl:w-[430px] w-[400px] 2xl:h-[630px] h-[600px] '>
              <img className='w-full h-full object-cover' src={heroImg} alt="" />
            </div>
            <div className='w-[30px] h-[30px] rounded-full bg-gray-400'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage