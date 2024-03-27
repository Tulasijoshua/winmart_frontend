import React from 'react'
import sneaker from '../items/category/sneaker.svg'
import menDress from '../items/category/men_dress.svg';
import ladies from '../items/category/ladies.svg';
import watch from '../items/category/men_dress.svg';
import kitchen from '../items/category/kitchen.svg';
import store from '../items/category/store.svg';

const Category = () => {
    let categories = [
        {
            id: 1,
            category: "Sneaker",
            img: sneaker,
        },
        {
            id: 2,
            category: "Men Clothes",
            img: menDress,
        },
        {
            id: 3,
            category: "Ladies Dress",
            img: ladies,
        },
        {
            id: 4,
            category: "Casio Watch",
            img: watch,
        },
        {
            id: 5,
            category: "Win Kitchen",
            img: kitchen,
        },
        {
            id: 6,
            category: "Stores",
            img: store,
        },
    ]
  return (
    <div className='maxContainer py-[3rem] xl:w-[70%] w-[85%] mx-auto'>
        <h2 className='text-[1.1rem] pb-[1.3rem]'>Category</h2>
        <section className='xl:px-[6rem] px-[3rem] py-[1.5rem] md:flex justify-between items-center grid grid-cols-3 gap-[2rem] bg-[#F6F6F8]'>
            {
                categories.map((cat, index) => {
                return <div key={index} className='flex flex-col justify-center items-center gap-[0.4rem]'>
                    <div className='lg:w-[4rem] w-[3rem] lg:h-[3rem] h-[2.5rem]'>
                        <img className='w-full h-full object-contain' src={cat.img} alt="" />
                    </div>
                    <div className='xl:text-[17px] lg:text-[16px] text-[14px]'>{cat.category}</div>
                </div>

                })
            }
        </section>
    </div>
  )
}

export default Category