import React from 'react'
import CartButton from '../../../common/CartButton'

const HeroPage = () => {
  return (
    <div className='w-full mx-auto pt-[3.5rem] flex items-start justify-start gap-[7rem]'>
      <div className='w-fit py-[2rem] flex flex-col justify-center items-center'>
        <div className='text-[15px] pb-2'>01</div>
        <div className='w-[1px] h-[68px] bg-[#C2BABD]'></div>
        <div className='py-[0.7rem] text-[13px] text-gray-400'>02</div>
        <div className='w-[1px] h-[68px] bg-[#C2BABD]'></div>
        <div className='py-[0.7rem] text-[13px] text-gray-400'>03</div>
      </div>
      <div className='w-full flex justify-start gap-3'>
        <div className='w-[45%] pt-[0.7rem]'>
          <small className='text-[13px] font-medium uppercase'>Design by King David</small>
          <div className='playFair text-[6.5rem] text-[#EEB28D] leading-[6.5rem] font-bold tracking-wide'>hoodie</div>
          <div className='w-[270px] py-[1rem]'>
            <small className='text-[14px] text-gray-300'>Description</small>
            <p className='py-[0.5rem] text-[14px] leading-[1.2rem] '>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            </p>
          </div>
          <div className='w-[250px] pb-[1.5rem] border-b'>
            <small className=" text-[14px] text-gray-300">Sizes</small>
            <div className='pt-[0.5rem] flex justify-start items-center gap-[2rem]'>
              <div className='flex justify-start items-center gap-[0.7rem]'>
                <input className='' type="radio" name='size' />
                <label className='text-[13px]' htmlFor="">Medium</label>
              </div>
              <div className='flex justify-start items-center gap-[0.7rem]'>
                <input type="radio" name='size' />
                <label className='text-[13px]' htmlFor="">Large</label>
              </div>
            </div>
          </div>
          <div className='py-[1.6rem]'>
            <CartButton title="Add to your cart" />
          </div>
        </div>
        <div className='flex-1'>
          <div>
            <div className='w-[400px] h-[400px] rounded-full bg-'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage