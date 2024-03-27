import React from 'react';
import logo from '../assets/images/footer_logo.svg'

const Footer = () => {
  return (
    <div className='w-full pt-[4rem] pb-[4.5rem] bg-[#000]'>
        <div className='maxContainer w-[65%] mx-auto flex justify-between items-start gap-[2rem]'>
            <section>
                <div className='xl:w-[5rem] w-[4rem] xl:h-[5rem] h-[4rem]'>
                    <img className='w-full h-full' src={logo} alt="" />
                </div>
                <div className='pt-[2.5rem] text-[13px] text-white'>Sunyani, Ghana</div>
            </section>
            <section className='text-white 2xl:text-[16px] text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-500'>
                <h2 className='font-normal 2xl:text-[17px] pb-2 text-white'>Company</h2>
                <div>About</div>
                <div>Contact us</div>
                <div>Support</div>
                <div>Careers</div>
            </section>
            <section className='text-white 2xl:text-[16px] text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-500'>
                <h2 className='font-normal 2xl:text-[17px] pb-2 text-white'>Quick link</h2>
                <div>Order Tracking</div>
                <div>FAQs</div>
            </section>
            <section className='text-white 2xl:text-[16px] text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-500'>
                <h2 className='font-normal 2xl:text-[17px] pb-2 text-white'>Legal</h2>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </section>
        </div>
    </div>
  )
}

export default Footer