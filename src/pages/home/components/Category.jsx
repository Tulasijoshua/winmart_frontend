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
    <div className='py-[3rem] w-[70%] mx-auto'>
        <h2 className='text-[1.1rem] pb-[1.3rem]'>Category</h2>
        <section className='px-[6rem] py-[1.5rem] flex justify-between items-center bg-[#F6F6F8]'>
            {
                categories.map((cat, index) => {
                return <div key={index} className='flex flex-col justify-center items-center gap-[0.4rem]'>
                    <div className='w-[4rem] h-[3rem]'>
                        <img className='w-full h-full object-contain' src={cat.img} alt="" />
                    </div>
                    <div className='text-[17px] '>{cat.category}</div>
                </div>

                })
            }
        </section>
    </div>
  )
}

export default Category