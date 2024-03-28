import React from 'react'

const Contact = () => {
  return (
        <div className='w-full xl:pt-[3.5rem] pt-[3rem] xl:pb-[4.5rem] pb-[4rem] bg-[#FF8900]'>
            <div className='sm:w-[500px] w-[350px] mx-auto flex flex-col justify-center items-center'>
                <h2 className='popp text-center xl:text-[1.7rem] sm:text-[1.5rem] text-[1rem] text-white font-semibold'>JOIN WINMART COMMUNITY TO GET MONTHLY PROMO</h2>
                <p className='pt-[0.4rem] pb-[2rem] xl:text-[1.1rem] sm:text-[0.9rem] text-[0.7rem] font-medium text-[#FEFEFECC]'>Type your email down below and be wild for big promos</p>
                <div className='p-2 bg-[#ffa400] rounded-xl'>
                  <div className='xl:py-[0.5rem] py-[0.4rem] xl:px-[1.1rem] px-[0.9rem] flex justify-center items-center sm:gap-[3rem] gap-[1rem] bg-white rounded-xl'>
                    <div>
                      <input type="text" placeholder='YOUR EMAIL' className='xl:pb-[0.4rem] pb-[0.3rem] border-none outline-none text-[11px] placeholder:text-gray-300' /><br />
                      <label htmlFor="" className=' xl:text-[11px] text-[10px] font-medium uppercase'>Dzineku King David</label>
                    </div>
                    <button className='px-[1rem] py-[0.5rem] xl:text-[12px] text-[11px] text-white uppercase bg-[#EC5937] rounded-md'>Get Started</button>
                  </div>

                </div>
            </div>
        </div>
  )
}

export default Contact