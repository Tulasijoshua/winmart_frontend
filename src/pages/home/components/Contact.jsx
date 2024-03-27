import React from 'react'

const Contact = () => {
  return (
        <div className='w-full pt-[3.5rem] pb-[4.5rem] bg-[#FF8900]'>
            <div className='w-[500px] mx-auto flex flex-col justify-center items-center'>
                <h2 className='popp text-center text-[1.7rem] text-white font-semibold'>JOIN WINMART COMMUNITY TO GET MONTHLY PROMO</h2>
                <p className='pt-[0.4rem] pb-[2rem] text-[1.1rem] font-medium text-[#FEFEFECC]'>Type your email down below and be wild for big promos</p>
                <div className='p-2 bg-[#ffa400] rounded-xl'>
                  <div className='py-[0.5rem] px-[1.1rem] flex justify-center items-center gap-[3rem] bg-white rounded-xl'>
                    <div>
                      <input type="text" placeholder='YOUR EMAIL' className='pb-[0.4rem] border-none outline-none text-[11px] placeholder:text-gray-300' /><br />
                      <label htmlFor="" className=' text-[11px] font-medium uppercase'>Dzineku King David</label>
                    </div>
                    <button className='px-[1rem] py-[0.5rem] text-[12px] text-white uppercase bg-[#EC5937] rounded-md'>Get Started</button>
                  </div>

                </div>
            </div>
        </div>
  )
}

export default Contact