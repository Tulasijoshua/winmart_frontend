import React from 'react';
import logo from '../assets/images/footer_logo.svg'

const Footer = () => {
  return (
    <div className='w-full pt-[4rem] pb-[4.5rem] bg-[#000]'>
        <div className='w-[65%] mx-auto flex justify-between items-start gap-[2rem]'>
            <section>
                <div className='w-[5rem] h-[5rem]'>
                    <img className='w-full h-full' src={logo} alt="" />
                </div>
                <div className='pt-[2.5rem] text-[13px] text-white'>Sunyani, Ghana</div>
            </section>
            <section className='text-white text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-400'>
                <h2 className='font-normal pb-2 text-white'>Company</h2>
                <div>About</div>
                <div>Contact us</div>
                <div>Support</div>
                <div>Careers</div>
            </section>
            <section className='text-white text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-400'>
                <h2 className='font-normal pb-2 text-white'>Quick link</h2>
                <div>Order Tracking</div>
                <div>FAQs</div>
            </section>
            <section className='text-white text-[14px] font-light flex flex-col gap-[1.2rem] text-gray-400'>
                <h2 className='font-normal pb-2 text-white'>Legal</h2>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </section>
        </div>
    </div>
  )
}

export default Footer